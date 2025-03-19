"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import "./Demo.css";
const DemoLayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const images = [
    "assets_demo/images/thumbs/banner-img1.png",
    "assets_demo/images/thumbs/banner-img2.png",
    "assets_demo/images/thumbs/banner-img3.png",
    "assets_demo/images/thumbs/banner-img4.png",
    "assets_demo/images/thumbs/banner-img1.png",
    "assets_demo/images/thumbs/banner-img2.png",
    "assets_demo/images/thumbs/banner-img3.png",
    "assets_demo/images/thumbs/banner-img4.png",
  ];

  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 260) {
        setIsHeaderSticky(true);
      } else {
        setIsHeaderSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className='demo'>
      {/* <style dangerouslySetInnerHTML={{ __html: style }} /> */}
      {/*==================== Preloader Start ====================*/}

      {/*==================== Preloader End ====================*/}
      {/*==================== Overlay Start ====================*/}
      <div className='overlay' />
      {/*==================== Overlay End ====================*/}
      {/*==================== Sidebar Overlay End ====================*/}
      <div className='side-overlay' />
      {/*==================== Sidebar Overlay End ====================*/}
      {/* ==================== Scroll to Top End Here ==================== */}
      <div className='progress-wrap'>
        <svg
          className='progress-circle svg-content'
          width='100%'
          height='100%'
          viewBox='-1 -1 102 102'
        >
          <path d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98' />
        </svg>
      </div>
      {/* ==================== Scroll to Top End Here ==================== */}
      {/* ==================== Mobile Menu Start Here ==================== */}
      <div>
        {/* Mobile Menu */}
        <div
          className={`mobile-menu scroll-sm d-lg-none d-block ${
            isMobileMenuActive ? "active" : ""
          }`}
        >
          <button
            type='button'
            className='close-button'
            onClick={toggleMobileMenu}
          >
            <i className='ri-close-fill'></i>
          </button>
          <div className='mobile-menu__inner'>
            <Link href='/index-1' className='mobile-menu__logo'>
              <img src='assets_demo/images/logo/logo.png' alt='Logo' />
            </Link>
            <div className='mobile-menu__menu'>
              <ul className='nav-menu flex-align nav-menu--mobile'>
                <li className='nav-menu__item'>
                  <a
                    href='#banner'
                    onClick={closeMobileMenu}
                    className='nav-menu__link'
                  >
                    Home
                  </a>
                </li>
                <li className='nav-menu__item'>
                  <a
                    href='#demos'
                    onClick={closeMobileMenu}
                    className='nav-menu__link'
                  >
                    Demo
                  </a>
                </li>
                <li className='nav-menu__item'>
                  <a
                    href='#features'
                    onClick={closeMobileMenu}
                    className='nav-menu__link'
                  >
                    Features
                  </a>
                </li>
                <li className='nav-menu__item'>
                  <a
                    href='#documentation'
                    onClick={closeMobileMenu}
                    className='nav-menu__link'
                  >
                    UI Elements
                  </a>
                </li>
              </ul>
              <a
                href='https://themeforest.net/user/wowtheme7'
                className='btn btn-main btn-sm d-lg-none flex-align gap-8 py-9 mt-24'
              >
                <i className='ri-shopping-cart-line d-inline-flex text-md line-height-0'></i>
                Purchase Now
              </a>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className={`header ${isHeaderSticky ? "fixed-header" : ""}`}>
          <div className='container container-two'>
            <nav className='header-inner flex-between'>
              {/* Logo */}
              <div className='logo'>
                <Link href='/index-1' className='link'>
                  <img src='assets_demo/images/logo/logo.png' alt='Logo' />
                </Link>
              </div>

              {/* Main Menu */}
              <div
                className='header-menu d-lg-block d-none'
                id='navbar-example'
              >
                <ul className='nav-menu flex-align'>
                  <li className='nav-menu__item'>
                    <a href='#banner' className='nav-menu__link'>
                      Home
                    </a>
                  </li>
                  <li className='nav-menu__item'>
                    <a href='#demos' className='nav-menu__link'>
                      Dashboards
                    </a>
                  </li>
                  <li className='nav-menu__item'>
                    <a href='#features' className='nav-menu__link'>
                      Features
                    </a>
                  </li>
                  <li className='nav-menu__item'>
                    <a href='#documentation' className='nav-menu__link'>
                      UI Elements
                    </a>
                  </li>
                </ul>
              </div>

              {/* Header Right */}
              <div className='header-right flex-align'>
                <a
                  href='https://themeforest.net/user/wowtheme7'
                  className='btn btn-main  d-lg-flex d-none flex-align gap-8 '
                >
                  <i className='ri-shopping-cart-line d-inline-flex text-md line-height-0'></i>
                  Purchase Now
                </a>
                <button
                  type='button'
                  className='toggle-mobileMenu d-lg-none ms-3 text-2xl d-flex line-height-1'
                  onClick={toggleMobileMenu}
                >
                  <i className='ri-bar-chart-horizontal-line'></i>
                </button>
              </div>
            </nav>
          </div>
        </header>

        {/* Overlay for Mobile Menu */}
        {isMobileMenuActive && (
          <div className='side-overlay show' onClick={toggleMobileMenu}></div>
        )}
      </div>
      {/* ==================== Header End Here ==================== */}
      <div className='overflow-hidden'>
        {/* ================================== Banner Section Start ================================= */}
        <section className='banner bg-img position-relative z-1' id='banner'>
          <div className='banner__inner position-relative'>
            <div className='tech-icon one animation-updown w-50 h-50 rounded-circle flex-center p-4 bg-white custom-shadow'>
              <img src='assets_demo/images/icons/icon-html.png' alt='' />
            </div>
            <div className='tech-icon two animation-updown w-50 h-50 rounded-circle flex-center p-4 bg-white custom-shadow'>
              <img src='assets_demo/images/icons/icon-boostrap.png' alt='' />
            </div>
            <div className='tech-icon three animation-updown w-50 h-50 rounded-circle flex-center p-4 bg-white custom-shadow'>
              <img src='assets_demo/images/icons/icon-jquery.png' alt='' />
            </div>
            <div className='tech-icon four animation-updown w-50 h-50 rounded-circle flex-center p-4 bg-white custom-shadow'>
              <img src='assets_demo/images/icons/icon-sass.png' alt='' />
            </div>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-xl-8 col-lg-10'>
                  <div className='banner__content text-center'>
                    <h6 className='mb-16 wow bounceIn'>
                      The simplest & fastest way to build web UI for your
                      website
                    </h6>
                    <h1 className='mb-24 wow bounceIn'>
                      Education Tutors LMS & Online Course Template Multipurpose
                    </h1>
                    <p className='max-w-772 ms-auto me-auto wow bounceInUp'>
                      EduAll is a developer-friendly, ready-to-use NEXT JS
                      template designed for building attractive, scalable, and
                      high-performing web applications
                    </p>
                    <div className='mt-32 flex-center flex-wrap gap-24'>
                      <a
                        href='#demos'
                        className='btn btn-outline-main flex-align gap-8 bg-white-color wow fadeInLeft'
                      >
                        Explore Demos
                        <i className='ri-arrow-right-s-line line-height-0 text-xl' />
                      </a>
                      <a
                        href='https://themeforest.net/user/wowtheme7'
                        className='btn btn-main flex-align gap-8 wow fadeInRight'
                      >
                        <i className='ri-shopping-cart-line d-inline-flex text-lg line-height-0' />
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='banner-thumbs banner-thumb-slider text-center'>
            <div>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index} className='banner-thumbs__img w-100 h-100'>
                    <a
                      href={image}
                      onClick={(e) => {
                        e.preventDefault();
                        openLightbox(image);
                      }}
                    >
                      <img
                        src={image}
                        alt={`banner-img-${index + 1}`}
                        className='rounded-12 box-shadow-3xl'
                      />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
        {/* ================================== Banner Section End ================================= */}
        {/* ================================ Counter Section Start ====================================== */}
        <section className='counter wow bounce'>
          <div className='container'>
            <div className='counter-item-wrapper rounded-16 border border-white border-2 bg-white overflow-hidden'>
              <div className='counter-item text-center py-24 px-8'>
                <span className='counter-item__icon mb-12'>
                  <img
                    src='assets_demo/images/icons/counter-icon1.png'
                    alt=''
                  />
                </span>
                <h5 className='mb-4 counter-number'>4</h5>
                <span className='counter-item__text'>Home Page</span>
              </div>
              <div className='counter-item text-center py-24 px-8'>
                <span className='counter-item__icon mb-12'>
                  <img
                    src='assets_demo/images/icons/counter-icon2.png'
                    alt=''
                  />
                </span>
                <h5 className='mb-4 counter-number'>35+</h5>
                <span className='counter-item__text'>Inner Page</span>
              </div>
              <div className='counter-item text-center py-24 px-8'>
                <span className='counter-item__icon mb-12'>
                  <img
                    src='assets_demo/images/icons/counter-icon3.png'
                    alt=''
                  />
                </span>
                <h5 className='mb-4 counter-number'>100%</h5>
                <span className='counter-item__text'>Pixel perfect design</span>
              </div>
              <div className='counter-item text-center py-24 px-8'>
                <span className='counter-item__icon mb-12'>
                  <img
                    src='assets_demo/images/icons/counter-icon4.png'
                    alt=''
                  />
                </span>
                <h5 className='mb-4 counter-number'>100+</h5>
                <span className='counter-item__text'>Responsive Design</span>
              </div>
            </div>
          </div>
        </section>
        {/* ================================ Counter Section End ====================================== */}
        {/* ================================== Feature Section Start =================================== */}
        <section className='feature py-120' id='features'>
          <div className='container'>
            <div className='section-heading'>
              <h4 className='mb-16 wow bounceIn'>
                EduAll - Education Tutors LMS NEXT JS Template
              </h4>
              <p className='text-md wow bounceInUp'>
                Ready-to-use features are included with this template. Its
                abundance of pre-made features save developers a great deal of
                time.
              </p>
            </div>
            <div className='row gy-4'>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-1'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-1'>
                    <img
                      src='assets_demo/images/icons/feature-icon1.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Clean Design
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-2'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-2'>
                    <img
                      src='assets_demo/images/icons/feature-icon2.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    24/7 Great Support
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-3'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-3'>
                    <img
                      src='assets_demo/images/icons/feature-icon3.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    100% Responsive
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-4'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-4'>
                    <img
                      src='assets_demo/images/icons/feature-icon4.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    100% Pixel Prefect{" "}
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-4'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-4'>
                    <img
                      src='assets_demo/images/icons/feature-icon5.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Clean Design
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-5'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-5'>
                    <img
                      src='assets_demo/images/icons/feature-icon6.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    User Friendly Code
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-2'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-2'>
                    <img
                      src='assets_demo/images/icons/feature-icon7.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Easily Customize
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-1'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-1'>
                    <img
                      src='assets_demo/images/icons/feature-icon8.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Google Font
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-3'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-3'>
                    <img
                      src='assets_demo/images/icons/feature-icon9.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    SASS File Included
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-2'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-2'>
                    <img
                      src='assets_demo/images/icons/feature-icon10.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Privacy Policy
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-4'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-4'>
                    <img
                      src='assets_demo/images/icons/feature-icon11.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Breadcrumb
                  </span>
                </div>
              </div>
              <div className='col-lg-3 col-sm-4 col-6 wow bounceIn animated'>
                <div className='feature-item rounded-16 text-center bg-gradient-5'>
                  <span className='feature-item__icon w-64 h-64 flex-center d-inline-flex text-white rounded-circle gradient-5'>
                    <img
                      src='assets_demo/images/icons/feature-icon12.png'
                      alt=''
                    />
                  </span>
                  <span className='feature-item__text mt-16 text-heading text-lg fw-medium d-block'>
                    Bootstrap 5.0.x
                  </span>
                </div>
              </div>
            </div>

            <div className='text-center'>
              <a
                href='#demos'
                className='btn btn-outline-main flex-align d-inline-flex gap-8 mt-40'
              >
                View More
                <i className='ri-arrow-down-s-line text-2xl line-height-0' />
              </a>
            </div>
          </div>
        </section>
        {/* ================================== Feature Section End =================================== */}
        {/* ============================= Demo Section Start ================================== */}
        <section className='demo-section py-120 bg-img' id='demos'>
          <div className='container'>
            <div className='section-heading'>
              <h1 className='section-heading__title'>4+</h1>
              <h4 className='mb-16 wow bounceIn'>Complete Demo Template</h4>
              <p className='text-md wow bounceInUp'>
                EduAll website template provides Outstanding workable template
                layouts with home &amp; Inner pages
              </p>
            </div>

            <div className='tab-content' id='pills-tabContent'>
              {/* Main Demos Start */}
              <div
                className='tab-pane fade show active'
                id='pills-main-demo'
                role='tabpanel'
                aria-labelledby='pills-main-demo-tab'
                tabIndex={0}
              >
                <div className='row gy-4 justify-content-center'>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item position-relative'>
                      <div className='demo-item__inner bg-light-gradient-2'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img1.png'
                            alt=''
                          />
                          <div className='demo-item__overlay'>
                            <Link
                              href='/index-1'
                              className='btn btn-main btn-sm'
                            >
                              View Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <Link
                          href='/index-1'
                          className='text-heading fw-medium text-lg mt-12 hover-text-main-600'
                        >
                          LMS
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item position-relative'>
                      <div className='demo-item__inner bg-light-gradient-1'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img2.png'
                            alt=''
                          />
                          <div className='demo-item__overlay'>
                            <Link
                              href='/index-2'
                              className='btn btn-main btn-sm'
                            >
                              View Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <Link
                          href='/index-2'
                          className='text-heading fw-medium text-lg mt-12 hover-text-main-600'
                        >
                          Online Course{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item position-relative'>
                      <div className='demo-item__inner bg-light-gradient-2'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img3.png'
                            alt=''
                          />
                          <div className='demo-item__overlay'>
                            <Link
                              href='/index-3'
                              className='btn btn-main btn-sm'
                            >
                              View Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <Link
                          href='/index-3'
                          className='text-heading fw-medium text-lg mt-12 hover-text-main-600'
                        >
                          Home University
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item position-relative'>
                      <div className='demo-item__inner bg-light-gradient-1'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img4.png'
                            alt=''
                          />
                          <div className='demo-item__overlay'>
                            <Link
                              href='/index-4'
                              className='btn btn-main btn-sm'
                            >
                              View Demo
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <Link
                          href='/index-4'
                          className='text-heading fw-medium text-lg mt-12 hover-text-main-600'
                        >
                          Home Tutor
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item upcoming-item position-relative'>
                      <div className='demo-item__inner bg-light-gradient-2'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img4.png'
                            alt=''
                          />
                          <div className='demo-item__overlay visible opacity-100 transform-scale-1'>
                            <span className='py-8 px-16 rounded-8 bg-black text-white'>
                              Upcoming
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <span className='text-heading fw-medium text-lg mt-12'>
                          Home 5
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 col-sm-6 col-xs-6 wow flipInX'
                    data-wow-duration='0.65s'
                  >
                    <div className='demo-item upcoming-item position-relative'>
                      <div className='demo-item__inner bg-light-gradient-1'>
                        <div className='demo-item__thumbs position-relative'>
                          <img
                            src='assets_demo/images/thumbs/demo-img4.png'
                            alt=''
                          />
                          <div className='demo-item__overlay visible opacity-100 transform-scale-1'>
                            <span className='py-8 px-16 rounded-8 bg-black text-white'>
                              Upcoming
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='text-center'>
                        <span className='text-heading fw-medium text-lg mt-12'>
                          Home 6
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Main Demos End */}
            </div>
          </div>
        </section>

        {/* ============================= Demo Section End ================================== */}
        {/* ============================= Application Section Start ================================== */}
        <section
          className='application py-120 bg-img'
          id='application'
          style={{
            backgroundImage: "url(assets_demo/images/bg/application-bg.png)",
          }}
        >
          <div className='container'>
            <div className='section-heading'>
              <h1 className='section-heading__title'>35+</h1>
              <h4 className='mb-16 wow bounceIn'>Awesome Inner Page</h4>
              <p className='text-md wow bounceInUp'>
                EduAll - Education Tutors LMS & Online Course Template
                Multipurpose Inner page
              </p>
            </div>
            <div className='row gy-4 justify-content-center'>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-2 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Email List
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img1.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-1 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Email Writing
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img2.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-2 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Chat Empty
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img3.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-1 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Message
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img4.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-2 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Calendar
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img5.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-1 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Kanban List
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img6.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-2 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Add New Kanban
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img7.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-1 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Invoice List
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img8.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-6 col-xs-6 wow fadeInUp'
                data-wow-duration='.60s'
              >
                <div className='p-10 bg-light-gradient-2 rounded-16 overflow-hidden'>
                  <span className='d-block text-center text-heading text-lg pb-10'>
                    Invoice Preview
                  </span>
                  <div className='position-relative'>
                    <img
                      src='assets_demo/images/thumbs/application-img9.png'
                      alt=''
                      className='rounded-8'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================= Application Section End ================================== */}

        {/* ======================================= UI Element Section Start ===================================== */}
        <section
          className='ui-element position-relative z-1 py-120 overflow-hidden bg-img'
          id='documentation'
          style={{
            backgroundImage: "url(assets_demo/images/bg/ui-element-bg.png)",
          }}
        >
          <div className='section-heading'>
            <h4 className='mb-16'>UI Elements</h4>
            <p className='text-md'>
              UI elements are the most integral part of product design.
            </p>
          </div>
          <div className='ui-element-one-slider'>
            <Marquee>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-one-img1.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-one-img2.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-one-img3.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-one-img4.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-one-img5.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-one-img3.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
            </Marquee>
          </div>
          <div className='ui-element-two-slider mt-16'>
            <Marquee direction='right'>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-two-img1.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-two-img2.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-two-img3.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-two-img4.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-two-img5.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-two-img3.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
            </Marquee>
          </div>
          <div className='ui-element-three-slider mt-16'>
            <Marquee>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-three-img1.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-three-img2.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-three-img3.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-three-img4.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-three-img5.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
              <div className='rounded-8 p-14 pt-0'>
                <img
                  src='assets_demo/images/thumbs/ui-element-three-img3.png'
                  alt=''
                  className='box-shadow-xl cover-img'
                />
              </div>
            </Marquee>
          </div>
        </section>
        {/* ======================================= UI Element Section End ===================================== */}
        {/* ================================== Footer Section Start ================================= */}
        <section
          className='footer py-120 bg-img'
          style={{
            backgroundImage: "url(assets_demo/images/bg/footer-bg.png)",
          }}
        >
          <div className='container'>
            <div className='footer-content'>
              <h5 className='mb-32 text-white text-30 fw-medium wow bounceInUp'>
                EduAll - Education Tutors LMS & Online Course Template
                Multipurpose
              </h5>
              <div className='mt-32 flex-center gap-24'>
                <a
                  href='https://themeforest.net/user/wowtheme7'
                  className='btn btn-main flex-align gap-8 wow fadeInLeft'
                >
                  Purchase Now
                  <i className='ri-send-plane-fill d-inline-flex text-lg line-height-0' />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ================================== Footer Section End ================================= */}
      </div>

      {/* Custom Lightbox */}
      <div
        className={`lightbox-overlay ${isOpen ? "show" : ""}`}
        onClick={closeLightbox}
      >
        <div className='lightbox-content' onClick={(e) => e.stopPropagation()}>
          <span className='close' onClick={closeLightbox}>
            &times;
          </span>
          <img src={currentImage} alt='Lightbox' className='lightbox-image' />
        </div>
      </div>
    </section>
  );
};

export default DemoLayer;
