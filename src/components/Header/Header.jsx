import '../css/Header.css'
import HeaderLogo from './HeaderLogo'
import HeaderSearchbar from './HeaderSearchbar'

function Header(props) {

    const {searchTitle} = props
    
    return (

        <header className="header">

            <HeaderLogo />
            <HeaderSearchbar searchTitle = {searchTitle} />
            
        </header>
      
    )

}

export default Header