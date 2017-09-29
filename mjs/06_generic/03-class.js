class FrProduct {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showProductInfoFr() {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
let frProductObj = new FrProduct("GF001", "Trieu Nguyen", 50);
let frProductObj2 = new FrProduct(10, "Trieu Nguyen", "GF50");
let frProductObj3 = new FrProduct("10", 23, true);
console.log(frProductObj);
console.log(frProductObj2);
console.log(frProductObj3);
