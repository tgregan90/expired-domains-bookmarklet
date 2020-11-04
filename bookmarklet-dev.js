let urls = document.querySelectorAll(".field_domain");
let results = "";
for(let i = 0; i < urls.length; i++){
   results += urls[i].outerText + "\n"
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
