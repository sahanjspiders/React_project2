import { useState } from "react";
import axios from 'axios'
import Navbar from "./Navbar";
import {useNavigate } from "react-router-dom";
const Create = () => {
  
let  Navigate=useNavigate()
let [data,setData]=useState({
    
    Name:"",Email:"",
    MobileNo:"",Designation:"",
    Gender:"",Course:"",Image:"",
    Date:""
})

let handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}


  let handleSubmit=(e)=>{
 e.preventDefault();

 axios.post("http://localhost:4004/data",data)
 Navigate('/')
  }
  
  
    return ( 
<>


      <Navbar/>
      <div className="CreateMain">

      
    <div className="Main card shadow-lg mt-5 mx-auto  w-50 border-dark rounded bg-light">
        <h1 className="mx-auto m-3"  >Create Employee Data</h1>
        <form onSubmit={handleSubmit} >
         
            <div className="Div1 justify-content-between ">
            <div className="SingleDiv">
                <label htmlFor="" >Name</label>
                    <input    className="Input1" 
                     type="text" placeholder="Enter Name" 
                      name="Name" onChange={handleChange} required/>
                </div>
                <div className="SingleDiv">
                <label htmlFor="" >Email</label>
                    <input    className="Input1"
                     type="Email" placeholder="Enter Email" 
                      name="Email" onChange={handleChange} required />
                </div>
                <div className="SingleDiv">
                <label htmlFor="" >Mobile No</label>
                    <input    className="Input1"
                     type="text" placeholder="Enter Mobile No" 
                      name="MobileNo" onChange={handleChange} required />
                </div>
              <select className="Dropdown123 " name="Designation" onClick={handleChange}>
              <option >select</option>
                <option value="Hr"  >Hr</option>
                <option  value="Manager"  >Manager</option>
                <option   value="sales"  >sales</option>
              </select>
            </div>
              <div className="Div2 mt-2 p-4">  
                 <div>
                     <label htmlFor="">Course</label>
                     <div   >
                         <input className="CheckBox" type="checkbox"  value="Mca" name="Course" onClick={handleChange}  />Mca
                         <input  className="CheckBox" type="checkbox"  value="Bca" name="Course" onClick={handleChange}  />Bca
                         <input  className="CheckBox" type="checkbox"   value="Bsc" name="Course" onClick={handleChange}  />Bsc
                     </div>
                     </div>
                     <div className="images   ">
                      <label htmlFor="" > Image</label>
                <input type="url"    onChange={handleChange} name="Image"   required />
                    </div> 
              </div>
              <div className="Radio justify-content-around ">
                       <div>
                       <input type="radio" name="Gender" 
                          value="Male" 
                           onClick={handleChange} />
                           Male
                             <input  type="radio" name="Gender"
                              value="Female" onClick={handleChange}  />
                              Female
                       </div>
                         
                              <div>
                <input type="date" name="Date" onChange={handleChange} required />
              </div>
                      </div>
                                                      
                
      

<br/>
                       
                       <input  className="btn btn-primary w-100 ml-5 " type="submit"/>

        </form>
    </div>
    </div>
    </>
     );
}
 
export default Create;