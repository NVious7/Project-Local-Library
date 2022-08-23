function findAccountById(accounts, id) {
  for (let name in accounts) {
    let values = accounts[name];
    if (values.id === id) {
      return values;
    }
  }
}

// function findAccountById(accounts, id) {
//   return accounts.find((account) => account.id === id);
// }

const sortAccountsByLastName = (accounts) => {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((result, book) => {
    if (book.borrows.some((borrow) => borrow.id === account.id)) {
      result++;
    }
    return result;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let filterBooks = books.filter((book) => book.borrows[0].id === account.id && !book.borrows[0].returned);
  // filter out all the books that the most recent borrow matches the account passed in and not returned yet.
  
  let booksPossessedWithAuthors = filterBooks.map((book) => {
      book["author"] = authors.find((author) => author.id === book.authorId);
      return book;
    });
  //create a new arroy of those filtered books but include the author. 

    return booksPossessedWithAuthors;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
