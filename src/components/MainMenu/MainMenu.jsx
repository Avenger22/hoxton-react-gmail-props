import '../css/MainMenu.css'
import Emails from './Emails'

function MainMenu(props) {

  const {filteredEmails, toggleRead, toggleStar, setSelectedItemId, setItemClicked} = props

  return (

    <main className="emails">

      <Emails 
        filteredEmails = {filteredEmails} 
        toggleRead = {toggleRead}
        toggleStar = {toggleStar}
        setSelectedItemId = {setSelectedItemId}
        setItemClicked = {setItemClicked}
      />

    </main>

  )

}

export default MainMenu