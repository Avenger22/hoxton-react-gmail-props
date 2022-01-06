import '../css/Header.css'
import HeaderLogo from './HeaderLogo'
import HeaderSearchbar from './HeaderSearchbar'

function Header(props) {

    const {searchTitle, searchItem, setSearchItem} = props
    
    return (

        <header className="header">

            <HeaderLogo />
            <HeaderSearchbar 
                searchTitle = {searchTitle} 
                searchItem = {searchItem}
                setSearchItem = {setSearchItem}
            />
            
        </header>
      
    )

}

export default Header