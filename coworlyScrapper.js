let locations_p_tag = document.getElementsByClassName('location')
let locations = [];
for(let i=0; i< locations_p_tag.length; i++){
  locations.push(locations_p_tag[i].innerText)
}
let name_div = document.getElementsByClassName('media-heading')
let location_names = []
for(let i=0; i< name_div.length; i++){
  location_names.push(name_div[i].children[0].innerText)
}
let data = []
for(let i=0; i< name_div.length; i++){
  data.push({name: location_names[i], address: locations[i], provider: 'coworly'})
}
