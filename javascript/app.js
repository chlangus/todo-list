// 일정 추가하기 버튼
const addElement = document.querySelector('.add-btn');
// 모달창 띄우는 요소
const backDropElement = document.querySelector('.back-drop');
const modalElement = document.querySelector('.modal');

addElement.addEventListener('click', openModal);


function deleteItem(e){
  const item = document.getElementById(e);
  item.remove();
}

let temp = '';
function updateItem(e){
  const item = document.getElementById(e);
  const newInputELement = document.createElement('input');
  const newCompleteBtnElement = document.createElement('button');
  const newCancelBtnElement = document.createElement('button');

  
  newInputELement.classList.add('todo-input');
  newInputELement.value = item.firstChild.textContent;
  temp = item.firstChild.textContent;

  newCompleteBtnElement.classList.add('list', 'btn');
  newCompleteBtnElement.setAttribute('onclick', 'updateCompleteItem(' + e + ')');
  newCompleteBtnElement.textContent = "수정완료";

  newCancelBtnElement.classList.add('list', 'btn');
  newCancelBtnElement.setAttribute('onclick', 'cancelItem('+ e +')');
  newCancelBtnElement.textContent = "취소하기";

  item.lastChild.remove();
  item.lastChild.remove();
  item.firstChild.remove();

  item.prepend(newInputELement);
  item.appendChild(newCompleteBtnElement);
  item.appendChild(newCancelBtnElement);
  console.log(item);
}

function updateCompleteItem(e){
  const item = document.getElementById(e);
  
  const newDivELement = document.createElement('div');
  const updateBtnElement = document.createElement('button');  
  const cancelElement = document.createElement('button');
  
  newDivELement.classList.add('text-wrapper');
  newDivELement.textContent = item.firstChild.value;

  updateBtnElement.classList.add('list', 'btn');
  updateBtnElement.setAttribute('onclick','updateItem('+e+')');
  updateBtnElement.textContent = '수정하기';

  cancelElement.classList.add('list', 'btn');
  cancelElement.setAttribute('onclick', 'deleteItem('+e+')');
  cancelElement.textContent = '삭제하기';

  item.firstChild.remove();
  item.lastChild.remove();
  item.lastChild.remove();

  item.appendChild(newDivELement);
  item.appendChild(updateBtnElement);
  item.appendChild(cancelElement);
}


function cancelItem(e){
  const item = document.getElementById(e);

  const newDivELement = document.createElement('div');
  const updateBtnElement = document.createElement('button');  
  const cancelElement = document.createElement('button');

  newDivELement.classList.add('text-wrapper');
  newDivELement.textContent = temp;

  updateBtnElement.classList.add('list', 'btn');
  updateBtnElement.setAttribute('onclick','updateItem('+e+')');
  updateBtnElement.textContent = '수정하기';

  cancelElement.classList.add('list', 'btn');
  cancelElement.setAttribute('onclick', 'deleteItem('+e+')');
  cancelElement.textContent = '삭제하기';

  item.firstChild.remove();
  item.lastChild.remove();
  item.lastChild.remove();
  
  item.appendChild(newDivELement);
  item.appendChild(updateBtnElement);
  item.appendChild(cancelElement);
}