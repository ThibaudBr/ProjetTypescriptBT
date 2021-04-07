interface IPokemon{
    name: string;
    hp: number;
    attack: number;
    defense: number;
    speed: number;

}

export class PokemonModel implements IPokemon{
    private _name: string;
    private _attack: number;
    private _defense: number;
    private _hp: number;
    private _speed: number;

    constructor(props: IPokemon) {
        this._name = props.name;
        this._attack = props.attack;
        this._defense = props.defense;
        this._hp = props.hp;
        this._speed = props.speed;
    }

    get attack(): number {
        return this._attack;
    }

    set attack(value: number) {
        this._attack = value;
    }

    get defense(): number {
        return this._defense;
    }

    set defense(value: number) {
        this._defense = value;
    }

    get hp(): number {
        return this._hp;
    }

    set hp(value: number) {
        this._hp = value;
    }

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    attackEnnemie(power: number, pokemon_2: PokemonModel){
        if (pokemon_2.hp > power){
            pokemon_2.hp = pokemon_2.hp - power;
        }else{
            pokemon_2.hp = 0;
        }

    }
}

