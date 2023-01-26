import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Entry from './Components/StudentD';
import StudentD from './Components/StudentD';
import ContactUs from './Components/ContactUs';
import Update from './Components/CreateElement';
import { useState } from 'react';
import { createContext } from 'react';

let ContextX = createContext()
function App() {

  let [DataX, updateData] = useState([])
  let getData = (data) => {
    DataX.push([...data])
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='student' element={
          <ContextX.Provider value={{ data: DataX, updateData: updateData }} >
            <StudentD />
          </ContextX.Provider>
        } />
        <Route path='/edit' element={
          <ContextX.Provider value={{ data: DataX, updateData: updateData }}>
            <Update />
          </ContextX.Provider>
        } />
        <Route path='contact' element={<ContactUs />} />
        <Route path='/Entry-Data' element={<Entry PropRes={getData}/>}/>
      </Routes>
    </>
  );
}

export default App;
export{ContextX}
