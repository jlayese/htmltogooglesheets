const form = document.getElementById('form');

form.addEventListener('focusin', (event) => {
  event.target.style.background = 'pink';    
});

form.addEventListener('focusout', (event) => {
  event.target.style.background = '';    
});

$("#test-form").validate({
  rules: {
    username: {
      required: true,
      minlength: 12
    }
  },
  messages: {
    username: "Please specify your name",
    
  }
});