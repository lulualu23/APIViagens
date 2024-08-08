import './card.css'

function Card({id, destino, descricao, capa, pontosTuristicos }) {
    return (
        <section className='card'>
            <h1>{id}</h1>
            <h3>{destino}</h3>
            <p>{descricao}</p>
            <img src={capa}/>

            <div className='card_footer'>
                    <p>{pontosTuristicos}</p>
            </div>
        </section>
    )
}

export default Card