import { useLoaderData } from '@remix-run/react'
import { getPost } from "~/models/posts.server"
import { formatearFecha } from '~/utils/helpers'

export function meta({data}) {

    if(!data) {
        return {
            title: `GuitarLA - Post no encontrado`,
            description: `Guitarras, posts, post no encontrado`
        }
    }

    //el loader de remix automaticamente le pasa data a meta
    return {
        title: `GuitarLa - ${data.data[0].attributes.titulo}`,
        description: `Guitarras, venta de guitarras, post ${data.data[0].attributes.titulo}`
    }
}

export async function loader({ params }) {

    const { postUrl } = params //el mismo nombre del archivo
    const post = await getPost(postUrl)

    if(post.data.length === 0) {
        //Sobreescribe la respuesta por defecto de remix
        throw new Response('', {
            status: 404,
            statusText: 'Post no encontrada'
        })
    }

    return post
}

function Post() {

    const post = useLoaderData()
    const { contenido, imagen, titulo, publishedAt } = post?.data[0].attributes

    return (
        <article className='post mt-3 '>
            <img className="imagen" alt={`imagen blog ${titulo}`} src={imagen.data.attributes.url}/>
            <div className="contenido">
                <h3>{ titulo }</h3>
                <p className="fecha">{ formatearFecha(publishedAt) }</p>
                <p className="texto">{ contenido }</p>
            </div>
        </article>
    )
}

export default Post