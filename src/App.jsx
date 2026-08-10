import { BrowserRouter, Route, Routes } from "react-router-dom"
import CandidateList from "./pages/CandidateList"
import EditCandidate from "./pages/EditCandidate"
import AddCandidate from "./pages/AddCandidate"
// import Navbar from "./compnents/Navbar"
// import Sidebar from "./compnents/Sidebar"
import Dashboard from"./pages/Dashboard"


function App() {
  
    return(
    <>

    {/* <CandidateList/> */}
    {/* <Navbar></Navbar>
    <Sidebar></Sidebar> */}
    <BrowserRouter>
       <Routes>
           <Route path="/" element={<Dashboard />} />

           <Route path="/dashboard" element={<Dashboard></Dashboard>} />

           <Route path="/candidates" element={<CandidateList />} />
 

            <Route path="/edit-candidate/:id" element={<EditCandidate/>}></Route>
            <Route path="/add-candidate" element={<AddCandidate></AddCandidate>}></Route>
       </Routes>
    
    </BrowserRouter>

  
    </>)
  
}
export default App
