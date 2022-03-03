// import React, { useState } from 'react';

// function App() {
//   const [data, setData] = useState({
//     fullname: '',
//     phone: '',
//     agree: false,
//     likeList: [],
//   });
//   // checkbox group
//   //const [likeList, setLikeList] = useState([])
//   const fruitOptions = ['西瓜', '芒果', '芭樂'];

//   const handleChange = (e) => {
//     // 1. 從原本的狀態物件上拷貝出一個新物件 ex. {...data}
//     // 2. 在拷貝的新物件上處理
//     console.log(e.target.type, e.target.name, e.target.value);

//     if (e.target.name === 'likeList') {
//       //先判斷是否有在狀態陣列中
//       //if 在陣列中 -> 移除 else  -> 加入陣列
//       const newLikeList = data.likeList.includes(e.target.value)
//         ? data.likeList.filter((v, i) => v !== e.target.value)
//         : [...data.likeList, e.target.value];

//       setData({ ...data, likeList: newLikeList });
//       // 跳出函式
//       return;
//     }

//     const newValue =
//       e.target.type === 'checkbox' ? e.target.checked : e.target.value;

//     // "合併"原有物件值的語法
//     // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names

//     // 3. 設定回狀態
//     setData({ ...data, [e.target.name]: newValue });
//   };

//   return (
//     <>
//       <h2>文字輸入框</h2>
//       <label>姓名</label>
//       <input
//         type="text"
//         value={data.fullname}
//         name="fullname"
//         onChange={handleChange}
//       />
//       <br />
//       <label>電話</label>
//       <input
//         type="text"
//         value={data.phone}
//         name="phone"
//         onChange={handleChange}
//       />
//       <br />
//       <input
//         type="checkbox"
//         name="agree"
//         checked={data.agree}
//         onChange={handleChange}
//       />
//       <label>我同意會員註冊條款</label>

//       <p>選擇你喜歡的水果</p>
//       {fruitOptions.map((v, i) => {
//         return (
//           <div key={i}>
//             <input
//               type="checkbox"
//               name="likeList"
//               value={v}
//               checked={data.likeList.includes(v)}
//               onChange={handleChange}
//             />
//             <label>{v}</label>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';

// function App() {
//   //模擬componentDidMount，先寫函式呼叫，在寫callback，陣列
//   useEffect(() => {
//     //code
//   }, []);
//   //模擬componentWillMount，
//   useEffect(() => {
//     return () => {
//       //code
//     };
//   }, []);
//   return <></>;
// }
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';

import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <>
        <h2>a href</h2>
        <a href="/">首頁</a>
        <br />
        <a href="/login">登入</a>
        <hr />
        <h2>Link to</h2>
        <Link to="/">首頁</Link>
        <br />
        <Link to="/login">登入</Link>
        <hr />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/about/contact">
            <Contact />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route>
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
