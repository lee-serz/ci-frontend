import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from '../pages/RegistrationPage/Registration'
import Login from '../pages/LoginPage/Login'
import CodeEditor from './Coding/CodeEditor'
import Test from './Test/Test'
import HomePage from '../pages/HomePage/HomePage'
import PersonalData from './PersonalData/PersonalData'
import Admin from '../pages/AdminCandidates/Admin'
import AdminPractice from '../pages/AdminPractice/AdminPractice'
import AdminInternship from '../pages/AdminIntership/AdminIntership'
import Accepted from '../components/AcceptedCandidatesPage/Accepted'
import Cabinet from '../pages/Cabinet/Cabinet'
import RejactedCandidates from './Rejected/RejactedCandidates'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Login />} path='/home' />
            <Route element={<Registration />} path='/registration' />
            <Route element={<HomePage />} path='/' />
            <Route element={<CodeEditor />} path='/code' />
            <Route element={<Test />} path='/test' />
            <Route element={<PersonalData />} path='/personal-data' />
            <Route element={<Admin />} path='/candidates' />
            <Route element={<AdminPractice />} path='/practice-management' />
            <Route element={<AdminInternship />} path='/internship-management' />
            <Route element={<Accepted/>} path='/accepted' />
            <Route element={<Cabinet/>} path='/cabinet' />  
            <Route element={<RejactedCandidates/>} path='/rejacted' />          
        </Routes>
    </BrowserRouter>
  )
}

export default Router