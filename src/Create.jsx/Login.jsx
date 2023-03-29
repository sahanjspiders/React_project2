import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Dashbord from "./Dashbord";

const Login = () => {
  let navigate=useNavigate()
    const Username = useRef()
    const Password = useRef()

    const localUsername =localStorage.getItem("Username")
    const localPassword =localStorage.getItem("Password")
    const [showHome,setShowHome]=useState(false)
    const localSignup=localStorage.getItem("Signup")




const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(localUsername);
    console.log(Password.current.value);
   if(Username.current.value===localUsername  &&  Password.current.value===localPassword ) 
{ 
  navigate("/dashbord")
} 
else{
    alert("invalid user")
}
}

   
    return (
        <>
        {showHome ? <Dashbord/>:
       
        <div className="MainContainer ">
           <div className="Login-Con card shodow w-25  mx-auto m-5 rounded  border-dark">
            <center>
            <h1>Login</h1>
            </center>
            
                <form className="LoginForm" action="" onSubmit={handleSubmit}>
                    <div className="field  "> 
                    <label>Username</label>
                    <input placeholder="Enter Username" name="Username" type="text" ref={Username}  />
                    </div>
                    <div className="field"> 
                    <label>Password</label>
                    <input placeholder="Enter Password"  name="Password" type="Password" ref={Password}/>
                    </div>
                   <input type="submit" className="btn btn-warning"/>
            
                </form> 
                <div className="LoginLast d-flex mx-auto">
                <h6>Do not have account ?</h6>
                <Link to={'/Signup'}>
                <button className="btn btn-secondary"  > Signup</button>
                </Link>
                
                </div>
           </div>
            
        </div>
 } </>
      );
}
 
export default Login;