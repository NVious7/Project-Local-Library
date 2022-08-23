function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowed = borrowedBooks(books);
  return borrowed.length;
}

//helper
const borrowedBooks = (books) => {
  return books.filter((book) => !book.borrows[0].returned)
}


function getMostCommonGenres(books) {
  let result = [];
  let mostCommon = books.reduce((result, book) => {
    if (result[book.genre]) {
      result[book.genre]++
    } else {
      result[book.genre] = 1
    }
    return result
  }, {})
  for (let name in mostCommon) {
    let values = mostCommon[name];
    result.push({
      name: name,
      count: values
    })
  }
  return result.sort((resultA, resultB) => resultB.count - resultA.count).slice(0, 5);
}

function getMostPopularBooks(books) {
 return books.map((book) => {
   return { name: book.title, count: book.borrows.length };
  }).sort((a, b) => (b.count - a.count)).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  return authors.map((author) => {
      return {
        name: `${author.name.first} ${author.name.last}`,
        count: books.reduce((result, book) => {
          if (book.authorId === author.id) {
            result += book.borrows.length;
          }
          return result;
        }, 0)
      }
  }).sort((resultA, resultB) => resultB.count - resultA.count).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
