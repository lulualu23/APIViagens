import Card from "../../../components/cards/card.jsx"
import '../viagens/viagens.css'
import { useState,useEffect } from "react"

function Viagens() {
    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('./lugares.json')
            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])

    return (
        <section className='viagens'>
            <h2>Viagens</h2>
            {
                repositories.length > 0 ? (
                    <section className='lista'>
                        {
                            repositories.map((repo) => (
                                <Card
                                    key={repo.id}
                                    destino={repo.Destino}
                                    descricao={repo.Descrição}
                                    pontosTuristicos={repo.pontosTuristicos}
                                    capa={repo.capa}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando Viagens...</p>
                )
            }
        </section>
    )
}

export default Viagens
