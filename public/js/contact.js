const form = document.getElementById('contact-form');
const status = document.getElementById('status');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const body = Object.fromEntries(new FormData(form));
  status.textContent = 'Sending...';
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    status.textContent = 'Thanks! Your message has been sent.';
    form.reset();
  } catch (err) {
    status.textContent = err.message || 'Something went wrong. Please try again.';
  }
});
