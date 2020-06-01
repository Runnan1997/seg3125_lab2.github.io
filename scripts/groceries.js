	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		

var products = [
	{
		name: "jalapeño $1.93",
		vegetarian: true,
		glutenFree: true,
		price: 1.93,
		organic: false,
	},
	{
		name: "brocoli $1.99",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: false
	},
	{
		name: "bread $2.35",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		organic: false

	},
	{
		name: "mushroom $3.99",
		vegetarian: true,
		glutenFree: true,
		price: 3.99,
		organic: false
	},
	{
		name: "nectarine $4.93",
		vegetarian: false,
		glutenFree: true,
		price: 4.93,
		organic: false
	},
	{
		name: "organic apple $5.99",
		vegetarian: false,
		glutenFree: true,
		price: 5.99,
		organic: true
	},
	{
		name: "organic tomato $9.15",
		vegetarian: true,
		glutenFree: true,
		price: 9.15,
		organic: true

	},
	{
		name: "spaghetti $9.15",
		vegetarian: false,
		glutenFree: false,
		price: 9.15,
		organic: false

	},
	{
		name: "salmon $10.00",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		organic: false
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
		else if(restriction == "VegetarianandOrganic"){
			if(prods[i].organic == true){
				if(prods[i].vegetarian == true){
					product_names.push(prods[i].name);
				}
			}
		}
		else if(restriction == "VegetarianandGlutenFree"){
			if(prods[i].glutenFree == true){
				if(prods[i].vegetarian == true){
					product_names.push(prods[i].name);
				}
			}
		}
		else if(restriction == "GlutenFreeandOrganic"){
			if(prods[i].glutenFree == true){
				if(prods[i].organic == true){
					product_names.push(prods[i].name);
				}
			}
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
