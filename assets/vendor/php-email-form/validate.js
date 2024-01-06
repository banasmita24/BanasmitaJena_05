(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {
    let forms = document.querySelectorAll('.php-email-form');

    forms.forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();

        let formData = new FormData(form);

        fetch(form.getAttribute('action'), {
          method: 'POST',
          body: formData,
        })
        .then(response => response.text())
        .then(data => {
          if (data.trim() === 'OK') {
            form.querySelector('.sent-message').classList.add('d-block');
            form.reset();
          } else {
            throw new Error(data ? data : 'Form submission failed.');
          }
        })
        .catch(error => {
          form.querySelector('.error-message').innerHTML = error.message;
          form.querySelector('.error-message').classList.add('d-block');
        });
      });
    });
  });
})();

