import React from 'react';

function Home(props) {
  const { auth } = props;
  return (
    <>
      <h1>Home</h1>
      {auth ? '已登入' : '未登入'}
    </>
  );
}

export default Home;
