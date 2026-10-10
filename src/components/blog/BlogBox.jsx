import React from 'react'
import blogImg1 from "../../assets/images/blog/blog-img1.png";
import blogImg2 from "../../assets/images/blog/blog-img2.png";
import blogImg3 from "../../assets/images/blog/blog-img3.png";
import { Link } from 'react-router-dom';

const BlogBox = () => {
  return (
    <div className="container">
    <div
      className="row wow fadeIn"
      data-wow-duration="3s"
      data-wow-delay=".4s"
    >
      <div className="col-12 col-md-4 col-lg-4">
        <div className="blog-item">
          <div className="blog-content text-center">
            <div className="blog-wrapper">
              <div className="date_pick">JUNE 02, 2022</div>
              <a
                href="javascript;"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <div className="Blog_sub_name">
                  Simplicity is complex
                </div>
              </a>
              <p className="blogs-block">
                Nunc vehicula massa vitae felis suscipit, et
                semper ligula eleifend. Cras neque justo, congue
                eget congue sit amet, sodales...
              </p>
              <a
                href="javascript;"
                className="reade_more_btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Read More
              </a>
            </div>
          </div>
          <img
            src={blogImg1}
            alt="Blog_img1"
            className="img-cover img-fluid"
          />
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-4">
        <div className="blog-item">
          <div className="blog-content text-center">
            <div className="blog-wrapper">
              <div className="date_pick">JUNE 01, 2022</div>
              <a
                href="javascript;"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <div className="Blog_sub_name">
                  Design is Process
                </div>
              </a>
              <p className="blogs-block">
                Nunc vehicula massa vitae felis suscipit, et
                semper ligula eleifend. Cras neque justo, congue
                eget congue sit amet, sodales...
              </p>
              <a
                href="javascript;"
                className="reade_more_btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Read More
              </a>
            </div>
          </div>
          <img
            src={blogImg2}
            alt="Blog_img2"
            className="img-cover img-fluid"
          />
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-4">
        <div className="blog-item">
          <div className="blog-content text-center">
            <div className="blog-wrapper">
              <div className="date_pick">JUNE 01, 2022</div>
              <a
                href="javascript;"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <div className="Blog_sub_name">
                  Aesthetic is a decision
                </div>
              </a>
              <p className="blogs-block">
                Nunc vehicula massa vitae felis suscipit, et
                semper ligula eleifend. Cras neque justo, congue
                eget congue sit amet, sodales...
              </p>
              <a
                href="javascript;"
                className="reade_more_btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Read More
              </a>
            </div>
          </div>
          <img
            src={blogImg3}
            alt="Blog_img3"
            className="img-cover img-fluid"
          />
        </div>
      </div>
    </div>
    <div className="foholic_button text-center">
      <Link to="/blog" className="button-light">
        View More
      </Link>
    </div>
  </div>
  )
}

export default BlogBox