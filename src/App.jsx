import React from 'react'
import '../public/assets/css/bootstrap.css';
import '../public/assets/css/style.css';
import '../public/assets/css/themify-icons.css';

import skills, { portfolioItems } from './data';


function App() {

    const downloadCV = () => {
        const files = '../public/RittikChawla_CV.pdf';
        const link = document.createElement('a');
        link.href = files;
        link.download = 'RittikChawla_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        };

    return (
        <>

            <header id="home" className="header">
                <div className="overlay"></div>
                <div className="header-content container">
                    <h1 className="header-title">
                        <span className="up">HI!</span>
                        <span className="down">I am Rittik Chawla</span>
                    </h1>
                    <p className="header-subtitle">FRONTEND WEB DESIGNER</p>

                    <button className="btn btn-primary" id="downloadButton" onClick={downloadCV}>Download CV</button>

                </div>

            </header>


            <section className='section' id='skills'>
                <div className="container text-center">
                    <p className="section-subtitle">What Can I Do</p>
                    <h6 className="section-title mb-6">Technical Skills (Point To Views)</h6>

                    <article className='row'>
                        {skills.map((data => {
                            return (
                                <section className="col-md-6 col-lg-4" key={data.id}>
                                    <div className="service-card">
                                        <div className="body">
                                            {data.icons.map((icon, index) => (
                                                <img src={icon} alt={`${data.title} icon ${index + 1}`} className="icon" key={index} />
                                            ))}
                                            <h6 className="title">{data.title} </h6>
                                            <p className="subtitle text-center">{data.subtitle}</p>
                                        </div>
                                    </div>
                                </section>
                            )
                        }))}
                    </article>
                </div>
            </section>

            <section className="section" id="portfolio">
                <div className="container text-center">
                    <p className="section-subtitle">What I Did ?</p>
                    <h6 className="section-title mb-6">Portfolio (Point To Views)</h6>

                    <div className="row">
                        { /* map through portfolioItems */ }
                        {portfolioItems.map(item => (
                            <div className="col-md-4 mb-5" key={item.id}>
                                <section className="portfolio-card">
                                    <img src={item.img} className="portfolio-card-img" alt={item.title} />
                                    <span className="portfolio-card-overlay">
                                        <span className="portfolio-card-caption">
                                            <h4>{item.title}</h4>
                                            <p className="font-weight-normal">
                                                {item.description}
                                                {item.extraLink && (
                                                    <>
                                                        <br />
                                                        <a href={item.extraLink.href} target="_blank" rel="noreferrer">{item.extraLink.text}</a>
                                                    </>
                                                )}
                                            </p>
                                            <div>
                                                {item.figma && (
                                                    <button className="btn btn-primary" onClick={() => window.open(item.figma, '_blank', 'noopener,noreferrer')}>
                                                        Figma
                                                    </button>
                                                )}
                                                {item.website ? (
                                                    <button className="btn btn-primary" onClick={() => window.open(item.website, '_blank', 'noopener,noreferrer')}>
                                                        Website
                                                    </button>
                                                ) : (
                                                    <button className="btn btn-primary" disabled>
                                                        Website
                                                    </button>
                                                )}
                                            </div>
                                        </span>
                                    </span>
                                </section>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="container">
                <footer className="footer">

                    <div className="social-links text-right m-auto ml-sm-auto flex gap-5">
                        <a href="https://www.facebook.com/rittik.chawla.9/" target="_blank" className="link" rel="noreferrer"><i className="ti-facebook"></i></a>
                        <a href="https://twitter.com/Rittik_Dev" target="_blank" className="link" rel="noreferrer"><i className="ti-twitter-alt"></i></a>
                        <a href="https://github.com/RittikChawla" target="_blank" className="link" rel="noreferrer"><i className="ti-github"></i></a>
                        <a href="/original/mailto:rittik.ch@hotmail.com" className="link"><i className="ti-email"></i></a>

                    </div>
                </footer>
            </div>



        </>
    )
}
export default App