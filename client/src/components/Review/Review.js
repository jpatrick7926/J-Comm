import './Review.css'

const Review = (props) => {
  return(
    <div className="review-container">
      <div className="review">
        <div className="name-container">
          <p>{props.name}</p>
        </div>
        <div className="date-container">
          <p>Reviewed on {props.date}</p>
        </div>
        <strong>{props.reviewHead}</strong>
        <p>{props.review}</p>
      </div>
    </div>
  )
}

export default Review
