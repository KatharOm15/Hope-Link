import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout.jsx';
import Home from './components/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import About from './components/About.jsx';
import Landing from './components/Landing/Landing.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/signup/Signup.jsx';


const router=createBrowserRouter(
  createRoutesFromElements(
   
    
    // <Route path='/' element={<Layout/>}>
    //   <Route path='' element={<Home/>}/>
    //   <Route path='/about' element={<About/>}/>

    //   <Route path='/landing' element={<Landing />}>
       
    //     <Route path='signup' element={<Signup />} />
    //     <Route path='login' element={<Login />} />
    //   </Route>
      
    

    // </Route>
    <Route>
    <Route path='/' element={<Landing/>}>
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
    

    </Route>
    <Route path='/dashboard' element={<Layout/>}>
     <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
    </Route>
    </Route>
    

    
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
