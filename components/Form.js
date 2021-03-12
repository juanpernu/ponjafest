import { useState } from 'react'
import { useRouter } from 'next/router'

const Form = ({ formId, guestForm }) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const [form, setForm] = useState({
    name: guestForm.name,
    email: guestForm.email,
    instagram: guestForm.instagram,
    phone: guestForm.phone,
  })

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch('/api/guests', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status)
      }

      router.push('/success')
    } catch (error) {
      setMessage('Ups, no se pudo enviar la invitación, por favor intentá de nuevo')
    }
  }

  const handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      postData(form)
    } else {
      setErrors({ ...errs })
    }
  }

  /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
  const formValidate = () => {
    let err = {}
    if (!form.name) err.name = 'Por favor, necesitamos saber quien sos para preparar la ivitación'
    if (!form.email) err.email = 'Por favor, necesitamos tu email solo para mandarte la invitación 😊'
    if (!form.email.includes('@')) err.invalid = 'Por favor, necesitamos un email válido solo para mandarte la invitación 😊'
    if (!form.phone) err.phone = 'Por favor, necesitamos tu teléfono solo para mandarte novedades 😉'
    return err
  }

  return (
    <>
      <p className="text">Por favor, dejanos tus datos para enviarte la invitación ✉️</p>
      <form className="form-container" id={formId} onSubmit={handleSubmit}>
        <label className="text" htmlFor="name">Nombre</label>
        <input
          type="text"
          maxLength="20"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <label className="text" htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label className="text" htmlFor="instagram">Instagram</label>
        <input
          type="text"
          maxLength="30"
          name="instagram"
          placeholder='@'
          value={form.instagram}
          onChange={handleChange}
        />

        <label className="text" htmlFor="phone">Teléfono</label>
        <input
          type="number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        <button type="submit" className="btn">
          Enviar
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => <li key={index}>{errors[err]}</li>)}
      </div>
    </>
  )
}

export default Form
