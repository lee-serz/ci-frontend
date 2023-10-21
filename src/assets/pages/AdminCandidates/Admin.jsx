import React from 'react'
import Candidates from '../../components/Candidates/Candidates'
import Nav from './Nav'
import styles from './Admin.module.css'
import Header from '../../components/Header/Header'

const Admin = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.box}>
            <Nav/>
            <Candidates/>
        </div>
    </div>
  )
}

export default Admin