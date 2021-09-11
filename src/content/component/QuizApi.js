import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Card from './Card';
import { getPokemon, getAllPokemon } from '../../services/pokemon';

export default function QuizApi() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
      async function fetchData() {
        let response = await getAllPokemon(initialURL)
        await loadPokemon(response.results);
        setLoading(false);
      }
      fetchData();
    }, [])

  const loadPokemon = async (data) => {
  let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
  }))
  setPokemonData(_pokemonData);
  }

  return (
    <>
      <Row className="mb-4">
      {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
         <>
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />
            })}
        </>
      )}
      </Row>
    </>
  )
}
