import React, { useState } from 'react'
import { FaRegGrinBeamSweat } from "react-icons/fa";

import { NuevoScreenPrincipal } from '../components/nuevo/NuevoScreenPrincipal'

export const MainScreen = () => {
    const [OnState, setOnState] = useState(false)

    const CambiarEstado = () => {
        setOnState( !OnState );
    }

    const Desplegar = () => {
        if (OnState) {return <NuevoScreenPrincipal />}
    }
    
  return (
    <div className='Main-screen'>
        <h1>Don't Say It!</h1>
        <div onClick={ CambiarEstado } className='btn-confess-show'>
            <FaRegGrinBeamSweat 
                size='25'
            /><p>I must confess...</p>
        </div>
        {
            Desplegar()
        }
    </div>
  )
}
