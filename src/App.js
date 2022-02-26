import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
    <BrowserRouter > 
      <Header/>
      <main className="py-3">
        <Container>
          {/* We used routes using react-router-dom to render  a screen by
          passing it a page component */}
          <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/login' element={<LoginScreen/>} />
          <Route path='product/:id'element={<ProductScreen/>} />
          <Route path="cart" element={<CartScreen />} >
          <Route path=":id" element={<CartScreen />} />
            </Route>

        
          
          </Routes>
        </Container>
      </main>
      <Footer/>
      </BrowserRouter>

  )
}

export default App
