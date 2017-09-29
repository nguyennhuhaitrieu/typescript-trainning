abstract class Laptop {

    public keyboard(): void {
        console.log("Laptop.keyboard");
    }

    public abstract mainboard(abc: string): string ;

    public chipset(): void {
      console.log("Laptop.childset");
    }
}

class LaptopDell extends Laptop{
    public keyboard(): void {
        console.log("Laptop.keyboard Dell");
    }

    public mainboard(): string {
      console.log("Laptop.mainboard Dell");
      return "Trieu Nguyen";
    }

    public chipset(): void {
      console.log("Laptop.childset Dell");
    }
}

let laptopObj: LaptopDell = new LaptopDell();
laptopObj.keyboard();
laptopObj.mainboard();
laptopObj.chipset();
