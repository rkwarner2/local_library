function findAuthorById(authors, id)
{
  return authors.find(author => author.id === id)
}

function findBookById(books, id)
{
  return books.find(book => book.id === id)

}

function partitionBooksByBorrowedStatus(books)
{
  let checkedIn = []
  let checkedOut = []
  books.reduce((acc, book) => {
    
    const lastActivity = book.borrows[0]
    if (lastActivity.returned)
    {
      checkedIn.push(book)
    }
    else
    {
      checkedOut.push(book)
    }
  },[])
  return [checkedOut, checkedIn]
}

function getBorrowersForBook(book, accounts)
{
  let borrowers = []
  for (borrow of book.borrows)
  {
    console.log("This is borrow: " + borrow)
    let userAccount = accounts.find(account => account.id === borrow.id)
    console.log("This is userAccount: " + userAccount)
    let item = {...borrow, ...userAccount}

    borrowers.push(item)
  
  }
  return borrowers.splice(0,10)
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
