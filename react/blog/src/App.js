/*eslint-disable*/
import { useState } from 'react';
import './App.css';

function App() {

  let [title, titleChange] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [likes, likesUp] = useState(0);

  function setTitle() {
    titleChange(['여자코트 추천', '강남 우동맛집', '파이썬독학']);
  }

  function plusLikes(){
    likesUp(likes+1);
  }
  
  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 블로그</div>
      </div>
      <div className='list'>
        <h4>{title[0]} <span onClick={plusLikes}>👍</span> {likes} </h4>
        <p>2월 17일 발행</p>
        <button onClick={setTitle}>제목 변경 버튼</button>
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
