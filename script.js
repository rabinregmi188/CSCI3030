function toggleTips() {
    const tips = document.getElementById('safetyTipsList');
    tips.style.display = tips.style.display === 'none' ? 'block' : 'none';
  }
  function filterAlerts() {
    const input = document.getElementById('alertSearch').value.toLowerCase();
    const alerts = document.getElementById('alertList').getElementsByTagName('li');
    for (let i = 0; i < alerts.length; i++) {
      const text = alerts[i].innerText.toLowerCase();
      alerts[i].style.display = text.includes(input) ? '' : 'none';
    }
  }
  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return false;
    }
    alert("Thank you for getting involved!");
    return false;
  }
  function toggleFAQ() {
    const answer = document.getElementById('faqAnswer');
    answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + 'px';
  }
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.onload = function () {
    const toast = document.getElementById('toast');
    if (toast) {
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 5000);
    }
  };
  window.onscroll = function () {
    const btn = document.getElementById('topBtn');
    if (btn) btn.style.display = window.scrollY > 300 ? 'block' : 'none';
  };
  