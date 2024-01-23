import Navbar from "./components/Navbar"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import JobCard from "./components/JobCard"
import jobData from "./JobDummyData"

function App() {

  return (
    <>
      
      <Navbar/>
      <Header/>
      <SearchBar/>
      {jobData.map((job)=>(
        <JobCard key={job.id} {...job}/>
      ))}
    </>
  )
}

export default App
