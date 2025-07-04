import emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';

emailjs.init('GB3auA7v_QRGWZ79s'); // 🔁 Replace with your actual public key

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_u1m7pyp', 'template_77xbudf', this)
    .then(() => {
      const response = document.getElementById('response');
      response.textContent = '✅ Message sent successfully!';
      response.style.color = 'green';
      this.reset();
    }, (error) => {
      console.error('FAILED...', error);
      const response = document.getElementById('response');
      response.textContent = '❌ Failed to send message.';
      response.style.color = 'red';
    });
});
