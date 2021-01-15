function loadHomeContent(){

	let content_div = document.querySelector("#content");

	let homeContentdiv = document.createElement("div");
	homeContentdiv.setAttribute("id","home");

	let homeContent = document.createTextNode("Come on down for a variety of delicious pixelated foods!");
	homeContentdiv.appendChild(homeContent);

	content_div.appendChild(homeContentdiv,content_div);
}

export {loadHomeContent};