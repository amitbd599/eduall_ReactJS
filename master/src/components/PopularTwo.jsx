import React from "react";

const PopularTwo = () => {
  return (
    <section className='d-flex overflow-hidden'>
      <div className='lg-w-50-percent wow bounceIn' data-wow-duration='3s'>
        <img
          src='assets/images/thumbs/faq-five-img1.png'
          alt=''
          className='h-100 w-100'
        />
      </div>
      <div className='lg-w-50-percent'>
        <div className='py-120 max-w-526-px lg-ms-134px'>
          <div className='faq-content'>
            <div className='mb-40'>
              <div className='flex-align d-inline-flex flex-wrap gap-8 mb-16 wow bounceInDown'>
                <span className='text-main-600 text-2xl d-flex'>
                  <i className='ph-bold ph-book' />
                </span>
                <h5 className='text-main-600 mb-0'>
                  Frequently Asked Questions (FAQs)
                </h5>
              </div>
              <h2 className='mb-24 wow bounceIn'>
                Find Answers to Your Questions
              </h2>
              <p className='text-neutral-500 text-line-2  wow bounceInUp'>
                Welcome to our FAQs section! Here, we've compiled answers to
                some of the most common questions our users ask.
              </p>
            </div>
            <div className='accordion common-accordion' id='accordionExample'>
              <div
                className='accordion-item'
                data-aos='fade-up-left'
                data-aos-duration={400}
              >
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    How do I enroll in a course?
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  className='accordion-collapse collapse show'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <p className='accordion-body__desc'>
                      Once you enroll in a course, you'll have unlimited access
                      to the course materials for as long as the course is
                      available on our platform.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className='accordion-item'
                data-aos='fade-up-left'
                data-aos-duration={600}
              >
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    Can I access my courses on mobile devices?
                  </button>
                </h2>
                <div
                  id='collapseTwo'
                  className='accordion-collapse collapse'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <p className='accordion-body__desc'>
                      Once you enroll in a course, you'll have unlimited access
                      to the course materials for as long as the course is
                      available on our platform.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className='accordion-item'
                data-aos='fade-up-left'
                data-aos-duration={800}
              >
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    How long do I have access to a course?
                  </button>
                </h2>
                <div
                  id='collapseThree'
                  className='accordion-collapse collapse'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <p className='accordion-body__desc'>
                      Once you enroll in a course, you'll have unlimited access
                      to the course materials for as long as the course is
                      available on our platform.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className='accordion-item'
                data-aos='fade-up-left'
                data-aos-duration={1000}
              >
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFour'
                    aria-expanded='false'
                    aria-controls='collapseFour'
                  >
                    What if I need help or have questions during the course?
                  </button>
                </h2>
                <div
                  id='collapseFour'
                  className='accordion-collapse collapse'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <p className='accordion-body__desc'>
                      Once you enroll in a course, you'll have unlimited access
                      to the course materials for as long as the course is
                      available on our platform.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className='accordion-item'
                data-aos='fade-up-left'
                data-aos-duration={1200}
              >
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFive'
                    aria-expanded='false'
                    aria-controls='collapseFive'
                  >
                    Do you offer refunds if I'm not satisfied with a course?
                  </button>
                </h2>
                <div
                  id='collapseFive'
                  className='accordion-collapse collapse'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <p className='accordion-body__desc'>
                      Once you enroll in a course, you'll have unlimited access
                      to the course materials for as long as the course is
                      available on our platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularTwo;
