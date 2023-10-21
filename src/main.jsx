import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './assets/components/Router'
import HomePage from './assets/pages/HomePage/HomePage'
import PersonalData from './assets/components/PersonalData/PersonalData'
import Test from './assets/components/Test/Test'
import Coding from './assets/components/Coding/CodeEditor'

import CodeEditor from './assets/components/Coding/CodeEditor'
import Practices from './assets/components/Practices/Practices'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router/>
)
