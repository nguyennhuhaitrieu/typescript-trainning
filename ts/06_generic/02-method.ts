class StydyProduct {
    static printArray<T>(params: T[]) : void {
        console.log(params);
    }
}

StydyProduct.printArray<number>([1,2,3,4,5]);
StydyProduct.printArray<string>(["ab","bc","bcd","bce"]);
StydyProduct.printArray<any>([1,2,3,5,"abc","cde","def","gqhh"]);