import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/home'
import Sobre from './page/sobre/sobre'
import Viagens from './page/sobre/viagens/viagens'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Container from './components/container/container'

function AppRoutes() {
    return (
        <Router>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/viagens" element={<Viagens />}></Route>
                    <Route path="/sobre" element={<Sobre />}></Route>
                </Routes>
            </Container>
            <Footer />
        </Router>
    )
}

export default AppRoutes
