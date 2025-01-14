//Slides content array
const slides = [ 
	{ "image":"slide1.jpg", "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>" },
	{ "image":"slide2.jpg", "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>" },
	{ "image":"slide3.jpg", "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>" },
	{ "image":"slide4.png", "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>" }
];

//Bullet points HTML creation function
function dotCreation() {
	let dots = document.querySelector('#banner .dots'); //Bullet points container selector
	let dot = document.createElement('div'); //Bullet points div creation
	dot.classList.add("dot"); //Bullet points class naming
	dots.appendChild(dot); //Bullet points container attachment
};
//Bullet points creation loop
for(let i = 0; i < slides.length; i++){ //i start at 0 ; if i < slides.length ; then add +1 to i
    dotCreation();
};

// Variables used for carousel function

//Index number one 
let current = 0;

//Bullet points array creation
let dotList = document.querySelectorAll('.dots .dot');
//Selected Bullet point class naming (on load)
dotList[current].classList.add('dot_selected');

//Slides images and p selectors 
let image = document.querySelector('.banner-img');
let tagLine = document.querySelector('#banner p');

//Carousel function
function carousel(index) {
	dotList[current].classList.remove('dot_selected'); //remove the class 'dot_selected' from the current dot
	current = index; //current is now index value
	dotList[current].classList.add('dot_selected'); //add the class 'dot_selected' to the current dot
	image.src = "./assets/images/slideshow/" + slides[current].image; //replace image.src with the current table index and the key "image" 
	tagLine.innerHTML = slides[current].tagLine; //replace <p> with the current table index and the key "tagLine"
};

//Right arrow eventListener
document.querySelector('#banner .arrow_right').addEventListener('click', function() {
	if(current == slides.length - 1) { //condition: if current index equal slides.length -1, then >>
		carousel(0) //index becomes 0 
	} else { 
		carousel(current + 1) //index becomes current index +1
	};
});

//Left arrow eventListener
document.querySelector('#banner .arrow_left').addEventListener('click', function() {
	if(current == 0) { //condition: if current index equal 0, then >>
		carousel(slides.length - 1) //index becomes slides.length -1
	} else { 
		carousel(current - 1) //index becomes current index -1
	};
});