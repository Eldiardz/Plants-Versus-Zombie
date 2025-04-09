	let shooters = document.querySelectorAll(".shooter")
	let zombies = document.querySelectorAll(".zombies")
	let scores = document.querySelector(".score")
	let button1 = document.querySelector(".button1")
	let button2 = document.querySelector(".button2")
	let sun = document.querySelectorAll(".sunflower")

	score = 0

	scores.innerHTML = score
	
	let zombie1left = 78;
	let zombie2left = 78;
	let zombie3left = 78;
	let zombie4left = 78;
	let zombie5left = 78;


	zombies[0].onclick = function(){
		zombie1left = zombie1left - 6;
		zombies[0].style.left = zombie1left + "%";
		if(zombie1left == 30){
			alert("Первый зомби съел горошинку!")
			shooters[0].style.display = "none"
			score = score + 1;
			scores.innerHTML = score
			if(score == 5){
				alert("Ты съел эти растения! Победа 😏")
				zombies.style.display = "none"
			}
		}
	}
	zombies[1].onclick = function(){
		zombie2left = zombie2left - 6;
		zombies[1].style.left = zombie2left + "%";
		if(zombie2left == 30){
			alert("Второй зомби съел горошинку!")
			shooters[1].style.display = "none"
			score = score + 1;
			scores.innerHTML = score
			if(score == 5){
				alert("Ты съел эти растения! Победа 😏")
				zombies.style.display = "none"
			}
		}
	}
	zombies[2].onclick = function(){
		zombie3left = zombie3left - 6;
		zombies[2].style.left = zombie3left + "%";
		if(zombie3left == 30){
			alert("Третий зомби съел горошинку!")
			shooters[2].style.display = "none"
			score = score + 1;
			scores.innerHTML = score
			if(score == 5){
				alert("Ты съел эти растения! Победа 😏")
				zombies.style.display = "none"
			}
		}
	}
	zombies[3].onclick = function(){
		zombie4left = zombie4left - 6;
		zombies[3].style.left = zombie4left + "%";
		if(zombie4left == 30){
			alert("Четвёртый зомби съел горошинку!")
			shooters[3].style.display = "none"
			score = score + 1;
			scores.innerHTML = score
			if(score == 5){
				alert("Ты съел эти растения! Победа 😏")
				zombies.style.display = "none"
			}
		}
	}
	zombies[4].onclick = function(){
		zombie5left = zombie5left - 6;
		zombies[4].style.left = zombie5left + "%";
		if(zombie5left == 30){
			alert("Пятый зомби съел горошинку!")
			shooters[4].style.display = "none"
			score = score + 1;
			scores.innerHTML = score
			if(score == 5){
				alert("Ты съел эти растения! Победа 😏")
				zombies.style.display = "none"
			}
		}
	}
	button1.onclick = function(){
		for(let i=0; i<5; i=i+1){
			shooters[i].src = "peashooter2.png"
		}
	}
	button2.onclick = function(){
		for(let i=0; i<5; i=i+1){
			sun[i].style.display = "flex"
		}
	}