

function Curso({curso}) {

    const { contenido, imagen, titulo } = curso

    return (
        <section className="curso">
            {/* Sintaxis especial de jsx para poner estilos */}
            <style jsx="true">{`
                .curso {
                    background-image: linear-gradient( to right, rgb( 0 0 0 / .65 ), rgb( 0 0 0 / .7)), url(${imagen.data.attributes.url})
                }
            `}</style>

            <div className="contenedor curso-grid">
                <div className="contenido">
                    <h2 className="heading">{titulo}</h2>
                    <h2 className="texto">{contenido}</h2>
                </div>
            </div>
        </section>
    )
}

export default Curso