/*eslint-disable*/
import { useState } from 'react';
import './App.css';

function App() {

  let [title, titleChange] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [likes, likesUp] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, modalTitleChange] = useState(0);
  let [입력값, 입력값변경] = useState('');
  // let sortedTitle = [...title].sort(function(a, b){
  //   if(a > b) return 1;
  //   if(a < b) return -1;
  //   if(a === b) return 0; 
  // });
  const handleDelete = (index) => {
    // 복사본 생성
    let copyTitle = [...title];
    let copyLikes = [...likes];
  
    // 해당 인덱스의 글을 배열에서 삭제
    copyTitle.splice(index, 1);
    copyLikes.splice(index, 1);
  
    // 상태 업데이트
    titleChange(copyTitle);
    likesUp(copyLikes);
  };
  // handleDelete 함수는 글을 삭제하기 위한 버튼을 만들고 조작하기 위해 gpt에 물어보고 얻은 결과(1019)
  

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
              <h4 onClick={() => {setModal(!modal); modalTitleChange(i)}}>{ title[i] } </h4> 
              {/* map함수의 특성 중 a와 i의 변화에 따라 모달창의 제목이 변경되는 것을 알 수 있음 */}
              <span onClick={()=>{
                let copy = [...likes];
                copy[i] = copy[i] + 1;
                likesUp(copy);
              }}>👍</span> {likes[i]}
              
              <p>2월 17일 발행</p>
              <button onClick= {() => { handleDelete(i)} }>글 삭제</button>
            </div>
          )
        })
      }
      <div>
        <input onChange={(e) => { 
          입력값변경(e.target.value); {/* state 변경함수는 늦게처리됨(비동기처리)*/}
          console.log(입력값);
        }} ></input>
        <button onClick={() => {
          let copyTitle = [입력값, ...title];
          let copyLikes = [0, ...likes];
          titleChange(copyTitle);
          likesUp(copyLikes);
        }}>글 추가</button>
      </div>
      
      {/* 
      input1(1009)
      - input의 type은 다양하기 때문에 그때 그때 필요한 type을 찾아보기
      - onChange는 박스 안에 뭔가를 입력할 때마다 onChange = {() => { ??? }}의
      ???를 실행시킴
      - 이벤트 핸들러 종류 매우 다양
      - state 만드는 법/ props 전송하는 법/ 컴포넌트 만드는 법/ UI 만드는 step 은 꼭 암기
      - <input>에 입력한 값 가져오는 법 => 이벤트 객체인 e 사용 => e.target.value를 찍어서 input 태그를 가리키고, 그 값을 가져옴
      - e 객체는 예를 들어 이벤트 버블링을 막을 때도 사용한다 -> e.stopPropagation()
      - <input>에 입력한 값을 저장하려면 보통 변수/state에 저장해둠
      */}

      {
        modal == true ? <Modal modalTitle = {modalTitle} title = {title} titleChange={titleChange}/> : null
      }
      {/* <ModalArrow></ModalArrow> */}
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
      <h4>{ props.title[props.modalTitle] }</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={()=>{
        let copy = [...props.title];
        copy[0] = "여자 코트 추천";
        props.titleChange(copy); 
      }}>글 수정</button>

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
