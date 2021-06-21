let num1: number;
let num2: number;

class Pokemon {
    name: string;
    type: string;
    power: number = 0;
    isNice: boolean = true;

    constructor(name: string, type: string){
        this.name = name;
        this.type = type;
    }

    setPower(param: number) {
        this.power = param;
    }
}

const pikachu = new Pokemon('Pikachu', 'electrik');

pikachu.setPower(100);

console.log(pikachu.power);
