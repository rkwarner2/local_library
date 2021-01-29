function findAccountById(accounts, id)
{
  // loop through the accounts object and FIND an account with the matching id param
  // return that account object
  return accounts.find(account => account.id === id)  
}

function sortAccountsByLastName(accounts) 
{
  //loop through the accounts object: 
  return accounts.sort((AccountA, AccountB) => AccountA.name.last < AccountB.name.last ? -1 : 1)
  //  look at the last name
  //  check a vs b and sort
}

function numberOfBorrows(account, books) //lets refractor this one
{
  let totalBorrows = 0
  books.forEach((book) => {
    for (borrow of book.borrows)
    {
      console.log(borrow)
      if (borrow.id === account.id)
      {
        totalBorrows += 1
      }
    }
  })
  //loop through the account, get sum of books borrowed 
  return totalBorrows 
}

function getBooksPossessedByAccount(account, books, authors) //this will use the spread operator
{
  let accountId = account.id
  let usersBooks = books.filter((book) => {
    const checkedOut = book.borrows[0]
    if (checkedOut.returned === false && checkedOut.id === accountId)
    {
      return book
    }
  })
  console.log("This is userbooks: " + usersBooks)

  checkedOutByUser = usersBooks.map((userBook) =>
  {
    let author = authors.find((author) => (author.id === userBook.authorId))
    return {...userBook, author}
  })

  return checkedOutByUser
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};