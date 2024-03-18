import MenusList from '../components/MenusList'
import useArtists from '../hooks/useArtists'
import MainHeader from '../components/MainHeader'
import '../sass/main.scss'

function Artists() {

    const artist = useArtists()

    return (

        <div className="mainContainer">

            <MenusList menuSelected="Artists" />

            <div className="bodyContainer">

                <MainHeader />

                <div className="sections">
                    
                    <div className="shape2"><div className="dates">
                                <div className="day">{(artist.id).charAt((artist.id.length) - 1) === 'A' ? 'Orange Scene' : 'Little Talk\'s Scene'}</div>
                                <div className="month">{artist.groupDate.month}</div>
                                <div className="month">{artist.groupDate.day}<sup>th</sup></div>
                                <div className="concertTime">{artist.groupDate.dayName} {artist.groupDate.hourStart}</div>
                            </div></div>
                    <div className="groups">
                        <div className="banGroup">
                            <div className="titleBanGroup">{artist.name}<span className="groupFrom">({artist.codeCountry})</span></div>
                        </div>
                        
                        <div className="blocPresentation">                           
                            
                            <div className="descriptionPresentation">
                                <div className="imgGroup">
                                    <img src={`${artist.groupImg}`} />
                                </div>
                            </div>

                            <div className="textPresentation">
                                {artist.description.map((text, index) =>
                                    <div className="textGroup2" key={`${text}-${index}`}>{text}</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Artists