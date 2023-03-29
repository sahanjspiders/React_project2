import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Dashbord = () => {
  let  navigator=useNavigate()

    const employee = localStorage.getItem("Username")

  const Logout=()=>{
    localStorage.removeItem("Signup")
    navigator("/Login")  
}
  
  
    return (
        <>
        <Navbar/>
       
     <div className="emp mt-5">
        <center>
        <h1> Welcome   </h1>
          
         <h1>{employee}</h1>
               <button  className="btn btn-danger p-3 mt-5" onClick={Logout}> Logout</button>
        
        </center>

    </div> 
    </>
    );
}
 
export default Dashbord;