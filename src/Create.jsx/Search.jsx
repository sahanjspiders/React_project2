import{useEffect,useState} from'react'
import{useParams} from 'react-router-dom'
import {Link} from 'react-router-dom';

const Search = () => {
    let{searchKey}=useParams("")
    
    let [load, setload] = useState(true)
    let [error,seterror]=useState(null)

    let[hold,setHold]=useState()



    

 
    useEffect(() => {
        fetch("http://localhost:4004/data")
        .then((res)=> res.json())
        .then((data)=> {
          data = data.filter((emp)=> {
          console.log(  emp.Name  );
            return(emp.Name  .toUpperCase().includes(searchKey.toUpperCase()))

          })

          setHold(data)
        })

    }, [searchKey])


    return (<div>
       {error && <h1>{error}</h1>}
                {load && <div className="loader"></div>}
               { hold &&       <table class="table">
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
      
    </tr>
  </thead>
 
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
     

       
      </td>
    </tr>
   
        
        )
    })
}

  </tbody>
</table>}
       <Link to={'/'}  className="btn btn-danger">
DashBord
       </Link>
    </div>  );
}
 
export default Search;