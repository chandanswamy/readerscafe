import React, { useEffect, useState } from 'react'
import BookCard from '../BookCard'
import { Triangle } from 'react-loader-spinner'
import './index.css'

const Home = () => {
  const [booksData, setBooksData] = useState([]);
  const [searchInput, setSearchInput] = useState("travel");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');

  const bookCategories = [
    'Fiction',
    'Mystery',
    'Thriller',
    'Science Fiction',
    'Fantasy',
    'Romance',
    'Horror',
    'History',
    'Science',
    'Self-help'
  ];


  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}+subject:${category}&key=AIzaSyCU2xPEqRu1Y4GTcCf9rDoaDKtzQy_F9sI`

  useEffect(() => {
    setLoading(true)
    fetch(url)
    .then(res =>  res.json())
    .then(data => {
      setBooksData(data.items);
      setLoading(false)
    })
    .catch((error) => {
      setLoading(false)
    })
  }, [searchInput, category, url])

  useEffect(() => {
    window.scrollTo(0, 0);
  },);



  return (
    <div className='home' id='homePage'>
      <div className='seach-bar-container'>
      <h2>Discover Your Next Great Read!!!</h2>
      <input type='search'
       onChange={(e) => {
        const trimmedValue = e.target.value.trim();
        setSearchInput(trimmedValue !== "" ? trimmedValue : "english");
      }}
       className='search-input' placeholder='S e a r c h   f o r   a   G r e a t   B o o k   🔍' />
      </div>

      <ul className='category-list'>
        {bookCategories.map((eachCategory, index) => (<li key={index} className='category-item'> <button onClick={() => setCategory(eachCategory) }>{eachCategory}</button>  </li>))}
      </ul>

      {!loading ? (
        <ul className='books-list'>
            {booksData ? (
                booksData.map((eachBook) => <BookCard key={eachBook.etag} bookDetails={eachBook} />)
            ) : (
                <p>No books available</p>
            )}
        </ul>
      ) : (
        <div className='react-loader'>
          <Triangle
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />
        </div>
        
      )}
            
      <div className='section'>
        
        <div className='section-card'>
        <p> 📚 <strong>Explore a World of Books</strong></p>
        <p>Dive into our extensive collection of books that cater to every taste and interest. From timeless classics to the latest bestsellers, we've curated a diverse selection just for you.</p>
        </div>

        <div className='section-card'>
        <p> 🔍 <strong>Effortless Browsing</strong></p>
        <p>Our user-friendly interface makes finding your next favorite book a breeze. Browse by genre, author, or use our powerful search feature to locate exactly what you're looking for.</p>
        </div>

        <div className='section-card'>
        <p> 🌟 <strong>Handpicked Recommendations</strong></p>
        <p>Not sure where to start? Trust our expert recommendations! We've handpicked titles that have captivated readers and critics alike. Explore curated lists to uncover hidden gems and undiscovered treasures.</p>
        </div>        

        <div className='section-card'>
        <p> 📖 <strong>Readers' Choice</strong></p>
        <p>Join a community of passionate readers. Discover what others are loving with our "Readers' Choice" section. These are the books that have left a mark on our community, sparking discussions and creating unforgettable reading experiences.</p>
        </div>

        <div className='section-card'>
        <p> 📆 <strong>Stay Updated</strong></p>
        <p>Never miss a release or a special promotion. Subscribe to our newsletter and be the first to know about upcoming titles, exclusive offers, and literary events. Stay connected with the vibrant world of literature.</p>
        </div>

        <div className='section-card'>
        <p> 🛒 <strong>Convenient Shopping</strong></p>
        <p>Once you've found your next adventure, our secure and convenient checkout process ensures a hassle-free shopping experience. Choose from multiple payment options and have your books delivered right to your doorstep.</p>
        </div>

        <div className='section-card'>
        <p> ✨ <strong>Immerse Yourself in Stories</strong></p>
        <p>Whether you're a seasoned bookworm or just starting your reading journey, [Your Bookstore Name] is here to inspire and delight. Let the magic of storytelling transport you to new worlds and enrich your life one page at a time.</p>
        </div> 

      </div>
      <p className='end-tagline'>Start exploring! Start imagining! Start reading!</p>
      
    </div>
        
  )
}

export default Home