// Get the modal
var modal = document.getElementById("myModal");
        
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const myLibrary = [];

function Book(title, author, pages, readingStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readingStatus = readingStatus;
    this.info = function() {
         return `${title} by ${author}, ${pages} pages, ${readingStatus}`;
    };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet");
myLibrary.push(theHobbit);


function addBookToLibrary() {

    const frm = document.getElementById("myForm")

    const btn = document.getElementById("submit");

    btn.addEventListener("click", (event) => {


        const tbody = document.getElementById("tbody");
        empty(tbody);
        
        const myBook = new Book(document.getElementById("title").value, 
                                document.getElementById("author").value, 
                                document.getElementById("pages").value,
                                document.getElementById("readingStatus").value);
        myLibrary.push(myBook);
        frm.reset(); 
        modal.style.display = "none";
        displayBookOnPage();
        event.preventDefault();
    })

}
addBookToLibrary();
handleDeletingBooks();
handleReadingBooks();

function handleDeletingBooks(){
    const deleting = document.querySelectorAll(".deleteBtn");
    deleting.forEach((deletedBook) => {
        deletedBook.addEventListener("click", ()=> {
            const result = confirm("Want to delete this book?");
            if (result == true) {
                empty(tbody);
                myLibrary.splice(deletedBook.id, 1);
                displayBookOnPage();
            }
        });
    });

}

function handleReadingBooks(){
    const read = document.querySelectorAll(".readBtn");
    read.forEach((readBook) => {
        readBook.addEventListener("click", ()=> {
            empty(tbody);
            if(readBook.className === "readBtn")
                myLibrary[readBook.id].readingStatus = "Read";
            else
                myLibrary[readBook.id].readingStatus = "Not read yet";
            displayBookOnPage();
        });
    });
}


function displayBookOnPage() {
    const tbody = document.getElementById("tbody");
    myLibrary.forEach( (book, index) => {
        const row = document.createElement("tr");
        const title = document.createElement("td");
        title.textContent = book.title;
        const author = document.createElement("td");
        author.textContent = book.author;
        const pages = document.createElement("td");
        pages.textContent = book.pages;
        const readingStatus = document.createElement("td");
        readingStatus.textContent = book.readingStatus;
        const action = document.createElement("td");

        const deleteBtn = document.createElement("button");
        deleteBtn.id = index;
        deleteBtn.className = "deleteBtn";
        const deleteImg = document.createElement("img");
        deleteImg.setAttribute("src", "images/delete.svg");
        deleteImg.setAttribute("title", "delete");
        deleteImg.id = "deleteImg";
        deleteBtn.appendChild(deleteImg);

        const readBtn = document.createElement("button");
        readBtn.id = index;
        const readImg = document.createElement("img");
        if(book.readingStatus !== "Read"){
            readImg.setAttribute("src", "images/read.svg");
            readImg.setAttribute("title", "mark as read");
            readBtn.className = "readBtn";
        } else {
            readImg.setAttribute("src", "images/notebook-remove.svg");
            readImg.setAttribute("title", "unread");
            readBtn.className = "readBtn unreadBtn";
        }

        readImg.id = "readImg";
        readBtn.appendChild(readImg);

        action.appendChild(readBtn);
        action.appendChild(deleteBtn);

        tbody.appendChild(row);
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(readingStatus);
        row.appendChild(action);
    });
    handleDeletingBooks();
    handleReadingBooks();
}

function empty(element) {
    while(element.firstElementChild) {
        element.firstElementChild.remove();
    }
}


