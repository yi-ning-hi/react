import React, { useState } from 'react';

function HTML5Form(props) {
  const [fields, setFields] = useState({
    checkInData: '',
    checkOutData: '',
    roomPeople: '',
  });
  const handleChange = (e) => {
    const newData = { ...fields, [e.target.name]: e.target.value };

    setFields(newData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData.get('checkInData'));
  };
  //   const [fieldErrors,setFieldErrors] = useState({
  //     checkInData: '',
  //     checkOutData: '',
  //     email: '',
  //   })

  return (
    <>
      <h1>住宿表單驗證</h1>
      <from
        onSubmit={handleSubmit}
        // onChange={handleFormChange}
        // onInvalid={handleInvalid}
      >
        <label>入住日期</label>
        <input
          type="date"
          value={fields.checkInData}
          name="checkInData"
          onChange={(e) => {
            setFields(e.fields.value);
          }}
          requireds
        />
        <label>退房日期</label>
        <input
          type="date"
          value={fields.checkOutData}
          name="checkInData"
          //   onChange={handleFormChange}
          required
        />
        <label>房數</label>
        <select
          name="roomPeople"
          value={fields.roomPeople}
          //   onChange={handleFormChange}
        >
          <option value="">請選擇</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </from>
    </>
  );
}

export default HTML5Form;
