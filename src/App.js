import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/Components/Navbar';
import Second_Navbar from './Components/Second_Navbar';
import { Switch, Route } from 'react-router-dom';
import Header_Youtube from './Components/Header_Youtube';
import Latestrecipe_Author from './Components/Latestrecipe_Author';
import Recipes_Card from './Components/Recipes_Card';
import Kids_Card from './Components/Kids_Card';


function App() {
  return (
    <>
      <Navbar />
      <Second_Navbar />
      <Header_Youtube />
      <Latestrecipe_Author />
      <Recipes_Card />
      <Kids_Card />
    </>
  )
}

export default App
