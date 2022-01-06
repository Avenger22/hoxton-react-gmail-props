import '../css/Header.css'

function HeaderSearchbar(props) {

    const {searchTitle, searchItem, setSearchItem} = props

    return (

        <div className="search">

            <form 
                className='form-search-title'
                onSubmit={function (event) {
                    event.preventDefault()
                    const title = event.target.title.value
                    
                    setSearchItem(title)
                    searchTitle(title)
                    event.target.reset()
                }}
            >
                <input className="search-bar" placeholder="Search mail" name='title'/>
            </form>

        </div>

    )

}

export default HeaderSearchbar