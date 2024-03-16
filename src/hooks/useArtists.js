import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Artists from '../assets/Artists.json'

function useArtists() {

    const { id } = useParams()
    const navigate = useNavigate()
console.log(id)
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
        const artist = Artists.find((elem) => elem.id === id)
        if(!artist) {
            navigate('/error')
        } else {
            setArtists(artist)
        }
    }, [id])

    return artists
}

export default useArtists