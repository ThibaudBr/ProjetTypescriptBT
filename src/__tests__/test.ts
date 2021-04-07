import {PokemonModel} from '../model/Pokemon.model';
/// <reference types="jest" />

test("PokemonModel Test", () =>{
    let pokemon1 = new PokemonModel("Magicarpe");
    expect(pokemon1.name).toBe("Magicarpe");
})
