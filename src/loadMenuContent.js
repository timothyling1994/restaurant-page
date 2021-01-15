function loadMenuContent(foodArray){

	let content_div = document.querySelector("#content");

	foodArray.forEach(node=>{
		let img_wrap = document.createElement("div");
		img_wrap.setAttribute("class","img_wrap");

		let img_1 = document.createElement("img");
		img_1.setAttribute("src",node.src);
		img_1.setAttribute("class","food-stuff");

		let description = document.createElement("div");
		description.setAttribute("class","description");

		let textContent = document.createTextNode(node.price);

		description.appendChild(textContent);
		img_wrap.appendChild(img_1,img_wrap);
		img_wrap.appendChild(description,img_wrap)

		content_div.appendChild(img_wrap,content_div);
	});

}

export {loadMenuContent};