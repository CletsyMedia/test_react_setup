// import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Apis from './Components/Apis';
import ApisDatas from './Components/ApisDatas';
import Assignment from './Components/Assignment';
import Mapping from './Components/Mapping';
import Navbar from './Components/Navbar';
import SearchFilter from './Components/SearchFilter';

const routes = createBrowserRouter(
  [
    { path: "/", element: <Assignment /> },
    { path: "/Search", element: <SearchFilter /> },
    { path: "/ApisDatas", element: <ApisDatas /> },
    { path: "/Mapping", element: <Mapping /> },
    { path: "/Apis", element: <Apis /> }
  ])  


const App = () => {
  // Define your routes
  return (
    <div>
      <Navbar/>
      <SearchFilter />
      <Assignment />
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;





// import React from 'react';
// import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
// import Apis from './Components/Apis';
// import ApisDatas from './Components/ApisDatas';
// import Assignment from './Components/Assignment';
// import Mapping from './Components/Mapping';
// import Navbar from './Components/Navbar';
// import SearchFilter from './Pages/SearchFilter';
// import Root from 'postcss/lib/root';


// const App = () => {
  
 
//   // Routing with mapping
//   const routes = [
//     { path: "/", element: <Assignment /> },
//     { path: "/Search", element: < SearchFilter/> },
//     { path: "/", element: <Assignment /> }
//   ]

//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           {routes.map(({ path, element }, index) => (
//             <Route key={index} path={path} element={element} />
//           ))}
//         </Routes>

        

//       </BrowserRouter>
//       {/* <ApisDatas /> */}
//       {/* <Mapping/> */}
//       {/* <Apis/> */}
    
//     </div>
//   )
// }

// export default App
