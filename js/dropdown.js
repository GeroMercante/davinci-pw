const questionButtons = document.querySelectorAll('.icon_showmore');
// Dropdown
questionButtons.forEach(button => {
  button.addEventListener('click', function() {
    const response = this.parentElement.nextElementSibling;
    const icon = this.querySelector('i')

    response.classList.toggle('hidden');

    if (response.classList.contains('hidden')) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-plus');
    } else {
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-times');
    }
  });
});