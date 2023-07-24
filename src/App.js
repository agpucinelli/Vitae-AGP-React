import About from "./Components/About";
import Projects from "./Components/Projects";
import Header from "./Components/header";
import TimelineJobs from "./Components/timeline";


function App() {
  return (
    <div className="App">
        <Header />        
        <TimelineJobs />
        <About />
        <Projects />
    </div>
  );
}

export default App;
