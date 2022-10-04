var numb = document.getElementById("countdown")
var catches = window.location.search
catches = (catches.replace("?", ""))

console.log("Catches:" + catches)

document.body.innerHTML = (document.body.innerHTML.replace("0", catches))