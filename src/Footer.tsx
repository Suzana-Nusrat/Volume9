import logo from './assets/logo.png'

function Footer() {
  return (
    <footer className="network-footer">
      <div className="network-footer-brand">
        <div className="network-footer-logo-row">
          <img src={logo} alt="Volume 9 logo" className="network-footer-logo" />
          <div>
            <strong>Volume 9</strong>
            <small>volume9.com</small>
          </div>
        </div>
      </div>

      <div className="network-footer-bottom">
        <p>&copy; 2024 Volume 9. All rights reserved.</p>

        <nav className="network-footer-links" aria-label="Footer navigation">
          <a href="#">System Status</a>
          <a href="#">API Reference</a>
          <a href="#">Legal Protocol</a>
          <a href="#">Privacy</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
