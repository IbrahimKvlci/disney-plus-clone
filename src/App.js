import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from './components/Detail';
import Login from './components/Login';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          
          
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>

            {/* <Route path="/login">
              <Login/>
            </Route>
            <Route path="/detail/:id">
              <Detail/>
            </Route>
            <Route path="/">
              <Home/>
            </Route> */}
        
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
