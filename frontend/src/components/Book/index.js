import React, { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {BallTriangle} from 'react-loader-spinner'
import { FaPlus } from "react-icons/fa6";
import BookCard from '../BookCard'
import '../Book/index.css'

const Book = () => {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh mi, eleifend in semper a, ultrices et eros. Aliquam consequat mauris sed interdum tempus. Curabitur at maximus augue. Vestibulum porttitor auctor ultricies. Phasellus at ex posuere, dignissim risus in, ultricies ligula. Vivamus dictum sapien et enim aliquam euismod. Maecenas felis mi, elementum ac turpis eget, tincidunt rhoncus nulla. Cras in faucibus turpis, sit amet lobortis ex. Nam nec pulvinar lorem, a fermentum eros. Etiam nec odio eros. Nam congue erat sit amet nisi facilisis, non aliquet dui tempus. In a sodales ipsum. Vivamus sed neque consequat, convallis est rutrum, lobortis lorem. Ut volutpat fringilla tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.    Nulla auctor eget est a egestas. Suspendisse vitae vehicula justo. Fusce nec ipsum turpis. Sed iaculis maximus augue non commodo. Sed nec tincidunt sapien. Ut sed molestie neque. Integer eleifend magna ut aliquam dictum. Integer non rhoncus nunc. In fermentum, velit vel ullamcorper lacinia, libero mi molestie quam, id consequat sem velit sit amet justo. Ut eget turpis sapien. Mauris sed ultricies nibh.";
    const props = useParams()
    const {id} = props
    const [loading, setLoading] = useState(true);
    const [bookData, setBookData] = useState({});
    const [booksData, setBooksData] = useState([]);

    const {volumeInfo = {} } = bookData;
    const {title, subtitle,authors,publisher,publishedDate,description,categories,imageLinks} = volumeInfo;

    const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyCU2xPEqRu1Y4GTcCf9rDoaDKtzQy_F9sI`;

    const similarBooksUrl = `https://www.googleapis.com/books/v1/volumes?q=+inauthor:${authors}&key=AIzaSyCU2xPEqRu1Y4GTcCf9rDoaDKtzQy_F9sI`

    const onAddBook = () => {

    }

    useEffect(() => {
        setLoading(true);
      
        // First API call to get individual book data
        fetch(url)
          .then(res => res.json())
          .then(data => {
            setBookData(data);
          })
          .catch((error) => {
            setLoading(false);
          });
      }, [id]); // Only trigger when the 'id' changes
      
      useEffect(() => {
        // Second API call to get similar books data
        fetch(similarBooksUrl)
          .then(res => res.json())
          .then(data => {
            setBooksData(data.items);
          })
          .catch((error) => {
            setLoading(false);
          })
          .finally(() => {
            // Both API calls are completed, setLoading to false
            setLoading(false);
          });
      }, [authors]);

    

    useEffect(() => {
        window.scrollTo(0, 0);
    },);



  return (
    <div className='book'>
        <div className='book-container'>
            {
                !loading ? (
                    <>
                        <div className='book-details-container'>
                            <div className='book-title-container'>
                                {imageLinks && imageLinks.thumbnail && (
                                    <img src={imageLinks.thumbnail} alt={title} className='book-thumbnail' />
                                )}
                                <h2 className='book-page-title'>{title}</h2>
                            </div>                
                            <div className='book-content'>                
                                <h2 className='book-page-subtitle'>{subtitle}</h2>
                                <h3 className='book-page-author'>{authors}</h3>
                                <div className='rating-container'>
                                    {publisher && (<p className='book-page-publish'>Publisher : {publisher}</p>) }
                                    {publishedDate && (<p className='book-page-publish'>First Published: {publishedDate}</p>)}                    
                                </div>
                                {categories && (<p className='book-page-category'>{categories}</p>)}              
                            </div>
                            <div className='button-container'>
                                <button className='add-button' onClick={onAddBook}>
                                    Add to Collection
                                    <FaPlus />
                                </button>
                            </div>
                        </div>
                        <div className='book-details-container'>
                            <div className='book-description-container'>
                                <h4 className='description'>Description</h4>
                                <p className='paragraph'>{description} + {loremIpsum}</p>
                            </div>
                        </div>
                        <div className='similar-books'> 
                            <h4 className='description'>Similar Books</h4>
                            <ul className='books-list'>
                                {booksData ? (
                                    booksData.map((eachBook) => <BookCard key={eachBook.etag} bookDetails={eachBook} />)
                                ) : (
                                    <p>No books available</p>
                                )}
                            </ul>
                        </div>
                    </>
                ) : (
                    <div className='react-loader'>
                        <BallTriangle
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        />
                    </div>
                )
            }
            
            
       </div>
    </div>
  )
}

export default Book