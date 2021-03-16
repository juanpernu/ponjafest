import Link from 'next/link'

const Unauthorized = () => (
  <>
    <p className="text">Nop, no tenés permisos para entrar acá.</p>
    <Link href="/">
      <button>
        <a className="login-button">Ir al inicio</a>
      </button>
    </Link>
  </>
)
export default Unauthorized
