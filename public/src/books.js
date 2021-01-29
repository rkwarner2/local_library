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

/*

    accounts.find((account) => {
      account.id === borrow.id
      []...account, borrowed.returned]
    })


{account
  "id": "5f446f2ecfaf0310387c9603",
  "name": {
    "first": "Esther",
    "last": "Tucker"
  },
  "picture": "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
  "age": 25,
  "company": "ZILLACON",
  "email": "esther.tucker@zillacon.me",
  "registered": "Thursday, May 28, 2015 2:51 PM"
}
*/


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
