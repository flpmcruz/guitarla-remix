import { Outlet } from '@remix-run/react'
import styles from '~/styles/blog.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Blog() {
  return (
    <main className="contenedor">
    {/* Para que se inyecte el contenido de las rutas hijas con la carpeta que contiene su nombre*/}
      <Outlet/>
    </main>
  )
}

export default Blog