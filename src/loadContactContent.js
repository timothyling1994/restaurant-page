function loadContactContent(contactObject){

	let content_div = document.querySelector("#content");

	let phone = document.createElement("div");
	phone.setAttribute("class","details");
	let textContent = document.createTextNode(contactObject["phone"]);
	phone.appendChild(textContent);

	content_div.appendChild(phone,content_div);

	let address = document.createElement("div");
	address.setAttribute("class","details");
	textContent = document.createTextNode(contactObject["address"]);
	address.appendChild(textContent);

	content_div.appendChild(address,content_div);

	let hours = document.createElement("div");
	hours.setAttribute("class","details");
	textContent = document.createTextNode(contactObject["hours"]);
	hours.appendChild(textContent);

	content_div.appendChild(hours,content_div);

}

export {loadContactContent};