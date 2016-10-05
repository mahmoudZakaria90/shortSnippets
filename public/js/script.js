(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//Big object for all js work
var gv = {
	direction: function(){
	var doc = document.documentElement;
		var docLang = doc.getAttribute('lang')
		if (docLang == 'en'){
			doc.setAttribute('dir','ltr')
		}else{
			doc.setAttribute('dir','rtl')
		}
	},
	//burger
	burger: function(){
		var trigger = document.getElementsByClassName('header-burger');
		var triggerWrap = [];
		
		for (var i = 0; i < trigger.length; i++) {
			triggerWrap.push(trigger[i])
		}

		triggerWrap.forEach(function(item){
			var parentTrigger = item.parentNode;
			var NextOfTrigger = parentTrigger.nextElementSibling;
			var state = false
			item.onclick = function(){
				
				if(!state){
					state = true;
					NextOfTrigger.style.height = NextOfTrigger.scrollHeight + 'px';
					parentTrigger.classList.add('active')
				}else{
					state = false;
					NextOfTrigger.style.height = 0 + 'px'
					parentTrigger.classList.remove('active')
				}
			}
		})
	},
	
	//slider
	sliderInit: function(){
		//ingradients
		var sliderNext = document.getElementsByClassName('slider-next')
		var sliderPrev = document.getElementsByClassName('slider-prev')
		
		var sliderNextWrap = []
		var sliderPrevWrap = []
		var sliderIndexWrap = []
		
		//instructions

		//NextSlider
		for(var i = 0; i < sliderNext.length; i++){
			sliderNextWrap.push(sliderNext[i])
			sliderIndexWrap.push(0)
		}

		//PrevSlider
		for(var i = 0; i < sliderPrev.length; i++){
			sliderPrevWrap.push(sliderPrev[i])
			sliderIndexWrap.push(0)
		}

		sliderNextWrap.forEach(function(item,index,array){
			var parent = item.parentNode
			var sibling = parent.nextElementSibling
			var slides = parent.nextElementSibling.children

			item.addEventListener('click',function(){
				if(sliderIndexWrap[index] === slides.length - 1){
					sliderIndexWrap[index] = 0
					sibling.style.left = '-' + (sliderIndexWrap[index] * 100) + '%'
				}else{
					sliderIndexWrap[index] ++
					sibling.style.left = '-' + (sliderIndexWrap[index] * 100) + '%'
				}

			})
				
		})
		sliderPrevWrap.forEach(function(item,index,array){
			var parent = item.parentNode
			var sibling = parent.nextElementSibling
			var slides = parent.nextElementSibling.children

			item.addEventListener('click',function(){
				if(sliderIndexWrap[index] === 0){
					sliderIndexWrap[index] = slides.length - 1
					sibling.style.left = '-' + (sliderIndexWrap[index] * 100) + '%'
				}else{
					sliderIndexWrap[index] --
					sibling.style.left = '-' + (sliderIndexWrap[index] * 100) + '%'
				}
			})
		})

	},

	dropdown: function(type){
		var trigger = document.getElementsByClassName('header-dropdown');
		var triggerWrap = [];

		for (var i = 0; i < trigger.length; i++) {
			triggerWrap.push(trigger[i])
		}
		triggerWrap.forEach(function(item){
			item.children[0].addEventListener(type,function(e){
				e.preventDefault()
				item.classList.toggle('active')
				item.parentNode.parentNode.style.height = 'auto'
			},false)

			if(window.innerWidth >= 768){
				document.body.addEventListener(type,function(){
						item.classList.remove('active')
				},true)
			}
		})
	},

	//Dom Manipulation
	addClass: function(item,className){
		var el = document.querySelector(item)
		el.className += ' ' + className
	},
	removeClass: function(item,className){
		var el = document.querySelector(item)
		el.classList.remove(className)
	},
	append: function(item,txt){
		var el = document.querySelector(item)
		el.innerHTML += txt
	},
	before: function(item,target){
		var el = document.querySelector(item)
		var parentEl = el.parentNode
		var tgt = document.querySelector(target)
		parentEl.insertBefore(el,tgt)
	},
	create: function(item,parent){
		var parentEl = document.querySelector(parent)
		var newEl = document.createElement(item)
		parentEl.appendChild(newEl)
	}
}

module.exports = gv
},{}],2:[function(require,module,exports){
//Custom .js

var gv = require("./give.js")


//Calling all functions on load events
window.addEventListener('load',function(){
	gv.direction();
	gv.burger();
	gv.sliderInit();
	gv.dropdown('click');
})



},{"./give.js":1}]},{},[2]);
