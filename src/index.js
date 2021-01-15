function loadHomeContent(){

	let content_div = document.querySelector("#content");

	let homeContentdiv = document.createElement("div");
	homeContentdiv.setAttribute("id","home");

	let homeContent = document.createTextNode("Come on down for a variety of delicious pixelated foods!");
	homeContentdiv.appendChild(homeContent);

	content_div.appendChild(homeContentdiv,content_div);
}

function loadMenuContent(){

	let content_div = document.querySelector("#content");

	let menuContentdiv = document.createElement("div");
	menuContentdiv.setAttribute("id","menu");

	let menuContent = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
	menuContentdiv.appendChild(menuContent);

	content_div.appendChild(menuContentdiv,content_div);
}

function clearContent(){
	
	let content_div = document.querySelector("#content");

	/*content_div.forEach(node=>{
			
			function removeAllChildNodes(parent){
				while(parent.firstChild)
				{
					parent.removeChild(parent.firstChild);
				}
			}

			removeAllChildNodes(node);
	});*/
}



function theDomHasLoaded(e) {
	loadHomeContent();
	clearContent();
	
}

document.addEventListener("DOMContentLoaded",theDomHasLoaded,false);