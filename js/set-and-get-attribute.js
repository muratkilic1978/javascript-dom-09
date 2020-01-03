const urls = document.querySelectorAll("a");
for (let i = 0; i < urls.length; i++){
    urls[i].style.color = "red";
    console.log(urls[i].getAttribute('href'));
    urls[i].setAttribute('href','http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html');
}