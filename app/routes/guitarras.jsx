import { Outlet } from '@remix-run/react'
import { useOutletContext } from '@remix-run/react'
import styles from '~/styles/guitarras.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Tienda() {
  return (
    <main className='contenedor'>
    {/* Para que se inyecte el contenido de las rutas hijas con la carpeta que contiene su nombre*/}
    {/* Inyecto al proximo nivel de rutas el contexto */}
      <Outlet
        context={useOutletContext()}
      />
    </main>
  )
}

export default Tienda