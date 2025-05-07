"use client";
import { useState } from "react";
// import ionicons or use react-icons instead

export default function Gallery({ beforeAfters, galleryAndAlt }) {
  return (
    <>
      {/* Loading Screen */}
      <div id="loading-screen">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>

      <section id="gallery" className="container-fluid p-lg-5">
        <div className="row align-items-center">
          {/* Left Side: Paragraph */}
          <div className="col-lg-6 text-start">
            <h1 className="fw-bold my-3">Our Gallery</h1>
            <p className="text-muted">
              Explore our gallery showcasing a wide range of completed projects,
              from stunning paver installations and meticulous pressure washing
              transformations to professional sealing and elegant home
              renovations. Each project reflects our commitment to quality,
              precision, and creating spaces that are both functional and
              visually striking. Whether it's enhancing outdoor areas or
              modernizing interiors, our work is designed to exceed expectations
              and bring your vision to life.
            </p>
          </div>

          {/* Right Side: Stats */}
          <div className="d-none d-md-block col-lg-6">
            <div className="row text-center g-3">
              <div className="col-md-6 col-lg-4">
                <div className="p-3 shadow rounded">
                  <ion-icon
                    name="location-outline"
                    class="text-success"></ion-icon>
                  <h4 className="fw-bold my-1">50+</h4>
                  <small className="text-muted">
                    Towns Served on Long Island
                  </small>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="p-3 shadow rounded">
                  <ion-icon
                    name="chatbubbles-outline"
                    size="large"
                    class="text-success"></ion-icon>
                  <h4 className="fw-bold my-1">Same-Day</h4>
                  <small className="text-muted">Response to Inquiries</small>
                </div>
              </div>

              <div className="col-md col-lg-4">
                <div className="p-3 shadow rounded">
                  <ion-icon
                    name="calendar-outline"
                    size="large"
                    class="text-success"></ion-icon>
                  <h4 className="fw-bold my-1">35+</h4>
                  <small className="text-muted">Years of Experience</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="d-flex my-4 my-lg-5 w-100 w-lg-75 m-auto" />

        {/* You’ll add the sections below in STEP 2 */}
      </section>
    </>
  );
}
