var checkB = document.getElementById('msc')
var bgm = document.getElementById("bgm")
var btn = document.getElementById("btn")
var lvl = document.getElementById("lvl")
bgm.volume = 0.4

checkB.checked = true;

checkB.addEventListener("click", musicOnOff)
btn.addEventListener("click", checkLevel)

function musicOnOff()
{
	if(checkB.checked)
	{
		bgm.pause()
		console.log("Musica parada")
	}
	else
	{
		bgm.play()
		console.log("Musica tocando")
	}

	if(checkB.Option)
	{
		btn.enabled = false
	}
}

function checkLevel()
{
	console.log(lvl.selectedIndex)
	var level
	switch (lvl.selectedIndex)
	{
		case 1:
			level = "easy"
			break
		case 2:
			level = "medium"
			break
		case 3:
			level = "hard"
			break
	}
	if(lvl.selectedIndex == 0)
	{
		alert("Escolha uma dificuldade no canto inferior esquerdo da tela.")
	}
	else
	{
		console.log(level)
		window.location.href= "game.html?" + level
	}
}