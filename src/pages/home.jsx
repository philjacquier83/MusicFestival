import { useState } from 'react'
import '../sass/main.scss'

function Home() {

    const menus = ['Home', 'Program', 'Artists', 'Tickets', 'Edition 24', 'Crew', 'Become a Volunteer']
    const [ menuSelected, setMenuSelected ] = useState('Home')

    const handleSelectMenu = (changeMenu) => {
        setMenuSelected(changeMenu)
    }

    return (

        <div className="mainContainer">
            <div className="menusContainer">
                <div className="menusList">
                {menus.map((menu, index) => 
                    <div className={`menu ${menu === menuSelected && 'menu--selected'}`} key={`${menu}-${index}`} onClick={() => handleSelectMenu(menu)}>{menu}</div>
                )}
                </div>
                </div>

            <div className="bodyContainer">
                <div className="topContainer">
                    <div className="festivalInfos">
                        <div className="festivalName">SUNNY FESTIVAL '25</div>
                        <div className="festivalDates">June 12th - 16th</div>
                    </div>
                    <div className="buyTickets"></div>
                </div>

                <div className="sections">
                    <div className="dates">
                        <div className="day">WEDNESDAY</div>
                        <div className="month">June</div>
                        <div className="month">12th</div>
                        <div className="concertTime">7:00 - 9:00 pm</div>
                    </div>
                    <div className="groups">
                        <div className="banGroup">
                            <div className="titleBanGroup">The Harrold's Kids<span className="groupFrom">(SCO)</span></div>
                        </div>
                        <div className="description">
                            <div className="textGroup">
                                <div className="textGroup2">Coming from Dundee (scotland), the Harrold's Kids formed in 1999. Dan Jackson and his friends...</div>
                            </div>
                            <div className="imgGroup">
                                <img src="/src/assets/Group1.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home