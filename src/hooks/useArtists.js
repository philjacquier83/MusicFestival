import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Artists from '../assets/Artists.json'

function useArtists() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [ artist, setArtist ] = useState({
        id: "",
        name: "",
        country: "",
        codeCountry: "",
        description: [], 
        groupDate: {
            dayName: "",
            month: "",
            dayNum: "",
            hourStart: ""
        },
        groupImg: ""
    })

    const [ loading, setLoading ] = useState(true)

    useEffect(() => {

        async function fetchData() {
            try {

                const response = await fetch('/src/assets/Artists.json')

                if(!response.ok) {
                    throw new Error('Error with datas')
                }

                const artists = await response.json()
                const artistDatas = artists.find((elem) => elem.id === id)
                if(!artistDatas) {
                    navigate('/error')
                } else {
                    setArtist(artistDatas)
                    setLoading(false)
                }
            } catch (error) {
                console.error('Error with datas: ', error)
                setLoading(false)
            }
        }

        fetchData()
    }, [id])

    return { artist, loading }
}

export default useArtists