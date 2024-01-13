let isDragging = false;
let offsetX, offsetY;

const chatGPTIcon = document.getElementById('chatGPTIcon');

chatGPTIcon.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - chatGPTIcon.getBoundingClientRect().left;
  offsetY = e.clientY - chatGPTIcon.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  chatGPTIcon.style.left = e.clientX - offsetX + 'px';
  chatGPTIcon.style.top = e.clientY - offsetY + 'px';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
