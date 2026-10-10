import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";
import popupImg1 from "../../assets/images/popup/popup-img1.png";
import popupImg2 from "../../assets/images/popup/popup-img2.png";
import popupImg3 from "../../assets/images/popup/popup-img3.png";
import popupImg4 from "../../assets/images/popup/popup-img4.png";
import popupImg5 from "../../assets/images/popup/popup-img5.png";
import avtarImg from "../../assets/images/popup/avtar-img.png";
import blogImg1 from "../../assets/images/blog/blog-img1.png";
import blogImg2 from "../../assets/images/blog/blog-img2.png";
import blogImg3 from "../../assets/images/blog/blog-img3.png";

const BlogModal = () => {
  return (
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-body">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="modal_blog_popup">
                <span>JUNE 02, 2022</span>
                <div className="modal_title">Simplicity is complex</div>
                <p>
                  Sed luctus massa purus, sed dapibus ex condimentum sed.
                  Vestibulum eget imperdiet metus, varius facilisis nisl.
                  Integer et sem eros. Pellentesque ullamcorper imperdiet
                  laoreet. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Donec in
                  consectetur sem, quis blandit nulla. Vivamus nulla nibh,
                  dictum nec urna et, tristique elementum mi. Aenean suscipit
                  sem nec neque pharetra, sed pretium leo feugiat. Etiam magna
                  nunc, varius sit amet eleifend sit amet, lobortis nec nulla.
                </p>
                <Swiper
                  centeredSlides={true}
                  spaceBetween={30}
                  speed={900}
                  simulateTouch
                  clickable="true"
                  parallax
                  effect="slide"
                  freeMode
                  watchSlidesProgress
                  slidesPerView={2}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                  }}
                  breakpoints={{
                    767: { slidesPerView: 1, spaceBetween: 15 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                  }}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  className="mySwiper swiper blog-slider"
                  modules={[FreeMode, Autoplay, Navigation]}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="col-12 col-md-6 col-lg-6 swiper-slide">
                      <div className="blog-modal-img">
                        <img
                          src={popupImg1}
                          alt="popup-img1 img"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="col-12 col-md-6 col-lg-6 swiper-slide">
                      <div className="blog-modal-img">
                        <img
                          src={popupImg2}
                          alt="popup-img2 img"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="col-12 col-md-6 col-lg-6 swiper-slide">
                      <div className="blog-modal-img">
                        <img
                          src={popupImg3}
                          alt="popup-img3 img"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="col-12 col-md-6 col-lg-6 swiper-slide">
                      <div className="blog-modal-img">
                        <img
                          src={popupImg4}
                          alt="popup-img4 img"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="col-12 col-md-6 col-lg-6 swiper-slide">
                      <div className="blog-modal-img">
                        <img
                          src={popupImg4}
                          alt="popup-img4 img"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="col-12 col-md-6 col-lg-6 swiper-slide">
                      <div className="blog-modal-img">
                        <img
                          src={popupImg5}
                          alt="popup-img5 img"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <div className="swiper-button-prev">
                    <i className="fa-solid fa-angle-left"></i>
                  </div>
                  <div className="swiper-button-next">
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                </Swiper>
                <div className="blog_inn_content">
                  <p>
                    Sed luctus massa purus, sed dapibus ex condimentum sed.
                    Vestibulum eget imperdiet metus, varius facilisis nisl.
                    Integer et sem eros. Pellentesque ullamcorper imperdiet
                    laoreet. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Donec in
                    consectetur sem, quis blandit nulla. Vivamus nulla nibh,
                    dictum nec urna et, tristique elementum mi. Aenean suscipit
                    sem nec neque pharetra, sed pretium leo feugiat. Etiam magna
                    nunc, varius sit amet eleifend sit amet, lobortis nec nulla.
                    Vestibulum eget imperdiet metus, varius facilisis nisl.
                    Integer et sem eros. Pellentesque ullamcorper imperdiet
                    laoreet. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Donec in
                    consectetur sem, quis blandit nulla. Vivamus nulla nibh,
                    dictum nec urna et, tristique elementum mi.
                  </p>
                  <div className="light_bg_shape">
                    <div>
                      Our tasting menu presents a seasonal selection from our
                      trusted farmers, foragers and hunters.
                    </div>
                  </div>
                  <p>
                    Sed luctus massa purus, sed dapibus ex condimentum sed.
                    Vestibulum eget imperdiet metus, varius facilisis nisl.
                    Integer et sem eros. Pellentesque ullamcorper imperdiet
                    laoreet. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Donec in
                    consectetur sem, quis blandit nulla. Vivamus nulla nibh,
                    dictum nec urna et, tristique elementum mi. Aenean suscipit
                    sem nec neque pharetra, sed pretium leo feugiat. Etiam magna
                    nunc, varius sit amet eleifend sit amet, lobortis nec nulla.
                  </p>
                </div>

                <div className="blog-post-comment">
                  <h3 className="m-0">Comments</h3>
                  <h4 className="d-none">hidden</h4>
                  <ul className="comment-list">
                    <li
                      className="comment even thread-even depth-1 post-comment"
                      id="li-comment-29"
                    >
                      <div className="comment-user">
                        <div className="comment-avatar">
                          <img
                            src={avtarImg}
                            alt="blog-avtar"
                            width="80"
                            height="80"
                          />
                        </div>
                        <div className="blog-comment-box">
                          <div className="comment-head">
                            <h5 className="d-none">hidden</h5>
                            <h6>Kiya Lose</h6>
                            <div className="comment_date">
                              <span>4:00 am</span>
                              <span>August 25, 2021</span>
                            </div>
                          </div>
                          <div className="comment-content">
                            <p>
                              Sed ipsam culpa esse amet quaerat doloribus nam
                              sequi tempore aspernatur recusandae aliquam
                              expedita eligendi maiores quis obcaecati, illo
                              earum dolorum minima explicabo ea ut, fugiat
                              veniam in. Amet dolores commodi vitae, sint
                              debitis accusantium unde, placeat dolorum
                              necessitatibus reiciendis, explicabo velit.
                            </p>
                          </div>
                          <div className="comment-reply">
                            <a href="javascript;">Reply</a>
                            <i className="fa-solid fa-reply"></i>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="comment even thread-even depth-1 post-comment"
                      id="li-comment-30"
                    >
                      <div className="comment-user">
                        <div className="comment-avatar">
                          <img
                            src={avtarImg}
                            alt="blog-avtar"
                            width="80"
                            height="80"
                          />
                        </div>
                        <div className="blog-comment-box">
                          <div className="comment-head">
                            <h6>Joe Datt</h6>
                            <div className="comment_date">
                              <span>8:00 am</span>
                              <span>June 02, 2021</span>
                            </div>
                          </div>
                          <div className="comment-content">
                            <p>
                              Sed ipsam culpa esse amet quaerat doloribus nam
                              sequi tempore aspernatur recusandae aliquam
                              expedita eligendi maiores quis obcaecati, illo
                              earum dolorum minima explicabo ea ut, fugiat
                              veniam in. Amet dolores commodi vitae, sint
                              debitis accusantium unde, placeat dolorum
                              necessitatibus reiciendis, explicabo velit.
                            </p>
                          </div>
                          <div className="comment-reply">
                            <a href="javascript;">Reply</a>
                            <i className="fa-solid fa-reply"></i>
                          </div>
                        </div>
                      </div>
                      <ul className="child_box">
                        <li
                          className="comment even thread-even depth-1 post-comment"
                          id="li-comment-31"
                        >
                          <div className="comment-user">
                            <div className="comment-avatar">
                              <img
                                src={avtarImg}
                                alt="blog-avtar"
                                width="80"
                                height="80"
                              />
                            </div>
                            <div className="blog-comment-box">
                              <div className="comment-head">
                                <h6>Pitter Sons</h6>
                                <div className="comment_date">
                                  <span>11:00 am</span>
                                  <span>September 28, 2021</span>
                                </div>
                              </div>
                              <div className="comment-content">
                                <p>
                                  Sed ipsam culpa esse amet quaerat doloribus
                                  nam sequi tempore aspernatur recusandae
                                  aliquam expedita eligendi maiores quis
                                  obcaecati, illo earum dolorum minima explicabo
                                  ea ut, fugiat veniam in. Amet dolores commodi
                                  vitae, sint debitis accusantium unde, placeat
                                  dolorum necessitatibus reiciendis, explicabo
                                  velit.
                                </p>
                              </div>
                              <div className="comment-reply">
                                <a href="javascript;">Reply</a>
                                <i className="fa-solid fa-reply"></i>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="blog-spacer"></div>

                <div className="blog_comment">
                  <h3 className="m-0">Leave a Comment</h3>
                  <h4 className="d-none">hidden</h4>
                  <form className="comment_form">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-6">
                        <label className="col-form-label form_label" htmlFor="name">
                          Name
                        </label>
                        <input autoComplete="off"
                          type="text"
                          placeholder="Your Name"
                          className="form-control custom-form-control" id="name"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="col-form-label form_label" htmlFor="email">
                          Email
                        </label>
                        <input id="email"
                          type="email"
                          placeholder="Your Email"
                          className="form-control custom-form-control"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-12">
                        <label className="col-form-label form_label" htmlFor="comment">
                          Comment
                        </label>
                        <textarea id="comment"
                          placeholder="Type your text here"
                          className="form-control custom-form-control"
                          spellCheck="false"
                        ></textarea>
                      </div>
                      <div className="col-12 foholic_button">
                        <button className="button-light">Post Comment</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="sidebar_post">
                <div className="side_search">
                  <form className="serch-post">
                    <div className="search-ic">
                      <i className="fa fa-search"></i>
                    </div>
                    <div className="search-right">
                      <input
                        type="search"
                        className="search-field"
                        placeholder="Search …"
                        defaultValue=""
                        name="s"
                      />
                    </div>
                  </form>
                  <div className="blog-category">
                    <h5 className="d-none">hidden</h5>
                    <h6>Categories</h6>
                    <ul className="category-lists">
                      <li>Coffee</li>
                      <li>Drinks</li>
                      <li>Party</li>
                      <li>Menu</li>
                      <li>Food</li>
                      <li>Events</li>
                    </ul>
                  </div>
                  <div className="blog-post">
                    <h6>Recent Posts</h6>
                    <ul>
                      <li className="related-items">
                        <img
                          src={blogImg1}
                          alt="blog-post-img1"
                          className="post-img"
                        />
                        <div className="post_data">
                          <a className="item_title">Simplicity is complex</a>
                          <div className="latest_date">JUNE 02, 2022</div>
                        </div>
                      </li>
                      <li className="related-items">
                        <img
                          src={blogImg2}
                          alt="blog-post-img2"
                          className="post-img"
                        />
                        <div className="post_data">
                          <a className="item_title">Design is Process</a>
                          <div className="latest_date">JUNE 01, 2022</div>
                        </div>
                      </li>
                      <li className="related-items">
                        <img
                          src={blogImg3}
                          alt="blog-post-img3"
                          className="post-img"
                        />
                        <div className="post_data">
                          <a className="item_title">Aesthetic is a decision</a>
                          <div className="latest_date">JUNE 01, 2022</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="more-wraper"
            data-toggle="modal"
            data-bs-dismiss="modal"
          >
            <div className="watch-button watch-button-circle"></div>
            <div className="watch_video_button">
              <span>Close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
