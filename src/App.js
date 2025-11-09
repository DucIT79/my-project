// import React from 'react'
// import "./styles/theme.css";
// import "./styles/global.css";
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import { Home } from './pages/Home';
// import { NotFounds } from './pages/NotFounds';
// import { Login } from './pages/Login';
// import { CartPage } from './pages/Cart';
// import { Provider } from 'react-redux';
// import store from './redux/Store';


// export const App = () => {
//   return (
//     // <Provider store={store}>
//       <Router>
//         <div>

//           <Routes>
//             <Route path='/' element={<Home />}></Route>
//             <Route path='/*' element={<NotFounds />}></Route>
//             <Route path='/login' element={<Login />}></Route>
//             {/* <Route path='/cart' element={<CartPage />}></Route> */}

//             {/* <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "40px" }}>
//         </div> */}

//           </Routes>
//         </div>
//       </Router>
//     // </Provider>
//   )
// }


import React from "react";
import "./styles/theme.css";
import "./styles/global.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFounds } from "./pages/NotFounds";
import { Login } from "./pages/Login";
import { CartPage } from "./pages/Cart";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { Button } from "./components/Common/Button";
import UserLayout from "./components/Layout/UserLayout";

export const App = () => {
  return (
    // ✅ Provider phải bao bọc toàn bộ Router để các component con dùng được Redux
    // <Provider store={store}>
    <Router>
      <div>
        {/* 🔹 Các Route chính */}
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFounds />} />
          </Route>

        </Routes>
      </div>
      <Button />
    </Router>
    // </Provider>
  );
};
