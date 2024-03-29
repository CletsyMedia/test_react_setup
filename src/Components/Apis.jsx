import {useState} from 'react'
import { Db_users } from './Dbase';
import './App.css'

const Apis = () => {
  

  const [githuuUser2, changeUser2] = useState(Db_users);

  return (
    <div className='bg flex flex-col items-center justify-center gap-2 w-[20rem]'>
      <img src={githuuUser2.avatar_url} alt="" />
      <h1 className='bg-blue-500'>{githuuUser2.login}</h1>
      <a href={githuuUser2.html_url} className='p-2 capitalize bg-blue-700 text-white rounded hover:scale-100'> {githuuUser2.login} Profile</a>
    </div>
  )
}

export default Apis
