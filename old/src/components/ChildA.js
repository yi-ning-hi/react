// import PropTypes from 'prop-types';

function ChildA(props) {
  console.log(props); //單向資料流
  return (
    <>
      <h2>ChildA</h2>
      <p>來自ChildB資料:{props.data}</p>
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

export default ChildA;
