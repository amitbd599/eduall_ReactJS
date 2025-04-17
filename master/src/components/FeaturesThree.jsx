import React from "react";
import { Link } from "react-router-dom";

const FeaturesThree = () => {
  return (
    <section className='py-120'>
      <div className='container'>
        <div>
          <div className='d-flex justify-content-between mb-60 align-items-center flex-wrap gap-20'>
            <div>
              <div
                className='fw-semibold text-main-800 text-xl d-flex align-content-center gap-8 mb-16 flex-wrap'
                data-aos='fade-down'
              >
                <span>
                  <i className='ph-bold ph-book-open' />
                </span>
                <span>Unlocking Your Child's Futures</span>
              </div>
              <h2 className='fw-semibold heading-three text-neutral-700 mb-2 wow bounceIn'>
                Best Learning Platform For Kid`s
              </h2>
            </div>
            <div className='max-w-416-px'>
              <p className='tw-text-base fw-medium text-neutral-700 mb-40 wow bounceInUp'>
                Explore new skills, deepen existing passions, and get lost in
                creativity. What you find just might...
              </p>
              <Link
                to='#'
                className='fw-semibold py-16 px-32 border border-main-600 rounded-pill hover-bg-main-50 '
              >
                Browse Courses
              </Link>
            </div>
          </div>
          <div className='row gy-4'>
            <div
              className='col-lg-4 col-md-6'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <div
                className='animation-item px-32 py-32 border rounded-16 hover-border-main-600 transition-03 h-100 bg-img position-relative overflow-hidden'
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/child-future-bg-img1.png)",
                }}
              >
                <img
                  src='assets/images/thumbs/child-img1.png'
                  alt=''
                  className='mb-40 animate__wobble'
                />
                <div>
                  <span className='fw-semibold text-main-600 mb-12'>
                    2-3 Years
                  </span>
                  <h4 className='mb-16'>Junior KG</h4>
                  <p className='tw-text-sm'>
                    A safe and joyful space where 2-3-year-olds learn, play, and
                    grow together!
                  </p>
                </div>
                <img
                  src='assets/images/shapes/child-icon.png'
                  alt=''
                  className='child-future-icon position-absolute top-0 end-0'
                />
              </div>
            </div>
            <div
              className='col-lg-4 col-md-6'
              data-aos='fade-up'
              data-aos-duration={700}
            >
              <div
                className='animation-item px-32 py-32 border rounded-16 hover-border-main-600 transition-03 h-100 bg-img position-relative overflow-hidden'
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/child-future-bg-img1.png)",
                }}
              >
                <img
                  src='assets/images/thumbs/child-img2.png'
                  alt=''
                  className='mb-40 animate__wobble'
                />
                <div>
                  <span className='fw-semibold text-main-600 mb-12'>
                    3-4 Years
                  </span>
                  <h4 className='mb-16'>Senior KG</h4>
                  <p className='tw-text-sm'>
                    Engaging and interactive learning for 3-4-year-olds,
                    building a strong foundation for growth!
                  </p>
                </div>
                <img
                  src='assets/images/shapes/child-icon.png'
                  alt=''
                  className='child-future-icon position-absolute top-0 end-0'
                />
              </div>
            </div>
            <div
              className='col-lg-4 col-md-6'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div
                className='animation-item px-32 py-32 border rounded-16 hover-border-main-600 transition-03 h-100 bg-img position-relative overflow-hidden'
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/child-future-bg-img1.png)",
                }}
              >
                <img
                  src='assets/images/thumbs/child-img3.png'
                  alt=''
                  className='mb-40 animate__wobble'
                />
                <div>
                  <span className='fw-semibold text-main-600 mb-12'>
                    4-5 Years
                  </span>
                  <h4 className='mb-16'>Senior KG</h4>
                  <p className='tw-text-sm'>
                    A dynamic program for 4-5-year-olds, fostering critical
                    thinking and readiness.
                  </p>
                </div>
                <img
                  src='assets/images/shapes/child-icon.png'
                  alt=''
                  className='child-future-icon position-absolute top-0 end-0'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesThree;
