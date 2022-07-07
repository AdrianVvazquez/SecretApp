import { useState, useEffect } from 'react'
import { getConfessions } from '../firebase/firebaseConsultas';

export const useGetConfess = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        getConfessions()
            .then( todos => {
                setState({
                    data: todos,
                    loading: false
                })
            } )
    }, [])


    return state;

}