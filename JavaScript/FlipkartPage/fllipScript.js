/*
fllipScript.js
*/


let serverData = [{
	name: 'Product Name',
	image-url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
	price: 'Rs 2503'
},

{
	name: 'Product Name',
	image-url: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
	price: 'Rs 3650'
},
{
	name: 'Product Name',
	image-url: 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
	price: 'Rs 563'
},
{
	name: 'Product Name',
	image-url: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
	price: 'Rs 456'
},
]

var	rowHTML = document.getElementById('product-section');

for(let i=0; i<serverData.length; i++){
	var htmlCard = `<div class="col-md-3">
				<div class="custom-card">
					<img src="${serverData[0].image-url}"/ class="prd-img">
					<p class="text-muted prd-name">${serverData[0].name}</p>
					<h6>${serverData.price}</h6>
					<button class="btn btn-primary btn-small">Add to cart</button>
				</div>
			</div>`
			
	rowHTML.insertAdjacentHTML('beforeend', htmlCard)
}


			




		

console.log(serverData);