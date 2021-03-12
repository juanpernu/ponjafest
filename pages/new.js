import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Form from '../components/Form'
import { parseCookies } from "../utils/cookies"

const NewGuest = ({ login }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!login) {
      router.push('/unauthorized')
    } else {
      setLoading(false)
    }
  }, [])

  const guestForm = {
    name: '',
    email: '',
    instagram: '',
    phone: null,
  }

  return (
    loading ?
    <p>Cargando...</p> :
    <Form formId="guest-form" guestForm={guestForm} />
  )
}

export async function getServerSideProps({ req }) {
  const { login = false } = parseCookies(req)
  return { props: { login } }
}

export default NewGuest
