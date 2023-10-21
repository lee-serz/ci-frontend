import React from 'react'
import styles from './AdminIntership.module.css'
import Header from '../../components/Header/Header'
import Nav from '../AdminCandidates/Nav'
import AdmIntership from '../../components/AdmIntership/AdmIntership'

const AdminIntership = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.box}>
            <Nav/>
            <AdmIntership/>
        </div>
    </div>
  )
}

export default AdminIntership