import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Route } from 'react-router-dom';
import Layout from './content/component/Layout'

export default function App() {

  return (
    <Route>
      <Layout></Layout>
    </Route>
  )
}
