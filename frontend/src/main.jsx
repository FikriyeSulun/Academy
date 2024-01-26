import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// management panel pages
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

// public pages
import Layout from './pages/Layout'
import TrainingDetail from './pages/TrainingDetail'
import TrainingCategoriesDetail from './pages/TrainingCategoriesDetail'
import InstructorDetail from './pages/InstructorDetail'
import Login from './pages/Login'
import ToApply from './pages/ToApply'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import PDPL from './pages/PDPL'

// authorized pages
import Course from './pages/Course'

// container components
import Home from './pages/Home'

// css
import './main.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
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
      path: "trainings/televizyon/i̇leri-televizyonculuk-eğitimi"
      
      eğitmenleri bu şekilde ekle
      path: "instructors/gastronomi/mehmet-yalçınkaya"

      */

      //header
      // {
      //// eğitmenlerin hangi kategoride eğitim verdiğini gösteren sayfa
      {
        path: "trainings/:slugCategories",   
        element: <TrainingCategoriesDetail/>,
      },
      {
        path: "trainings/:slugCategories/:slugTrainings",   
        element: <TrainingDetail/>,
      },
      {
        path: "instructors/:slugCategories/:slugInstructors",
        element: <InstructorDetail/>,
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

      {
        path: "course",
        element: <Course/>
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
