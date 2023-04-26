let imagePos = document.querySelector('.imageDiv')
let inputVal = document.querySelector('#datumIn')
let close = document.querySelector('.closeModal')
let modalni = document.querySelector('.modal')
let primeni = document.querySelector('.submit')
let year = document.querySelector('#ye')
let month = document.querySelector('#mo')
let day = document.querySelector('#da')
let opis = document.querySelector('.opis')
let name = document.querySelector('.naziv')
var newDate
let calendar = document.querySelector('.choose')
calendar.onclick = () => {
    if(modalni.style.display === 'none') modalni.style.display = 'block'; 
    else modalni.style.display = 'none'
}
close.onclick = () => {
    if(modalni.style.display === 'block') modalni.style.display = 'none';
}
window.onload = () => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=voHgUoOE2ArdpMhtk77p3mMYa95pc16ttFaAFLsP")
        .then(response => {return response.json()})
        .then(data => {
            let image = data.url;
            let tekst = data.explanation;
            let ime = data.title
            opis.innerHTML = `<p>${tekst}</p>`
            imagePos.innerHTML = `<img src="${image}">`
            name.innerHTML = `<h1>${ime}</h1>`
        })
}
primeni.addEventListener("click", e => {
    e.preventDefault();
    let newYear = year.value
    
    let newMonth = month.value
    
    let newDay = day.value
    newDate = `&date=${newYear}-${newMonth}-${newDay}&`
    fetchDate()
    
})
function fetchDate() {
    if(modalni.style.display === 'block') modalni.style.display = 'none';
    try {
        fetch("https://api.nasa.gov/planetary/apod?api_key=voHgUoOE2ArdpMhtk77p3mMYa95pc16ttFaAFLsP"+newDate)
        .then(response => {return response.json()})
        .then(data => {
            
            let image = data.url;
            let tekst = data.explanation;
            let ime = data.title
            opis.innerHTML = `<p>${tekst}</p>`
            imagePos.innerHTML = `<img src="${image}">`
            name.innerHTML = `<h1>${ime}</h1>`
        })
    }catch(error) {console.log(error)}
}