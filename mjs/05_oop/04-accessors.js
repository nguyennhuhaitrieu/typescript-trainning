class ProductItem {
    constructor(name) {
        this._name = name;
    }
    showProductInfo() {
        console.log(`${this._name}`);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
var productObj = new ProductItem("TypeScript");
console.log(productObj);
console.log("Name :" + productObj.name);
productObj.name = "TypeScript Traning Angular";
console.log("Name :" + productObj.name);
