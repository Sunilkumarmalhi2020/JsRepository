import logo from './logo.svg';
import './App.css';
import './first.js'
import { useState,useEffect } from 'react';
import PersonBio from './component/PersonBio';
function App() {

  const[age,setAge]=useState(0);
  const[name,setName]=useState('Sunil');
  useEffect(()=>{
    console.log('you clicked '+age+' times');
    document.title='my age is'+age;
  })
  return (
    <div className="App">
      <p>you clicked  {age} times</p>
     <button onClick={()=>setAge(age+1)}>Age increment</button>
     <PersonBio name={name}>Age is : {age}</PersonBio>
    </div>
  );
}

export default App;
