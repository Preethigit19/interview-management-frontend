import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function CandidateList() {

    const navigate=useNavigate();
    const [candidates, setCandidates] = useState([]);
    

    useEffect(() => {
        getCandidates();
    }, []);


    const getCandidates = () => {
        api.get("")
            .then((response) => {
                setCandidates(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteCandidate=(id)=>{
        api.delete(`/${id}`)
           .then(()=>{
            getCandidates();
           })
           .catch((error)=>{
            console.log(error);
           });
    }

    return (
        <div className="container mt-5">

            <h2>Candidate List</h2>
            
            <table className="table table-bordered table-striped">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Feedback</th>
                        <th colSpan="3" className="text-center">Action </th>
                    </tr>

                </thead>

                <tbody>

                    {
                        candidates.map((candidate) => (

                            <tr key={candidate.id}>

                                <td>{candidate.id}</td>
                                <td>{candidate.name}</td>
                                <td>{candidate.email}</td>
                                <td>{candidate.phone}</td>
                                <td>{candidate.position}</td>
                                <td>{candidate.status}</td>
                                <td>{candidate.feedback}</td>
                                {/* <td>
                                   <button className="btn btn-dark btn-sm" onClick={()=>navigate('add-candidate')}>
                                    Add
                                   </button>
                                </td> */}
                                <td >
                                    <button className="btn btn-dark btn-sm" onClick={()=>navigate(`/edit-candidate/${candidate.id}`)}>
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-dark btn-sm" onClick={()=>deleteCandidate(candidate.id)}>
                                        Delete
                                    </button>
                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>
    );

}

export default CandidateList;