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
