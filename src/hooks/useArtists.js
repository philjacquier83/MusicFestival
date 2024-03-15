import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FestivalInfos from '../assets/FestivalInfos.json'

function useArtists() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [ artists, setArtists ] = useState({
        id: "",
        name: "",
        country: "",
        codeCountry: "",
        description: [], 
        groupDate: {
            dayName: "",
            month: "",
            dayNum: "",
            hour: "",
            hourStart: "",
            hourEnd: ""
        },
        groupImg: ""
    })

    useEffect(() => {
        const artist = FestivalInfos.find((elem) => elem.id === id)
        if(!artist) {
            navigate('/error')
        } else {
            setArtists(artist)
        }
    }, [id])

    return artists
}

export default useArtists