import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { HiOutlineCheck } from "react-icons/hi2";
import "./App.css";

const Assignment = () => {
  const [text1, setText1] = useState("");
  const [text, setText] = useState("");
  const [textVisible, setTextVisible] = useState(true);
  // Todo States
  const [todoInput, setTodoInput] = useState("");
  const [myTodos, setMyTodos] = useState([]);
  const [deletedIndex, setDeletedIndex] = useState(null);

  // ColorSelector States Question5
  const [selectedOption, setSelectedOption] = useState("");

  // Array of colors
  const colors = [
    {
      color: "blue",
      hex: "#0000FF",
    },
    {
      color: "red",
      hex: "#FF0000",
    },
    {
      color: "yellow",
      hex: "#FFFF00",
    },
    {
      color: "green",
      hex: "#008000",
    },
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const selectedColor = colors.find((color) => color.color === selectedOption);

  // Question1
  const inputChange1 = (e) => {
    const inputValue1 = e.target.value;
    if (inputValue1.length <= 100) {
      setText1(inputValue1);
    }
  };
  const clearText1 = () => {
    setText1("");
  };

  // Question2
  const inputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 100) {
      setText(inputValue);
    }
  };

  const clearText = () => {
    setText("");
  };
  // Question3
  const toggleText = () => {
    setTextVisible(!textVisible);
  };

  const handleTodoInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 100) {
      setTodoInput(inputValue);
    }
  };
  // Todo Question 4
  const addingTodo = () => {
    if (myTodos.length < 10 && todoInput.trim() !== "") {
      setMyTodos([...myTodos, todoInput]);
      setTodoInput("");
    }
  };

  const deleteMyTodo = (index) => {
    setDeletedIndex(index);
    setTimeout(() => {
      const updatedTodos = [...myTodos];
      updatedTodos.splice(index, 1);
      setMyTodos(updatedTodos);
      setDeletedIndex(null);
    }, 500);
  };

  // Search Filter
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [noMatch, setNoMatch] = useState(false);

  const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "C++",
    "Bash",
    "Ruby",
    "Swift",
    "Go",
    "TypeScript",
    "PHP",
    "Kotlin",
    "Rust",
    "Scala",
    "Perl",
    "Dart",
    "Matlab",
    "SQL",
    "Assembly",
    "HTML/CSS"
  ];
  // Initialize useSate
  useState(() => {
    setFilteredItems(languages);
  }, []);

  // Search
  const searchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    filterItems(searchTerm);
  };

  // Filter
  const filterItems = (searchTerm) => {
    const filtered = languages.filter((language) =>
      language.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
    setNoMatch(filtered.length === 0);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-blue-400 to-purple-600 flex flex-wrap items-center justify-center gap-4 min-h-screen transition-all duration-500 ease-in-out py-[10rem]">
        <div className="flex flex-col items-center justify-center w-[300px] h-[500px] rounded-[12px] shadow-lg p-4 bg-gray-800 gap-4 text-white">
          <div className="assign1 flex flex-col w-full items-center justify-center gap-[1rem]">
            {/* Ques1 */}
            <div className="w-full">
              <h1 className="text-center mb-2">Ques1</h1>

              <div className="w-full mb-2 relative">
                <input
                  type="text"
                  className={`text-[#333] w-full px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500 ${
                    text1.length >= 100 ? "border-red-500" : ""
                  }`}
                  placeholder="Type..."
                  value={text1}
                  onChange={inputChange1}
                  autoFocus
                  maxLength={100}
                  style={{ overflowWrap: "break-word" }}
                />
                <button
                  className="absolute bottom-[7px] right-1 px-2 py-1 text-sm bg-gray-600 text-white rounded"
                  onClick={clearText1}
                >
                  Clear
                </button>
              </div>
              <div
                className={`w-full text-wrap text-lg font-semibold ${
                  text1.length >= 100 ? "text-red-500" : ""
                }`}
              >
                {text1}
              </div>
            </div>

            {/* Ques2 */}
            <div className="w-full relative text-center">
              <h1 className="mb-2">Ques2</h1>
              <textarea
                className={`text-[#333] w-full px-3 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500 ${
                  text.length >= 100 ? "border-red-500" : ""
                }`}
                placeholder="Type..."
                value={text}
                onChange={inputChange}
                autoFocus
                maxLength={100}
                style={{ resize: "none" }}
              />
              <button
                className="absolute bottom-[-25px] right-1 px-2 py-1 text-sm bg-gray-600 text-white rounded"
                onClick={clearText}
              >
                Clear
              </button>
            </div>
            <div
              className={`w-full text-wrap text-lg font-semibold ${
                text.length >= 100 ? "text-red-500" : ""
              }`}
            ></div>
            <div
              className={`text-sm ${
                text.length >= 100 ? "text-red-500" : "text-gray-400"
              }`}
            >
              {text.length}/100 Characters
            </div>
          </div>

          {/* Toggle me */}
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="mb-2">Ques3</h2>
            <button
              className="p-3 bg-blue-600 rounded hover:scale-[1.05]"
              onClick={toggleText}
            >
              {textVisible ? "Hide Text" : "Show Text"}
            </button>

            {textVisible && <h2>ToggleMe</h2>}
          </div>
        </div>

        {/* Todo */}
        <div className="flex flex-col items-center justify-center w-[300px] h-[500px] rounded-[12px] shadow-lg p-4 bg-gray-800 gap-4 text-white">
          <div>
            <h2>Add 10 Items to Your List</h2>
            <div className="flex items-center justify-center gap-2">
              <input
                type="text"
                className="text-[#333] flex-1 px-3 py-1 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
                value={todoInput}
                onChange={handleTodoInputChange}
              />
              <div
                className="bg-blue-600 p-2 rounded text-white font-bold cursor-pointer hover:scale-[1.05]"
                onClick={addingTodo}
              >
                <FaPlus />
              </div>
            </div>

            <div className="mt-4">
              {myTodos.map((todo, index) => (
                <div
                  key={index}
                  className={`text-white bg-slate-700 px-2 py-1 flex items-center justify-between rounded mb-1 ${
                    deletedIndex === index ? "swipe-out" : ""
                  }`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <IoIosCheckmarkCircle className="text-green-600" />
                    {todo}
                  </div>
                  <div
                    className="trash text-red-700 cursor-pointer hover:scale-[1.05]"
                    onClick={() => deleteMyTodo(index)}
                  >
                    <IoTrashOutline />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ColorSelector */}
        <div className="flex flex-col items-center justify-center w-[300px] h-[500px] rounded-[12px] shadow-lg p-4 bg-gray-800 gap-4 text-white">
          <div className="flex flex-col gap-40">
            <div>
              <label htmlFor="mySelect">Choose a color</label>
              <select
                className="text-white flex-1 px-3 py-1 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 bg-gray-800"
                id="mySelect"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="">Select...</option>
                {colors.map((color, index) => (
                  <option key={index} value={color.color}>
                    {color.color.charAt(0).toUpperCase() + color.color.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="colorBox bg-gray-800 rounded-md border border-gray-600 p-4 relative w-[100%] h-[10rem]">
              {selectedColor && (
                <div
                  style={{
                    backgroundColor: selectedColor.hex,
                  }}
                  className="w-full h-full rounded"
                ></div>
              )}
            </div>
          </div>
        </div>

        {/* Search/Filters */}
        <div className="flex flex-col items-center justify-center w-[300px] h-[500px] rounded-[12px] shadow-lg p-4 bg-gray-800 gap-4 text-white">
        <div className="container mx-auto p-4 w-[270px] h-[480px]">
          <h1 className="text-xl font-bold mb-4">Programming Languages</h1>
          <input
            type="text"
            className="mb-4 w-full text-[#333] flex-1 py-1 px-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
            placeholder="Search for a language..."
            value={searchTerm}
            onChange={searchChange}
          />
          <div className="w-full h-[300px] overflow-y-auto">
            <ul className="pl-4">
              {noMatch ? ( // Show no match message if no match
                <li className="text-lg text-red-500">No language matched</li>
              ) : (
                filteredItems.map((language, index) => (
                  <li key={index} className="text-lg flex items-center">
                    <HiOutlineCheck className="mr-1 text-green-500" />
                    {language}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>

      </div>
    </>
  );
};

export default Assignment;
