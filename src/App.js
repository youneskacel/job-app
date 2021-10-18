import jobsList from './Components/jobs/data.json'
import './App.css';
import Header from './Components/Header';
import JobCard from './Components/JobCard';


function App() {
  console.log(jobsList)
  return (
    <div className="App">
      <Header/>
      {jobsList.map((e) =>{
        
        return <JobCard job={e}/>

      })}
    </div>
  );
}

export default App;
