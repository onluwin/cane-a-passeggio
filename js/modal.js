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
//       refs.request.classList.toggle("is-hidden");
//       refs.body.classList.toggle("no-scroll");
//   }
// })();

