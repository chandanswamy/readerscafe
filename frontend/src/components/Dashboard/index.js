import React , {useEffect, useState} from 'react'
import { MdDynamicFeed } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import '../Dashboard/index.css'
import BookCard from '../BookCard';
import { Triangle } from 'react-loader-spinner';

const Dashboard = () => {

  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `https://www.googleapis.com/books/v1/volumes?q=time&key=AIzaSyCU2xPEqRu1Y4GTcCf9rDoaDKtzQy_F9sI`

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
  }, [])

  
 
  useEffect(() => {
    window.scrollTo(0, 0);
  },);

  return (
    <div className='dashboard'>
      <div className='desktop-sidebar'>
        <ul className='sidebar-list'>
          <li className='sidebar-item'>
            <div className='sidebar-item-container'>
              <MdDynamicFeed className='sidebar-icon' />
              <p className='sidebar-item-name'>My Feed</p>
            </div>
          </li>
          <li className='sidebar-item'>
            <div className='sidebar-item-container'>
              <GiBookshelf className='sidebar-icon' />
              <p className='sidebar-item-name'>My Collections</p>
            </div>
          </li>
          <li className='sidebar-item'>
            <div className='sidebar-item-container'>
              <FaPlus className='sidebar-icon' />
              <p className='sidebar-item-name'>My List</p>
            </div>
          </li>
        </ul>
      </div>
      <div className='dashboard-content'> 
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
      </div>
      
    </div>
  )
}

export default Dashboard