function showNumberInfo(x :number): number {
  return x;
}

function showStringInfo(x: string): string {
  return x;
}

function showInfo<T>(x : T) : T {
  return x;
}

console.log(showInfo<string>("Trieu Nguyen"));