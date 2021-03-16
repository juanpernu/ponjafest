import Form from '../components/Form'
import Unauthorized from '../components/Unauthorized'
import { parseCookies } from "../utils/cookies"

const NewGuest = ({ data }) => {
  const isValidUser = data.login && data.login === 'validuser';
  const guestForm = {
    name: '',
    email: '',
    instagram: '',
    phone: null,
  }

  return (
    !!isValidUser ?
    <Form formId="guest-form" guestForm={guestForm} /> :
    <Unauthorized />
  )
}

export async function getServerSideProps({ req }) {
  const data = parseCookies(req)
  return { props: { data } }
}

export default NewGuest
