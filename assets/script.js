const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Left arrow eventListener
document.querySelector('#banner .arrow_left').addEventListener('click', function() {
	if(curent == 0) { //if current index equal 0, do nothing
	}
	else { 
		dotTable[curent].classList.remove('dot_selected'); //else remove the class 'dot_selected' to the current dot and add it to the previous one
		curent--; //less one curent index number
		dotTable[curent].classList.add('dot_selected');
		image.src = "./assets/images/slideshow/" + slides[curent].image; //else change image.src for the curent table index and the key "image"
		tagLine.innerHTML = slides[curent].tagLine; //else change <p> for the curent table index and the key "tagLine"
	};
});
		
//Right arrow eventListener
document.querySelector('#banner .arrow_right').addEventListener('click', function() {
	if(curent == slides.length - 1) { //if current index equal slides.length -1, do nothing
	}
	else { 
		dotTable[curent].classList.remove('dot_selected'); //else remove the class 'dot_selected' to the current dot and add it to the next one
		curent++; //plus one curent index number
		dotTable[curent].classList.add('dot_selected');
		image.src = "./assets/images/slideshow/" + slides[curent].image; //else change image.src for the curent table index and the key "image"
		tagLine.innerHTML = slides[curent].tagLine; //else change <p> for the curent table index and the key "tagLine"
	};
});

//Index number one
let curent = 0;

//Bullet points HTML creation function
function dotCreation() {
	//Bullet points container selector
	let dots = document.querySelector('#banner .dots');
	//Bullet points div creation
	let dot = document.createElement('div');
	//Bullet points class naming
	dot.classList.add("dot");
	//Bullet points container attachment
	dots.appendChild(dot);
};
//Bullet points creation loop
for(let i = 0; i < slides.length; i++){ //i start at 0 ; if i < slides.length ; then add +1 to i
    dotCreation();
};
//Bullet points table
let dotTable = document.querySelectorAll('.dots .dot');
//Selected Bullet point class naming
dotTable[0].classList.add('dot_selected');

//Slides variables
let image = document.querySelector('.banner-img');
let tagLine = document.querySelector('#banner p');