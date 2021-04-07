import {PokemonModel} from '../model/Pokemon.model';
import {Fight} from "../fight/fight";
import {Skill} from "../model/Skill.model";

const listSkill = [new Skill({
    name: "Charge",
    power: 50,
    type: "NORMAL"
    }),
    new Skill({
        name: "Hydro-Canon",
        power: 150,
        type: "WATER"
    }),
    new Skill({
        name: "Bec d'acier",
        power: 70,
        type: "STEEL"
    }),]
const pokemon1 = new PokemonModel({
    name: "Magicarpe",
    hp: 100,
    attack: 10,
    defense: 10,
    speed: 10,
    skillTab: [listSkill[0]]
});
const pokemon2 = new PokemonModel({
    name: "Tiplouf",
    hp: 100,
    attack: 10,
    defense: 10,
    speed: 10,
    skillTab: [listSkill[1], listSkill[2]]
});

describe( 'Test Pokemon Name',  () =>{
    it('should return Magicarpe', function () {
        expect(pokemon1.name).toBe("Magicarpe");
    });
    it('should return Tiplouf', function () {
        expect(pokemon2.name).toBe("Tiplouf");
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

    it('whoAttackFirst with same Speed', function () {
        pokemon1.speed = 10;
        pokemon2.speed = 10;
        let fight = new Fight(pokemon1, pokemon2);
        let orderAttack = fight.whoAttackFirst();

        expect(orderAttack.length).toBe(2);

    });
})

describe( 'Test Pokemon Attack',  () =>{
    it('should return Tiplouf have 70 HP (start: 100 HP, power 45)', function () {
        pokemon1.attackEnnemie(pokemon1.skillTab[0], pokemon2);
        expect(pokemon2.hp).toBe(55);
    });
    it('should return Magicarpe have 0 HP (start: 100 HP, power 65)', function () {
        pokemon2.attackEnnemie(pokemon2.skillTab[1], pokemon1);
        expect(pokemon1.hp).toBe(35);
    });

    it('should return Magicarpe have 0 HP (start: 65 HP, power: trop)', function () {
        pokemon2.attackEnnemie(pokemon2.skillTab[0], pokemon1);
        expect(pokemon1.hp).toBe(0);
    });
})

describe( 'Test Pokemon Fight',  () =>{
    it('should return fight', function () {
        pokemon2.hp = 1000;
        pokemon1.hp = 1000;
        let fight = new Fight(pokemon1, pokemon2);
        let winner = fight.beginFight();
        expect(winner.hp).toBeGreaterThan(0);
    });

})
