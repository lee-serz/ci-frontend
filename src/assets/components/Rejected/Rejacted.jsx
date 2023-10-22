import React from 'react'
import Header from '../Header/Header'
import Nav from '../../pages//AdminCandidates/'
import RejactedCandidatesPage from './RejactedCandidatePage'
import styles from './Rejacted.module.css'

const Rejacted = () => {
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

export default Rejacted