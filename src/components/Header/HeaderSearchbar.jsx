import '../css/Header.css'

function HeaderSearchbar(props) {

    const {searchItem, setSearchItem} = props

    return (

        <div className="search">

            {/* <form 
                className='form-search-title'
                onSubmit={function (event) {

                    event.preventDefault()
                    let title = event.target.emailSearch.value
                    
                    setSearchItem(title) //BUG changes the state and react auto renders after this onyl there

                    console.log(setSearchItem(title)) //BUG
                    event.target.reset()
                    
                }}
            > */}

                <input className="search-bar" placeholder="Search mail" name='emailSearch'
                onKeyUp={function (event) {

                    event.preventDefault()
                    const title = event.target.value
                    
                    console.log(title)
                    setSearchItem(title) //BUG changes the state and react auto renders after this onyl there

                }}
                />

            {/* </form> */}

        </div>

    )

}

export default HeaderSearchbar