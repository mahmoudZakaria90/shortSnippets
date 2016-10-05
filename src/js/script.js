//Custom .js

var gv = require("./give.js")


//Calling all functions on load events
window.addEventListener('load',function(){
	gv.direction();
	gv.burger();
	gv.sliderInit();
	gv.dropdown('click');
})


