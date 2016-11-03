(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//Big object for all js work
var gv = {
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


//Custom



},{"./give.js":1}]},{},[2]);
