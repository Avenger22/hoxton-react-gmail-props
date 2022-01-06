import '../css/LeftMenuSidebar.css'

import LeftMenuSidebarUnread from '../LeftMenuSidebar/LeftMenuSidebarUnread'
import LeftMenuSidebarStarred from '../LeftMenuSidebar/LeftMenuSidebarStarred'
import LeftMenuSidebarHideRead from '../LeftMenuSidebar/LeftMenuSidebarHideRead'

function LeftMenuSidebar(props) {

  return (
    
    <nav className="left-menu">

      <ul className="inbox-list">

        <LeftMenuSidebarUnread 
        currentTab = {props.currentTab}
        setCurrentTab = {props.setCurrentTab}
        unreadEmails = {props.unreadEmails} 
        />

        <LeftMenuSidebarStarred 
        currentTab = {props.currentTab}
        setCurrentTab = {props.setCurrentTab}
        starredEmails = {props.starredEmails}
        />

        <LeftMenuSidebarHideRead 
        hideRead = {props.hideRead}
        setHideRead = {props.setHideRead}
        />

      </ul>

    </nav>

  )

}

export default LeftMenuSidebar