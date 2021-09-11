import React from 'react'
import { Col } from 'react-bootstrap';

export default function Card({ pokemon }) {
  return (
    <>
      <Col sm="3" md="2">
      <div className="text-center"><img src={pokemon.sprites.front_default} alt="" /></div>
      <div className="text-center">{pokemon.name}</div>
      </Col>
    </>
  )
}
