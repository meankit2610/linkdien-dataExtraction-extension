var linkData = [{}]
const getData = () => {
    
//name
if (document.querySelector("div.ph5.pb5 > div.mt2.relative > div:nth-child(1) > div:nth-child(1) > h1")) {
    
    linkData[0]['name'] = document.querySelector("div.ph5.pb5 > div.mt2.relative > div:nth-child(1) > div:nth-child(1) > h1").innerText
}

//profileImage
if (document.querySelector("#ember33").src) {
  linkData[0]['imgUrl'] =  document.querySelector("#ember33").src
}

//organization
if (document.querySelector("div.ph5.pb5 > div.mt2.relative > ul > li > button > span") )
{
    linkData[0]['organization'] = document.querySelector("div.ph5.pb5 > div.mt2.relative > ul > li > button > span").innerText;
    }
//designation
if (document.querySelector(" div.ph5 > div.mt2.relative > div:nth-child(1) > div.text-body-medium.break-words") ) {
    
    linkData[0]['designation'] = document.querySelector(" div.ph5 > div.mt2.relative > div:nth-child(1) > div.text-body-medium.break-words").innerText
}
//location
if (document.querySelector(" div.ph5 > div.mt2.relative > div.pv-text-details__left-panel.mt2 > span.text-body-small.inline.t-black--light.break-words")) {
    
    linkData[0]['location'] = document.querySelector(" div.ph5 > div.mt2.relative > div.pv-text-details__left-panel.mt2 > span.text-body-small.inline.t-black--light.break-words").innerText
}
// //about
if (document.querySelector("div.pvs-list__outer-container")) {
    linkData[0]['about'] = document.querySelector("div.pvs-list__outer-container").innerText
};



}
window.addEventListener("load", () => {
     getData();
})

console.log(linkData)
   

                                  
