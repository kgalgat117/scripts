var express = require('express')
var app = express()
var http = require('http')
var cheerio = require('cheerio')
var request = require('request')
const url = 'https://news.ycombinator.com/'
let fetched_author = []

app.get('/sortComments', function (req, res) {
    getNewsDataFromHTML().then(resp => {
        resp.sort(function (a, b) {
            return b.comments - a.comments
        })
        res.status(200).send(resp)
    }).catch(error => {
        res.status(400).send(error)
    })
})

app.get('/topAuthor', function (req, res) {
    getAuthorDataFromHTML().then(resp => {
        const max = resp.reduce(function(prev, current) {
            return (prev.karma > current.karma) ? prev : current
        })
        res.status(200).send(max)
    }).catch(error => {
        res.status(400).send(error)
    })
})

function getAuthorDataFromHTML() {
    return new Promise((resolve, reject) => {
        getAuthorsHTML().then(resp => {
            let data = []
            for (let i = 0; i < resp.length; i++) {
                var $ = cheerio.load(resp[i])
                var tables = $('tbody')
                let name = ''
                let karma = 0
                $(tables[2]).children().each(function (i, element) {
                    if (i == 0) {
                        name = $(element).children().last().text()
                    } else if (i == 2) {
                        karma = parseInt($(element).children().last().text().trim())
                    }
                })
                data.push({
                    name: name,
                    karma: karma
                })
            }
            resolve(data)
        }).catch(error => {
            reject(error)
        })
    })
}

function getAuthorsHTML() {
    return new Promise((resolve, reject) => {
        getNewsDataFromHTML().then(async (resp) => {
            fetched_author = []
            await getAuthorPageHtml(resp.length - 1, resp).then(author_array => {
                resolve(author_array)
            }).catch(error => {
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function getAuthorPageHtml(index, urls) {
    return new Promise(async (resolve, reject) => {
        request(urls[index].author_url, function (error, response, html) {
            if (!error) {
                console.log(index, urls[index].author_url)
                if (index == 0) {
                    resolve([html])
                } else {
                    setTimeout(function () {
                        getAuthorPageHtml(index - 1, urls).then(resp => {
                            resolve(resp.concat([html]))
                        }).catch(error => {
                            reject(error)
                        })
                    }, 1000)
                }
            } else {
                reject(error)
            }
        })

    })
}

function getNewsDataFromHTML() {
    return new Promise((resolve, reject) => {
        getNewsPageHtml().then(resp => {
            var $ = cheerio.load(resp)
            let data = []
            let titles_html = $('.storylink')
            $('.subtext').each(function (i, element) {
                let obj = {}
                obj.title = $(titles_html[i]).text()
                $(element).children().each(function (i, childElement) {
                    if (i == 0) {
                        obj['points'] = parseInt($(childElement).text().split(' ')[0])
                    } else if (i == 1) {
                        obj['author'] = $(childElement).text()
                        obj['author_url'] = url + $(childElement).attr('href')
                    } else if (i == 5) {
                        if ($(childElement).text().indexOf('comment') == -1) {
                            obj['comments'] = 0
                        } else if ($(childElement).text().indexOf('comments') != -1) {
                            obj['comments'] = parseInt($(childElement).text().split('comments')[0].trim())
                        } else {
                            obj['comments'] = parseInt($(childElement).text().split('comment')[0].trim())
                        }
                    }
                })
                data.push(obj)
            })
            resolve(data)
        }).catch(error => {
            reject(error)
        })
    })
}

function getNewsPageHtml() {
    return new Promise((resolve, reject) => {
        request(url, function (error, response, html) {
            if (!error) {
                resolve(html)
            } else {
                reject(error)
            }
        })
    })
}

app.get('*', function (req, res) {
    res.status(200).json({
        result: 'nothing here mate !'
    })
})

http.createServer(app).listen(4200)