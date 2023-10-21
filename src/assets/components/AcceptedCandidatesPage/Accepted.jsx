import React from 'react'
import Header from '../../components/Header/Header'
import Nav from '../../pages//AdminCandidates/Nav'
import AcceptedCandidatesPage from './AcceptedCandidatesPage'
import styles from './Accepted.module.css'

const Accepted = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.box}>
            <Nav/>
            <AcceptedCandidatesPage/>
        </div>
    </div>
  )
}

export default Accepted