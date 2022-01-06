import '../css/MainMenu.css'
import MainMenuItem from './MainMenuItem'

function MainMenu(props) {

  const {filteredEmails, toggleRead, toggleStar, setSelectedItemId, setItemClicked} = props

  return (

    <main className="emails">

      <MainMenuItem 
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