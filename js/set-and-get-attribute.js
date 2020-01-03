//const urls = document.querySelectorAll("a");
//for (let i = 0; i < urls.length; i++){
//    urls[i].style.color = "red";
//    console.log(urls[i].getAttribute('href'));
//    urls[i].setAttribute('href','http://www.w3schools.com');
//    urls[i].innerHTML = "w3schools";
//}

const listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++){
    console.log(listItems[i].getAttribute('class'));      if(listItems[i].classList.contains('url')){
        listItems[i].setAttribute('class','blue');
        listItems[i].style.listStyleType = "square";
        
     }
}