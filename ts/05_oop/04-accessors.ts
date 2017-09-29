class ProductItem {
  private  _name: string;

  constructor(name: string) {
    this._name = name;
  }

  showProductInfo(): void {
    console.log(`${this._name}`);
  }

  public get name(): string {
    return  this._name;
  }

  public set name(value: string) {
    this._name = value;
  }
}

var productObj = new ProductItem ("TypeScript");
console.log(productObj);

console.log("Name :" + productObj.name);

productObj.name = "TypeScript Traning Angular";

console.log("Name :" + productObj.name);
