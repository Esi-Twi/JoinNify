import React from 'react'

function Footer() {
    const LinkItem = ({ text }) => (
        <div className="mb-2">
            <a href="#" className="text-decoration-none text-white text-opacity-75" style={{ fontSize: '0.9rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'}
            >
                {text}
            </a>
        </div>
    );

    const ContactItem = ({ icon, text }) => (
        <div className="d-flex align-items-start mb-3">
            <i className={`bi ${icon} me-3 fs-5 text-white`}></i>
            <span className="text-white text-opacity-75" style={{ fontSize: '0.9rem' }}>{text}</span>
        </div>
    );

    return (
        <footer className="pb-3 pt-5 text-white bg1">
            <div className="container mx-auto pt-5 row g-4 pb-4 mb-4" >
                <div className="col-lg-4 col-md-12">
                    <div className="mb-4">
                        <h2 className="fw-bold m-0 ff-lobster text-indigo" style={{ letterSpacing: '2px', fontSize: '1.5rem' }}>JoinNify</h2>
                        <p className="m-0 text-secondary" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>PARIS</p>
                    </div>
                    <p className="text-white text-opacity-75 pe-lg-5" style={{ fontSize: '0.9rem' }}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    </p>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                    <LinkItem text="Home" />
                    <LinkItem text="About" />
                    <LinkItem text="Event" />
                    <LinkItem text="Blog" />
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <LinkItem text="FAQ" />
                    <LinkItem text="Careers" />
                    <LinkItem text="Our approach" />
                    <LinkItem text="Contact" />
                </div>

                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0">
                    <ContactItem
                        icon="bi-geo-alt-fill"
                        text="North Legon, Accra"
                    />
                    <ContactItem
                        icon="bi-telephone-fill"
                        text="054-444-2220"
                    />
                    <ContactItem
                        icon="bi-envelope-fill"
                        text="info@joinnify.com"
                    />
                </div>
            </div>

            <div className="row border-top pt-3 border-secondary border-opacity-25 align-items-center px-2 px-md-5">
                <div className="col-lg-4 col-md-12 text-center text-lg-start mb-lg-0 text-white text-opacity-75" style={{ fontSize: '0.85rem' }}>
                    &copy; 2025 All rights reserved by societhy
                </div>

                <div className="col-lg-4 col-md-12 text-center mb-3 mb-lg-0">
                    <a href="#" className="text-white mx-3 fs-5 opacity-75 hover-opacity-100" style={{ transition: 'opacity 0.2s' }}>
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="text-white mx-3 fs-5 opacity-75 hover-opacity-100" style={{ transition: 'opacity 0.2s' }}>
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="text-white mx-3 fs-5 opacity-75 hover-opacity-100" style={{ transition: 'opacity 0.2s' }}>
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="text-white mx-3 fs-5 opacity-75 hover-opacity-100" style={{ transition: 'opacity 0.2s' }}>
                        <i className="bi bi-youtube"></i>
                    </a>
                </div>

                <div className="col-lg-4 col-md-12 text-center text-lg-end" style={{ fontSize: '0.85rem' }}>
                    <a href="#" className="text-white text-opacity-75 text-decoration-none mx-2">
                        Terms & Conditions
                    </a>
                    <a href="#" className="text-white text-opacity-75 text-decoration-none mx-2">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer