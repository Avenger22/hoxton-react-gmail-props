import '../css/Header.css'
import HeaderLogo from './HeaderLogo'
import HeaderSearchbar from './HeaderSearchbar'

function Header(props) {

    return (

        <header className="header">

            <HeaderLogo />
            <HeaderSearchbar searchTitle = {props.searchTitle} />
            
        </header>
      
    )

}

export default Header