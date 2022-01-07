// #region 'Importing'
import { useState } from 'react'
import initialEmails from './data/emails'

import './App.css'

// import {getReadEmails, getStarredEmails} from '../src/functions/helperFunctions'

import Header from './components/Header/Header'
import LeftMenuSidebar from './components/LeftMenuSidebar/LeftMenuSidebar'
import MainMenu from './components/MainMenu/MainMenu'
// #endregion

export const getReadEmails = emails => emails.filter(email => !email.read)
export const getStarredEmails = emails => emails.filter(email => email.starred)

// #region 'App Function
function App() {

  // #region 'State Object'
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [searchItem, setSearchItem] = useState('')
  const [itemClicked, setItemClicked] = useState(false)
  const [selectedItemId, setSelectedItemId] = useState(null)
  // #endregion

  // #region 'Conditional rendering and control of app'
  let filteredEmails = emails

  // #region 'Helper Functions'
  function unreadEmails () {
    return emails.filter(email => !email.read)
  }

  function starredEmails () {
    return emails.filter(email => !email.read)
  }

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

  const itemClickedCheck = filteredEmails => {
    filteredEmails.filter(email => email.id === selectedItemId)
  }

  const searchEmails = filteredEmails => {

    filteredEmails.filter(email =>
        email.title.toUpperCase().includes(searchItem.toLowerCase() || email.sender.toUpperCase().includes(searchItem.toUpperCase()))
    )

  }
  // #endregion

  if (searchItem) {
    filteredEmails = searchEmails(filteredEmails)
  }

  if (hideRead) { 
    filteredEmails = getReadEmails(filteredEmails)
  }


  if (currentTab === 'starred') {
    filteredEmails = getStarredEmails(filteredEmails)
  }

  if (itemClicked) {
    filteredEmails = itemClickedCheck(filteredEmails)
  }
  // #endregion

  // #region 'Returning the app html and calling other components'
  return (

    <div className="app">

      <Header 
        searchItem = {searchItem}
        setSearchItem = {setSearchItem}
      />

      <LeftMenuSidebar 
        currentTab = {currentTab}
        setCurrentTab = {setCurrentTab} 
        hideRead = {hideRead} 
        unreadEmails = {unreadEmails}
        starredEmails = {starredEmails} 
        setHideRead = {setHideRead}
      />

      <MainMenu 
        filteredEmails = {filteredEmails}
        toggleRead = {toggleRead}
        toggleStar = {toggleStar}
        setSelectedItemId = {setSelectedItemId}
        setItemClicked = {setItemClicked}
      />

    </div>

  )
  // #endregion

}
// #endregion

export default App