import React from 'react'
import chefImg1 from "../../assets/images/best-chef/chef-img1.png";

const ChefModal = () => {
  return (
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-body">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="team_popup_box text-center">
              <img
                src={chefImg1}
                alt="Chef_img1"
                className="img-fluid"
              />
              <h5 className="m-0">R. JONATHAN</h5>
              <span>Head Chef</span>
              <div className="modal_icons">
                <a
                  href="https://www.facebook.com/"
                  className="icon-ic"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  className="icon-ic"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="icon-ic"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="team_detail">
              <p>
                Sed luctus massa purus, sed dapibus ex condimentum
                sed. Vestibulum eget imperdiet metus, varius facilisis
                nisl. Integer et sem eros. Pellentesque ullamcorper
                imperdiet laoreet.{" "}
              </p>
              <p>
                Vivamus nulla nibh, dictum nec urna et, tristique
                elementum mi. Aenean suscipit sem nec neque pharetra,
                sed pretium leo feugiat. Etiam magna nunc, varius sit
                amet eleifend sit amet, lobortis nec nulla.
              </p>
              <div className="skill_bar">
                <div className="progresbar-counter">
                  <p className="progress-title text-start">
                    Behaviour
                  </p>
                  <div
                    className="progress-value"
                    style={{ left: "82%" }}
                  >
                    <span
                      className="count num-counter"
                      data-number="82"
                    >
                      82
                    </span>
                    %
                  </div>
                  <div className="skil-progressbar">
                    <span style={{ width: "85%" }}></span>
                  </div>
                </div>
                <div className="progresbar-counter">
                  <p className="progress-title text-start">
                    Passionate
                  </p>
                  <div
                    className="progress-value"
                    style={{ left: "90%" }}
                  >
                    <span
                      className="count num-counter"
                      data-number="90"
                    >
                      90
                    </span>
                    %
                  </div>
                  <div className="skil-progressbar">
                    <span style={{ width: "85%" }}></span>
                  </div>
                </div>
                <div className="progresbar-counter">
                  <p className="progress-title text-start">Motive</p>
                  <div
                    className="progress-value"
                    style={{ left: "80%" }}
                  >
                    <span
                      className="count num-counter"
                      data-number="80"
                    >
                      80
                    </span>
                    %
                  </div>
                  <div className="skil-progressbar">
                    <span style={{ width: "80%" }}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
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
  </div>
  )
}

export default ChefModal