import { useState } from 'react';

function FC() {
  const [total, setTotal] = useState(0);

  // const checkAndOutput = (value) => {
  //   if (value > 0) {
  //     return <p>總數大於0</p>;
  //   } else {
  //     return <p></p>;
  //   }
  // };

  return (
    <>
      <h1
        onClick={() => {
          const newTotal = total + 1;
          setTotal(newTotal); //異步(非同步)
          console.log(newTotal);
        }}
      >
        {total}
      </h1>
      {/* {total > 0 ? <p>總數大於0</p> : ''} */}
      {/* {checkAndOutput(total)} */}
    </>
  );
  //函式型元件，(total + 1)} 傳入值是物件值
}

export default FC;
