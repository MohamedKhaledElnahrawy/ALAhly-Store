// Add to Cart functionality
var addToCartButtons = document.querySelectorAll('.content button');

for (var i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener('click', function() {
		alert('Product added to cart!');
	});
}