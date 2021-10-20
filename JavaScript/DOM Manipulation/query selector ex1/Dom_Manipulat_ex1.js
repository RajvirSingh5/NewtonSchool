



document.querySelectorAll("main li");

// returns a node list


document.querySelectorAll("main li").forEach(item => item.style.backgroundColor="red")

//colors item red




const newArticle = document.createElement("article");

newArticle.classList.add("backpack");

newArticle.setAttribute("id", "everyday");

headMain.innerHTML = `<h2> This is new heading</h2>`;

const head1 = document.querySelector("h1");

head1.append(newArticle);










