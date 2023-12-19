import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Trainings from './pages/Trainings'
import Instructors from './pages/Instructors'
import Login from './pages/Login'
import ToApply from './pages/ToApply'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import PDPL from './pages/PDPL'

// components
import Container from './components/Container'

// css
import './main.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Container />
      },


      //-----------    NOTLAR    ------------
      //---------- 4 kategori - 15 eğitim - en az 54 eğitmen sayfası olucak
      /*---------- örnek: 
      
      eğitim kategorilerini bu şekilde ekle
      path: "instructors/televizyon"
      path: "instructors/gastronomi"

      eğitimleri bu şekilde ekle
      path: "instructors/televizyon/i̇leri-televizyonculuk-eğitimi"
      
      eğitmneleri bu şekilde ekle
      path: "trainings/mehmet-yalcinkaya"

      */

      //header
      // {
      //// eğitmenlerin hangi kategoride eğitim verdiğini gösteren sayfa
      {
        path: "trainings",   
        element: <Trainings/>,
      },
      {
        path: "instructors",
        element: <Instructors/>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "to-apply",
        element: <ToApply />,
      },
      {
        path: "login",
        element: <Login />,
      },


      //footer
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "personal-data-protection-law",
        element: <PDPL />,
      },



    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
