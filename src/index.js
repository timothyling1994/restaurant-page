import {loadHomeContent} from './loadHomeContent.js';
import {loadMenuContent} from './loadMenuContent.js';
import {loadContactContent} from './loadContactContent.js';
import {clearContent} from './clearContent.js';

let foodArray = [{src:"chicken.png",price:"$3"},{src:"fries.png",price:"$1.50"},{src:"burger.png",price:"$4.50"},{src:"taco.png",price:"$2"},{src:"pizza.png",price:"$2.50"},{src:"sandwich.png",price:"$3.50"}]

let contactObject = {
	phone:"(415) 864-8643",
	address:"560 Divisadero St, San Francisco, CA 94117",
	hours: "8AM - 9PM everyday",
}

function theDomHasLoaded(e) {
	loadHomeContent();
	
	let homeBtn = document.querySelector("#home");
	homeBtn.addEventListener("click",function(){
		clearContent();
		loadHomeContent();
	});

	let menuBtn = document.querySelector("#menu");
	menuBtn.addEventListener("click",function(){
		clearContent();
		loadMenuContent(foodArray);
	});

	let contactBtn = document.querySelector("#contact");
	contactBtn.addEventListener("click",function(){
		clearContent();
		loadContactContent(contactObject);
	});
	
}

document.addEventListener("DOMContentLoaded",theDomHasLoaded,false);