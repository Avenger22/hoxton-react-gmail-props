// #region 'Importing'
import { useState } from 'react'
import initialEmails from './data/emails'

import './App.css'

import Header from './components/Header/Header'
import LeftMenuSidebar from './components/LeftMenuSidebar/LeftMenuSidebar'
import MainMenu from './components/MainMenu/MainMenu'
// #endregion

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)

// const searchEmails = (emailsParam, searchItemParam) => {

//   emailsParam.filter(item => {
//     item.title.toLowerCase().includes(searchItemParam.toLowerCase() || item.sender.toLowerCase().includes(searchItemParam.toLowerCase()))
//   })

// }

function App() {

  // #region 'State Object'
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [searchItem, setSearchItem] = useState('')
  const [itemClicked, setItemClicked] = useState(false)
  const [selectedItemId, setSelectedItemId] = useState(null)
  // #endregion

  // #region 'Toggle functions and filters'
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

  if (searchItem) {

    filteredEmails = filteredEmails.filter(email =>
      email.title.toLowerCase().includes(searchItem.toLowerCase() || email.sender.toLowerCase().includes(searchItem.toLowerCase()))
    )

    console.log(filteredEmails)
  }

  if (hideRead) { 
    filteredEmails = getReadEmails(filteredEmails)
  }


  if (currentTab === 'starred') {
    filteredEmails = getStarredEmails(filteredEmails)
  }

  if (itemClicked) {
    filteredEmails = filteredEmails.filter(email => email.id === selectedItemId)
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

export default App