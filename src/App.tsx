import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Assets from './Assets'
import Docs from './Docs'
import Network from './Network'
import Operations from './Operations'
import Security from './Security'
import Terminal from './Terminal'

function App() {
  const [activePage, setActivePage] = useState('NETWORK')
  const page =
    activePage === 'TERMINAL' ? <Terminal /> : activePage === 'OPERATIONS' ? <Operations /> : activePage === 'ASSETS' ? <Assets /> : activePage === 'SECURITY' ? <Security /> : activePage === 'DOCS' ? <Docs /> : <Network />

  return (
    <div>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {page}
      <Footer />
    </div>
  )
}

export default App
