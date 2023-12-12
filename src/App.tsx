import './App.css'
import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/pageHome/Home";
import { Statistics } from "./pages/pageStatistics/Statistics";
import { Analytics } from "./pages/pageAnalytics/Analytics";
import { Contacts } from "./pages/pageContacts/Contacts";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <div className='content'>
      <Header/>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="statistics" element={ <Statistics/> } />
      <Route path="analytics" element={ <Analytics/> } />
      <Route path="contacts" element={ <Contacts/> } />
    </Routes>
    </div>
    <Footer/>
 </div>
  );
}



