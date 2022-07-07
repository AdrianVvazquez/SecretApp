import React from 'react'
import PropTypes from 'prop-types'

export const Confession = ({ fecha, hora, nombre, texto, tags }) => {

    // const verFecha = () => {

    // }

    return (
        <div className='card'>
            <p className='p-name'>{nombre} <pre>{fecha} - {hora}</pre></p>
            <p>{ texto }</p>
            <p>{ tags }</p>
        </div>
    )
}

Confession.propTypes = {
    nombre: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
}
