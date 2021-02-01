//helper function
function _sortByValue(objArray)
{
 return objArray.sort((a, b) => {
    if (a.count > b.count)
    {
      return -1
    }
    else if (a.count < b.count)
    {
      return 1
    }
  },[])
      //return (array.sort((a,b) => (a.sortby, b.sortby ? -1 : 1)))
}


function totalBooksCount(books)
{
  return books.length
}

function totalAccountsCount(accounts)
{
  return accounts.length
}

function booksBorrowedCount(books) //refactor this one too
{
  let totalBorrowedCount = 0
  for (book of books)
  {
    if (book.borrows[0].returned === false)
    {
      totalBorrowedCount += 1
    }
  }
  return totalBorrowedCount
}

function getMostCommonGenres(books)
{
  const mostCommonGenres = books.reduce((acc, { genre } ) => {
    if (!acc[genre])
    {
      acc[genre] = 1
    }
    else
    {
      acc[genre] += 1
    }
    return acc
  }, [])

  let results = []
  for (item in mostCommonGenres)
  {
    results.push({name: item, count: mostCommonGenres[item]})
  }

  return results.sort((a,b) => a.count > b.count ? -1 : 1).splice(0,5) 

}

function getMostPopularBooks(books) // WE KNOW WHAT TO DO WITH THIS
{
  const mostPopularBooks = books.reduce((acc, book) => {
    let title = book.title
    let borrowCount = book.borrows.length
    let item = { name: title, count: borrowCount }
    acc.push(item)
    return acc }, [])
   // .sort((a,b) => a.count > b.count ? -1 : 1).splice(0,5)

   return ((_sortByValue(mostPopularBooks)).splice(0,5))
  //console.log(mostPopularBooks)

}

function getMostPopularAuthors(books, authors)
{
  //i want to create an array containing each author, with all their books.
  
  let authorsBooks = []
  authors.forEach((author) => {
    let authorID = author.id
    let authorFullName = `${author.name.first} ${author.name.last}`
    let borrowCount = 0
    books.forEach((book) => {
      if (book.authorId === authorID)
      {
        borrowCount += book.borrows.length
      }
    })
    authorsBooks.push({name: authorFullName, count: borrowCount})
  })

  return ((_sortByValue(authorsBooks)).splice(0,5))
  //return authorsBooks.sort((a,b) => a.count > b.count ? -1 : 1).splice(0,5)
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
