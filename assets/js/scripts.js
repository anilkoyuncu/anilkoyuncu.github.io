document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
      console.log('Button clicked'); // Debugging log
      const content = button.nextElementSibling;
      console.log(content); // Debugging log
      content.classList.toggle('collapsed');
    });
  });
});