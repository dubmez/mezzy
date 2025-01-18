import './App.css';
import {useState, createContext} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Import ReactQuery Client and Client Provider
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// You have to create these pages in your folder structure and export them
// import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { Splash } from './pages/Splash';
import { NotFound } from './pages/NotFound';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';


function App() {
  // Set up your Query Client
  // By default ReactQuery refetches if you switch tab; can change this with defaultOptions configurations
  const client = new QueryClient({defaultOptions: {
    // can do it for queries (getting the data) or mutations (changing the data)
    queries: {refetchOnWindowFocus:false}
  }
  });


  // Every component inside the QueryClientProvider tag has access to React Query
  // Need to specify the client is "client"
  return (
  <div className="App">
<QueryClientProvider client={client}>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Splash/>}/>  
        {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </QueryClientProvider>


  </div>
  );
}

export default App;



