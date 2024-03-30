import { useState, useEffect } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { Db_usersAll } from "./Dbase";
import "./App.css";

const SearchFilter = () => {
  const [userAll, setUserAll] = useState(Db_usersAll);
  const [searchUser, setSearchUser] = useState("");
  const [likedCount, setLikedCount] = useState(0);
  const [likedUsers, setLikedUsers] = useState([]);

  // Log user data whenever userAll changes
  useEffect(() => {
    console.log("User data:", userAll);
  }, [userAll]);

  // Function to update searchUser state with input value
  const searchingUsers = (event) => {
    setSearchUser(event.target.value);
  };

  // Function to handle like toggle
  const handleLikeToggle = (username) => {
    if (likedUsers.includes(username)) {
      setLikedUsers(likedUsers.filter((user) => user !== username));
      setLikedCount((prevCount) => prevCount - 1);
    } else {
      setLikedUsers([...likedUsers, username]);
      setLikedCount((prevCount) => prevCount + 1);
    }
  };

  // Function to handle removal of liked user
  const handleRemoveUser = (username) => {
    setLikedUsers(likedUsers.filter((user) => user !== username));
    setLikedCount((prevCount) => prevCount - 1);
  };

  // Check if a user is liked
  const isLiked = (username) => likedUsers.includes(username);

  // Filter userAll based on searchUser and update the displayed users
  useEffect(() => {
    const filteredUsers = Db_usersAll.filter((userData) =>
      userData.login.toLowerCase().includes(searchUser.toLowerCase())
    );
    setUserAll(filteredUsers);
  }, [searchUser]);

  return (
    <>
      <div className="bg flex items-center justify-center  flex-wrap gap-8  bg-gray-800">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="stick bg-[#080000fa] py-10 w-full flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4 xsm-max">
              <input
                type="search"
                name=""
                placeholder="Search user..."
                value={searchUser}
                onChange={searchingUsers}
                className="bg-[#1e1e1e] py-3 px-4 rounded-[7px] text-white outline-none border-none focus:border-blue-500"
              />
              <button className="bg-[#1e1e1e] rounded text-[#ccc] py-3 px-8">
                Liked Users <span className="ml-2">{likedCount}</span>
              </button>
              <button className="bg-[#1e1e1e] rounded text-[#ccc] py-3 px-8">
                Toggle View
              </button>
            </div>
            <div className="flex flex-wrap gap-2 w-3/4">
              {likedUsers.map((username) => (
                <div key={username} className="text-white py-2 px-4 bg-[#1e1e1e] rounded flex items-center justify-center gap-2">
                  <div>{username}</div>
                  <div className="text-[14px] hover:text-red-500 cursor-pointer text-center" onClick={() => handleRemoveUser(username)}><LiaTimesSolid /></div>
                </div>
              ))}
            </div>
          </div>

          <div></div>

          {userAll.length === 0 && (
            <p className="text-white text-center">No matching users found.</p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-[20px]">
            {userAll.map((userData) => (
              <div
                key={userData.login}
                className="flex flex-col items-center justify-center w-[200px] max-w-[200px] rounded shadow gap-2 xsm-max:w-[2700px] xsm-max:h-[100%]"
              >
                <div className="relative w-[200px] h-[200px] xsm-max:w-[270px] xsm-max:h-[270px]">
                  <img
                    src={userData.avatar_url}
                    alt=""
                    className="rounded w-full h-full"
                  />
                  <div
                    className="heart absolute top-2 left-2 text-[25px] cursor-pointer"
                    onClick={() => handleLikeToggle(userData.login)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill={isLiked(userData.login) ? "red" : "none"}
                      stroke={isLiked(userData.login) ? "red" : "black"}
                    >
                      <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27" />
                    </svg>
                  </div>
                </div>
                <h1 className="text-[#ccc] my-2">{userData.login}</h1>
                <a
                  href={userData.html_url}
                  rel="noreferrer"
                  target="_blank"
                  className="p-2 capitalize bg-blue-700 text-white rounded hover:scale-100"
                >
                  Visit my Github Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
