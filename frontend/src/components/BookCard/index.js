import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const BookCard = (props) => {
    const {bookDetails} = props;
    const {id, volumeInfo} = bookDetails;
    const {title, imageLinks} = volumeInfo;
    
  return (
    <Link className='book-link' to={`/volumes/${id}`}>
      <div className='book-card'>
          {imageLinks && imageLinks.thumbnail && (
            <img src={imageLinks.thumbnail} alt={title} className='book-image' />
          )}
          <p className='book-title'> {title} </p>          
      </div>
    </Link>
    
  )
}

export default BookCard