//hledám <div id="obr">
let img = document.querySelector('#obr')
console.log('img=',img)
//img.src='img/5_of_clubs.svg.png'

//vytvářím <img>
let obr = document.createElement('img')

//vytvářím <img src='img/5_of_clubs.svg.png'>
obr.src = 'img/5_of_clubs.svg.png'
console.log('obr=',obr)

//připojuji obrázek do DOMu
img.appendChild(obr)