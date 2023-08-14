import React from 'react'

import {Article, About, Cta, Navbar} from './components'
import {Blog, Features, Footer,Header,Possibility} from './containers'

import './App.scss'
import './index.scss'

const App = () => {
  return (
    <div className='App'>
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <About/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
      <Article/>
    </div>
  )
}

export default App
