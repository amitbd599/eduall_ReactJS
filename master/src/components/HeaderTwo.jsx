import { useEffect, useState } from "react";
import $ from "jquery";
import { usePathname } from "next/navigation";
import { Link } from "react-router-dom";

const HeaderTwo = () => {
  let pathname = usePathname();
  const [scroll, setScroll] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("select2").then(() => {
        const selectElement = $(".js-example-basic-single");
        if (selectElement.length > 0) {
          selectElement.select2(); // Initialize Select2
        }
      });
    }

    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    if (!isMenuActive) {
      document.body.classList.add("scroll-hide-sm");
    } else {
      document.body.classList.remove("scroll-hide-sm");
    }
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    document.body.classList.remove("scroll-hide-sm");
  };

  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmenuClick = (index) => {
    if (windowWidth < 992) {
      setActiveSubmenu((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  const menuItems = [
    {
      label: "Home",
      links: [
        { to: "/index-1", label: "Home LMS" },
        { to: "/index-2", label: "Home Online Course" },
        { to: "/index-3", label: "Home University" },
        { to: "/index-4", label: "Home Tutor" },
      ],
    },
    {
      label: "Courses",
      links: [
        { to: "/course", label: "Course Grid View" },
        { to: "/course-list-view", label: "Course List View" },
        { to: "/course-details", label: "Course Details" },
        { to: "/lesson-details", label: "Lesson Details" },
      ],
    },
    {
      label: "Pages",
      links: [
        { to: "/about", label: "About" },
        { to: "/about-two", label: "About Two" },
        { to: "/about-three", label: "About Three" },
        { to: "/about-four", label: "About Four" },
        { to: "/pricing-plan", label: "Pricing Plan" },
        { to: "/instructor", label: "Instructor" },
        { to: "/instructor-two", label: "Instructor Two" },
        { to: "/instructor-details", label: "Instructor Details" },
        { to: "/tutor", label: "Premium Tutors" },
        { to: "/tutor-details", label: "Premium Tutors Details" },
        { to: "/faq", label: "FAQ" },
        { to: "/tuition-jobs", label: "Tuition Jobs" },
        { to: "/events", label: "Events" },
        { to: "/event-details", label: "Event Details" },
        { to: "/apply-admission", label: "Apply Admission" },
        { to: "/gallery", label: "Gallery" },
        { to: "/privacy-policy", label: "Privacy Policy" },
        { to: "/favorite-course", label: "Favorite Course" },
        { to: "/find-tutors", label: "Find Best Tutors" },
        { to: "/book-online-class", label: "Book Online Class" },
      ],
    },
    {
      label: "Product",
      links: [
        { to: "/product", label: "Product" },
        { to: "/product-details", label: "Product Details" },
        { to: "/cart", label: "Cart" },
        { to: "/checkout", label: "Checkout" },
      ],
    },
    {
      label: "Blog",
      links: [
        { to: "/blog", label: "Blog Grid" },
        { to: "/blog-list", label: "Blog List" },
        { to: "/blog-classic", label: "Blog Classic" },
        { to: "/blog-details", label: "Blog Details" },
      ],
    },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <div className={`side-overlay ${isMenuActive ? "show" : ""}`}></div>

      {/* header top */}
      <div className='header-top bg-main-25 border-bottom border-neutral-20'>
        <div className='container'>
          <div className='flex-between gap-24'>
            {/* Logo Start */}
            <div className='logo'>
              <Link href='/index-1' className='link'>
                <img src='assets/images/logo/logo.png' alt='Logo' />
              </Link>
            </div>
            {/* Logo End  */}
            {/* Search Start */}
            <div className='d-md-flex d-none bg-white border border-neutral-30 rounded-pill p-8 ps-24 pe-56 position-relative d-flex align-items-center  min-w-320 max-w-708 w-100'>
              <div className='header-select style-two bg-white rounded-pill position-relative'>
                <select
                  className='js-example-basic-single border-0'
                  name='state'
                  defaultValue={1}
                >
                  <option value={1}>Physics</option>
                  <option value={2}>Math</option>
                  <option value={3}>Biology</option>
                  <option value={4}>English</option>
                  <option value={5}>Higher Math</option>
                  <option value={6}>Social Science</option>
                  <option value={7}>Chemistry</option>
                </select>
              </div>
              <form
                action='#'
                className='border-start border-neutral-30 ps-24 w-100'
              >
                <input
                  type='text'
                  className='common-input border-0 px-0 py-10'
                  placeholder='Search Tutors...'
                />
                <button
                  type='submit'
                  className='w-44 h-44 bg-main-600 hover-bg-main-700 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
                >
                  <i className='ph-bold ph-magnifying-glass' />
                </button>
              </form>
            </div>
            {/* Search End */}
            {/* Buttons Start */}
            <div className='d-lg-flex d-none flex-align flex-md-nowrap flex-wrap gap-16 flex-shrink-0'>
              <Link
                href='/sign-in'
                className='btn btn-outline-main rounded-pill flex-align gap-8'
              >
                Login
                <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
              </Link>
              <Link
                href='/sign-up'
                className='btn btn-main rounded-pill flex-align gap-8'
              >
                Sign Up
                <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
              </Link>
            </div>
            <Link
              href='/sign-in'
              className='d-lg-none flex-shrink-0 w-52 h-52 bg-white hover-bg-main-600 border border-neutral-30 rounded-circle flex-center text-2xl text-neutral-500 hover-text-white hover-border-main-600'
            >
              <i className='ph ph-user-circle' />
            </Link>
            {/* Buttons End */}
          </div>
        </div>
      </div>

      {/* header */}
      <header
        className={`header border-bottom-0 bg-white ${
          scroll ? "fixed-header" : ""
        }`}
      >
        <div className='container'>
          <nav className='header-inner flex-between gap-8'>
            {/* Select Start */}
            <div className='header-select border border-neutral-30 bg-main-25 rounded-pill position-relative ms-0'>
              <span className='select-icon position-absolute top-50 translate-middle-y inset-inline-start-0 z-1 ms-lg-4 ms-12 text-xl pointer-event-none d-flex'>
                <i className='ph-bold ph-squares-four' />
              </span>
              <select
                className='js-example-basic-single border-0'
                name='state'
                defaultValue='categories'
              >
                <option value={"Categories"}>Categories</option>
                <option value={"Design"}>Design</option>
                <option value={"Development"}>Development</option>
                <option value={"Architecture"}>Architecture</option>
                <option value={"Life Style"}>Life Style</option>
                <option value={"Data Science"}>Data Science</option>
                <option value={"Marketing"}>Marketing</option>
                <option value={"Music"}>Music</option>
                <option value={"Typography"}>Typography</option>
                <option value={"Finance"}>Finance</option>
                <option value={"Motivation"}>Motivation</option>
              </select>
            </div>
            {/* Select End */}
            {/* Menu Start  */}
            <div className='header-menu d-lg-block d-none'>
              <ul className='nav-menu flex-align'>
                {menuItems.map((item, index) =>
                  item.links ? (
                    <li
                      key={`menu-item-${index}`}
                      className='nav-menu__item has-submenu'
                    >
                      <Link href='#' className='nav-menu__link'>
                        {item.label}
                      </Link>
                      <ul className={`nav-submenu scroll-sm`}>
                        {item.links.map((link, linkIndex) => (
                          <li
                            key={`submenu-item-${linkIndex}`}
                            className={`nav-submenu__item ${
                              pathname === link.to && "activePage"
                            }`}
                          >
                            <Link
                              href={link.to}
                              className='nav-submenu__link hover-bg-neutral-30'
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li
                      key={`menu-item-${index}`}
                      className='nav-menu__item active'
                    >
                      <Link href={item.to} className='nav-menu__link'>
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* Menu End  */}
            {/* Header Right start */}
            <div className='header-right flex-align'>
              <Link
                href='#'
                className='info-action w-44 h-44 bg-main-25 hover-bg-main-600 rounded-circle flex-center text-xl text-neutral-500 hover-text-white position-relative me-6'
              >
                <i className='ph-bold ph-heart' />
                <span className='w-22 h-22 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4'>
                  5
                </span>
              </Link>
              <Link
                href='#'
                className='info-action w-44 h-44 bg-main-25 hover-bg-main-600 rounded-circle flex-center text-xl text-neutral-500 hover-text-white position-relative me-6'
              >
                <i className='ph-bold ph-shopping-cart-simple' />
                <span className='w-22 h-22 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4'>
                  3
                </span>
              </Link>
              <button
                type='button'
                onClick={toggleMenu}
                className='toggle-mobileMenu d-lg-none text-neutral-200 flex-center'
              >
                <i className='ph ph-list' />
              </button>
            </div>
            {/* Header Right End  */}
          </nav>
        </div>
      </header>

      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${
          isMenuActive ? "active" : ""
        }`}
      >
        <button type='button' className='close-button' onClick={closeMenu}>
          <i className='ph ph-x' />{" "}
        </button>
        <div className='mobile-menu__inner'>
          <Link href='//index-1' className='mobile-menu__logo'>
            <img src='assets/images/logo/logo.png' alt='Logo' />
          </Link>
          <div className='mobile-menu__menu'>
            <ul className='nav-menu flex-align nav-menu--mobile'>
              {menuItems.map((item, index) =>
                item.links ? (
                  <li
                    key={`menu-item-${index}`}
                    className={`nav-menu__item has-submenu ${
                      activeSubmenu === index ? "activePage" : ""
                    }`}
                    onClick={() => handleSubmenuClick(index)}
                  >
                    <Link href='#' className='nav-menu__link'>
                      {item.label}
                    </Link>
                    <ul className={`nav-submenu scroll-sm`}>
                      {item.links.map((link, linkIndex) => (
                        <li key={linkIndex} className='nav-submenu__item'>
                          <Link
                            href={link.href}
                            className='nav-submenu__link hover-bg-neutral-30'
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className='nav-menu__item' key={index}>
                    <Link href={item.href} className='nav-menu__link'>
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <div className='d-sm-none d-block mt-24'>
              <div className='header-select border border-neutral-30 bg-main-25 rounded-pill position-relative'>
                <span className='select-icon position-absolute top-50 translate-middle-y inset-inline-start-0 z-1 ms-lg-4 ms-12 text-xl pointer-event-none d-flex'>
                  <i className='ph-bold ph-squares-four' />
                </span>
                <select
                  className='js-example-basic-single border-0'
                  name='state'
                  defaultValue={"Categories"}
                >
                  <option value={"Categories"}>Categories</option>
                  <option value={"Design"}>Design</option>
                  <option value={"Development"}>Development</option>
                  <option value={"Architecture"}>Architecture</option>
                  <option value={"Life Style"}>Life Style</option>
                  <option value={"Data Science"}>Data Science</option>
                  <option value={"Marketing"}>Marketing</option>
                  <option value={"Music"}>Music</option>
                  <option value={"Typography"}>Typography</option>
                  <option value={"Finance"}>Finance</option>
                  <option value={"Motivation"}>Motivation</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTwo;
