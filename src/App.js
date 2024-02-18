import React, { useState } from 'react';
import './App.css';
import { Down } from './icons/Down';

function App() {
  const [selectedOption, setSelectedOption] = useState("US/Canada");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getPhoneNumber = () => {
    if (selectedOption === "US/Canada") {
      return "+1 888 338 7638";
    } else {
      return "International number";
    }
  };

  return (
    <div className="prototype">
      <div className="div">
        <div className="n">
          <div className="nav">
            <div className="element">
              <div className="element-2">
                <a href="/" className="logo-wrapper">
                  <img className="logo" alt="Logo" src="logo@2x.png"/>
                </a>
                <div className="nav-2">
                  <div className="element-wrapper">
                    <div className="element-4">
                      <div className="element-5">
                        <Down className="ic-down" />
                        <div className="text-wrapper-2">Expertise</div>
                      </div>
                    </div>
                  </div>
                  <div className="element-6">
                    <div className="element-7">
                      <div className="element-8">
                        <div className="text-wrapper-3">Case Sudies</div>
                      </div>
                    </div>
                  </div>
                  <div className="element-9">
                    <div className="element-10">
                      <div className="element-5">
                        <Down className="ic-down-16-1" />
                        <div className="cooperation">Company</div>
                      </div>
                    </div>
                  </div>
                  <div className="element-11">
                    <div className="element-12">
                      <div className="element-5">
                        <Down className="ic-down-sm-16" />
                        <div className="text-wrapper-4">Cooperation</div>
                      </div>
                    </div>
                  </div>
                  <div className="element-13">
                    <div className="element-14">
                      <div className="element-5">
                        <div className="text-wrapper-5">Blog</div>
                      </div>
                    </div>
                  </div>
                  <div className="element-15">
                    <div className="element-16">
                      <div className="element-5">
                        <div className="frame">
                          <div className="shape-wrapper">
                            <img
                              className="shape"
                              alt="Shape"
                              src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/shape.svg"
                            />
                          </div>
                          <div className="text-wrapper-6">Client login</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/" className="buttons-wrapper">
                  <div className="buttons">
                    <div className="b">
                      <div className="element-3">
                        <div className="div-wrapper">
                          <div className="text-wrapper">Get a Quote</div>
                        </div>
                        <div className="ic" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="tb">
            <div className="element-17">
              <div className="element-18">
                <p className="p">{getPhoneNumber()}</p>
                <div className="location">
                  <div className="triangle-wrapper">
                    <img
                      className="triangle"
                      alt="Triangle"
                      src="/triangle.svg"
                    />
                  </div>
                  <select
                    value={selectedOption}
                    onChange={handleOptionChange}
                    className="text-wrapper-7"
                  >
                    <option value="US/Canada">US/Canada</option>
                    <option value="International">International</option>
                  </select>
                </div>
                <div className="img-wrapper">
                  <img
                    className="combined-shape"
                    alt="Combined shape"
                    src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/combined-shape.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <div className="headline">
              <div className="content-2">
                <div className="logos">
                  <div className="element-19">
                    <div className="div-2">
                      <div className="jonas">
                        <div className="overlap-group">
                          <img
                            className="path"
                            alt="Path"
                            src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/path-5.svg"
                          />
                        </div>
                        <img
                          className="img"
                          alt="Path"
                          src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/path-3.svg"
                        />
                        <img
                          className="path-2"
                          alt="Path"
                          src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/path-4.svg"
                        />
                      </div>
                    </div>
                    <img
                      className="cinepolis"
                      alt="Cinepolis"
                      src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/cinepolis.png"
                    />
                    <div className="div-3">
                      <img
                        className="path-3"
                        alt="Path"
                        src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/path-6.svg"
                      />
                      <img
                        className="shape-2"
                        alt="Shape"
                        src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/shape-2.svg"
                      />
                    </div>
                  </div>
                  <div className="element-19">
                    <div className="div-2">
                      <div className="nokia">
                        <img
                          className="path-4"
                          alt="Path"
                          src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/path-7.svg"
                        />
                        <img
                          className="path-5"
                          alt="Path"
                          src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/path-8.svg"
                        />
                         <img
                          className="path-6"
                          alt="Path"
                          src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/path-9.svg"
                        />
                        <img
                          className="shape-3"
                          alt="Shape"
                          src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/shape-3.svg"
                        />
                        <img
                          className="shape-4"
                          alt="Shape"
                          src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/shape-4.svg"
                        />
                      </div>
                    </div>
                    <div className="member-sol">
                      <img
                        className="image"
                        alt="Brand"
                        src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/image-2.png"
                      />
                      </div>
                    <div className="div-3">
                      <img
                        className="image-2"
                        alt="Brand"
                        src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/image-3.png"
                      />
                    </div>
                  </div>
                  <div className="element-19">
                    <div className="div-2">
                      <img
                        className="image-3"
                        alt="Brand"
                        src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/image-4.png"
                      />
                    </div>
                    <div className="mobiry">
                      <img
                        className="image-4"
                        alt="Brand"
                        src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/image-5.png"
                      />
                    </div>
                    <div className="camtran">
                      <img
                        className="image-5"
                        alt="Brand"
                        src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/image-6.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="line" />
                <div className="element-20">
                  <div className="text-wrapper-8">Our customers</div>
                  <div className="b-2">
                    <div className="element-21">
                      <div className="get-a-quote-wrapper">
                        <div className="get-a-quote">View Case Studies</div>
                      </div>
                      <div className="ic-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="element-22">
          <div className="indicator" />
          <div className="data">
            <p className="we-are-proud-to-have">We are proud to have designed solutions that were industry firsts.</p>
            <div className="txt">
              <img
                className="photo"
                alt="Article"
                src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/photo-3@2x.png"
              />
              <p className="we-are-known-for-pro">
                <span className="span">
                  Innovation is in our DNA. We are proud to have designed solutions that were industry firsts. For
                  example, our team developed one of the first Content Management Systems around the turn of the
                  millennium, we implemented technology used to launch and operate one of the first internationalized
                  (multi-lingual) domain names in the world. Our team was involved with the first commercial test of
                  mobile OCR technology for mobile ticketing in North America.
                  <br />
                  <br />
                  Because projects that we worked on over the years were often challenging and required a scientific
                  approach, we always had high-level mathematicians and data scientists on the team. That’s why, in
                  2017, we started a formal AI and ML department. This allows us to offer not only product development
                  but also comprehensive{" "}
                  </span>
                <a href="https://integrio.net/artificial-intelligence" rel="noopener noreferrer" target="_blank">
                  <span className="text-wrapper-9">artificial intelligence</span>
                </a>
                <span className="span">
                  {" "}
                  and data science services to help our clients maintain a competitive edge.
                </span>
              </p>
              <div className="details">
                <div className="element-23">200+</div>
                <div className="txt-2">
                  <div className="rectangle" />
                  <div className="of-the-candidates-we">Customer retention rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="end">
          <div className="f">
            <div className="element-33">
              <div className="c">
                <div className="element-34">
                  <div className="s">
                    <div className="i-wrapper">
                      <img
                        className="i"
                        alt="I"
                        src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/i.svg"
                      />
                    </div>
                    <div className="f-wrapper">
                      <img
                        className="f-2"
                        alt="F"
                        src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/f.svg"
                      />
                       </div>
                    <div className="img-wrapper">
                      <img
                        className="t-3"
                        alt="T"
                        src="https://cdn.animaapp.com/projects/65d0c13692f2be09435117a6/releases/65d0c16fa068d40e6da5f6b0/img/t.svg"
                      />
                    </div>
                  </div>
                  <p className="element-integrio-syst">© 2021 Integrio Systems. All rights reserved.</p>
                  <p className="element-35">
                    <span className="text-wrapper-19">P:</span>
                    <span className="text-wrapper-20"> +1 778 881 4161</span>
                  </p>
                  <p className="info-integrio-net">
                    <span className="text-wrapper-19">E:</span>
                    <span className="text-wrapper-20"> info@integrio.net</span>
                  </p>
                  <p className="info-integrio-net-2">
                    <span className="text-wrapper-19">F:</span>
                    <span className="text-wrapper-20"> 1-888-DEV-SOFT (338-7638)</span>
                  </p>
                </div>
              </div>
              <div className="frame-wrapper">
              <div className="frame-2">
                  <div className="element-36">
                    <div className="div-4">
                      <div className="text-wrapper-21">Locations</div>
                      <div className="lines" />
                      <div className="frame-3">
                        <div className="text-wrapper-22">Krakow, Poland</div>
                        <div className="text-wrapper-23">Kharkiv, Ukraine</div>
                        <div className="text-wrapper-23">San Francisco, USA</div>
                        <div className="text-wrapper-23">Vancouver, Canada</div>
                      </div>
                    </div>
                  </div>
                  <div className="element-36">
                    <div className="div-4">
                      <div className="text-wrapper-21">Company</div>
                      <div className="lines" />
                      <div className="nav-3">
                        <div className="text-wrapper-23">News</div>
                        <div className="text-wrapper-23">Privacy Policy /Cookies Policy</div>
                        <div className="text-wrapper-23">About</div>
                        <p className="text-wrapper-23">Download free uptime scout app</p>
                      </div>
                    </div>
                  </div>
                  <div className="element-37">
                    <div className="div-4">
                      <div className="text-wrapper-21">Company</div>
                      <div className="lines-2" />
                      <div className="element-38">
                        <div className="nav-4">
                          <div className="text-wrapper-23">Hire React Developers</div>
                          <div className="text-wrapper-23">Hire Angular Developers</div>
                          <div className="text-wrapper-23">Hire Javascript Developers</div>
                          <div className="text-wrapper-23">Hire Java Developers</div>
                          <div className="text-wrapper-23">Hire PHP Developers</div>
                        </div>
                        <div className="nav-4">
                          <div className="text-wrapper-23">Hire .NET Developers</div>
                          <div className="text-wrapper-23">Hire Node.js Developers</div>
                          <div className="text-wrapper-23">Hire Python Developers</div>
                          <div className="text-wrapper-23">Hire Ruby Developers</div>
                          <div className="text-wrapper-23">Hire C/C++ Developers</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
