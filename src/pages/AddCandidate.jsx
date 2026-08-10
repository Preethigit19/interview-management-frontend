
import{useNavigate} from "react-router-dom"
import { useState } from "react"
import api from "../services/api"

function AddCandidate(){

   const navigate=  useNavigate()
   const[candidate,setCandidate]=useState({
        name:"",
        email:"",
        phone:"",
        position:"",
        status:"",
        feedback:""
    })

    


    const handleChange=(e)=>{
        setCandidate({
            ...candidate,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        api.post("",candidate).then(()=>{
             alert("Candidate Added Successfully!!");
             navigate("/")
         })
         .catch((error)=>{console.log(error)

            })
    }



    
   
    return(
        <>
        <div className="cantainer mt-5">
            <h2>Add Candidate</h2>

            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                value={candidate.name}
                onChange={handleChange}
                placeholder="Name"
                className="form-control mb-3">
                </input>

                <input
                type="text"
                name="email"
                value={candidate.email}
                onChange={handleChange}
                placeholder="Email"
                className="form-control mb-3">
                </input>

                <input
                type="text"
                name="phone"
                value={candidate.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="form-control mb-3">
                </input>

                <input
                type="text"
                name="position"
                value={candidate.position}
                onChange={handleChange}
                placeholder="position"
                className="form-control mb-3">
                </input>

                <input
                type="text"
                name="status"
                value={candidate.status}
                onChange={handleChange}
                placeholder="Status"
                className="form-control mb-3">
                </input>

               <input
                type="text"
                name="feedback"
                value={candidate.feedback}
                onChange={handleChange}
                placeholder="feedback"
                className="form-control mb-3">
                </input>

                <button className="btn btn-dark">
                    Add Candidate
                </button>
            </form>

        </div>
        
        </>
    )
}
export default AddCandidate
