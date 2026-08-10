import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../compnents/Navbar";
import Sidebar from "../compnents/Sidebar";

function Dashboard() {

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

    // Total candidates
    const totalCandidates = candidates.length;

    // Selected candidates
    const selectedCandidates = candidates.filter(
        (candidate) =>
            candidate.status &&
            candidate.status.toLowerCase() === "selected"
    ).length;

    //Rejected Candidate
    const rejectedCandidates = candidates.filter(
        (candidate) =>
            candidate.status &&
            candidate.status.toLowerCase() === "rejected"
    ).length;

    // Scheduled Candidate
    const  ScheduledCandidates = candidates.filter(
        (candidate) =>
            candidate.status &&
            candidate.status.toLowerCase() === "scheduled"
    ).length;

    // NOT Scheduled Candidate
    const  NotScheduledCandidates = candidates.filter(
        (candidate) =>
            candidate.status &&
            candidate.status.toLowerCase() === "not scheduled"
    ).length;

    

    return (
        <>
            <Navbar />

            <div className="d-flex">

                <Sidebar />

                <div className="container-fluid p-4">

                    <h2 className="mb-4">Dashboard</h2>

                    <div className="row">

                        {/* Total Candidates */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Total Candidates
                                    </h5>

                                    <h1 className="text-primary">
                                        {totalCandidates}
                                    </h1>
                                </div>
                            </div>
                        </div>

                        {/* Selected Candidates */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Selected Candidates
                                    </h5>

                                    <h1 className="text-success">
                                        {selectedCandidates}
                                    </h1>
                                </div>
                            </div>
                        </div>


                        {/* Scheduled Candidates */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h5 className="card-title">
                                         Scheduled Candidates
                                    </h5>

                                    <h1 className="text-success">
                                        {ScheduledCandidates}
                                    </h1>
                                </div>
                            </div>
                        </div>

                        {/*NOT  Scheduled Candidates */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h5 className="card-title">
                                         Not Scheduled Candidates
                                    </h5>

                                    <h1 className="text-success">
                                        {NotScheduledCandidates}
                                    </h1>
                                </div>
                            </div>
                        </div>


                        {/* Rejected Candidates */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Rejected Candidates
                                    </h5>

                                    <h1 className="text-success">
                                        {rejectedCandidates}
                                    </h1>
                                </div>
                            </div>
                        </div>

                        


                    </div>

                </div>

            </div>
        </>
    );
}

export default Dashboard;