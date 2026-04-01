const myLibrary =[]

function Book(name, author, pages, already_read){
    if (!new.target) throw Error('Make sure to use new keyword to instansiate an object!')
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.already_read = already_read;
}


function addBooktoLibrary(name, author, pages, already_read){
    let newBook = new Book(name, author,pages)
    myLibrary.push(newBook);
}


