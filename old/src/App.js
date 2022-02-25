// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div classNameName="App">
//       <header classNameName="App-header">
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// import React, { useState } from 'react'
// //有{}是部分導入、沒有{}是預設導入

// function App() {
//   const [total, setTotal] = useState(0)
//   //陣列解構賦值
//   console.log([total, setTotal]);

//   return <> //相當於同一個階層
//   <h1>{total}</h1>
//   <button onClick={() => {setTotal(total + 1)}}>+1</button>
//   <button onClick={() => {setTotal(total - 1)}}>-1</button>
//   </>
// }

// export default App;
// //default是預設導入

// import './App.css'

// function App() {
//   return(
//   <>
//     <h2>Number</h2>
//     {123}
//     {123+1}
//     <h2>Boolean</h2>
//     {true}
//     {false}
//     <h2>String</h2>
//     {'abc'}
//     {'abc'+'def'}
//     <h2>Null/Undefined</h2>
//     {null}
//     {undefined}
//     <h2>Array</h2>
//     {[1,2,3]}
//     <h2>Object</h2>
// {/* {一般物件不能直接崁入jsx中，會造成中斷錯誤} */}
//     {/* {{ a:1, b:2}} */}
//     {new Date().toLocaleDateString()}
//     <h2>Function(警告)</h2>
//     {() => console.log(123)}
//   </>
//   )
// }
// export default App;

// import { data } from './data/student'

// function APP() {
//   console.log(data);

//   const newData = data.map(function(v,i){
//     return <li>{v.name}</li>
//   })

//   console.log(newData)

//   return(
//     <>
//       <ul>
//         {data.map((v,i) => {
//           return <li key={i}>{v.name}</li>
//         })}

//       </ul>
//     </>
//   )

// }

// import SocialShare from './components/SocialShare'
// import Parent from './components/Parent';

// function App() {
//   return (
//     <>
//       {/* <SocialShare url="http://localhost:3000" round={true} /> */}
//       {/* <CC /> */}
//       <Parent />
//     </>
//   );
// }

// import { useState } from 'react';
// import './menu.css';

// function App() {
//   const menuItem = ['首頁', '關於我們', '產品'];
//   const [activeIndex, setActiveIndex] = useState(-1);
//   return (
//     <ul>
//       {menuItem.map((v, i) => {
//         return (
//           <li
//             key={i}
//             onClick={() => {
//               setActiveIndex(i);
//             }}
//           >
//             <a href="#/" classNameName={activeIndex === i ? 'active' : ''}>
//               {v}
//             </a>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// import log from 'eslint-plugin-react/lib/util/log';
// import React, { useState } from 'react';

// const objArray = [
//   {
//     id: 1,
//     text: 'a',
//   },
//   {
//     id: 2,
//     text: 'b',
//   },
//   {
//     id: 3,
//     text: 'c',
//   },
//   {
//     id: 4,
//     text: 'aa',
//   },
// ];

// function App() {
//   const [data, setData] = useState(objArray);

//   return (
//     <>
//       <h1>物件陣列的各種操作</h1>
//       <p>呈現資料</p>
//       <table border="1">
//         {data.map((v, i) => {
//           return (
//             <tr key={v.id}>
//               <td>{v.id}</td>
//               <td>{v.text}</td>
//             </tr>
//           );
//         })}
//       </table>
//       <hr />
//       <button
//         onClick={() => {
//           // 先寫出要新增的物件值
//           const newObj = { id: 99, text: 'xxx' };

//           // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
//           // 2. 在新的變數值(陣列/物件)上作處理
//           // 3. 設定回原本的狀態中

//           //1 //2
//           const newData = [newObj, ...data];

//           //3
//           setData(newData);
//         }}
//       >
//         陣列最前面新增一個物件值id為99與文字為xxx的物件
//       </button>
//       <br />
//       <button
//         onClick={() => {
//           const newObj = { id: 88, text: 'yyy' };

//           //1 //2
//           const newData = [...data, newObj];

//           //3
//           setData(newData);
//         }}
//       >
//         陣列最後面新增一個物件值id為88與文字為yyy的物件
//       </button>
//       <br />
//       <button
//         onClick={() => {
//           const newData = data.filter((v, i) => {
//             return v.text.includes('a');
//           });
//           setData(newData);
//         }}
//       >
//         尋找(過濾)只呈現所有文字有a字母的
//       </button>
//       <br />
//       <button
//         onClick={() => {
//           const newData = data.filter((v, i) => {
//             return v.text !== 'b';
//           });
//           setData(newData);
//         }}
//       >
//         刪除文字為b的物件
//       </button>
//       <br />
//       <button
//         onClick={() => {
//           const newData = data.filter((v, i) => {
//             return v.id !== 99;
//           });
//           setData(newData);
//         }}
//       >
//         刪除id為99的物件
//       </button>
//       <br />
//       <button
//         onClick={() => {
//           const index = data.findIndex((v, i) => {
//             return v.id === 2;
//         });
//           console.log(index);
//           if (index > -1) {
//             const newObj = { id: 5, text: 'bbbb' };

//             const newData = [
//               ...data.slice(0, index + 1),
//               newObj,
//               ...data.slice(index + 1),
//             ];
//             console.log(newData);
//           }
//         }}
//       >
//         在id為2後面插入id為5與文字為bbb的物件
//       </button>
//       <br />
//       <button onClick={() => {}}>取代id為3的文字為cccc</button>
//       <br />
//       <button onClick={() => {}}>
//         陣列最前面新增一個物件值id不重覆與文字為xxx的物件
//       </button>
//       <br />
//       <button onClick={() => {}}>
//         陣列最後面新增一個物件值id不重覆與文字為yyy的物件
//       </button>
//     </>
//   );
// }

import './App.css';
import OrderList from './components/OrderList';
import Summary from './components/Summary';
import { useState } from 'react';
const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '白色 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
];

function App() {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="card">
        <div className="row">
          <OrderList products={products} count={count} setCount={setCount} />
          <Summary totalNumber={count} totalPrice={count * products[0].price} />
        </div>
      </div>
    </>
  );
}

export default App;
