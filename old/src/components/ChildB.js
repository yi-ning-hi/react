// import PropTypes from 'prop-types';
import { useState } from 'react';

function ChildB(props) {
  console.log(props); //單向資料流
  const [childBData, setchildBData] = useState('ChildB Data');
  return (
    <>
      <h2>ChildB</h2>
      <button
        onClick={() => {
          props.setData(childBData);
        }}
      >
        送資料給 ChildA
      </button>
    </>
  );
}

// Child.propTypes = {
//   name: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// };

// Child.defaultProps = {
//   name: 'jill',
//   text: '沒有',
// };

export default ChildB;
