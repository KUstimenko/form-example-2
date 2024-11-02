const scriptURL =
  "https://script.google.com/macros/s/AKfycbzkXrJnuAUNsfK0ZVAcussFjFuuCXIHzcAXat5WFbl4LvctQvOEbE3Hb2-NkP_sp7MRdA/exec";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      })
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
