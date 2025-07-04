document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('emailTitle').value.trim();
  const body = document.getElementById('emailBody').value.trim();
  const statusMsg = document.getElementById('statusMsg');

  if (!title || !body) {
    statusMsg.textContent = 'Please fill in both Title and Message.';
    statusMsg.style.color = 'red';
    return;
  }

  emailjs.send('service_u1m7pyp', 'template_77xbudf', {
    title: title,
    message: body
  }).then(() => {
    statusMsg.textContent = 'Email sent successfully!';
    statusMsg.style.color = 'green';
    document.getElementById('contact-form').reset();
  }, (error) => {
    console.error(error);
    statusMsg.textContent = 'Failed to send email.';
    statusMsg.style.color = 'red';
  });
});
