import Link from 'next/link'
import Unauthorized from '../components/Unauthorized'
import { parseCookies } from "../utils/cookies"

const Invite = ({ data }) => {
  const isValidUser = data.login && data.login === 'validuser';
  return (
    !!isValidUser ?
    <section className="invite-section">
      <div className="invite-block">
        <h3>¿Cuando?</h3>
        <code>SABADO 17 DE ABRIL</code>
        <p className="text">Reservate la fecha, con este botón lo podes agregar a tu calendar.</p>
        <button>
          <a className="login-button" href="http://www.google.com/calendar/render?action=TEMPLATE&text=Ponjafest&dates=20210417T130000Z/20210418T100000Z&trp=false&sprop=&sprop=name:"
            target="_blank" rel="nofollow">Agregar a calendar</a>
        </button>
      </div>
      <div className="invite-block">
        <h3>¿Donde?</h3>
        <code>SECRET LOCATION</code>
        <p className="text">La ubicación se va a compartir días antes del evento por whatsapp.</p>
      </div>
      <div className="invite-block">
        <h3>¿Querés invitar a alguien?</h3>
        <p className="text">Compartile la URL:</p>
        <code>https://ponjafest.vercel.app/</code>
        <p className="text">Y el password:</p>
        <code>fullpicado</code>
        <p className="text">Acordate que el viernes se resetea el password.</p>
      </div>
      <div className="invite-block">
        <h3>¿Querés saber quien viene?</h3>
        <p className="text">Claro que sí, stalker. Mirálo acá 👇</p>
        <Link href="/success">
          <button className="login-button">Ver Invitados</button>
        </Link>
      </div>
    </section> :
    <Unauthorized />
  )
}

export async function getServerSideProps({ req }) {
  const data = parseCookies(req)
  return { props: { data } }
}

export default Invite
