import { useState } from 'react'
import './App.css'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import Home from './paginas/home/Home'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login'
import CadastroPostagem from './components/postagens/cadastroPotagem/CadastroPostagem'


import ListaPostagens from './components/postagens/listaPostagem/ListaPostagens'

import ListaTemas from './components/temas/listaTemas/ListaTemas'
import CadastroTema from './components/temas/cadastroTema/CadastroTema'
import DeletarTema from './components/temas/deletarTema/DeletarTema'
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem'


function App() {

  return (

    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastroUsuario' element={<CadastroUsuario />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cadastropostagem' element={<CadastroPostagem />} />
          <Route path="/editarpostagem/:id" element={<CadastroPostagem />} />
          <Route path="/postagens" element={<ListaPostagens />} />
          <Route path='/deletarpostagem/:id' element={<DeletarPostagem />}/>
          <Route path='/temas' element={<ListaTemas />} />
          <Route path='/cadastrartema' element={<CadastroTema />} />
          <Route path='/editartema/:id' element={<CadastroTema />} />
          <Route path='/deletartema/:id' element={<DeletarTema />}/>
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
  
  )
}

export default App
