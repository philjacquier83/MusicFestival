import { Link } from 'react-router-dom'

function MenusList({ menuSelected }) {
    
    const menus = ['Home', 'Program', 'Artists', 'Tickets', 'Edition 24', 'Crew', 'Become a Volunteer']
   
    return (
        <>
            <div className="menusContainer">
                <div className="menusList">
                    {menus.map((menu, index) =>
                        <Link to={`/${menu !== 'Home' && menu.toLowerCase()}`} className={`menu ${menu === menuSelected && 'menu--selected'}`} key={`${menu}-${index}`}>{menu}</Link>
                    )}
                </div>
            </div>


        </>
    )
}

export default MenusList