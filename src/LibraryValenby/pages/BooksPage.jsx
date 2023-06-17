
import { Grid, Typography } from "@mui/material"

import { useLibrary } from "../../hooks"
import { LibraryLayout } from "../layout/LibraryLayout"
import { useEffect, useState } from "react"

export const BooksPage = () => {

const {viewBooks} = useLibrary()
const [books, setBooks] = useState([]);

useEffect(() => {
  const fetchBooks = async () => {
    try {
      const booksData = await viewBooks();
      setBooks(booksData);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  fetchBooks();
}, []);

  return (
    <LibraryLayout>
    <Grid container
          p={3}
          direction='column'
          justifyContent='center'
          alignItems='center'
    >

      <Grid item>
        <Typography variant="h3" fontFamily='fantasy'>Tienda de libros</Typography>
      </Grid>

        {books.map((book) => (
          <Grid mt={3} item key={book._id}>


            <Typography variant="h6" textAlign='center' >{book.title}</Typography>
            <Typography variant="body1" textAlign='center' fontFamily='monospace' >{book.author}</Typography>
            <Typography variant="body1" textAlign='center' fontFamily='serif' lineHeight={2} mt={2}>{book.description}</Typography>
            <Typography variant="body1" > Categoria: {book.category}</Typography>
            <Typography> Tags:  { book.tags.map((tag)=> (
             <b key={tag}> { tag}, </b> ))}</Typography>
          </Grid>
        ))}

   
  </Grid>

    </LibraryLayout>
  )
}
