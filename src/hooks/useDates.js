import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Programmation from '../assets/Programmation.json'

function useDates() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [ concertDates, setConcertDates ] = useState({
        id: "",
        scene: [
            {
                sceneName: "",
                groups: [
                    {
                        groupId: "",
                        groupName: "",
                        country: "",
                        concertTime: ""
                    },
                    {
                        groupId: "",
                        groupName: "",
                        country: "",
                        concertTime: ""
                    },
                    {
                        groupId: "",
                        groupName: "",
                        country: "",
                        concertTime: ""
                    }
                ]
            },
            {
                sceneName: "",
                groups: [
                    {
                        groupId: "",
                        groupName: "",
                        country: "",
                        concertTime: ""
                    },
                    {
                        groupId: "",
                        groupName: "",
                        country: "",
                        concertTime: ""
                    },
                    {
                        groupId: "",
                        groupName: "",
                        country: "",
                        concertTime: ""
                    }
                ]
            }
        ]

    })

    useEffect(() => {
        const programDate = Programmation.find((elem) => elem.id === id)
        if(!programDate) {
            navigate('/error')
        } else {
            setConcertDates(programDate)
        }
    }, [id])

    return concertDates
}

export default useDates

