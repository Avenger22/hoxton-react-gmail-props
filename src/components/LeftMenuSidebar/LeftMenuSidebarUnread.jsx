import '../css/LeftMenuSidebar.css'

function LeftMenuSidebarUnread(props) {

  const {currentTab, unreadEmails, setCurrentTab} = props

  return (

    <li
      className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
      onClick={() => setCurrentTab('inbox')}
    >
      <span className="label">Inbox</span>
      <span className="count">{unreadEmails.length}</span>
    </li>

  )

}

export default LeftMenuSidebarUnread