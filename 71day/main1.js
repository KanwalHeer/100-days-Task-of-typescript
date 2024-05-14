/**************************
 * CLASS TYPE ANNOTATIONS *
 **************************/
var Product = /** @class */ (function () {
    function Product(id, name, price) {
        // Constructor parameter type annotations
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // Method type annotations
    Product.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: $").concat(this.price);
    };
    return Product;
}());
// Create an instance of the Product class
var product1 = new Product(1, "Widget", 20.0);
// Access class properties and call a method
console.log(product1);
console.log(product1.getProductInfo()); // Output: ID: 1, Name: Widget, Price: $20
