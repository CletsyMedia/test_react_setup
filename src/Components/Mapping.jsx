import {useState} from 'react'
import { FaRegHeart } from "react-icons/fa6";


const Mapping = () => {


  const githubData = {
      "login": "mojombo",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mojombo",
      "html_url": "https://github.com/mojombo",
      "followers_url": "https://api.github.com/users/mojombo/followers",
      "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
      "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
      "organizations_url": "https://api.github.com/users/mojombo/orgs",
      "repos_url": "https://api.github.com/users/mojombo/repos",
      "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mojombo/received_events",
      "type": "User",
      "site_admin": false
  }

  const [githubUser] = useState(githubData)


  return (
    <>
      <div className="bg-[#869fda] flex flex-col items-center justify-center gap-2 h-screen">
      <div className="p-2 mb-4 bg-[#303840] rounded-[5px] shadow-lg">
        <input type="search" className="px-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500" placeholder="Search..." />
      </div>
        <div className="flex flex-col items-center justify-start w-[300px] h-[300px] rounded-[12px] shadow p-4 bg-[#303840] gap-4 relative">
          <div className="w-[150px] h-[150px] border-spacing-1">
            <img src={githubUser.avatar_url} alt="userAvatar" className='w-full h-full object-fit  rounded-full' />
          </div>
            <div className=""></div>
            <div className='p-2 bg-[#355fc2] text-white rounded '>
              <a href={githubUser.html_url} rel="noopener noreferrer" target='_blank' className='capitalize'>{`${githubUser.login}'s`} Profile</a>
            </div>
          <div className='absolute top-3 left-[1rem] cursor-pointer text-white'>
            <FaRegHeart/>
          </div>
          <div className="text-white">{githubUser.type}{"-"}{githubUser.id}</div>
        </div>
      </div>
    </>
  )
}

export default Mapping
