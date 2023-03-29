import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
const Navigate=useNavigate()  
let[searchKey,setSearchKey]=useState("");

  



  return (
        <div >
           
            <nav class="navbar shadow-lg navbar-light  text-white justify-content-between">
            <Link to={`/`}>
  <a class="navbar-brand  text-white">Employee Table</a>
  </Link>
  
  <div className="Search">
  <input type="search" value={searchKey} onChange={(e)=>{setSearchKey(e.target.value)}}  className="Searchinput"></input>
                <Link to={`/search/${searchKey}`}><button className="btn btn-outline-info">search</button></Link>
  </div>
  <div class="form-inline">
    <Link to={`/Create`}>
    
        <button class="btn btn-warning my-2 my-sm-0" type="submit">Create Employee Data</button>
        </Link>
  </div>
  <div class="form-inline">
    <Link to={`/Dashbord`}>
    
        <button class="btn btn-secondary my-2 my-sm-0" type="submit"> Employee Dashbord</button>
        </Link>
  </div>

  
</nav>
        </div>
    );
}
 
export default Navbar;