import Form from '../components/Form'
import Unauthorized from '../components/Unauthorized'
import { parseCookies } from "../utils/cookies"

const NewGuest = ({ login }) => {
  const guestForm = {
    name: '',
    email: '',
    instagram: '',
    phone: null,
  }

  return (
    !login ?
    <Unauthorized /> :
    <Form formId="guest-form" guestForm={guestForm} />
  )
}

export async function getServerSideProps({ req }) {
  const { login = false } = parseCookies(req)
  return { props: { login } }
}

export default NewGuest
