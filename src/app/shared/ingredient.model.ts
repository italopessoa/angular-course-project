export class Ingredient {
  public id: number;
  constructor(public name: string, public amount: number) {
    this.id = new Date().getTime() * Math.random();
   }
}
