import React from "react";
import { NewsLetterHome, NewsLetterAbout } from "./NewsLetter";
import SinglePost from "./SinglePost";
import Footer from "./Footer";
import Theme from "./Theme";

export const BodyHome = () => {
  return (
    <div className="main-wrapper">
      <NewsLetterHome />
      <Theme />
      <section className="blog-list px-3 py-5 p-md-5">
        <div className="container">
          <SinglePost />
          <SinglePost />
          <SinglePost />
          {/* Navigation for Home Page */}
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
          </nav>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export const BodyAbout = () => {
  return (
    <div className="main-wrapper">
      <article className="about-section py-5">
        <div className="container">
          <h2 className="title mb-3">About Me</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus.{" "}
          </p>
          <figure>
            <img
              className="img-fluid"
              src="assets/images/about-me.jpg"
              alt="image"
            />
          </figure>
          <h5 className="mt-5">About The Blog</h5>
          <p>
            Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
            tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
            luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
            tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
            Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
            magna. Sed consequat, leo eget bibendum sodales, augue velit cursus
            nunc, quis gravida magna mi a libero. Fusce vulputate eleifend
            sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy
            id, metus.
          </p>
          <h5 className="mt-5">My Skills and Experiences</h5>
          <p>
            Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi.
          </p>
          <h5 className="mt-5">Side Projects</h5>
          <p>
            Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi.
          </p>

          <figure>
            <a href="https://made4dev.com">
              <img
                className="img-fluid"
                src="assets/images/promo-banner.jpg"
                alt="image"
              />
            </a>
          </figure>
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
              <h5 className="my-3">Bullet Points:</h5>
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
              <h5 className="my-3">Quote Example:</h5>
              <blockquote className="blockquote m-lg-5 py-3 pl-4 px-lg-5">
                <p className="mb-2">
                  You might not think that programmers are artists, but
                  programming is an extremely creative profession. It's
                  logic-based creativity.
                </p>
                <footer className="blockquote-footer">John Romero</footer>
              </blockquote>

              <h5 className="my-3">Table Example:</h5>
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

              <h5 className="mb-3">Embed A Tweet:</h5>

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
