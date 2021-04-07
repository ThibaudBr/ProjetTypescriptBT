import {PokemonModel} from "../model";

export class Fight {
    pokemon1: PokemonModel;
    pokemon2: PokemonModel;
    turn: number;

    constructor(pokemon1: PokemonModel, pokemon2: PokemonModel) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
        this.turn = 0;
    }

    whoAttackFirst(): Array<PokemonModel>{

        if (this.pokemon1.speed > this.pokemon2.speed){
            return [this.pokemon1, this.pokemon2];
        }else if (this.pokemon1.speed < this.pokemon2.speed){
            return [this.pokemon2, this.pokemon1];
        }else if (this.pokemon1.speed === this.pokemon2.speed){
            return (Math.random() > 0.5 ? [this.pokemon1, this.pokemon2]: [this.pokemon2, this.pokemon1]);
        }
        return [];
    }

    beginFight(): PokemonModel{
        let fightOrder = [];
        while (this.canContinue()){
            fightOrder = this.whoAttackFirst();
            fightOrder[0].attackEnnemie(fightOrder[0].skillTab[fightOrder[0].chooseSkill()],fightOrder[1]);
            if (fightOrder[1].hp != 0){
                fightOrder[1].attackEnnemie(fightOrder[1].skillTab[fightOrder[1].chooseSkill()],fightOrder[0]);
            }
        }
        if (this.pokemon2.hp === 0){
            return this.pokemon1;
        }
        return this.pokemon2;
    }

    //j'ai des problèmes avec l'opérateur !=
    private canContinue(): boolean{
        if (this.pokemon1.hp == 0){
            return false;
        }
        else if (this.pokemon2.hp == 0){
            return false;
        }
        return true;
    }
}
