import '../css/MainMenu.css'
import MainMenuItem from './MainMenuItem'

function MainMenu(props) {

  return (

    <main className="emails">

      <MainMenuItem 
        filteredEmails = {props.filteredEmails} 
        toggleRead = {props.toggleRead}
        toggleStar = {props.toggleStar}
        searchTitle = {props.searchTitle}
      />

    </main>

  )

}

export default MainMenu