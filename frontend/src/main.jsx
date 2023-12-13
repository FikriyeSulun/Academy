import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Login from './pages/Login'
import ToApply from './pages/ToApply'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import PDPL from './pages/PDPL'

// components
import Container from './components/Container'

// css
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Container />
      },
      {
        path: "to-apply",
        element: <ToApply />,
      },

      //----------- her biri için özel isimler gerekiyor
      //---------- 4 kategori - 15 eğitim - 54 eğitmen sayfası oluşturulacak
      /*---------- örnek: 
      
      path: "televizyon"
      path: "gastronomi"

      path: "televizyon/i̇leri-televizyonculuk-eğitimi"
      
      path: "eğitmenler" hangi kategoride eğitmen olduğunu gösteren sayfa
      path: "eğitmenler/mehmet-yalcinkaya"

      */

      // {
      //   path: "training-categories",
      //   element: <TrainingCategories/>,
      // },
      // {
      //   path: "trainings",
      //   element: <Trainings/>,
      // },
      // {
      //   path: "instructors",
      //   element: <Instructors/>,
      // },

      {
        path: "contact",
        element: <Contact />,
      },
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
  {
    path: "login",
    element: <Login />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
