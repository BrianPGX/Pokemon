

const Pokemon = async(id) => {

try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    const pokemon = {
        picture: data.sprites.other.dream_world.front_default,
        pname: data.name,
        hp: data.stats[0].base_stat,
        xp: data.base_experience,
        abilitie: data.abilities[0].ability.name,
        secondAbilitie:data.abilities[1].ability.name,
    }
    let avatar =  `<img src="${pokemon.picture}"></img><h1>${pokemon.pname}</h1><h2>${pokemon.abilitie} & ${pokemon.secondAbilitie}</h2>
    </h2> <h3>XP:${pokemon.xp}</h3><h3>HP:${pokemon.hp}</h3>`
   

    document.getElementById('character').innerHTML = avatar;
    
    
   console.log(data);
}
catch(error){
    console.log(error);
}
}

const searchPokemon = () =>{
   
    let quest = document.getElementById('searchPKM').value
    Pokemon(quest);
    
}
searchPokemon();