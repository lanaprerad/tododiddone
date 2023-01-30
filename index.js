const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	let li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //resets text input field


	//STRIKETHROUGH
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);



	//ADD DELETE BUTTON
	let dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);



	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 	//this now looks to see if you hit "enter"/"return"
													//the 13 is the enter key's keycode
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

