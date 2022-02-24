import { useState } from 'react';
function App() {
  const [inputText, setInputText] = useState('');
  const [textareaText, setTextareaText] = useState('');

  //radio group
  const [radioValue, setRadioValue] = useState('');
  const foodOptions = ['排骨飯', '雞腿飯', '牛肉麵'];
  // select
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <>
      <h1>可控表單元素</h1>
      <h2>文字輸入框</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <h2>文字輸入區域</h2>
      <textarea
        value={textareaText}
        onChange={(e) => {
          setTextareaText(e.target.value);
        }}
      />
      <h2>選項按鈕</h2>
      {foodOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              value={v}
              id={'foodOption' + i}
              checked={v === radioValue}
              onChange={(e) => {
                setRadioValue(e.target.value);
              }}
            />
            <label htmlFor={'foodOption' + i}>{v}</label>
          </div>
        );
      })}
      <h2>下拉選單</h2>
      <label for="car">選擇車子：</label>
      <select
        name="cars"
        id="cars"
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(e.target.value);
        }}
      >
        <option value="">請選擇</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </>
  );
}
export default App;
