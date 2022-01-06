import '../css/Header.css'

function HeaderSearchbar(props) {

    return (

        <div className="search">

            <form 
                className='form-search-title'
                onSubmit={function (event) {
                    event.preventDefault()
                    const title = event.target.title.value
                    props.searchTitle(title)
                    event.target.reset()
                }}
            >
                <input className="search-bar" placeholder="Search mail" name='title'/>
            </form>

        </div>

    )

}

export default HeaderSearchbar