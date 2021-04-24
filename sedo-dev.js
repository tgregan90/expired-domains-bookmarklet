(function(){
  let urls = document.querySelectorAll(".domainname");
  let extensions = document.querySelectorAll(".domaintld");
  let results = "";
  for(let i = 0; i < urls.length; i++){
     results += urls[i].innerText + extensions[i].innerText + "\n"
  }

  let copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  copyToClipboard(results)
})();
