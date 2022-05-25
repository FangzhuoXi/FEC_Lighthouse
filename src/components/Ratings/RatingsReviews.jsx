import React from 'react';
import ReviewList from './ReviewList.jsx';

const RatingsReviews = ({productId}) => {
    return (
      <>
      <h1>Reviews for {productId}</h1>
      <ReviewList productId={productId}/>
      </>
    )
}

export default RatingsReviews;