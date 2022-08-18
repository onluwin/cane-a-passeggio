(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
  }
})();



// $('form button[type=submit]').on('click',function(){
// //тут мы сериализуем данные формы и отправляет ajax-запросом, ну и делаем всё, что нам нужно
// });

// function Test() {
//   const [buttonType, setButtonType] = React.useState('submit');

//   const changeButtonTypeHandler = () => {
//     setButtonType('button');
//   }
// }


// (() => {
//   const refs = {
//     openRequestBtn: document.querySelector("[data-request-open]"),
//     closeRequestBtn: document.querySelector("[data-request-close]"),
//       request: document.querySelector("[data-request]"),
//     body: document.querySelector("body"),
//   };

//   refs.openRequestBtn.addEventListener("click", toggleRequest);
//   refs.closeRequestBtn.addEventListener("click", toggleRequest);

//   function toggleRequest() {
//       refs.request.classList.toggle("is-open");
//       refs.body.classList.toggle("no-scroll");
//   }
// })();

var servResponse = document.querySelector("#response");

document.forms.form.onsubmit = function (e) { 
  e.preventDefault();

  var userInput = document.forms.form.nome.value;
  
  var xhr = new XMLHttpRequest();

  xhr.open("POST", "ajax_quest.php");
  xhr.setRequestHeader("contentType", "application/x-www-form-urlencoded");
  xhr.send("nome=" + userInput);
};