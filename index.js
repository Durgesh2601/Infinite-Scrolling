let container = document.getElementById("container");

container.addEventListener("scroll", scrollFn);

let j = 1;
 function scrollFn (){
    if(container.offsetHeight + container.scrollTop > container.scrollHeight){
     display();
    }
 }

function display () {
        for(let i = 0; i < 25; i++) {
            let content = document.createElement("h3");
            content.innerText=`Masai Student ${j}`;
            container.append(content);
            j++;
        }
}
display();