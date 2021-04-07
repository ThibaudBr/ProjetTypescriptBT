import {ISkill, Skill} from "./Skill.model";

interface IPokemon{
    name: string;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    skillTab: Array<ISkill>;
}

export class PokemonModel implements IPokemon{
    get skillTab(): Array<Skill>{
        return this._skillTab;
    }

    set skillTab(value: Array<Skill>) {
        this._skillTab = value;
    }
    name: string;
    attack: number;
    defense: number;
    hp: number;
    speed: number;
    private _skillTab: Array<Skill>;

    constructor(props: IPokemon) {
        this.name = props.name;
        this.attack = props.attack;
        this.defense = props.defense;
        this.hp = props.hp;
        this.speed = props.speed;
        this._skillTab = props.skillTab;
    }

    attackEnnemie(skill: Skill, pokemon_2: PokemonModel){
        let attackPower = this.attack/10 * skill.power;
        let damageDeal = attackPower - pokemon_2.defense/2;
        if (pokemon_2.hp > damageDeal){
            pokemon_2.hp = pokemon_2.hp - damageDeal;
        }else{
            pokemon_2.hp = 0;
        }
    }

    chooseSkill(): number{
        return Math.floor(Math.random() * this.skillTab.length);
    }
}

