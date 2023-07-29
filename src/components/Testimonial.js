function Testimonial() {
  return (
    <section className="page-section bg-light" id="testimonial">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Testimonials</h2>
          <h3 className="section-subheading text-muted">
            People I've worked with have said some nice things...
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="assets/img/testimonials/Alex Backer.jpg"
                alt="..."
              />
              <h4>Alex Backer</h4>
              <p className="text-muted">
                “Daniel was a real pleasure to work with and we look forward to
                working with him again. He’s definitely the kind of developer
                you can trust with a project from start to finish.”
              </p>
              {/* <a
                className="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Alex Backer Twitter Profile"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Alex Backer Facebook Profile"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Alex Backer LinkedIn Profile"
              >
                <i className="fab fa-linkedin-in"></i>
              </a> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="assets/img/testimonials/Antonio Piazzolla.jpg"
                alt="..."
              />
              <h4>Antonio Piazzolla</h4>
              <p className="text-muted">
                “Daniel's a clear communicator with the tenacity and confidence
                to really dig in to tricky design scenarios and the
                collaborative friction that's needed to produce excellent work.”
              </p>
              {/* <a
                className="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Antonio Piazzolla Twitter Profile"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Antonio Piazzolla Facebook Profile"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Antonio Piazzolla LinkedIn Profile"
              >
                <i className="fab fa-linkedin-in"></i>
              </a> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="assets/img/testimonials/Michael Coudrey.jpg"
                alt="..."
              />
              <h4>Michael Coudrey</h4>
              <p className="text-muted">
                “Daniel was a very trusted and talented DevOps Engineer. During
                with this project I've known about him very well and I wish to
                work with him again.”
              </p>
              {/* <a
                className="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Michael Coudrey Twitter Profile"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Michael Coudrey Facebook Profile"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Michael Coudrey LinkedIn Profile"
              >
                <i className="fab fa-linkedin-in"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
