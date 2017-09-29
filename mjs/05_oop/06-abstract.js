class Laptop {
    keyboard() {
        console.log("Laptop.keyboard");
    }
    chipset() {
        console.log("Laptop.childset");
    }
}
class LaptopDell extends Laptop {
    keyboard() {
        console.log("Laptop.keyboard Dell");
    }
    mainboard() {
        console.log("Laptop.mainboard Dell");
        return "Trieu Nguyen";
    }
    chipset() {
        console.log("Laptop.childset Dell");
    }
}
let laptopObj = new LaptopDell();
laptopObj.keyboard();
laptopObj.mainboard();
laptopObj.chipset();
