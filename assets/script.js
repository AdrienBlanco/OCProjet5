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
	if(curent == 0) { //condition: if current index equal 0, then >>
		dotTable[curent].classList.remove('dot_selected'); //remove the class 'dot_selected' to the current dot
		curent = slides.length - 1; //curent is now the last index number
		dotTable[curent].classList.add('dot_selected'); //add the class 'dot_selected' to the current dot
		image.src = "./assets/images/slideshow/" + slides[curent].image; //change image.src for the curent table index and the key "image"
		tagLine.innerHTML = slides[curent].tagLine; //change <p> for the curent table index and the key "tagLine"
	}
	else { 
		dotTable[curent].classList.remove('dot_selected'); //remove the class 'dot_selected' to the current dot
		curent--; //remove -1 to the curent index
		dotTable[curent].classList.add('dot_selected'); //add the class 'dot_selected' to the current dot
		image.src = "./assets/images/slideshow/" + slides[curent].image; //change image.src for the curent table index and the key "image"
		tagLine.innerHTML = slides[curent].tagLine; //change <p> for the curent table index and the key "tagLine"
	};
});
		
//Right arrow eventListener
document.querySelector('#banner .arrow_right').addEventListener('click', function() {
	if(curent == slides.length - 1) { //condition: if current index equal slides.length -1, then >>
		dotTable[curent].classList.remove('dot_selected'); //remove the class 'dot_selected' to the current dot
		curent = 0; //curent is now the index number 1
		dotTable[curent].classList.add('dot_selected'); //add the class 'dot_selected' to the current dot
		image.src = "./assets/images/slideshow/" + slides[curent].image; //change image.src for the curent table index and the key "image"
		tagLine.innerHTML = slides[curent].tagLine; //change <p> for the curent table index and the key "tagLine"
	}
	else { 
		dotTable[curent].classList.remove('dot_selected'); //remove the class 'dot_selected' to the current dot
		curent++; //add +1 to the curent index
		dotTable[curent].classList.add('dot_selected');//add the class 'dot_selected' to the current dot
		image.src = "./assets/images/slideshow/" + slides[curent].image; //change image.src for the curent table index and the key "image"
		tagLine.innerHTML = slides[curent].tagLine; //change <p> for the curent table index and the key "tagLine"
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