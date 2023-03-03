import { useState, useEffect } from 'react'
import { Meta, Links, Outlet, Scripts, LiveReload, useCatch, Link } from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'
//~ apunta a app, asi esta en el tsconfig.json

//Para agregar las etiquetas meta del head en el documento html
export function meta() {
    return (
        {
            charset: 'utf-8',
            title: 'GuitarLa - Remix',
            viewport: 'width=device-width,initial-scale=1',
        }
    )
}

//Esta hoja de estilo como esta en el root va cargarse en todos las paginas y componentes
export function links() {
    //el orden importa
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
    ]
}

export default function App() {

    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
    const [carrito, setCarrito] = useState(carritoLS)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    const agregarCarrito = guitarra => {
        //comprobar esa guitarra ya no este en el carrito
        if(carrito.some( guitarraState => guitarraState.id === guitarra.id)) {
            //Ese elemento ya existe
            const carritoActualizado = carrito.map( guitarraState => {
                if(guitarraState.id === guitarra.id) {
                    //Reescribir cantidad
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            //Actualizar el carrito
            setCarrito(carritoActualizado)   
        } else {
            //registro nuevo
            setCarrito([...carrito, guitarra])
        }
    }

    const actualizarCantidad = guitarra => {

        const carritoActualizado = carrito.map(guitarraState => {

            if(guitarraState.id === guitarra.id){
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })

        setCarrito(carritoActualizado)
    }

    const eliminarGuitarra = id => {
        const carritoActualizado = carrito.filter( guitarraState => guitarraState.id !== id )
        setCarrito(carritoActualizado)
    }

    return (
        <Document>
            <Outlet 
                //Inyectar data en el estado global de remix
                //Pero solo funciona en el primer nivel de rutas, no en las rutas anidadas
                //Para ello tenemos que usar el useOutletContext en la ruta hija y hacer lo mismo en el Outlet hijo            
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }}
            />
        </Document>
    )
}

function Document({children}) {
    return (
        <html lang="es">
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>

                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}

/* Manejor de errores */

export function CatchBoundary() {
    const error = useCatch()
    return (
        <Document>
            <p className='error'>{ error.status } { error.statusText }</p>
            <Link className='error-enlace' to='/'>Tal vez quieras volver a la pagina principal</Link>
        </Document>
    )
}

export function ErrorBoundary({ error }) {
    return (
        <Document>
            <p className='error'>{ error.status } { error.statusText }</p>
            <Link className='error-enlace' to='/'>Tal vez quieras volver a la pagina principal</Link>
        </Document>
    )
}