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
	alert('test gauche');
});
		
//Right arrow eventListener
document.querySelector('#banner .arrow_right').addEventListener('click', function() {
	if(curent == slides.length - 1) {
	}
	else {
		dotTable[curent].classList.remove('dot_selected');
		curent++;
		dotTable[curent].classList.add('dot_selected');
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
for(let i = 0; i < slides.length; i++){ 
    dotCreation();
};
//Bullet points table
let dotTable = document.querySelectorAll('.dots .dot');
//Selected Bullet point class naming
dotTable[0].classList.add('dot_selected');