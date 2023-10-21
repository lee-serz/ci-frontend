import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Practices from '../../components/Practices/Practices'
import About from '../../components/About/About'
import Info from '../../components/Info/Info'
import Internship from '../../components/Internship/Internship'

const HomePage = () => {
  return (
    <>
        <Header/>
        <Main/>
        <Practices/>
        <Internship/>
        <About/>
        <Info/>
    </>
  )
}

export default HomePage