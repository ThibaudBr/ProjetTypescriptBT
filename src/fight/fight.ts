import {PokemonModel} from "../model";

export class Fight {
    pokemon1: PokemonModel;
    pokemon2: PokemonModel;


    constructor(pokemon1: PokemonModel, pokemon2: PokemonModel) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }

    whoAttackFirst(): Array<PokemonModel>{

        if (this.pokemon1.speed > this.pokemon2.speed){
            return [this.pokemon1, this.pokemon2];
        }else if (this.pokemon1.speed < this.pokemon2.speed){
            return [this.pokemon2, this.pokemon1];
        }else if (this.pokemon1 === this.pokemon2){
            return (Math.random() > 0.5 ? [this.pokemon1, this.pokemon2]: [this.pokemon2, this.pokemon1]);
        }
        return [];
    }
}
