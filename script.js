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


function addBookToLibrary() {

    const title = prompt("Book title?");
    const author = prompt("Book author?");
    const pages = prompt("How many pages?");
    const readingStatus = prompt("What's your reading status?");

    const myBook = new Book(title, author, pages, readingStatus);

    myLibrary.push(myBook);

    console.table(myLibrary);

}

addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
addBookToLibrary();

function displayBooksOnPage() {
    //If library contains books
    const container = document.querySelector("#container");
    const table = document.createElement("table");
    const row = document.createElement("tr");
    const title = document.createElement("th");
    title.textContent = "Title";
    const author = document.createElement("th");
    author.textContent = "Author";
    const pages = document.createElement("th");
    pages.textContent = "Pages";
    const readingStatus = document.createElement("th");
    readingStatus.textContent = "Reading Status";
    container.appendChild(table);
    table.appendChild(row);
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(readingStatus);
    myLibrary.forEach(book => {
        const row = document.createElement("tr");
        const title = document.createElement("td");
        title.textContent = book.title;
        const author = document.createElement("td");
        author.textContent = book.author;
        const pages = document.createElement("td");
        pages.textContent = book.pages;
        const readingStatus = document.createElement("td");
        readingStatus.textContent = book.readingStatus;
        table.appendChild(row);
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(readingStatus);
    });
}

displayBooksOnPage();