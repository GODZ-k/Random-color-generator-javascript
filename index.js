var a = document.getElementsByClassName('button')[0]
var b = document.getElementsByClassName('text')[0]
var c = document.getElementsByClassName('container')[0]
a.addEventListener("click", function() {

    var Randomnumber = Math.random() * 16777215
    var Randomtext = Math.floor(Randomnumber)
    var Randomcolor = "#" + Randomtext.toString(16) // for convert the int to string with concatination with 16 bit number
        // console.log(Randomtext, Randomcolor)
    b.innerHTML = Randomcolor
    document.body.style.backgroundColor = Randomcolor
    document.body.style.transition = 'all ease 0.2s'


})