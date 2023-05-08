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

//Ajout de l'eventListener sur la flèche gauche
document.querySelector('.arrow_left').addEventListener('click', function() {
	//Déclaration de la fonction liée à la fèche gauche
	alert('test gauche');
});
		
//Ajout de l'eventListener sur la flèche droite
document.querySelector('.arrow_right').addEventListener('click', function() {
	//Déclaration de la fonction liée à la fèche droite
	alert('test droite');
});
		

