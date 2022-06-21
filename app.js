let slideIndex = 0;
showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) { slideIndex = 1 }
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 2000); // Change image every 2 seconds
}


/* ====== slider=====*/
if (document.getElementById("slider--text")) {
	let slides = [
		"<h2>Name: Jennifer Moreno</h2>",
		"<p>I love my eyebrow design. I'm usually very picky about my eyebrows and not everyone can give me what I want. You are amazing. Thank you for the amazing job you’ve done, I’ll be recommending you to my friends from now on!</p>",

		"<h2>Name: Sanjoy</h2>",
		"<p>I love my eyebrow design. I'm usually very picky about my eyebrows and not everyone can give me what I want. You are amazing. Thank you for the amazing job you’ve done, I’ll be recommending you to my friends from now on!</p>"
	];

	let i = 0;

	const slider = () => {
		document.getElementById("slider--text").innerHTML = slides[i];
		document.getElementById("slider--text").classList.add('fade-in');


		(i < slides.length - 1) ? i++ : i = 0;
	};

	slider(); // Start slider immediately
	setInterval(slider, 1000); // Slide every 4 seconds
}