(function () {
  const buttons = Array.from(document.querySelectorAll('[data-language]'));
  const blocks = Array.from(document.querySelectorAll('[data-lang]'));
  const supported = ['en', 'zh'];
  const saved = window.localStorage.getItem('motionbridge-language');
  const browserLanguage = (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';

  function setLanguage(language) {
    const selected = supported.includes(language) ? language : 'en';
    document.documentElement.lang = selected;
    blocks.forEach((block) => { block.hidden = block.dataset.lang !== selected; });
    buttons.forEach((button) => { button.setAttribute('aria-pressed', String(button.dataset.language === selected)); });
    window.localStorage.setItem('motionbridge-language', selected);
  }

  buttons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  setLanguage(supported.includes(saved) ? saved : browserLanguage);
})();
