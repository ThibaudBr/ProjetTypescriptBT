import {PokemonModel} from '../model/Pokemon.model';
import {Fight} from "../fight/fight";


const pokemon1 = new PokemonModel({
    name: "Magicarpe",
    hp: 100,
    attack: 10,
    defense: 10,
    speed: 10
});
const pokemon2 = new PokemonModel({
    name: "Tiplouf",
    hp: 100,
    attack: 10,
    defense: 10,
    speed: 10
});

describe( 'Test Pokemon Name',  () =>{
    it('should return Magicarpe', function () {
        expect(pokemon1.name).toBe("Magicarpe");
    });
    it('should return Tiplouf', function () {
        expect(pokemon2.name).toBe("Tiplouf");
    });
})

describe( 'Test Pokemon Attack',  () =>{
    it('should return Tiplouf have 70 HP', function () {
        pokemon2.attackEnnemie(30, pokemon1);
        expect(pokemon1.hp).toBe(70);
    });
    it('should return Magicarpe have 0 HP', function () {
        pokemon1.attackEnnemie(100, pokemon2);
        expect(pokemon2.hp).toBe(0);
    });
})

describe( 'Test Pokemon whoAttackFirst',  () =>{
    it('should return Tiplouf first', function () {
        pokemon1.speed = 5;
        pokemon2.speed = 10;
        let fight = new Fight(pokemon1, pokemon2);
        let orderAttack = fight.whoAttackFirst();

        expect(orderAttack[0].name).toBe("Tiplouf");
    });
})
