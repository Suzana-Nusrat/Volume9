import logo from './assets/logo.png'

interface NavbarProps {
  activePage: string
  setActivePage: (page: string) => void
}

function Navbar({ activePage, setActivePage }: NavbarProps) {
  const navLinks = ['NETWORK', 'ASSETS', 'OPERATIONS', 'TERMINAL', 'SECURITY', 'DOCS']

  return (
    <nav className={`network-nav ${activePage === 'TERMINAL' ? 'terminal-nav' : ''}`}>
      <div className="network-logo">
        <img src={logo} alt="Volume 9 logo" />
        <div className="network-logo-text">
          <span>Volume 9</span>
          <small>volume9.com</small>
        </div>
      </div>

      <div className="network-nav-links">
        {navLinks.map((link) => {
          const isActive = activePage === link
          return (
            <button
              key={link}
              onClick={() => setActivePage(link)}
              className={isActive ? 'active' : ''}
            >
              {link}
            </button>
          )
        })}
      </div>

      <button className="network-execute">EXECUTE</button>
    </nav>
  )
}

export default Navbar
