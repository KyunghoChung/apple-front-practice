/*eslint-disable*/
import { useState } from 'react';
import './App.css';

function App() {

  let [title, titleChange] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [likes, likesUp] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

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
      {/* <div className='list'>
        <h4>{title[0]} <span onClick={()=>likesUp(likes + 1)}>👍</span> {likes} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        단순 반전
        <h4 onClick={()=>setModal(!modal)}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {
      modal == true ? <Modal/> : null
      } */}
      {/* map() 실습을 위해 위 코드 정리하다가 
      주석처리문을 중첩하면 예기치 못한 문제가 발생할 수 있다는 것을
      알게 되었음 0829
      */}

      {
        title.map(function(a, i){
          return (
            <div className='list'>
            <h4>{ title[i] }  
            <span onClick={()=>{
              let copy = [...likes];
              copy[i] = copy[i] + 1;
              likesUp(copy);
            }}>👍</span> {likes[i]}
            </h4>
            <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      {/* <ModalArrow></ModalArrow> */}
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

// let ModalArrow= () =>{
//   return(
//     <div className='modal'>
//       <h4>컴포넌트 arrow function</h4>
//       <p>실습</p>
//     </div>
//   );
// }
export default App;
