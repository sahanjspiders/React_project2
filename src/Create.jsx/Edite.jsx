import { useState } from "react";
import axios from 'axios'
import {useParams} from 'react-router-dom';
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Navbar from "./Navbar";

const Edite = () => {
  let {id}=useParams()
let Navigate=useNavigate()
let [data,setData]=useState({

    Name:"",Email:"",
    MobileNo:"",Designation:"",
    Gender:"",Course:"",Image:"",
    Date:""
})

let handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}

useEffect(()=>{
    pageload();
},[])


let pageload=async()=>{
 let result=await axios.get(`http://localhost:4004/data/${id}`)  
 console.log(result.data);
 setData(result.data);
}


  let handleSubmit=(e)=>{
 e.preventDefault();

 axios.put(`http://localhost:4004/data/${id}`,data)
 Navigate('/')
  }
  
  
    return ( 

      <>
      
      <Navbar/>
      <div className="EditeMain">

      
    <div className="Main card shadow-lg mt-5 mx-auto  w-50 border-dark rounded bg-light">
      <h1 className="mx-auto m-3" >Edite Employee Data</h1>
        <form onSubmit={handleSubmit} >
         
       <div className="Div1 justify-content-between ">
            <div className="SingleDiv">
                <label htmlFor="" >Name</label>
                    <input    className="Input1"
                     type="text" placeholder="Enter Name" 
                      name="Name" onChange={handleChange} 
                      value={data.Name}  />
                </div>
                <div className="SingleDiv">
                <label htmlFor="" >Email</label>
                    <input    className="Input1"
                     type="Email" placeholder="Enter Email" 
                      name="Email" onChange={handleChange}
                      value={data.Email}  />
                </div>
                <div className="SingleDiv">
                <label htmlFor="" >Mobile No</label>
                    <input    className="Input1"
                     type="text" placeholder="Enter Mobile No" 
                      name="MobileNo" onChange={handleChange} 
                      value={data.MobileNo}  />
                </div>
                <select className="Dropdown123 "  name="Designation" onClick={handleChange}>
              <option >select</option>
                <option value="Hr" >
                    Hr</option>
                <option  value="Manager"  >
                    Manager</option>
                <option   value="sales"  >
                    sales</option>
              </select>
            </div>
              <div className="Div2 mt-2 p-4 ">  
                 <div >
                     <label htmlFor="">Course</label>
                     <div>
                         <input type="checkbox" className="CheckBox"
                          value="Mca"  name="Course"
                           onClick={handleChange}  />Mca
                           
                         <input type="checkbox" className="CheckBox"
                          value="Bca" name="Course" 
                          onClick={handleChange}/>Bca
                         <input type="checkbox"  className="CheckBox" 
                            value="Bsc" name="Course"
                              onClick={handleChange}  />Bsc
                     </div>
                     </div>
                     <div className="images   ">
                      <label htmlFor="" > Image</label>
                <input type="url"   onChange={handleChange}  name="Image" />
                    </div> 
              </div>
              
              <div className="Radio justify-content-evenly ">
                       <div >
                       <input type="radio" name="Gender"
                          value="Male" className="radiobutton1  " 
                           onClick={handleChange} />
                           Male
                             <input  type="radio" name="Gender"
                              value="Female" className="radiobutton2 " 
                              onClick={handleChange} />
                              Female

                       </div>
                        
                              <div>
                <input type="date" name="Date" onChange={handleChange} value={data.Date} />
              </div> 
                      </div>
                                         
             
       

<br/>
                      
                       <input  className="btn btn-primary w-100 m-4" type="submit"/>
        </form>
    </div>
    </div>
    </>
     );
}
 
export default Edite;