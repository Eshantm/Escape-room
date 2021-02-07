var sidebarBox = document.querySelector('#box');
var sidebarBtn = document.querySelector('#btn');
var pageWrapper = document.querySelector('#main-content');

sidebarBtn.addEventListener('click', function(event) {

  if (this.classList.contains('active')) {
      this.classList.remove('active');
      sidebarBox.classList.remove('active');
  } else {
      this.classList.add('active');
      sidebarBox.classList.add('active');
  }
});

pageWrapper.addEventListener('click', function(event) {

  if (sidebarBox.classList.contains('active')) {
      sidebarBtn.classList.remove('active');
      sidebarBox.classList.remove('active');
  }
});

window.addEventListener('keydown', function(event) {

  if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
      sidebarBtn.classList.remove('active');
      sidebarBox.classList.remove('active');
  }
});
