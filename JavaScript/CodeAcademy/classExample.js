/*
function BOOK(name, author) {
  this.name = name;
  this.author = author;
  
  const book1 = new BOOK('book one', 'John');
}
*/

class BOOK{
  constructor(name, author) {
    this.name = name;
    this.author = author;
    
  }
  details() {
    return `${this.name} was writen by ${this.author}`;
  }
  
  
}

const book1 = new BOOK('book one', 'John');
console.log(book10;)