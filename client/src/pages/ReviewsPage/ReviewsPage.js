import './ReviewsPage.css'

// components
import Review from '../../components/Review/Review'

const ReviewsPage = () => {
  return (
    <div className="reviews-page-container">
      <Review
      name='John Doe'
      date='09/10/2021'
      reviewHead='This site is beautifully made!'
      review='You can tell that the developers put a ton of effort and hard work to build this site and make it functional!'/>
      <Review
      name='Ree L. Guy'
      date='09/10/2021'
      reviewHead='I am blown away!'
      review='Love the fact that this site was built with React.js! Keeps everything working fast and snappy.'/>
      <Review
      name='Joshua Castillo'
      date='09/10/2021'
      reviewHead='Went above and beyond my expectations!'
      review="Is that redux that I'm sensing? Very nice touch!"/>
      <Review
      name='Juan Marin'
      date='09/10/2021'
      reviewHead='Utterly and completely satisfied!'
      review='I wish I had these developers on my team when I was building my website!'/>
    </div>
  )
}

export default ReviewsPage
