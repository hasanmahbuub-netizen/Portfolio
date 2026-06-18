import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentDate, setCurrentDate] = useState('');
  const [weather, setWeather] = useState('FETCHING...');
  const [isMicrofilm, setIsMicrofilm] = useState(false);

  useEffect(() => {
    // Set Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('en-US', options);
    setCurrentDate(date.toUpperCase());

    // Fetch Weather for Dhaka
    fetch('https://api.open-meteo.com/v1/forecast?latitude=23.8103&longitude=90.4125&current_weather=true')
      .then(res => res.json())
      .then(data => {
        setWeather(`${data.current_weather.temperature}°C, DHAKA`);
      })
      .catch(() => setWeather('WEATHER UNAVAILABLE'));
  }, []);

  useEffect(() => {
    if (isMicrofilm) {
      document.body.classList.add('microfilm-mode');
    } else {
      document.body.classList.remove('microfilm-mode');
    }
  }, [isMicrofilm]);

  return (
    <>
      <div className="ticker-wrap">
        <div className="ticker">
          <span className="ticker__item">▲ META ADS +3.1x ROAS</span>
          <span className="ticker__item">▲ B2B RETAIL +300 STORES NATIONWIDE</span>
          <span className="ticker__item">◆ AVAILABLE FOR HIGH-IMPACT ROLES</span>
          <span className="ticker__item">▲ 1 CRORE+ BDT CUMULATIVE SALES</span>
          <span className="ticker__item">◆ WEB ENGINEERING & AI WORKFLOWS</span>
          <span className="ticker__item">▲ META ADS +3.1x ROAS</span>
        </div>
      </div>

      <div className="app-container">
        
        <div className="theme-toggle-container">
          <button 
            className="theme-toggle-btn" 
            onClick={() => setIsMicrofilm(!isMicrofilm)}
          >
            {isMicrofilm ? 'Return to Standard Print' : 'View in Microfilm Archive'}
          </button>
        </div>

        <header className="masthead">
          <div className="masthead-top">
            <span>VOL. I ... No. 1</span>
            <span>{currentDate} | {weather}</span>
            <span>PRICE: TWO CENTS</span>
          </div>
          <h1 className="masthead-title">The Mahbub Hasan Anik Chronicle</h1>
          <div className="masthead-subtitle">
            Marketing & Business Development Professional | AI Workflows & Web Engineering
          </div>
          <div className="newspaper-divider"></div>
        </header>

        <main className="front-page">
          <article className="lead-story">
            <h2 className="lead-headline">FROM CLASSROOM TO BOARDROOM: A NEW ERA OF COMMERCE</h2>
            <div className="author-byline">Mirpur, Dhaka • Special Report</div>
            
            <div className="multi-column-2">
              <p className="drop-cap">
                B
              </p>
              <p style={{marginTop: '-0.2rem'}}>
                uilt and ran businesses before graduating. That is the opening statement of a career that refuses to wait for permission. Mahbub Hasan Anik is not just a student of marketing at North South University; he is a practitioner who has already altered the landscape of B2B retail in Bangladesh.
              </p>
              <p>
                As the sole distributor for two international brands, Emily Pets & Diyouke, Anik orchestrated the growth of a distribution network from ground zero to over 300 retail stores nationwide. This relentless expansion resulted in generating over 1 crore BDT in cumulative sales. Through targeted positioning and aggressive account growth, he transformed Diyouke into one of the nation's fastest-growing pet-food brands.
              </p>

              <div className="pull-quote">
                "Delivered 3.1× ROAS on Meta Ads, proving that data-driven marketing is the lifeblood of modern retail."
              </div>

              <h3 className="tertiary-headline">A TRACK RECORD OF GROWTH</h3>
              <p>
                At <strong>Kitty Imports</strong> (Nov 2023 – Jan 2026), his strategic management of Meta ad campaigns—with spends exceeding 200,000 BDT—drove unprecedented brand awareness and lead generation. Concurrently, at <strong>Kutush Pet Shop</strong>, his efforts as Business Development Executive spurred a 225% year-over-year revenue growth by optimizing stock allocation and expanding distributor partnerships.
              </p>
              <p>
                His operational acumen was further honed at <strong>IIANA International</strong>, evaluating government tenders and coordinating multi-site logistics to achieve 100% on-time delivery. At <strong>Qualifie</strong>, Anik built a B2B partnership network from scratch, onboarding 33 organizations and driving 350+ applications via a content strategy that vastly outperformed sector averages.
              </p>
              
              <figure style={{ marginTop: '2rem', marginBottom: '1rem', borderTop: '1px solid var(--border-ink)', paddingTop: '1rem' }}>
                <h3 className="tertiary-headline">ENTREPRENEURIAL VENTURES</h3>
                <p>Under <strong>Independent Consumer Ventures</strong>, Anik founded <em>Memoir Apparels</em>, a D2C brand managing the full supply chain. He also launched <em>IIANA Lifestyle</em>, achieving 100% sell-through within two months, and conducted deep feasibility studies for <em>Maverick & Co.</em> skincare.</p>
              </figure>
              
              <h3 className="tertiary-headline" style={{marginTop: '1.5rem'}}>THE CLASSIFIEDS: SKILLS & TECH</h3>
              <div className="classifieds-grid">
                <div className="classified-box">
                  <div className="classified-title">Commercial</div>
                  B2B Distribution, Brand Management, Trade Marketing, Performance Marketing, ROAS Tracking.
                </div>
                <div className="classified-box">
                  <div className="classified-title">Tools & Tech</div>
                  Make.com, N8N, Meta Ads Manager, Google Analytics, React, Web Engineering.
                </div>
                <div className="classified-box">
                  <div className="classified-title">Education</div>
                  BBA in Marketing, North South University (Expected May 2026).
                </div>
                <div className="classified-box">
                  <div className="classified-title">Notice</div>
                  Ready to bring proven commercial instincts to a team that moves fast.
                </div>
              </div>

            </div>
          </article>

          <aside className="sidebar">
            
            <section className="profile-section">
              <img src="/author_portrait.jpeg" alt="Portrait of Mahbub Hasan Anik" className="profile-img halftone-img" />
              <div className="profile-name">Mahbub Hasan Anik</div>
              <div className="profile-title">Editor-in-Chief & Lead Engineer</div>
            </section>

            <section className="secondary-story">
              <h3 className="secondary-headline">DIGITAL VENTURES</h3>
              <div className="newspaper-divider" style={{height: '2px', margin: '0.5rem 0'}}></div>
              <p>
                Beyond traditional marketing, Anik engineers digital solutions. His recent web properties demonstrate a synthesis of code and consumer need:
              </p>
              
              <div className="venture-box">
                <img src="/bishod.png" alt="Bishod App" className="venture-img halftone-img" />
                <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.2rem', marginBottom: '0.2rem' }}>BISHOD</h4>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>bishod.lovable.app</p>
                <p style={{ fontSize: '0.9rem' }}>A financial aggregator answering the crucial question: "Which bank actually gives you the best deal?"</p>
              </div>

              <div className="venture-box">
                <img src="/meek.png" alt="Meek App" className="venture-img halftone-img" />
                <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.2rem', marginBottom: '0.2rem' }}>MEEK</h4>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>joinmeek.vercel.app</p>
                <p style={{ fontSize: '0.9rem' }}>An interactive spiritual application challenging users: "Can you say it perfectly?"</p>
              </div>

              <div className="venture-box">
                <img src="/kumoo.png" alt="Kumoo Shop" className="venture-img halftone-img" />
                <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.2rem', marginBottom: '0.2rem' }}>KUMOO</h4>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>kumooshop.vercel.app</p>
                <p style={{ fontSize: '0.9rem' }}>An e-commerce storefront for artisan crochet plushies with integrated chat support.</p>
              </div>
            </section>

            <section className="ad-box">
              <div className="ad-title">CONTACT</div>
              <p><strong>Phone:</strong> +8801846799863</p>
              <p><strong>Email:</strong> mahbub.anik02@gmail.com</p>
              <p><em>Available for high-impact roles.</em></p>
            </section>
          </aside>
        </main>

        <footer className="newspaper-footer">
          <div className="newspaper-divider" style={{marginBottom: '1.5rem'}}></div>
          <p><strong>THE MAHBUB HASAN ANIK CHRONICLE</strong> • EST. 2026</p>
          <p>Published in Mirpur, Dhaka, Bangladesh</p>
          <p style={{fontSize: '0.8rem', marginTop: '1rem'}}><em>All rights reserved. Reproduction in whole or in part without permission is prohibited.</em></p>
        </footer>
      </div>
    </>
  );
}

export default App;
