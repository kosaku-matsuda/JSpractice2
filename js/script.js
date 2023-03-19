'use strict';
{

	const images = [
	  "https://github.com/kosaku-matsuda/JSpractice3/blob/main/img/pic00.png?raw=true",
	  "https://github.com/kosaku-matsuda/JSpractice3/blob/main/img/pic01.png?raw=true",
	  "https://github.com/kosaku-matsuda/JSpractice3/blob/main/img/pic02.png?raw=true",
	  "https://github.com/kosaku-matsuda/JSpractice3/blob/main/img/pic03.png?raw=true",
	  "https://github.com/kosaku-matsuda/JSpractice3/blob/main/img/pic04.png?raw=true",
	  "https://github.com/kosaku-matsuda/JSpractice3/blob/main/img/pic05.png?raw=true",
	  "https://github.com/kosaku-matsuda/JSpractice3/blob/main/img/pic06.png?raw=true",
	  "https://github.com/kosaku-matsuda/JSpractice3/blob/main/img/pic07.png?raw=true"
];

	let currentIndex = 0;

	const mainImage = document.getElementById("main");
	mainImage.src = images[currentIndex];

	images.forEach((image, index) => {
		const img = document.createElement("img");
		img.src = image;

		const li = document.createElement("li");

		if (index === currentIndex) {
			li.classList.add("current");
		}
		li.addEventListener("click", () => {
			mainImage.src = image;
			const thumbnails = document.querySelectorAll(".thumbnails > li");
			thumbnails[currentIndex].classList.remove("current");
			currentIndex = index;
			thumbnails[currentIndex].classList.add("current");
		});
		li.appendChild(img);
		document.querySelector(".thumbnails").appendChild(li);
	});

	const next = document.getElementById("next");
	next.addEventListener("click", () => {
		let target = currentIndex + 1;
		if (target === images.length) {
			target = 0;
		}
		document.querySelectorAll(".thumbnails > li")[target].click();
	});

	const prev = document.getElementById("prev");
	prev.addEventListener("click", () => {
		let target = currentIndex - 1;
		if (target < 0) {
			target = images.length - 1;
		}
		document.querySelectorAll(".thumbnails > li")[target].click();
	});

	let timeoutId;

	function playSlideshow() {
		timeoutId = setTimeout(() => {
			next.click();
			playSlideshow();
		}, 1000);
	}

	let isPlaying = false;

	const play = document.getElementById("play");
	play.addEventListener("click", () => {
		if (isPlaying === false) {
			playSlideshow();
			play.textContent = "Pause";
		  } else {
			clearTimeout(timeoutId);
			play.textContent = "Play";
		  }
		  isPlaying = !isPlaying;
	})

	

	


	
	// <li class="current"><img src="img/img/pic00.png" alt=""></li>
	// 		<li><img src="img/img/pic01.png" alt=""></li>
	// 		<li><img src="img/img/pic02.png" alt=""></li>
	// 		<li><img src="img/img/pic03.png" alt=""></li>
	// 		<li><img src="img/img/pic04.png" alt=""></li>
	// 		<li><img src="img/img/pic05.png" alt=""></li>
	// 		<li><img src="img/img/pic06.png" alt=""></li>
	// 		<li><img src="img/img/pic07.png" alt=""></li>



}

