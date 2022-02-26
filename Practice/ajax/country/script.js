'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const countryText = document.querySelector("#countrySelect")

/////////////////////////////////////////////////////////////////////
function visitCountry(country){
  window.location.href=country
}



const countryArray = []
const getCountry = function (country) {
  const request = new XMLHttpRequest()
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`)
  request.send();
  
  request.addEventListener("load", () => {

    const [data] = JSON.parse(request.responseText)
    if (!countryArray.includes(data.name.common)) {
      countryArray.push(data.name.common)
      console.log(data)
      const language = Object.keys(data.languages)[0]
      const currency = Object.keys(data.currencies)[0]
      const modul = `<article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[language]}</p>
      <p class="country__row"><span>💰</span>${data.currencies[currency].name}</p>
      <button class="visitButton" type="submit" onClick=window.open('${data.maps.googleMaps}')>Visit</button>      
    </div>
  </article>`
      // const visit=document.querySelector("#visit")
      // visit.addEventListener("click",()=>{
      //   window.location.href=data.maps.googleMaps
      // })

      countriesContainer.insertAdjacentHTML("beforeBegin", modul)
      countriesContainer.style.opacity = 1;
      console.log(Object.keys(data.languages))
    }
  })
}
// getCountry("hungary")

countryText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getCountry(countryText.value)
  }
})







