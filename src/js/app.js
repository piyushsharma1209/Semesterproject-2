// Define an array to hold the products
var products = [];

// Define a function to add a product to the array and display it on the page
function addProduct(name, image, description, price) {
    // Create a new product object
    var product = {
        name: name,
        image: image,
        description: description,
        price: price
    };

    // Add the product to the array
    products.push(product);

    // Clear the form
    document.getElementById("product-form").reset();

    // Call the function to display the products
    displayProducts();
}

// Define a function to display the products on the page
function displayProducts() {
    var productList = document.getElementById("product-list");
    if (productList) {
        var productHTML = "";
        for (var i = 0; i < products.length; i++) {
            var product = products[i];
            productHTML +=
                '<div class="card mb-3 product-card">' +
                '<img src="' +
                product.image +
                '" class="card-img-top" alt="' +
                product.name +
                '">' +
                '<div class="card-body">' +
                '<h5 class="card-title">' +
                product.name +
                '</h5>' +
                '<p class="card-text">' +
                product.description +
                '</p>' +
                product.price +
                '</h5>' +
                '<p class="card-text">' +
                '</div>' +
                '</div>';
        }
        productList.innerHTML = productHTML;
    }
}


// Get the form element
var form = document.getElementById("product-form");

// Add an event listener for the form submit event
form.addEventListener("submit", function (event) {
    // Prevent the default form behavior
    event.preventDefault();

    // Get the values from the form
    var name = document.getElementById("product-name").value;
    var image = document.getElementById("product-image").value;
    var description = document.getElementById("product-description").value;
    var price = document.getElementById("product-price").value;

    // Call the function to add the product to the array and display it on the page
    addProduct(name, image, description, price);
});
