
//  Shows green/red feedback 
//  Prevents invalid submission 

(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()

// open a modal after form submission or validation.
const myModal = new bootstrap.Modal(document.getElementById('infoModal'));
myModal.show();


cart.push({
  name: "Mouse",
  price: 200,
  image: "mouse12.jpg",
  qty: 1
});
