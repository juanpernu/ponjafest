import Link from 'next/link'
import Unauthorized from '../components/Unauthorized'
import { parseCookies } from "../utils/cookies"

const Invite = ({ data }) => {
  const isValidUser = data.login && data.login === 'validuser';
  return (
    !!isValidUser ?
    <section className="invite-section">
      <div className="invite-block">
        <h3>Importante ⚠️</h3>
        <p className="text">Dadas las nuevas medidas anunciadas desde el Gobierno, que decidimos acompañar
        desde la organización de la PonjaFest, y para que tod@s podamos movernos sin inconvenientes,
        vamos a adelantar el festejo 6 horas.</p>
        <p className="text"><strong>Nuevo horario:</strong></p>
        <code>De 12:00 a 21:00</code>
      </div>
      <div className="invite-block">
        <h3>¿Cuándo?</h3>
        <p className="text">Este finde.</p>
        <code>SABADO 17 DE ABRIL</code>
      </div>
      <div className="invite-block">
        <h3>Special guest</h3>
        <p className="text">Danilo nos va a deleitar con su increible groove house. 💃</p>
        <p className="text">Seguilo en instagram 👇</p>
        <a href="https://www.instagram.com/danilo_armas/" target="_blank">
          <code>@danilo_armas</code>
        </a>
      </div>
      <div className="invite-block">
        <h3>¿Dónde?</h3>
        <p className="text">En una hermosa quinta de <span style={{ fontStyle: "italic" }}>50hts</span> en <strong>Mercedes</strong>, porque nos encanta la naturaleza.</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9673179220467!2d-59.468143784769616!3d-34.63026618045254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM3JzQ5LjAiUyA1OcKwMjcnNTcuNCJX!5e0!3m2!1ses!2sar!4v1618107463807!5m2!1ses!2sar"
          width="315"
          height="350"
          allowfullscreen=""
          loading="lazy"
        />
      </div>
      <div className="invite-block">
        <h3>¿Qué llevo?</h3>
        <p className="text">Si bien va a haber brebajes varios, traé lo que vayas a tomar. 😉</p>
      </div>
      <div className="invite-block">
        <h3>¿Cómo va a estar el clíma?</h3>
        <p className="text">Algo que nos interesa a tod@s.</p>
        <p className="text">Parcialmente nublado 🌥️</p>
        <p className="text"><code>18%</code> probabilidad de lluvia 💦</p>
        <p className="text">Min: <code>18º</code>. Max: <code>22º</code></p>
      </div>
      <div className="invite-block">
        <h3>¿Quien viene?</h3>
        <p className="text">Lo podes encontrar acá. 👇</p>
        <Link href="/success">
          <button className="login-button">Ver Invitad@s</button>
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
