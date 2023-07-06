const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
console.log('nextButton', nextButton);

if (nextButton) {
	// Map keyboard right arrow to next button
	document.addEventListener('keydown', (e) => {
		console.log(e.key);
		if (e.key === 'ArrowRight') {
			nextButton.click();
		}
	});
}

if (prevButton) {
	// Map keyboard left arrow to prev button
	document.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowLeft') {
			prevButton.click();
		}
	});
}
