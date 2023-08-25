/*eslint-disable*/
import { useState } from 'react';
import './App.css';

function App() {

  let [title, titleChange] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [likes, likesUp] = useState(0);

  // let sortedTitle = [...title].sort(function(a, b){
  //   if(a > b) return 1;
  //   if(a < b) return -1;
  //   if(a === b) return 0; 
  // });
  
  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 블로그</div>
      </div>
      <div className='list'>
        <h4>{title[0]} <span onClick={()=>likesUp(likes + 1)}>👍</span> {likes} </h4>
        <p>2월 17일 발행</p>
        {/* <button onClick={()=>{
          titleChange(['여자코트 추천', '강남 우동맛집', '파이썬독학'])
        }}>제목 변경 버튼</button> */}
        <button onClick={()=>{
          let titleCopy = [...title];
          titleCopy[0] = '여자코트 추천';
          titleChange(titleCopy);
          // 0번째 요소를 골라서 수정해줬다
          // 그러나 원본 조작은 추천X, 그래서 복사본을 만들어서 수정
          // 배열은 배열 안의 값이 아닌 레퍼런스를 갖기 때문에
          // 배열 자체를 복사하면 레퍼런스 값이 복사되기 때문에
          // 요소를 골라서 수정해줘도 변경되지 않는다.
          // 그래서 배열을 벗겼다가 다시 배열을 입히는 방식으로 복사하면
          // 레퍼런스 값이 달라지기 때문에 요소를 골라서 수정하면
          // 복사본은 요소의 값이 변경된 배열이 된다.
          // 위와 같이 ...을 사용하여 배열을 벗기는 문법: spread operator
          // array나 object를 복사할 때 많이 사용한다.
        }}>제목 변경 버튼</button>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {/* <div>
          <button onClick={() =>{titleChange(sortedTitle)}}>글 제목 가나다순으로 정렬</button>
        </div> */}
      <Modal></Modal>
      <ModalArrow></ModalArrow>
    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  );
}

let ModalArrow= () =>{
  return(
    <div className='modal'>
      <h4>컴포넌트 arrow function</h4>
      <p>실습</p>
    </div>
  );
}
export default App;
