import dbConnect from '../utils/dbConnect'
import User from '../models/User'
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

const Success = ({ users, count }) => {
  useEffect(() => {
    confetti();
  },[])
  return (
    <>
      <p>Ya somos {count} manijas! Mirá sus instagrams</p>
      <div className="guest-list">
        {users.map(user => {
          const { name, instagram } = user;
          let insta = instagram;
          if(instagram.includes('@')) {
            const [_, inst] = instagram.split('@');
            insta = inst;
          }
          return (
            <div className="guest">
              <p className="text">{insta === 'juanpernu' && <span>🥳</span>} {name}</p>
              <a className="text guest-instagram" href={`https://www.instagram.com/${insta}`}>@{insta}</a>
            </div>
          )
        })}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  await dbConnect()
  const result = await User.find({})
  const users = result.map((doc) => {
    const user = doc.toObject()
    user._id = user._id.toString()
    return user
  })
  const count = users.length;

  return { props: { users, count } }
}

export default Success
