import { useState } from 'react'
import { FestivalInfos } from '../assets/FestivalInfos'
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
                        <div className="day">{FestivalInfos[0].Artists[0].groupDate[0].dayName}</div>
                        <div className="month">{FestivalInfos[0].Artists[0].groupDate[0].month}</div>
                        <div className="month">{FestivalInfos[0].Artists[0].groupDate[0].day}<sup>th</sup></div>
                        <div className="concertTime">{FestivalInfos[0].Artists[0].groupDate[0].hour}</div>
                    </div>
                    <div className="groups">
                        <div className="banGroup">
                            <div className="titleBanGroup">{FestivalInfos[0].Artists[0].name}<span className="groupFrom">({FestivalInfos[0].Artists[0].codeCountry})</span></div>
                        </div>
                        <div className="description">
                            {/*<div className="imgGroup">
                                <img src="/src/assets/Group1.png" />
                </div>*/}
                            <div className="shape">
                                <div className="imgGroup">
                                    <img src="/src/assets/Group1.png" />
                                </div>
                            </div>
                            <div className="textGroup">
                                <p className="textGroup2">
                                    {FestivalInfos[0].Artists[0].description[0].text1} 
                                </p>
                                <p className="textGroup2">        
                                    {FestivalInfos[0].Artists[0].description[0].text2} 
                                </p>
                                <p className="textGroup2">
                                    {FestivalInfos[0].Artists[0].description[0].text3}
                                </p>
                            </div>                     
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home