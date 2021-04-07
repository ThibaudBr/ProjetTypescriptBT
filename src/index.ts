import {PokemonModel} from './model';

const pokemon1 = new PokemonModel({
    name: "Magicarpe",
    hp: 100,
    attack: 10,
    defense: 10,
    speed: 10
});
console.log(pokemon1.name);
