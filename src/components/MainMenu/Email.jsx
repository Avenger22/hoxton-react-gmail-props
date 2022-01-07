function Email(props) {

    const {toggleRead, toggleStar, setSelectedItemId, setItemClicked, email} = props
    
    return (

        <li
            className={`email ${email.read ? 'read' : 'unread'}`}
            onClick={function () {
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
                        return toggleStar(email)
                    }}
                />

            </div>

            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>

        </li>

    )

}

export default Email