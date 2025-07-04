import emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';

// Replace with your actual EmailJS public key
emailjs.init('GB3auA7v_QRGWZ79s');

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const response = document.getElementById('response');
  response.textContent = 'Sending...';

  emailjs
    .sendForm('service_u1m7pyp', 'template_77xbudf', this)
    .then(() => {
      response.textContent = '✅ Email sent successfully!';
      this.reset();
    })
    .catch((error) => {
      console.error('FAILED...', error);
      response.textContent = '❌ Error: ' + (error?.text || error);
    });
});
