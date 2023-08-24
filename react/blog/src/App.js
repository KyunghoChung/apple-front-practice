import { useState } from 'react';
import './App.css';

function App() {

  let [title, b] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let post = '강남 우동 맛집';
  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 블로그</div>
      </div>
      <div className='list'>
        <h4>{title[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
