class book{
  constructor(
  //Define parameters
  name,
     pages,
  title,
  isAvailable,
  status
  
   )
    {
     //Define properties
     this.name = name;
     this.pages = pages;
     this.title = title;
     this.isAvailable = isAvailable;
     this.status = status;
     
   }
     
  //Add method

  expire(exp1) {
    this.status = exp1;
  
    }

};

let book1 = new book('English', 20, 'The Red book', true, 'available');

console.log(book1);

book1.expire('old')


console.log(book1);

let content = `<h1>Template Literal Exammple</h1>
 <li>Name: ${book1.name}</li>
     <li>Pages: ${book1.pages}</li>
     <li>Title: ${book1.title}</li>
     <li>Available: ${book1.isAvailable}</li>
    <li>Status: ${book1.status}</li>`;
  


document.body.innerHTML = content;

