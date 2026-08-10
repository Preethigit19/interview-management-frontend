import { useEffect, useState } from "react"
import{useNavigate, useParams} from "react-router-dom"
import api from "../services/api"

function EditCandidate(){

   const {id}=useParams()
   const navigate=  useNavigate()
   const[candidate,setCandidate]=useState({
        name:"",
        email:"",
        phone:"",
        position:"",
        status:"",
        feedback:""
    })

    useEffect(()=>{
        api.get(`/${id}`)
        .then((response)=>{setCandidate(response.data)})
        .catch((error)=>{console.log(error)})
    },[id])


    const handleChange=(e)=>{
        setCandidate({
            ...candidate,
            [e.target.name]:e.target.value
        })
    }

    const handleUpdate=(e)=>{
        e.preventDefault();

        api.put(`${id}`,candidate).then(()=>{
             alert("Candidate Updated Successfully!!");
             navigate("/")
         })
         .catch((error)=>{console.log(error)

            })
    }



    
   
    return(
        <>
        <div className="cantainer mt-5">
            <h2>Edit Candidate</h2>

            <form onSubmit={handleUpdate}>
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
                    Update Candidate
                </button>
            </form>

        </div>
        
        </>
    )
}
export default EditCandidate