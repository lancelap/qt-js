export function guid () {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4()
}

function s4 () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
}

export function loadScriptMap(url) {
  if(!loadScriptMap.count) {
    loadScriptMap.count = 0;
  }
  
  return new Promise((resolve, reject) => {
    const script = document.createElement('script'); 
    const body = document.getElementsByTagName('body')[0];
    let cbName = loadScriptMap.count + 'initMap' + Date.now();
    
    if(url.match(/callback=init/)) {
      url = url.replace(/(callback=)[^]+/, `$1${cbName}`) 
      window[cbName] = () => resolve();
      loadScriptMap.count++;
    } else {
      reject(new Error("require onload func"))
    }

    script.async = false;
    script.src = url;
    script.onerror = reject;
    body.appendChild(script);
  })
}