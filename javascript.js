const myLibrary =[]

function Book(name, author, pages, already_read){
    if (!new.target) throw Error('Make sure to use new keyword to instansiate an object!')
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.already_read = already_read;
}




const mainContent = document.querySelector(".mainContent");
const addBookSubmitbtn = document.querySelector(".submit-form-btn")


addBookSubmitbtn.addEventListener("click", function(e){
    e.preventDefault()
    let bookName = document.querySelector("#book-name");
    let authorName = document.querySelector("#book-author")
    let bookPages = document.querySelector("#book-pages")
    let bookFinish = document.querySelector('input[name="finish-book"]:checked')
    addBookTolibrary(bookName.value,authorName.value,bookPages.value,bookFinish.value)

})



function addBookTolibrary(bookName,authorName,bookPages,bookFinish){  
    let newBook = new Book(bookName,authorName,bookPages,bookFinish)
    myLibrary.push(newBook);
    insertBookInDom(bookName,authorName,bookPages,bookFinish)
}


function insertBookInDom(bookName,authorName,bookPages,bookFinish){
    let article = document.createElement("article");
    let h3 = document.createElement('h3');
    let div = document.createElement("div")
    let bookNameP = document.createElement('h3');
    let bookAuthorP = document.createElement('p');
    const deleteBookBtn = document.createElement("button");
    let bookPagesP = document.createElement("p")
    h3.textContent = `${bookName}`;
    bookAuthorP.textContent= `Author:${authorName}`;
    deleteBookBtn.classList.add("book-delete-btn")
    deleteBookBtn.innerText = "Remove"
    console.log(h3, div)
    bookPagesP.textContent = `Pages: ${bookPages}`;
   
    let bookState = document.createElement("p");

    if(bookFinish =="true"){
        bookState.textContent = `Status: Finished`
    }else if(bookFinish == "false"){
        bookState .textContent = `Status: In progress`
    }
    bookState.classList.add("bookStateP")
    div.append(bookNameP, bookAuthorP, bookPagesP, bookState);
    div.classList.add("bookInfoContainer")
    article.append(h3,div, deleteBookBtn);
    article.classList.add("card")
    mainContent.appendChild(article);
}



