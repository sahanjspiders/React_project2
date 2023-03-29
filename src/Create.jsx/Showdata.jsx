import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import Navbar from "./Navbar";
const Showdata = () => {

let[hold,setHold]=useState([])
let navigate=useNavigate()
useEffect(()=>{
    Loaduser();
},[])

let Loaduser=async()=>{
    const result=await axios.get("http://localhost:4004/data")
    console.log(result.data);
    setHold(result.data)
}


let handledelete=(id)=>{
  axios.delete(`http://localhost:4004/data/`+id)
  .then((res)=>{
    console.log(res.data)
    Loaduser(res.data);
  })
 
}

    return (

      <>
      <Navbar/>
      <div className="ShodowMain">
    <div>
        <table class="table">
  <thead class="thead-dark">
 
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile No</th>
      <th scope="col">Designation</th>
      <th scope="col">Gender</th>
      <th scope="col">Course</th>
      <th scope="col">Create date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
   {/* Name:"",Email:"",
    MobileNo:"",Designation:"",
    Gender:"",Course:"",Image:"" */}
  <tbody>
{
    hold.map((v,index)=>{
        return(
        
            <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td><img src={v.Image} alt='img' height="40px" width="45px" /></td>
      <td>{v.Name}</td>
      <td>{v.Email}</td>
      <td>{v.MobileNo}</td>
      <td>{v.Designation}</td>
      <td>{v.Gender}</td>
      <td>{v.Course}</td>
      <td>{v.Date}</td>
      <td>
     

        <Link to={`/Edite/${v.id}`}>
        <button className="btn btn-primary">Edit</button>
        </Link>
      
       
        <button className="btn btn-danger " onClick={(e)=>handledelete(v.id)}>Delete</button>
      </td>
    </tr>
   
        
        )
    })
}


    
  </tbody>
</table>

    </div>
    </div>
    </>

    );
}
 
export default Showdata;