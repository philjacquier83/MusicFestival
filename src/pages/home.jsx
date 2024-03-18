import MenusList from '../components/MenusList'
import MainHeader from '../components/MainHeader'
import '../sass/main.scss'

function Home() {
    
    return (

        <div className="mainContainer">
            
            <MenusList menuSelected="Home" />

            <div className="bodyContainer">
                
                <MainHeader />

                <div className="sections sections--Presentation">
                    
                    <div className="shape"></div>
                    <div className="presentation">
                        <div className="scene">
                            <div className="titleBanGroup">Welcome to the 7th edition !</div>
                        </div>
                        <div className="blocPresentation">
                            <div className="descriptionPresentation">
                                
                                <div className="imgGroup">
                                    <img src="/src/assets/Crew1.png" />
                                </div>
                            </div>
                            <div className="textPresentation">
                                    Welcome to the hottest event of the summer! <br /><br />
                                    This summer, we're bringing you an electrifying lineup of chart-topping artists and legendary bands, promising non-stop music and unforgettable performances. 
                                    From pulsating beats to soul-stirring melodies, our festival is the ultimate celebration of pop and rock music. <br /><br />
                                    Join us under the stars for five days of pure musical bliss, surrounded by fellow music lovers and the vibrant energy of our festival grounds. With delicious food, refreshing drinks, and an atmosphere charged with excitement, this is an experience you won't want to miss. <br /><br />
                                    Mark your calendars and get your tickets now for the highlight of the season !
                            </div>                     
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home