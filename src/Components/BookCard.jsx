import { Link, useOutletContext } from 'react-router-dom'
import Wrapper from '../assets/wrappers/BookCard'
const BookCard = ({ image, name, id, info}) => {
  // const data = useOutletContext();
  // console.log(data);
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <p>{info}</p>
        <Link to={`/book/${id}`} className="btn">
          details
        </Link>
      </div>
      <button className="btn">Add to Favourites</button>
    </Wrapper>
  )
}
export default BookCard
