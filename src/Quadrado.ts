export class Quadrado {
  constructor(public lado: number) { }
  public area(): number {
    return Math.pow(this.lado, 2);
  }
}