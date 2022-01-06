import '../css/LeftMenuSidebar.css'

import LeftMenuSidebarUnread from '../LeftMenuSidebar/LeftMenuSidebarUnread'
import LeftMenuSidebarStarred from '../LeftMenuSidebar/LeftMenuSidebarStarred'
import LeftMenuSidebarHideRead from '../LeftMenuSidebar/LeftMenuSidebarHideRead'

function LeftMenuSidebar(props) {

  const {currentTab, setCurrentTab, unreadEmails, hideRead, setHideRead, starredEmails} = props

  return (
    
    <nav className="left-menu">

      <ul className="inbox-list">

        <LeftMenuSidebarUnread 
          currentTab = {currentTab}
          setCurrentTab = {setCurrentTab}
          unreadEmails = {unreadEmails} 
        />

        <LeftMenuSidebarStarred 
          currentTab = {currentTab}
          setCurrentTab = {setCurrentTab}
          starredEmails = {starredEmails}
        />

        <LeftMenuSidebarHideRead 
          hideRead = {hideRead}
          setHideRead = {setHideRead}
        />

      </ul>

    </nav>

  )

}

export default LeftMenuSidebar