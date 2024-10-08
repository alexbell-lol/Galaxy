document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector(".input");
  input.addEventListener("keydown", handleInput);

  const savedTitle = localStorage.getItem("cloakTitle");
  if (savedTitle) {
    document.title = savedTitle;
  }

  function handleInput(e) {
    if (e.key !== 'Enter') return;
    const query = formatSearch(input.value);
    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(query);
  }
});

function formatSearch(query) {
  try {
    return new URL(query).toString();
  } catch (e) { }

  try {
    const url = new URL(`http://${query}`);
    if (url.hostname.includes('.')) return url.toString();
  } catch (e) { }

  return new URL(`https://google.com/search?q=${query}`).toString();
}

function Redir(url) {
  window.location.href = url;
}

function create(url) {
  url_enc = Ultraviolet.codec.xor.encode(url);
  url_enc_prefix = __uv$config.prefix + url_enc;
  var win = window.open();
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';
  var iframe = win.document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.margin = '0';
  iframe.src = url_enc_prefix;
  win.document.body.appendChild(iframe);
}

function create_blnkr() {
  let x = prompt("Where would you like to go? \n At the moment google searches are not supported.");
  create(x);
}

let csite = localStorage.getItem('cloaksite');
if (csite == null) {
  csite = 'https://classroom.google.com';
}
document.addEventListener('keydown', function(event) {
  if (event.key === '=') {
    window.parent.location.href = csite;
  }
});

function showTab(index) {
  const contents = document.querySelectorAll('.content');
  const tabs = document.querySelectorAll('.tab');
  contents.forEach((content, i) => {
    if (i === index) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
  tabs.forEach((tab, i) => {
    if (i === index) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}
