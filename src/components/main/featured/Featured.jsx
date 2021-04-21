import React from 'react'
import './featured-styles.scss'

const Featured = () => {
  return (
    <div className="grid-wrapper">
      <div className="subheader-container">
        <h2 style={{fontSize: "2.375rem"}}>
          Featured Items
        </h2>
      </div>
      <div className="featured-content-container">
        <div className="col">
          <a href="#" style={{textDecoration: 'none'}}>
            <img src={"https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} />
            <div className="featured-description">
              <div className="featured-name">
                <b>Product Name</b>
              </div>
              <div className="featured-rating">
                {/* Still need consider the rating system */}
                <p>&starf;&starf;&starf;&starf;&starf;</p>
              </div>
              <div className="featured-price">
                <p>Starting at $999.99</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#" style={{textDecoration: 'none'}}>
            <img src={"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} />
            <div className="featured-description">
              <div className="featured-name">
                <b>Product Name</b>
              </div>
              <div className="featured-rating">
                <p>&starf;&starf;&starf;&starf;&starf;</p>
              </div>
              <div className="featured-price">
                <p>Starting at $999.99</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#" style={{textDecoration: 'none'}}>
            <img src={"https://images.unsplash.com/photo-1532413992378-f169ac26fff0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} />
            <div className="featured-description">
              <div className="featured-name">
                <b>Product Name</b>
              </div>
              <div className="featured-rating">
                <p>&starf;&starf;&starf;&starf;&starf;</p>
              </div>
              <div className="featured-price">
                <p>Starting at $999.99</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Featured
