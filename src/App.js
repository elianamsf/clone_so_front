import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css'

import Header from './components/Header';

const initialFormData = Object.freeze({
    so :"",
    cpu : "",
    memoria: "",
    name: "",
    ip: ""
  });

function App(){
    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
      updateFormData({
        ...formData,
  
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formData);
      const response =  api.post('machines', {
        so   : formData.so,
        cpu  : formData.cpu,
        memoria : formData.memoria,
        nome: formData.name,
        ip: formData.ip
     });
    };
  
    return (
      <>
        <Header title='Clone VM'/>
        <br /><br />
        <div>
        <label for="so">Sistema Operacional: 
        <br />
          <select name="so" onChange={handleChange}>
              <option value=""></option>
              <option value="linux">Linux</option>
              <option value="windows">Windows</option>
          </select>
        </label>
        <br /><br />
        <label for="cpu">CPU: 
        <br />
          <select name="cpu" onChange={handleChange} >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
          </select>
        </label>
        <br /><br />
        <label for="memoria">Memória: 
        <br />
          <select name="memoria" typeof="text" onChange={handleChange}>
              <option value=""></option>
              <option value="1024">1GB</option>
              <option value="2048">2GB</option>
              <option value="3096">3GB</option>
              <option value="4120">4GB</option>
          </select>
        </label>
        <br /><br />
        <label>
          Endereço IP: 
          <br />
          <input name="ip" onChange={handleChange} placeholder="10.0.2.xxx"/>
        </label>
        <br /><br />
        <label>
          Nome do Clone: 
          <br />
          <input name="name" onChange={handleChange} />
        </label>
        <br /><br />
        <button onClick={handleSubmit}>Submit</button>
        </div>
      </>
    );
}

export default App; 