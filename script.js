var hei = 0
var wid = 0
var life = 1
var time
var lost = document.getElementById("lost")
var lvl = window.location.search
var icon = document.getElementById("icon")
var sfxC = document.getElementById("sfxClock")
var clock = document.getElementById("clock")
var ring = document.getElementById("ring")

lvl = (lvl.replace("?",""))

switch(lvl)
	{
		case "easy":
			var bgm = document.getElementById("bgmE")
			console.log("Música da floresta")
			break
		case "medium":
			var bgm = document.getElementById("bgmM")
			console.log("Música da praia")
			break
		case "hard":
			var bgm = document.getElementById("bgmH")
			console.log("Música da mata profunda")
			break
	}

function responsiveScreen()
{
	hei = window.innerHeight - 120
	wid = window.innerWidth - 120
	console.log("X e Y da tela: " + hei, wid)
}

function backgroundLevel()
{
	switch (lvl)
	{
		case "easy":
			document.body.style.backgroundImage = "url('img/easy.png')"
			icon.href = "img/icon.ico"
			time = 100
			break
		case "medium":
			document.body.style.backgroundImage = "url('img/medium.png')"
			icon.href = "img/iconMedium.ico"
			time = 150
			break
		case "hard":
			document.body.style.backgroundImage = "url('img/hard.png')"
			icon.href = "img/iconHard.ico"
			time = 200
			break
	}
}
backgroundLevel()

responsiveScreen()

var puffle = document.createElement('img')

function randomPosition()
{
	if(document.getElementById("puffle"))
	{
		lost.play()
		document.getElementById("puffle").remove()
		console.log ("Numero de vidas: " + (3 - life))
		if (life > 3)
		{
			window.location.href = "gameover.html?" + catches
		}
		else
		{
			document.getElementById("l" + life).src = "img/life" + life + ".png"
			life ++
		}
	}
	puffle.style.transform = "scale(1)"
	var posX = Math.floor((Math.random() * hei))
	var posY = Math.floor((Math.random() * wid))
	console.log ("X e Y do puffle: " + posX, posY)

	puffle.id = "puffle"
	puffle.className = puffleSize()
	puffle.src = "img/" + puffleColor() + ".png"
	document.body.appendChild(puffle)
	puffle.style.top = posX + "px"
	puffle.style.left = posY + "px"
	puffle.style.position = "absolute"
	
	if (time <= 20)
	{
		bgm.playbackRate = 1.2
		sfxC.play()
		clock.className = "shake"
		switch (lvl)
		{
			case "easy":
				speed = 1750
				break
			case "medium":
				speed = 1250
				break
			case "hard":
				speed = 750
				break
		}
		console.log("Velocidade aumentada!")
	}
}

function puffleDirection()
{
	var direction = Math.floor(Math.random() * 2)
	
	switch(direction) {
		case 0:
			return "A"
		case 1:
			return "B"
	}
}

function puffleSize()
{
	var size = Math.floor(Math.random() * 3)

	console.log("Tamanho do puffle: " + size)

	switch(size) {
		case 0:
			return "small" + " " + puffleDirection()
		case 1:
			return "regular" + " " + puffleDirection()
		case 2:
			return "large" + " " + puffleDirection()
	}
}
function puffleColor()
{
	var color 
	switch (lvl)
	{
		case "easy":
			color = Math.floor(Math.random() * 13)
			break
		case "medium":
			color = Math.floor(Math.random() * 22)
			break
		case "hard":
			color = Math.floor(Math.random() * 29)
			break
	}
	return color
	console.log("Cor do Puffle: " + color)
}

var c = document.getElementById("c")
c.volume = 0.5
var catches = 0

puffle.onclick  = function(){
	c.play()
	this.remove()
	catches = catches + 1
	console.log("Puffles capturados: " + catches)
	bgm.play()
}

var cronometer = setInterval
(
	function()
	{
		time = time - 1
		if (time <= 0)
		{
			clearInterval(spawn)
			ring.play()
			clearInterval(cronometer)
			setInterval(function(){window.location.href = "end.html?" + catches}, 2000)
		}
		document.getElementById("timer").innerHTML = time
	},
	500
)
		
function pufflePop()
{
	puffle.style.transitionDuration = "0.2s"
	puffle.style.transform = "scale(1.2)"
}

puffle.addEventListener("mouseover", pufflePop)