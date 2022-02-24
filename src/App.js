import { useState } from 'react';
function App() {
  const [inputText, setInputText] = useState('');
  const [textareaText, setTextareaText] = useState('');

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
    </>
  );
}
export default App;
