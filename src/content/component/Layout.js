import React from 'react'
import Navbar from '../../head/component/NavigationBar';
import { Container, Breadcrumb} from 'react-bootstrap';
import Routes from './Routes'

export default function Layout() {
  return (
    <>
    <Navbar></Navbar>
    <Container className="mt-4">
      <Breadcrumb className="text-decoration-none">
        <Breadcrumb.Item href="/">quiz:1</Breadcrumb.Item>
        <Breadcrumb.Item href="/2">quiz:2</Breadcrumb.Item>
      </Breadcrumb>

        <Routes></Routes>
    </Container>
    </>
  )
}
