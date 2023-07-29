function Portfolio() {
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">
            This is projects that I have worked before.
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#tradingBotsModal"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/trading-bots.jpg"
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Trading Bots</div>
                <div className="portfolio-caption-subheading text-muted">
                  Containerization, Continuous Integration and Deployment
                  Pipeline for Web application
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#docsGPTModal"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/docs-gpt.gif"
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">DocsGPT</div>
                <div className="portfolio-caption-subheading text-muted">
                  Dockerized Web Application Deployment and using Infrastructure
                  as Code
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#kwentaModal"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/kwenta.jpg"
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Kwenta</div>
                <div className="portfolio-caption-subheading text-muted">
                  Deployment a High-Performance Web Application on AWS using
                  Infrastructure as Code
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="portfolio-modal modal fade"
        id="tradingBotsModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Trading Bots</h2>
                    <p className="item-intro text-muted">
                      Containerization, Continuous Integration and Deployment
                      Pipeline for Web application
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/trading-bots.jpg"
                      alt="..."
                    />
                    <p>
                      I created a Dockerized web application and I developed and
                      implemented a robust continuous integration and deployment
                      pipeline, streamlining the development and deployment
                      process. This pipeline enabled the team to deliver new
                      features and bug fixes more efficiently and with higher
                      quality.
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Website: </strong>
                        <a
                          href="https://www.binance.com/en/trading-bots"
                          target="_blank "
                        >
                          https://www.binance.com/en/trading-bots
                        </a>
                      </li>
                      <li>
                        <strong>Github: </strong>
                        <a
                          href="https://github.com/edeng23/binance-trade-bot"
                          target="_blank "
                        >
                          https://github.com/edeng23/binance-trade-bot
                        </a>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-modal modal fade"
        id="docsGPTModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">DocsGPT</h2>
                    <p className="item-intro text-muted">
                      Dockerized Web Application Deployment with Terraform
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/docs-gpt.gif"
                      alt="..."
                    />
                    <p>
                      In this project, I created a Dockerized web application
                      and deployed it using Terraform for infrastructure
                      provisioning. I used infrastructure as code principles to
                      define and manage the infrastructure resources required
                      for running the web application.
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Website: </strong>
                        <a href="https://docsgpt.arc53.com/" target="_blank ">
                          https://docsgpt.arc53.com/
                        </a>
                      </li>
                      <li>
                        <strong>Github: </strong>
                        <a
                          href="https://github.com/arc53/DocsGPT"
                          target="_blank "
                        >
                          https://github.com/arc53/DocsGPT
                        </a>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-modal modal fade"
        id="kwentaModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Kwenta</h2>
                    <p className="item-intro text-muted">
                      Deployment a High-Performance Web Application on AWS using
                      Infrastructure as Code
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/kwenta.jpg"
                      alt="..."
                    />
                    <p>
                      I deployed a high-performance web application on the
                      Amazon Web Services (AWS) cloud platform using
                      Infrastructure as Code (IaC). By leveraging cloud
                      infrastructure and automation, I easily provisioned and
                      manageed the required resources for the application in a
                      scalable, reliable, and cost-effective manner.
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Website: </strong>
                        <a href="https://kwenta.eth.limo/" target="_blank ">
                          https://kwenta.eth.limo/
                        </a>
                      </li>
                      <li>
                        <strong>Github: </strong>
                        <a
                          href="https://github.com/Kwenta/kwenta"
                          target="_blank "
                        >
                          https://github.com/Kwenta/kwenta
                        </a>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
