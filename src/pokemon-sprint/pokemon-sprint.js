import React, { useEffect, useState } from "react";
import axios from "axios"

export const PokemonSprint =() =>{
    const [pokemon, setPokemon] = useState()

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${156}`)
        .then(res => {
            setPokemon(res.data)
        });
    }, [])

    return (
        <img 
            src={pokemon?.sprites?.front_default} 
            height={"250px"}
            width="250px"
            alt={pokemon?.name}
        ></img>
    )

}
