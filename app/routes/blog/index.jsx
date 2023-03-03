import { useLoaderData } from '@remix-run/react'
import { getPosts } from "~/models/posts.server"
import ListadoPosts from '~/components/listado-posts'

export function meta() {
    return {
        title: `GuitarLa - Nuestro Blog`,
        description: `Guitarras, Blog de musica y venta de guitarras`
    }
}

export async function loader() {
  const posts = await getPosts()
  return posts?.data
}

function Blog() {
  const posts = useLoaderData()
  return (
      <ListadoPosts posts={posts}/>
  )
}

export default Blog