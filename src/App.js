import React, { useState, useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/form"
import ShowItems from "./components/showItems"
import Loading from "./components/loading"

const itemReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]
    case 'DELETE':
      return state.filter(e => e.name !== action.payload)
    case 'NAME':
      return [...state.sort((a,b)=>a.name.toUpperCase()>b.name.toUpperCase()? 1:-1)]
    case 'QTY':
      return [...state.sort((a,b)=>a.qty-b.qty)]
    case 'TIME':
      return [...state.sort((a,b)=>a.createdAt-b.createdAt)]
      case 'REV':
      return [...state.reverse()]

    default:
      break
  }
}


function App() {
  const [value,dispatch]=useReducer(itemReducer,[])
  const [loading, setLoading] = useState(false)

  const addItem = (e, name, qty) => {
    e.preventDefault();
    if (name && qty) {
      setTimeout(() => {
        dispatch({type:"ADD",payload:{ name, qty, createdAt: new Date() }})
        setLoading(false);
      }, 500);
      setLoading(true);

    }
  };
  const deleteItem = (name) => {
    setTimeout(() => {
      dispatch({type:"DELETE",payload:name})
      setLoading(false);
    }, 500);
    setLoading(true);
  }
 
  const name=(sort)=>{
    dispatch({type:sort})
  }
  

  return (
    <div className="App">
      {loading && <Loading />}
      <Form addItem={addItem} />
      <ShowItems items={value} deleteItem={deleteItem} sortName={name}/>
    </div>
  );
}

export default App;
