import React from 'react'
import styles from './AdminPractice.module.css'
import Header from '../../components/Header/Header'
import Nav from '../AdminCandidates/Nav'
import AdmPractice from '../../components/AdmPractice/AdmPractice'

const AdminPractice = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.box}>
            <Nav/>
            <AdmPractice/>
        </div>
    </div>
  )
}

export default AdminPractice