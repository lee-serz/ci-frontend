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

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Login />} path='/' />
            <Route element={<Registration />} path='/registration' />
            <Route element={<HomePage />} path='/home' />
            <Route element={<CodeEditor />} path='/code' />
            <Route element={<Test />} path='/test' />
            <Route element={<PersonalData />} path='/personal-data' />
            <Route element={<Admin />} path='/candidates' />
            <Route element={<AdminPractice />} path='/practice-management' />
            <Route element={<AdminInternship />} path='/internship-management' />
            <Route element={<Accepted/>} path='/accepted' />
        </Routes>
    </BrowserRouter>
  )
}

export default Router