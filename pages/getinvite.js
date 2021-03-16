import { useState } from 'react';
import { useCookies } from "react-cookie"
import { useRouter } from 'next/router'
import Link from 'next/link'

const GetInvite = ({ password }) => {
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
      router.push('/invite')
    } else {
      setErr(true)
    }
  }

  return (
    <>
      <p className="text subtitle">¡Bienvenid@ de nuevo!</p>
      <p className="text">Te extrañaba 🤍 Para tener tu invite, ingresá la contraseña.</p>
      <input className="login-input" type="password" onChange={(e) => handleOnChange(e)}></input>
      <button className="login-button" onSubmit={handleOnClick} onClick={handleOnClick}>VER INVITE</button>
      {err && <p className="text">Esa no es la contraseña, una picardía.</p>}
    </>
  )
}

export async function getServerSideProps() {
  const password = process.env.PASSWORD
  return { props: { password } }
}

export default GetInvite
