import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {review: 0}

  onClickLeftArrow = () => {
    const {review} = this.state
    if (review > 0) {
      this.setState(prevState => ({review: prevState.review - 1}))
    }
  }

  onClickRightArrow = () => {
    const {review} = this.state
    if (review < 3) {
      this.setState(prevState => ({review: prevState.review + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {review} = this.state
    const reviewDetails = reviewsList[review]

    return (
      <div className="divContainer">
        <h1 className="heading">Reviews</h1>
        <img src={reviewDetails.imgUrl} alt={reviewDetails.username} />
        <p className="name">{reviewDetails.username}</p>
        <div>
          <button
            type="button"
            className="btnOne"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrowImages"
            />
          </button>
          <button
            type="button"
            className="btnTwo"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrowImages"
            />
          </button>
        </div>

        <p className="companyName">{reviewDetails.companyName}</p>
        <p className="description">{reviewDetails.description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
