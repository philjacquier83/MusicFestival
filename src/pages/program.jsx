import MenusList from '../components/MenusList'
import useDates from '../hooks/useDates'
import MainHeader from '../components/MainHeader'
import { Link } from 'react-router-dom'
import '../sass/main.scss'

function Programmation() {

    const program = useDates()

    return (

        <div className="mainContainer">

            <MenusList menuSelected="Program" />

            <div className="bodyContainer">

                <MainHeader />

                <div className="sections">
                    
                    <div className="shape2">
                        <div className="dates">
                            <div className="month">June</div>
                            <div className="month">{program.concertDay}</div>
                        </div>
                    </div>

                    
                        
                    <div className="shape3"></div>
                    <div className="groups">    
                        <div className="banGroup">
                            <div className="titleBanGroup">{program.scene[0].sceneName}</div>
                        </div>
                        
                        <div className="blocProgram">                              
                                {program.scene[0].groups.map((group, index) =>
                                    <div className="groupHour" key={`${group}-${index}`}>
                                        <Link to={`/artists/${group.groupId}`}>{group.concertTime}  -  {group.groupName} ({group.country})</Link>
                                    </div>
                                )}
                        </div>
                            
                        <div className="banGroup">
                            <div className="titleBanGroup">{program.scene[1].sceneName}</div>
                        </div>

                        <div className="blocProgram">                              
                                {program.scene[1].groups.map((group, index) =>
                                    <div className="groupHour" key={`${group}-${index}`}>
                                        <Link to={`/artists/${group.groupId}`}>{group.concertTime}  -  {group.groupName} ({group.country})</Link>
                                    </div>
                                )}
                        </div>                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Programmation