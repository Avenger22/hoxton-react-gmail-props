import '../css/MainMenu.css'
import Email from '../MainMenu/Email'

function Emails(props) {

    const {filteredEmails, toggleRead, toggleStar, setSelectedItemId, setItemClicked} = props

    return (

        <ul>

            <button className='btn-go-back' 
            onClick={function () {
                setItemClicked(false)
                setSelectedItemId(null)
            }}>

                <span>Go Back</span>

            </button>

            {filteredEmails.map(email => (

                <Email
                    email = {email} 
                    key = {`email-${email.id}`}
                    toggleRead = {toggleRead}
                    toggleStar = {toggleStar}
                    setItemClicked = {setItemClicked}
                    setSelectedItemId = {setSelectedItemId}
                />

            ))}

      </ul>

    )

}

export default Emails