import Container from '../container/container'
import './home.css'

export default function Home() {
    return(
        <>
            <Container className='Home'>
                <div className="frase_principal">
                    <p className='frase1'>Nessa página você ira encontrar</p>
                    <p className='frase2'> lugares incríveis</p>
                    <p className='frase3'>onde todos deveriam conhecer!</p>
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/6557/6557822.png" alt="" className='imagem_home'/>   
            </Container>
        </>
    )
}