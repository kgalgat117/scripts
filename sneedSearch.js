function getData() {
      let page_data = []
      let name_html = document.getElementsByClassName('listing-row-title')
      let address_html = document.getElementsByClassName('location-quality')
      let tag = document.getElementsByClassName('listing-row-content')
      for (let i = 0; i < name_html.length; i++) {
        page_data.push({
          name: name_html[i].children[0].innerHTML,
          address: address_html[i].children[1].innerHTML,
          provider: 'Sneed',
          type: tag[i].children[1].innerHTML
        })
      }
      console.log(page_data)
      let load_more = document.getElementsByClassName('load-more')
      if (load_more.length > 0) {
        load_more[0].children[0].click()
        setTimeout(function () {
          getData()
        }, 6000);
      }
    }
