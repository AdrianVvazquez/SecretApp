import React from 'react'
import { useGetConfess } from '../../hooks/useGetConfess';
import { Confession } from './Confession';

export const ExplorarScreen = () => {
    
    const { data:files, loading } = useGetConfess();

    // const get_All = async() => {
    //     return datosTodos = await getConfessions();
    //     // console.log(datosTodos);
    // }

    return (
        <div>
            <h1>Explorar</h1>
            <div className='drag'>
                <hr />
                {
                    loading && <p>Cargando... </p>
                }
                <div>
                {/* <div className='card-grid'> */}
                    {
                        files.map( (file, i) => (
                            <Confession
                                key={i}
                                { ...file }
                            />
                        ))
                    }
                </div>
            </div>    
        </div>
    )
}
