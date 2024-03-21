import { useState, useEffect } from "react";
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
                        groupImg: "",
                        country: "",
                        concertTime: "",
                        description: []
                    },
                    {
                        groupId: "",
                        groupName: "",
                        groupImg: "",
                        country: "",
                        concertTime: "",
                        description: []
                    },
                    {
                        groupId: "",
                        groupName: "",
                        groupImg: "",
                        country: "",
                        concertTime: "",
                        description: []
                    }
                ]
            },
            {
                sceneName: "",
                groups: [
                    {
                        groupId: "",
                        groupName: "",
                        groupImg: "",
                        country: "",
                        concertTime: "",
                        description: []
                    },
                    {
                        groupId: "",
                        groupName: "",
                        groupImg: "",
                        country: "",
                        concertTime: "",
                        description: []
                    },
                    {
                        groupId: "",
                        groupName: "",
                        groupImg: "",
                        country: "",
                        concertTime: "",
                        description: []
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

