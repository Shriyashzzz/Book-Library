const myLibrary =[]
displayBooks()


function Book(name, author, pages, already_read){
    if (!new.target) throw Error('Make sure to use new keyword to instansiate an object!')
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.already_read = already_read;
    this.toggleRead = function(){
        if(this.already_read == "Finished"){
            this.already_read = "Not Finished"
        }else if(this.already_read == "Not Finished"){
            this.already_read = "Finished"
        }
    };
}




const formDialog = document.querySelector("#addBookDialog");
const bookAddForm = document.querySelector(".addBookForm");
const addBookSubmitbtn = document.querySelector(".submit-form-btn")
const closeFormButton = document.querySelector(".closeDialog-btn")

closeFormButton.addEventListener("click" ,() => {
    bookAddForm.reset();
})

bookAddForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const book = new Book(
        document.querySelector("#book-name").value,
        document.querySelector("#book-author").value,
        document.querySelector("#book-pages").value,
        document.querySelector('input[name="finish-book"]:checked')?.value

    );
    myLibrary.push(book);
    displayBooks()
    e.target.reset();
    formDialog.close();

   
});






function createDomArticle(book) { 
    
    const { name, author, pages, already_read } = book;  
    const article = document.createElement("article");
    const h3 = document.createElement('h3');
    const div = document.createElement("div");
    const bookAuthorP = document.createElement('p');
    const deleteBookBtn = document.createElement("button");
    const bookPagesP = document.createElement("p");
    const bookState = document.createElement("p");
    const svgDelteImg = document.createElement('img');
   
    h3.textContent = name;
    bookAuthorP.textContent = `Author: ${author}`;
    bookPagesP.textContent = `Page: ${pages}`;
    bookState.textContent = `Status: ${already_read}`;
    bookState.classList.add("bookStateP");
    svgDelteImg.src = 'icons/delete.svg';
    svgDelteImg.classList.add("icons", "deleteicon");
    const svgReadImg = document.createElement('img');
    svgReadImg.src = 'icons/eye.svg';
    svgReadImg.classList.add("icons", "readIcons")
    deleteBookBtn.classList.add("book-delete-btn");
    deleteBookBtn.append(svgReadImg, svgDelteImg);
    svgDelteImg.addEventListener('click', (e) =>{
       deleteBook(e)
    } )
    svgReadImg.addEventListener('click', (e) =>{
        toggleReadStage(e);
    } )
    article.setAttribute('data-id', book.id)
    div.classList.add("bookInfoContainer");
    div.append(bookAuthorP, bookPagesP, bookState);
    article.classList.add("card");
    article.append(h3, div, deleteBookBtn);

    
    return article;
    
}



function displayBooks() {
  const mainContent = document.querySelector(".mainContent");
  mainContent.innerHTML = '' 
  
  myLibrary.forEach((book) => {
    mainContent.appendChild(createDomArticle(book));
  })

}


function deleteBook(e){
    const deleteArticle = e.target.closest('.card');
    for(let i = 0 ;i < myLibrary.length ;i++){
        if (deleteArticle.dataset.id == myLibrary[i].id){
            myLibrary.splice(i,1);
        }
    }
    displayBooks()
}

function toggleReadStage(e){

    const readArticle = e.target.closest('.card');
    console.log(readArticle.dataset.id)
    for(let i = 0 ;i < myLibrary.length ;i++){
        if (readArticle.dataset.id == myLibrary[i].id){
            myLibrary[i].toggleRead();
             }
    }
    displayBooks();
}