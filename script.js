// 7.1

const element = document.querySelector('.dynamic')
element.innerText = 'Hello world'
element.innerText = 'Dynamisk webbsida'

// className ersätter alla klasser
// element.className = 'frame'
// classList.add lägger till en ny klass
element.classList.add('frame')


// 7.2
// Använd Array.from för att få en riktig lista (Array) i stället för en NodeList
// NodeList har inte filter, map, find m.fl.
const buttons = Array.from( document.querySelectorAll('.food-button') )
// console.log('buttons:', buttons)

const meatButton = buttons[0]
const fishButton = buttons[1]
const veggieButton = buttons[2]

buttons.forEach(button => {
	console.log('Button: ', button.innerText)
})

meatButton.addEventListener('click', () => {
	deselectFoodButtons()
	meatButton.classList.add('selected')
	// Fungerar, men är inte långsiktigt hållbar
	// fishButton.classList.remove('selected')
	// veggieButton.classList.remove('selected')
})
fishButton.addEventListener('click', () => {
	deselectFoodButtons()
	fishButton.classList.add('selected')
})
veggieButton.addEventListener('click', () => {
	deselectFoodButtons()
	veggieButton.classList.add('selected')
})

function deselectFoodButtons() {
	buttons.forEach(button => {
		button.classList.remove('selected')
	})
}

// Lite krångligare alternativ:
// const meatButton = document.querySelector('.food-button')
// const fishButton = document.querySelector('.food-button:nth-child(2)')
// const veggieButton = document.querySelector('.food-button:nth-child(3)')



/*
Exempel på algoritm för övning 7.3

+ Bygg designskiss

+ Vilka element interagerar vi med? - <button> -1 och +1, elementet som texten "1 biljett" ligger inuti

+ Variabel som kommer ihåg antalet biljetter

+ addEventListener för +1 och -1 knapparna
*/


// 7.6
// 6a Bygg en sida med ett trafikljus. När man klickar på en knapp ska nästa lampa i serien tändas.
// Rött → gult → grönt.

// Deklarera variabel - för den tända lampan
const RED = 0, RED_YELLOW = 1, GREEN = 2, YELLOW = 3
let lampState = RED  // tillståndet 0 är rött ljus, 1 är gult, 2 är grönt

const lightButton = document.querySelector('#light-button')
const top = document.querySelector('.lights .top')
const middle = document.querySelector('.lights .middle')
const bottom = document.querySelector('.lights .bottom')
// console.log('DOM elements: ', lightButton, top, middle, bottom)

lightButton.addEventListener('click', () => {
	lampState = lampState + 1
	if( lampState === RED_YELLOW ) {
		// top.classList.remove('on') <- släcks först när ljuset slår över till grönt
		middle.classList.add('on')
	}
	else if( lampState === GREEN ) {
		top.classList.remove('on')
		middle.classList.remove('on')
		bottom.classList.add('on')
	}
	else if( lampState === YELLOW ) {
		bottom.classList.remove('on')
		middle.classList.add('on')
	}
	else if( lampState > YELLOW ) {
		lampState = RED
		middle.classList.remove('on')
		top.classList.add('on')
	}
})


// Alternativ 1
/*
let lamps = document.querySelectorAll(".lights > *")
let lampRed = document.querySelector(".top");
let lampYellow = document.querySelector(".middle");
let lampGreen = document.querySelector(".bottom");

lampRed.addEventListener("mouseover",()=>{
	lampRed.style.backgroundColor="red"
	lamps[1].style.backgroundColor="";
	lamps[2].style.backgroundColor="";
})
lampYellow.addEventListener("mouseover",()=>{
	lamps[0].style.backgroundColor="";
	lamps[2].style.backgroundColor="";
	lampYellow.style.backgroundColor="yellow"
})
lampGreen.addEventListener("mouseover",()=>{
	lamps[1].style.backgroundColor="";
	lamps[0].style.backgroundColor="";
	lampGreen.style.backgroundColor="green"
})
*/

// Alternativ 2
/*
let lamps = document.querySelectorAll(".lights > *");
lamps.forEach((lamp, index) => {
	lamp.addEventListener("mouseover",()=>{
		lamps.forEach(la => la.style.backgroundColor="")
		if(index===0){
			lamp.style.backgroundColor="red";
		}else if(index===1){
			lamp.style.backgroundColor="yellow";

		}else if(index===2){
			lamp.style.backgroundColor="green";
		}
	})
})
*/

