import React, { useState, useEffect } from "react";
import $ from "jquery";
import { content, img } from "../../Data/slider_data";

var a = 0;
export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    universal(activeIndex);
  }, []);

  function universal(i) {
    setActiveIndex(i);
    $("#y").animate({ opacity: 0 }, 400, function () {
      $(this).html(content[i][0]).animate({ opacity: 1 }, 200);
    });
    $("#slider-heading").animate({ opacity: 0 }, 400, function () {
      $(this).html(content[i][1]).animate({ opacity: 1 }, 200);
    });
    $("#slider-date").animate({ opacity: 0 }, 400, function () {
      $(this).html(content[i][2]).animate({ opacity: 1 }, 200);
    });
    // document.getElementById('img').src=img[j];
    $("#img").animate({ opacity: 0 }, 400, function () {
      $(this).attr("src", img[i]).animate({ opacity: 1 }, 300);
    });
    // ********** see later for a tag property
    $("#slider-link").attr("href", content[i][3]);
    // console.log('#slider-l')
    let h = document.getElementsByClassName("indicators");
    for (var k = 0; k < 3; k++) {
      h[k].classList.remove("fa-circle");
      h[k].classList.add("fa-circle-thin");
    }
    h[i].classList.remove("fa-circle-thin");
    h[i].classList.add("fa-circle");
  }
  function customf() {
    let nextIndex = activeIndex + 1;
    if (nextIndex > 2) nextIndex = 0;
    universal(nextIndex);
  }
  function customp() {
    let prevIndex = activeIndex - 1;
    if (prevIndex < 0) prevIndex = 2;
    universal(prevIndex);
  }
  function i1() {
    universal(0);
  }
  function i2() {
    universal(1);
  }
  function i3() {
    universal(2);
  }

  return (
    <div>
      {/* <h1>Recent Activities</h1> */}
      <div className="container slider-parent">
        <div className="row">
          <div className="col">
            <h1 id="recent">Recent Activities</h1>
          </div>
        </div>
        <div className="row slider-row">
          <div className="col-12 slider-content-col">
            <div className="container slider-content">
              <div className="row">
                {/* <div className='col-1 arrow'>
                                    <i id='p' onClick={customp} className="fa fa-angle-left"></i>
                                </div> */}
                <div className="col-lg-4 col-md-12 slider-image-container">
                  <img id="img" src={img[0]}></img>
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="container-fluid">
                    <div className="white">
                      <div className="row ">
                        <div className="col">
                          <h1 id="slider-heading">{content[0][1]}</h1>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col">
                          <h5 id="slider-date">{content[0][2]}</h5>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col" style={{
                          maxHeight: "200px",
                          overflowY: "auto",
                          paddingRight: "15px",
                          marginBottom: "10px",
                        }}>
                          <div
                            style={{
                              maxHeight: "200px",
                              overflowY: "auto",
                              paddingRight: "15px",
                              marginBottom: "10px",
                            }}
                          >
                            <div id="y" style={{ maxWidth: "100%" }}>{content[0][0]} </div>{" "}
                          </div>
                        </div>
                        <div className="row readmore">
                          <div className="col" style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}>
                            <div
                              style={{
                                overflow: "hidden",
                              }}
                            >
                              <a id="slider-link" href="" target={"_blank"}>
                                <button
                                  id="read-more"
                                  className="btn btn-primary"
                                  style={{ marginBottom: "10px", maxWidth: "100%", }}
                                >
                                  Read More
                                </button>
                              </a>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className='col-1 arrow'>
                                    <i id='f' onClick={customf} className="fa fa-angle-right"></i>
                                </div> */}
              </div>
              <div className="row circles">
                <div className="col">
                  <i id="p" onClick={customp} className="fa fa-angle-left"></i>
                  <i className="fa fa-circle indicators" onClick={i1}></i>
                  <i className="fa fa-circle-thin indicators" onClick={i2}></i>
                  <i className="fa fa-circle-thin indicators" onClick={i3}></i>
                  <i id="f" onClick={customf} className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='col-0.5'></div> */}
        </div>
        {/* <div className="row circles">
                    <div className="col">
                        <i id='p' onClick={customp} className="fa fa-angle-left"></i>
                        <i className="fa fa-circle indicators" onClick={i1}></i>
                        <i className="fa fa-circle-thin indicators" onClick={i2}></i>
                        <i className="fa fa-circle-thin indicators" onClick={i3}></i>
                        <i id='f' onClick={customf} className="fa fa-angle-right"></i>
                    </div>
                </div> */}
      </div>
      <div className="row my-4 getm">
        <div className="col-sm-9">
          <h5>
            Get in touch with any questions, ideas, or feedback you may have.
          </h5>
        </div>
        <div className="col-sm-3">
          <a href="/contact-us">
            <button type="button" className="mybtn btn" >
              Contact
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}