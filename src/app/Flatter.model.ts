export class Flatter {
  constructor(weight: number, type: string, cost: number, description: string) {
    this.weight = weight;
    this.type = type;
    this.cost = cost;
    this.description = description;
  }

  weight: number = 0;
  type: string = '';
  cost: number = 0;
  description: string = '';
}
