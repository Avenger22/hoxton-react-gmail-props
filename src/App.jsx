// #region 'IMPORTING STUFF'
import { useState } from 'react'
import initialEmails from './data/emails'

import './App.css'

import Header from './components/Header'
import LeftMenuSidebar from './components/LeftMenuSidebar'
import MainMenu from './components/mainMenu'
// #endregion

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {

  // #region 'STATE OBJECT AND PIECES'
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  // #endregion

  // #region 'TOGGLE AND STAR FUNCTIONS, AND FILTERS ETC'
  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const toggleStar = targetEmail => {

    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)

  }

  const toggleRead = targetEmail => {

    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)

  }

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)
  // #endregion

  // #region 'RETURNING HTML AND CALLIN OTHER COMPENENTS'
  return (

    <div className="app">

      <Header />

      <LeftMenuSidebar 
      currentTab = {currentTab} 
      hideRead = {hideRead} 
      unreadEmails = {unreadEmails}
      starredEmails = {starredEmails} 
      setHideRead = {setHideRead}
      />

      <MainMenu 
      filteredEmails = {filteredEmails}
      toggleRead = {toggleRead}
      toggleStar = {toggleStar}
      />

    </div>

  )
  // #endregion

}

export default App