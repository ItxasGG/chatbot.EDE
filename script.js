/* Estrategia Digital Estrella · Landing de chatbots con IA */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Demo de chat simulada (sin conexión a ninguna IA) ---------- */
  var messages = document.getElementById('chat-messages');
  var replies = document.getElementById('chat-replies');

  if (messages && replies) {
    var buttons = replies.querySelectorAll('.chat-reply');
    var busy = false;

    var scrollToEnd = function () {
      messages.scrollTop = messages.scrollHeight;
    };

    var addMessage = function (text, who) {
      var p = document.createElement('p');
      p.className = 'msg msg--' + who;
      p.textContent = text;
      messages.appendChild(p);
      scrollToEnd();
      return p;
    };

    var setDisabled = function (state) {
      buttons.forEach(function (b) { b.disabled = state; });
    };

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        if (busy) return;
        busy = true;
        setDisabled(true);

        addMessage(button.textContent.trim(), 'user');

        var typing = document.createElement('div');
        typing.className = 'msg msg--bot msg--typing';
        typing.setAttribute('role', 'status');
        typing.innerHTML = '<span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span><span class="visually-hidden">Escribiendo...</span>';
        messages.appendChild(typing);
        scrollToEnd();

        window.setTimeout(function () {
          typing.remove();
          addMessage(button.getAttribute('data-answer'), 'bot');
          busy = false;
          setDisabled(false);
          button.focus({ preventScroll: true });
        }, 1000);
      });
    });
  }

  /* ---------- FAQ: solo una pregunta abierta (respaldo de <details name>) ---------- */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item && other.open) other.open = false;
      });
    });
  });

  /* ---------- Aparición suave al hacer scroll ---------- */
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.section-header, .card, .highlight-box, .faq-list, .closing-card, .contact-block, .mock-phone');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    targets.forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }
})();
