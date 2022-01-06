import '../css/MainMenu.css'
import MainMenuItem from './MainMenuItem'

function MainMenu(props) {

  const {filteredEmails, toggleRead, toggleStar, searchTitle} = props

  return (

    <main className="emails">

      <MainMenuItem 
        filteredEmails = {filteredEmails} 
        toggleRead = {toggleRead}
        toggleStar = {toggleStar}
        searchTitle = {searchTitle}
      />

    </main>

  )

}

export default MainMenu