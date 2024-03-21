import MenusList from '../components/MenusList'
import useDates from '../hooks/useDates'
import MainHeader from '../components/MainHeader'
import { Link } from 'react-router-dom'
import '../sass/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Programmation() {
    // à poursuivre ici
    const program = useDates()

    const [scene, setScene] = useState(0)
    const handleScene = (sceneName) => {
        setScene(sceneName)
    }

    return (

        <div className="mainContainer">

            <MenusList menuSelected="Program" />

            <div className="bodyContainer">

                <MainHeader />

                <div className="sections">

                    <div className="dates">
                        <div className="day">{program.concertDay == 12 ? 'TUESDAY' : program.concertDay == 13 ? 'WEDNESDAY' : program.concertDay == 14 ? 'THURSDAY' : program.concertDay == 15 ? 'FRIDAY' : 'SATURDAY'}</div>
                        <div className="monthProgram">June</div>
                        <div className='monthProgram'>{program.concertDay != 12 ?
                            <Link to={`/program/202506${Number(program.concertDay) - 1}`} className="dateLink"><FontAwesomeIcon icon={faAngleLeft} className="prevNext" /></Link> :
                            <div className="dateLinkDisabled"><FontAwesomeIcon icon={faAngleLeft} className="prevNext" /></div>}
                            {program.concertDay}<sup>th</sup>
                            {program.concertDay != 16 ?
                                <Link to={`/program/202506${Number(program.concertDay) + 1}`} className="dateLink"><FontAwesomeIcon icon={faAngleRight} className="prevNext" /></Link> :
                                <div className="dateLinkDisabled"><FontAwesomeIcon icon={faAngleRight} className="prevNext" /></div>
                            }
                        </div>
                    </div>

                    <div className="groups">

                        <div className="blocProgram">

                            <div className="scene">
                                <div className={`titleBanGroup ${scene == 0 && 'titleBanGroup--selected'}`} onClick={() => handleScene(0)}>{program.scene[0].sceneName}</div>
                                <div className={`titleBanGroup ${scene != 0 && 'titleBanGroup--selected'}`} onClick={() => handleScene(1)}>{program.scene[1].sceneName}</div>
                            </div>

                            <div className="listGroups">

                                {program.scene[scene].groups.map((group, index) =>
                                    <Link to={`/artists/${group.groupId}`} className={`groupCard ${scene == 1 && 'groupCard--littleScene'}`} key={`${group}-${index}`}>
                                       <div className="groupImg">
                                                <img src={group.groupImg} />
                                            </div>
                                            <div className="groupInfos">
                                                <div className={`groupName ${scene == 1 && 'groupName--littleScene'}`}>{group.groupName}</div>
                                                <div className="groupDate">{group.concertTime}</div>
                                            </div>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Programmation