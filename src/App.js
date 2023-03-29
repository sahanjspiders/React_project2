import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Create.jsx/Create';
import Showdata from './Create.jsx/Showdata';
import Edite from './Create.jsx/Edite';
import { useState } from 'react';
import Login from './Create.jsx/Login';
import Signupsahan from './Create.jsx/Signup';
import Dashbord from './Create.jsx/Dashbord';
import Search from './Create.jsx/Search';


function App() {
  
  return (
      <div className="App">
    
  <BrowserRouter>
 
  <Routes>
  
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signupsahan/>}/>
      
      <Route path="/search/:searchKey" element={<Search/>} />
               
            
    <Route path='/Dashbord' element={<Dashbord/>} />
    <Route   path='/Create' element={<Create/>}/>
    <Route path='/' element={<Showdata/>} />
  <Route path='/Edite/:id' element={<Edite/> } />
  </Routes>
  </BrowserRouter>
    
  
     
      </div>
    );




}

export default App;










 


// {/* <BrowserRouter>
{/* <Routes>
<Route excate path='/Create'  element={<Create/>} />
{/* <Route excate path='/' element={<Table/>}/>
<Route excate path='/Update/:id' element={<Update/>}/> */}
// </Routes>
// </BrowserRouter> */} */}
//
//
//
//
