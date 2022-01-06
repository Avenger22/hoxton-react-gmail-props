import '../css/LeftMenuSidebar.css'

function LeftMenuSidebarHideRead(props) {

  const {hideRead, setHideRead} = props

    return (

        <li className="item toggle">
          <label htmlFor="hide-read">Hide read</label>
          <input
            id="hide-read"
            type="checkbox"
            checked={hideRead}
            onChange={e => setHideRead(e.target.checked)}
          />
        </li>

    )
    
}

export default LeftMenuSidebarHideRead