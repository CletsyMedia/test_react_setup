import { useState } from 'react';
import { Db_usersAll } from './Dbase';

const SearchFilter = () => {
  const [userAll] = useState(Db_usersAll)
  return (
    <>
      <div className='bg flex items-center justify-center h-screen flex-wrap  gap-4'>
        {userAll.map((userData) => (
          <div key={userData} className='flex flex-col items-start justify-start w-[200px] rounded shadow'>
            <h1>User's Details</h1>
            <div className='w-[100px] h-[100px]'><img src={userData.avatar_url} alt="" className='rounded-full w-full h-full' />
            </div>
            <h1 className='mb-2'>{userData.login}</h1>
            <a href={userData.html_url} className='p-2 capitalize bg-blue-700 text-white rounded hover:scale-100 w-full'> {userData.login} Profile</a>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchFilter;
