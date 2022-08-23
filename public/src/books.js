function findAuthorById(authors, id) {
  for (let author of authors) {
    if (id === author.id) {
      return author;
    }
  }
}

function findBookById(books, id) {
  return find(books, id);
}

//helper
const find = (books, id) => books.find((book) => book.id === id);


function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book) => book.borrows[0].returned);
  let booksBorrowed = books.filter((book) => !book.borrows[0].returned);
  let booksStatus = [[...booksBorrowed], [...booksReturned]];
  return booksStatus;
}

function getBorrowersForBook(book, accounts) {
  let {borrows} = book;
  return borrows
  .map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    let result = { ...borrow, ...account };
    return result;
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
