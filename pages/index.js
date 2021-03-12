import { useState } from 'react';
import { useCookies } from "react-cookie"
import { useRouter } from 'next/router'
import Link from 'next/link'
// import dbConnect from '../utils/dbConnect'
// import User from '../models/User'

const Index = ({ password }) => {
  const [cookie, setCookie] = useCookies(['login'])
  const router = useRouter()
  const [pass, setPass] = useState('')
  const [err, setErr] = useState(false)

  const handleOnChange = e => {
    setErr(false);
    setPass(e.target.value);
  };
  const handleOnClick = () => {
    if (pass === password) {
      setCookie("login", "validuser", {
        path: "/",
        sameSite: true,
        maxAge: 3600,
      })
      router.push('/new')
    } else {
      setErr(true)
    }
  }

  return (
    <>
      <p className="text subtitle">Bienvenid@</p>
      <p className="text">Por favor, ingresá la contraseña que te dio el Ponja</p>
      <input className="login-input" type="password" onChange={(e) => handleOnChange(e)}></input>
      <button className="login-button" onSubmit={handleOnClick} onClick={handleOnClick}>INGRESAR</button>
      {err && <p className="text">Esa no es la contraseña, una picardía.</p>}
    </>
  )
}

export async function getServerSideProps() {
  const password = process.env.PASSWORD
  return { props: { password } }
}

export default Index
