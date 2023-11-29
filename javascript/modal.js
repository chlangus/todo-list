// 모달창 열렸을때 확인, 취소 요소
const confirmBtnElement = document.querySelector('.confirm');
const cancelBtnElement = document.querySelector('.cancel');

// todo input 요소
const todoInputElement = document.querySelector('.todo-input');

// 모달창 보이기 기능
function openModal(e){
  backDropElement.style.display = 'block';
  modalElement.style.display = 'block';

  // 모달창 외부 클릭시 닫음 이벤트
  backDropElement.addEventListener('click', cancelModal);
}

// 모달창 리스트 추가 이벤트
confirmBtnElement.addEventListener('click', storeTodoModal);
todoInputElement.addEventListener('keyup', function(event){
  if(event.keyCode === 13){
  storeTodoModal();
}});



// 모달창 닫음 이벤트
cancelBtnElement.addEventListener('click', cancelModal);
window.addEventListener('keyup', function(event){
  if(event.keyCode === 27){
    cancelModal();
  }
});

// todo-list ol 요소
const listWrapperElement = document.querySelector('.list-wrapper');

// id 값
let cnt = 1;

// 리스트 저장
function storeTodoModal(){
  const newLiElement = document.createElement('li');
  const newDivELement = document.createElement('div');
  const newUpdateBtnElement = document.createElement('button');  
  const newCancelBtnElement = document.createElement('button');

  newDivELement.classList.add('text-wrapper');
  newDivELement.textContent = todoInputElement.value;
  newLiElement.classList.add('list-item');
  newLiElement.id = cnt;

  newUpdateBtnElement.classList.add('list', 'btn');
  newUpdateBtnElement.setAttribute('onclick','updateItem('+cnt+')');
  newUpdateBtnElement.textContent = '수정하기';

  newCancelBtnElement.classList.add('list', 'btn');
  newCancelBtnElement.setAttribute('onclick', 'deleteItem('+cnt+')');
  newCancelBtnElement.textContent = '삭제하기';
  
  newLiElement.appendChild(newDivELement);
  newLiElement.appendChild(newUpdateBtnElement);
  newLiElement.appendChild(newCancelBtnElement);
  listWrapperElement.appendChild(newLiElement);
  
  backDropElement.style.display = 'none';
  modalElement.style.display = 'none';
  todoInputElement.value = '';
  cnt++;

  console.dir(newLiElement);
  console.log(newLiElement);
}

// 모달창 닫기
function cancelModal(){
  backDropElement.style.display = 'none';
  modalElement.style.display = 'none';
  todoInputElement.value = '';
}

