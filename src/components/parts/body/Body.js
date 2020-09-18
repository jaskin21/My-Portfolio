import React from "react";
import { NewsLetterHome, NewsLetterAbout } from "../NewsLetter";
import SinglePost from "../SinglePost";
import Footer from "../footer/Footer";
import "./Body.css";

export const BodyHome = () => {
  return (
    <div className="main-wrapper">
      <NewsLetterHome />

      <section className="blog-list px-3 py-5 p-md-5">
        <div className="container">
          <SinglePost />
          <SinglePost />
          {/* Navigation for Home Page
          <nav className="blog-nav nav nav-justified my-5">
            <a
              className="nav-link-prev nav-item nav-link d-none rounded-left"
              href="#"
            >
              Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i>
            </a>
            <a
              className="nav-link-next nav-item nav-link rounded"
              href="blog-list.html"
            >
              Next<i className="arrow-next fas fa-long-arrow-alt-right"></i>
            </a>
          </nav> */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export const BodyAbout = () => {
  return (
    <div className="main-wrapper">
      {/* <NewsLetterAbout /> */}
      <article className="about-section py-5">
        <div className="container">
          <p>
            <b id="highlights">Hi!</b> I'm{" "}
            <b id="highlights">Renz Jaskin Agmata</b>, a graduate of Bachelor of
            Science in Computer Science at the University of Southern Mindanao.
            As an alumnus of the college, with modesty, I could attest that I
            was thoroughly equipped physically, mentally, emotionally, socially
            and spiritually. I had some practical experiences during my college,
            Website development, Software troubleshooting, photo editing, and
            video editing as part of our curriculum of our School.
          </p>

          <figure>
            <img
              className="img-fluid"
              src="assets/images/about-graduation.jpg"
              alt="image"
            />
          </figure>
          <hr></hr>
          <h2 className="title mb-3">Contact</h2>
          <p>
            You can contact my personal phone number 09380296142. You can also
            email me jaskin.agmata@gmail.com.
          </p>
          <hr />
          <h2 className="mt-5">My Skills</h2>
          <p>
            JavaScript, React, HTML, HTML5, CSS, CSS3, Web Programming Skills,
            Nodejs, Teamwork, Verbal Communication, Web User Interface Design
            (UI), Object-Oriented Programming, Multimedia Content Development,
            Photoshop, Adobe premiere
          </p>
          <hr />
          <h2 className="mt-5">My Experiences</h2>
          <p>
            <hr />
            <h6>DATA ENTRY CLERK</h6>
            November 18, 2019 to present | Philippine Rubber Testing Center –
            USM Kabacan, Cotabato
            <p>
              Provide Technical Support, Data Entry, Hardware and Software
              troubleshooting.{" "}
            </p>
            <hr />
            <h6>TECHNICAL SUPPORT INTERN</h6>
            June 18, 2018 to August 3, 2018 | Focusinc Group Corp. – Bonifacio
            Street, Poblacion District, Davao City
            <p>
              Providing Level 1 Technical Support, hardware troubleshooting,
              Software maintenance, Data Sorting and Filtering data using
              spreadsheet.
            </p>
            <hr />
          </p>
        </div>
      </article>

      <NewsLetterAbout />
      <Footer />
    </div>
  );
};

export const BodyBlogPost = () => {
  return (
    <>
      <div className="main-wrapper">
        <article className="blog-post px-3 py-5 p-md-5">
          <div className="container">
            <header className="blog-post-header">
              <h2 className="title mb-2">
                Why Every Developer Should Have A Blog
              </h2>
              <div className="meta mb-3">
                <span className="date">Published 3 months ago</span>
                <span className="time">5 min read</span>
                <span className="comment">
                  <a href="#">4 comments</a>
                </span>
              </div>
            </header>

            <div className="blog-post-body">
              <figure className="blog-banner">
                <a href="https://made4dev.com">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/blog-post-banner.jpg"
                    alt="image"
                  />
                </a>
                <figcaption className="mt-2 text-center image-caption">
                  Image Credit:{" "}
                  <a href="https://made4dev.com?ref=devblog" target="_blank">
                    made4dev.com (Premium Programming T-shirts)
                  </a>
                </figcaption>
              </figure>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim.{" "}
              </p>

              <h3 className="mt-5 mb-3">Code Block Example</h3>
              <p>
                You can get more info at{" "}
                <a href="https://highlightjs.org/" target="_blank">
                  https://highlightjs.org/
                </a>
                . Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
                justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                dictum felis eu pede mollis pretium. Integer tincidunt. Cras
                dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                vitae, eleifend ac, enim.{" "}
              </p>

              <h3 className="mt-5 mb-3">Typography</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <h2 className="my-3">Bullet Points:</h2>
              <ul className="mb-5">
                <li className="mb-2">
                  Lorem ipsum dolor sit amet consectetuer.
                </li>
                <li className="mb-2">Aenean commodo ligula eget dolor.</li>
                <li className="mb-2">
                  Aenean massa cum sociis natoque penatibus.
                </li>
              </ul>
              <ol className="mb-5">
                <li className="mb-2">
                  Lorem ipsum dolor sit amet consectetuer.
                </li>
                <li className="mb-2">Aenean commodo ligula eget dolor.</li>
                <li className="mb-2">
                  Aenean massa cum sociis natoque penatibus.
                </li>
              </ol>
              <h2 className="my-3">Quote Example:</h2>
              <blockquote className="blockquote m-lg-5 py-3 pl-4 px-lg-5">
                <p className="mb-2">
                  You might not think that programmers are artists, but
                  programming is an extremely creative profession. It's
                  logic-based creativity.
                </p>
                <footer className="blockquote-footer">John Romero</footer>
              </blockquote>

              <h2 className="my-3">Table Example:</h2>
              <table className="table table-striped my-5">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="mb-3">Embed A Tweet:</h2>

              <blockquote className="twitter-tweet" data-lang="en">
                <p lang="en" dir="ltr">
                  1969:
                  <br />
                  -what&#39;re you doing with that 2KB of RAM?
                  <br />
                  -sending people to the moon
                  <br />
                  <br />
                  2017:
                  <br />
                  -what&#39;re you doing with that 1.5GB of RAM?
                  <br />
                  -running Slack
                </p>
                &mdash; I Am Devloper (@iamdevloper){" "}
                <a href="https://twitter.com/iamdevloper/status/926458505355235328?ref_src=twsrc%5Etfw">
                  November 3, 2017
                </a>
              </blockquote>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>

              <h3 className="mt-5 mb-3">Video Example</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.{" "}
              </p>

              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/hnCmSXCZEpU"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <section className="promo-section theme-bg-light py-5 text-center">
              <div className="container">
                <h2 className="title">Promo Section Heading</h2>
                <p>
                  You can use this section to promote your side projects etc.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.{" "}
                </p>
                <figure className="promo-figure">
                  <a href="https://made4dev.com" target="_blank">
                    <img
                      className="img-fluid"
                      src="assets/images/promo-banner.jpg"
                      alt="image"
                    />
                  </a>
                </figure>
              </div>
            </section>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
};
