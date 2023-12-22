import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'

// pages
// management panel
import ManagementPanel from './pages/ManagementPanel'

import TrainingCategoriesInfo from './pages/Management Panel/TrainingCategories/TrainingCategoriesInfo'
import CreateTrainingCategory from './pages/Management Panel/TrainingCategories/CreateTrainingCategory'
import UpdateTrainingCategory from './pages/Management Panel/TrainingCategories/UpdateTrainingCategori'

import TrainingsInfo from './pages/Management Panel/Trainings/TrainingsInfo'
import CreateTraining from './pages/Management Panel/Trainings/CreateTraining'
import UpdateTraining from './pages/Management Panel/Trainings/UpdateTraining'

import UsersInfo from './pages/Management Panel/Users/UsersInfo'
import CreateUser from './pages/Management Panel/Users/CreateUser'
import UpdateUser from './pages/Management Panel/Users/UpdateUser'

// public
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

// supabase
const url = 'https://jxclitqaeokejtukmuof.supabase.co';
const secretKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4Y2xpdHFhZW9rZWp0dWttdW9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzNDE3MjEsImV4cCI6MjAxNTkxNzcyMX0.JRP9sw_G4uBmpn8IfU9crtyQ_IL2wOQKUPgHo-5shTI';

export const supabase = createClient(url, secretKey);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Container />
      },

      // Management Panel
      {
        path: 'management-panel',
        element: <ManagementPanel />
      },
      //training categories
      {
        path: 'management-panel/training-categories',
        element: <TrainingCategoriesInfo />
      },
      {
        path: 'management-panel/training-categories/create',
        element: <CreateTrainingCategory />
      },
      {
        path: 'management-panel/training-categories/update',
        element: <UpdateTrainingCategory />
      },
      //trainings
      {
        path: 'management-panel/trainings',
        element: <TrainingsInfo />
      },
      {
        path: 'management-panel/trainings/create-training',
        element: <CreateTraining />
      },
      {
        path: 'management-panel/trainings/update-training',
        element: <UpdateTraining />
      },
      //users
      {
        path: 'management-panel/users',
        element: <UsersInfo />
      },
      {
        path: 'management-panel/users/create-user',
        element: <CreateUser />
      },
      {
        path: 'management-panel/users/update-user',
        element: <UpdateUser />
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
