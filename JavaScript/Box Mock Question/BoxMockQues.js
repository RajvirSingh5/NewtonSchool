let box = document.getElementById('second');
let count = 0

function rotate_box(){
  
  if(count % 2 === 1) {
    box.style.transform = "rotate(45deg)";
  //box.style.transform = "scale(1,1)";
  box.style.color = "red";
  box.style.backgroundColor = "green";
  box.style.fontsize = "xx-large";
    count = 0;
  }
  else {
    box.style.transform = "rotate(0deg)";
    box.style.backgroundColor = "brown";
    box.style.color= "white";
    box.style.resize = "both";
    box.style.fontsize = "xx-large";
    count = 1;
  }
  
  
}