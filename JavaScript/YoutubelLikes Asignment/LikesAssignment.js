var count = 0;

function like_count(){
  count += 1;
  console.log("liked")
  console.log('like count ' + count)
  let countStr = count + " ";
  document.getElementById("counter").textContent = countStr;
}

function dislike_count() {
  if(count >0){
    count -= 1;
    console.log("Disliked")
    console.log('dislike count ' + count)
	let countStr = count + " ";
	document.getElementById("counter").textContent = countStr;
  }
  else{
    count = 0;
    console.log("Disliked")
	
  }
  
}
let countStr = count + " ";
document.getElementById("counter").textContent = countStr;
console.log("final: " + count)


