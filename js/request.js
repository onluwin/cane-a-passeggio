(() => {
  const refs = {
    openRequestBtn: document.querySelector("[data-request-open]"),
    closeRequestBtn: document.querySelector("[data-request-close]"),
      request: document.querySelector("[data-request]"),
    body: document.querySelector("body"),
  };

  refs.openRequestBtn.addEventListener("click", toggleRequest);
  refs.closeRequestBtn.addEventListener("click", toggleRequest);

  function toggleRequest() {
      refs.request.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
  }
})();