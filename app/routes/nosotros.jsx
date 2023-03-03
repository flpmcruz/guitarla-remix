import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return {
    title: 'GuitarLa - Sobre Nosotros',
    description: 'Venta de guitarras'
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className='contenido'>
          <img src={imagen} alt="imagen sobre nosotros" />

          <div>
            <p>Occaecat ipsum irure Lorem amet elit exercitation proident enim. Labore commodo proident minim sunt enim nulla officia reprehenderit. Fugiat esse exercitation dolor ex consectetur pariatur ex excepteur esse et eiusmod. Et labore anim aute deserunt. Deserunt commodo tempor pariatur cillum tempor ut eiusmod eu officia nostrud mollit. Pariatur consequat laborum voluptate et officia enim esse enim eu dolore.</p>
            <p>Occaecat ipsum irure Lorem amet elit exercitation proident enim. Labore commodo proident minim sunt enim nulla officia reprehenderit. Fugiat esse exercitation dolor ex consectetur pariatur ex excepteur esse et eiusmod. Et labore anim aute deserunt. Deserunt commodo tempor pariatur cillum tempor ut eiusmod eu officia nostrud mollit. Pariatur consequat laborum voluptate et officia enim esse enim eu dolore.</p>
          </div>
      </div>
    </main>
  )
}

export default Nosotros