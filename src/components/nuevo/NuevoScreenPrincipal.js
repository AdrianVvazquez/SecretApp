import React, { useState, useRef } from 'react'
import { FaEnvelopeOpenText, FaPlusSquare } from "react-icons/fa";
import { useForm } from '../../hooks/useForm';
import { SaveNew } from '../../firebase/firebaseConsultas';

export const NuevoScreenPrincipal = () => {
    
    const ref = useRef(null);
    const [ OnState, setOnState ] = useState(false)
    const [ formState, handleInputChange, reset ] = useForm({
        texto:'',
        tags:'#'
    });

    const {texto, tags} = formState;

    const formSubmit= (e) => {
        e.preventDefault();

        SaveNew(texto, tags)
        
        reset()
        setOnState(true)
        // console.log( ref.current.value )
    }

    return (
        <div className='text-box'>
            <div>
                <div>
                    <FaEnvelopeOpenText />
                    <form onSubmit={ formSubmit }>
                        <div>
                            <textarea 
                                name='texto'
                                ref={ref}
                                value={texto}
                                onChange={handleInputChange}
                                cols="60" 
                                rows="10">
                            </textarea>
                            <input 
                                className='text-tag'
                                placeholder='"#, @"'
                                type="text"
                                name='tags'
                                value={tags} 
                                onChange={handleInputChange}
                            /><FaPlusSquare 
                                className='icon-plus-square'
                                // onClick={() => {}} 
                                size="25"
                                color='#3764bf'
                                />
                        </div>
                        <button name='submit-confess' className='btn-confess-submit' type='submit'>Enviar</button>
                    </form>
                </div>
                <div>
                {
                    OnState ? (<h2><b>How you dare!</b></h2>):false
                }
                </div>
            </div>
        </div>
    )
}
