import MenusList from '../components/MenusList'
import useArtists from '../hooks/useArtists'
import ArtistsList from '../assets/Artists.json'
import MainHeader from '../components/MainHeader'
import { Link } from 'react-router-dom'
import '../sass/main.scss'

function Artists() {

    const { artist, loading } = useArtists()

    return (

        <div className="mainContainer">

            <MenusList menuSelected="Artists" />

            <div className="bodyContainer">

                <MainHeader />

                <div className="sections">
                    {loading ?
                        <div><img src='/src/assets/isLoading.gif' /></div>
                        :
                        <>
                            <div className="shape2">
                                <div className="dates">
                                    <div className="day">{(artist.id).charAt((artist.id.length) - 1) === 'A' ? 'May "D" Scene' : 'Little Talk\'s Scene'}</div>
                                    <div className="month">{artist.groupDate.month}</div>
                                    <div className="month">{artist.groupDate.day}<sup>th</sup></div>
                                    <div className="concertTime">{artist.groupDate.dayName} {artist.groupDate.hourStart}</div>
                                </div>
                            </div>

                            <div className="groups">
                                <div className="blocProgram">
                                    
                                    <div className="scene">
                                        <div className="titleBanGroup">{artist.name}<span className="groupFrom">({artist.codeCountry})</span></div>
                                    </div>

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

                                <div className="buttonsNav">
                                    {ArtistsList.findIndex(elem => elem.id === artist.id) !== 0 ?
                                        <Link to={`/artists/${ArtistsList[ArtistsList.findIndex(elem => elem.id === artist.id) - 1].id}`} className="buttonNav">&lt; Previous Group</Link>
                                        :
                                        <div className="buttonNav buttonNav--disabled">&lt; Previous Group</div>
                                    }

                                    {ArtistsList.findIndex(elem => elem.id === artist.id) !== (ArtistsList.length - 1) ?
                                        <Link to={`/artists/${ArtistsList[ArtistsList.findIndex(elem => elem.id === artist.id) + 1].id}`} className="buttonNav">Next Group &gt;</Link>
                                        :
                                        <div className="buttonNav buttonNav--disabled">Next Group &gt;</div>
                                    }
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>

        </div>
    )
}

export default Artists