document.addEventListener('DOMContentLoaded', function() {
  const formData = {
    email: "",
    message: ""
  };

  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  function updateFormData() {
    formData.email = emailInput.value;
    formData.message = messageInput.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }

  const storedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (storedFormData) {
    formData.email = storedFormData.email;
    formData.message = storedFormData.message;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }

  form.addEventListener('input', function(event) {
    if (event.target === emailInput || event.target === messageInput) {
      updateFormData();
    }
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
      alert('Будь ласка, заповніть всі поля');
      return;
    }

    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = "";
    formData.message = "";
    emailInput.value = "";
    messageInput.value = "";
  });
});