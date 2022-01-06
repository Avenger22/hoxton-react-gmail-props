import '../css/MainMenu.css'

function MainMenuItem(props) {

    const {filteredEmails, toggleRead, toggleStar, setSelectedItemId, setItemClicked} = props

    return (

        <ul>

            <button className='btn-go-back' 
            onClick={function () {
                // event.stopPropagation()
                // event.preventDefault()
                setItemClicked(false)
                setSelectedItemId(null)
            }}>

                <span>Go Back</span>

            </button>

            {filteredEmails.map((email, index) => (

            <li
                key={index}
                className={`email ${email.read ? 'read' : 'unread'}`}
                onClick={function (event) {
                    // event.stopPropagation()
                    // event.preventDefault()
                    setSelectedItemId(email.id)
                    setItemClicked(true)
                }}
            >

                <div className="select">

                    <input
                        className="select-checkbox"
                        type="checkbox"
                        checked={email.read}
                        onChange={function (event) {
                            event.stopPropagation()
                            // event.preventDefault()
                            return toggleRead(email)
                        }}
                    />

                </div>

                <div className="star">

                    <input
                        className="star-checkbox"
                        type="checkbox"
                        checked={email.starred}
                        onChange={function (event) {
                            event.stopPropagation()
                            // event.preventDefault()
                            return toggleStar(email)
                        }}
                    />

                </div>

                <div className="sender">{email.sender}</div>
                <div className="title">{email.title}</div>
            </li>

        ))}

      </ul>

    )

}

export default MainMenuItem