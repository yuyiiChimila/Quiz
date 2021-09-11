import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

export default function NavigationBar() {
  return (
    <>
      <Navbar bg="light" expand="lg" style={{ justifyContent: 'center' }}>
      <Navbar.Brand href="#" className="fw-bold"><span style={{color:'#46B2EB'}}>Form</span> Fetch Api </Navbar.Brand>
      </Navbar>
    </>
  )
}
