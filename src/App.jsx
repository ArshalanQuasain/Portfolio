import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Project from './Project/Project';
import Experience from './Experience/Experience';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Skill from './skill/Skill';
import ProjectDisplay from "./Project/ProjectDisplay";
import Contact from './contact/Contact';
function App() {

  return (
    <>
      <div className='App'>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/Skill' element = {<Skill/>}/>
            <Route path='/Project' element = {<Project/>}/>
            <Route path="/project/:id" element={<ProjectDisplay />} />
            <Route path='/Experience' element = {<Experience/>}/>
            <Route path='/Contact' element = {<Contact/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>
    </>
  )
}

export default App