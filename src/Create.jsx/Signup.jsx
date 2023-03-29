import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Dashbord from './Dashbord';
import Login from './Login';
import Signup from './Signup.png'

const Signupsahan = () => {
 
const Username =useRef()
const Email =useRef()
const Password =useRef()
const localSignup=localStorage.getItem("Signup")
const [showHome,setShowHome]=useState(false)
useEffect(()=>{
if(localSignup)
setShowHome(true)
})


const handleSubmit=()=>{
if(Username.current.value&&Email.current.value&&Password.current.value)
{console.log(Username.current.value,Email.current.value,Password.current.value);

 localStorage.setItem("Username",Username.current.value)
 localStorage.setItem("Email",Email.current.value)
 localStorage.setItem("Password",Password.current.value)
 localStorage.setItem("Signup",Email.current.value)
 alert("Account Created Success")

}

}
 
 
    return (
<>

{showHome ? <Login/>:

        <div className="Main-Contenar">
            <div className="Inner-Contenar card shodow w-50 mx-auto m-5">
               <center>
               <h1 className="m-3">Signup</h1>
               </center>
            
                <div className="Contenar">
                    <div>
                        <img src={Signup} height="400px" width="400px"></img>
                    </div>                       
                <form className="Form" onSubmit={handleSubmit}>
                   <div>
                   <label htmlFor=""> Username:</label><br/>
                    <input placeholder="Enter username"  type="text" ref={Username} required/>
                    </div>
                    <div>
                    <label htmlFor=""> Email:</label><br/>
                    <input placeholder="Enter username" type="email" ref={Email} required/>
                    </div>
                     <div>
                     <label htmlFor=""> Password:</label><br/>
                    <input placeholder="Enter username"  type="password" ref={Password} required/>
                     </div>
                     <div>
                     <label htmlFor=""> Conform Password :
                     </label><br/>
                    <input placeholder="Enter username" className="mb-5" type="password" required/>
                     </div>
                <input type="submit" className='btn btn-primary mb-5 w-50'   />                   
               </form>
            </div>


           <div className="LoginLast d-flex mx-auto justify-content-between">
                <h6>All ready Signup ?</h6>
                <Link to={'/Login'}>
                <button className="btn btn-secondary ml-3"  > Login</button>
                </Link>
                
                </div>
                
            </div>
        </div>
 } </>
      );
}
 
export default Signupsahan;