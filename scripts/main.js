
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {

    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];

		var newDiv = document.createElement("div");
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);

		if(checkbox.value == "jalapeño $1.93"){
			var jalapeño = document.createElement("img");
			jalapeño.src = "img/jalapeño.png";
			s2.appendChild(jalapeño);
		}
		else if(checkbox.value == "brocoli $1.99"){
			var brocoli = document.createElement("img");
			brocoli.src = "img/brocoli.png";
			s2.appendChild(brocoli);
		}
		else if(checkbox.value == "bread $2.35"){
			var bread = document.createElement("img");
			bread.src = "img/bread.png";
			s2.appendChild(bread);
		}
		else if(checkbox.value == "mushroom $3.99"){
			var mushroom = document.createElement("img");
			mushroom.src = "img/mushroom.png";
			s2.appendChild(mushroom);
		}
		else if(checkbox.value == "nectarine $4.93"){
			var nectarine = document.createElement("img");
			nectarine.src = "img/nectarine.png";
			s2.appendChild(nectarine);
		}
		else if(checkbox.value == "organic apple $5.99"){
			var organicApple = document.createElement("img");
			organicApple.src = "img/apple.png";
			s2.appendChild(organicApple);
		}
		else if(checkbox.value == "organic tomato $9.15"){
			var organicT = document.createElement("img");
			organicT.src = "img/tomato.png";
			s2.appendChild(organicT);
		}
		else if(checkbox.value == "spaghetti $9.15"){
			var spaghetti = document.createElement("img");
			spaghetti.src = "img/spaghetti.png";
			s2.appendChild(spaghetti);
		}
		else{
			var salmon = document.createElement("img");
			salmon.src = "img/salmon.png";
			s2.appendChild(salmon);
		}

		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}

