import React from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from '../components/IconButton/IconButton'
const Home = () => {
    const navigate = useNavigate()

    const irAlAdmin = () => {
        navigate('/admin')
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Página de inicio</h1>
            <button onClick={irAlAdmin}>Ir al panel de administración</button>
            <IconButton
                text='Agregar'
                variant='green'
                iconSrc='/assets/add.svg'
                iconAlt='Icono agregar'
                iconPosition='left'
                onClick={() => console.log('click')}
                outline
            />
        </div>
    )
}

export default Home
