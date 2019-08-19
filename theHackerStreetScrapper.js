let page_data = []
let count = 1

function getData() {
    let name_html = document.getElementsByClassName('card__title')
    let address_html = document.getElementsByClassName('address__street')
    for (let i = 0; i < name_html.length; i++) {
        page_data.push({
            name: name_html[i].innerHTML,
            address: address_html[i].innerHTML,
            provider: 'The Hacker Street',
            type: 'cowork'
        })
    }
    console.log(page_data, count)
    let all_page = document.getElementsByClassName('facetwp-page')
    let current_page = document.getElementsByClassName('facetwp-page active')[0].innerText
    let array = []
    array = all_page
    let next_page_index = -1
    let current_page_index = -1
    main: for(let i= 0; i< all_page.length; i++){
        if (all_page[i].innerText == current_page) {
            current_page_index = i
            break main;
        }
    }
    if (current_page_index != -1) {
        next_page_index = current_page_index + 1
        all_page[next_page_index].click()
        if (count < 59) {
            setTimeout(function () {
                getData()
                i++;
            }, 4000);
        }else{
            console.log(page_data)
        }
    }
}
