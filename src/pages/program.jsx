import MenusList from '../components/MenusList'
import useDates from '../hooks/useDates'
import MainHeader from '../components/MainHeader'
import { Link } from 'react-router-dom'
import '../sass/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

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
                            <div className="month">{program.concertDay != 12 && <Link to={`/program/202506${Number(program.concertDay) - 1}`} className="dateLink"><FontAwesomeIcon icon={faAngleLeft} className="prevNext" /></Link>} {program.concertDay}th {program.concertDay != 16 && <Link to={`/program/202506${Number(program.concertDay) + 1}`} className="dateLink"><FontAwesomeIcon icon={faAngleRight} className="prevNext" /></Link>}</div>
                        </div>
                    </div>

                    <div className="groups">

                        <div className="blocProgram">

                            <div className="shape3"></div>
                            <div className="scene">
                                <div className="titleBanGroup">{program.scene[0].sceneName}</div>
                            </div>

                            {program.scene[0].groups.map((group, index) =>
                                <div className="groupHour" key={`${group}-${index}`}>
                                    <Link to={`/artists/${group.groupId}`}>{group.concertTime}  -  {group.groupName} ({group.country})</Link>
                                </div>
                            )}

                            <div className="scene scene--little">
                                <div className="titleBanGroup">{program.scene[1].sceneName}</div>
                            </div>

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