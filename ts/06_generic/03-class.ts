class FrProduct <A, B, C >  {
    id      : A;
    name    : B;
    price   : C;

    constructor(id: A, name: B, price: C ) {
        this.id         = id;
        this.name       = name;
        this.price      = price; 
    }

    showProductInfoFr() {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}

let frProductObj  = new FrProduct<string, string, number>("GF001","Trieu Nguyen",50);
let frProductObj2 = new FrProduct<number, string, string>(10,"Trieu Nguyen","GF50");
let frProductObj3 = new FrProduct<string, number, boolean>("10",23,true);

console.log(frProductObj);
console.log(frProductObj2);
console.log(frProductObj3);