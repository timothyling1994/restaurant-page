function clearContent(){
	
	let content_div = document.querySelector("#content");
	removeAllChildNodes(content_div);
			
	function removeAllChildNodes(parent){
		while(parent.firstChild)
		{
			parent.removeChild(parent.firstChild);
		}
	}

	
}

export{clearContent};