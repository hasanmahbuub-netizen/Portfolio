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

        <main className="editorial-flow">
          {/* SECTION 1: The Lead Story & Profile */}
          <section className="editorial-section lead-story-section">
            <div className="lead-story-content">
              <h2 className="lead-headline">FROM CLASSROOM TO BOARDROOM: A NEW ERA OF COMMERCE</h2>
              <div className="author-byline">Mirpur, Dhaka • Special Report</div>
              
              <div className="multi-column-2">
                <p className="drop-cap">B</p>
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
              </div>
            </div>
            
            <aside className="lead-story-sidebar">
              <div className="profile-section">
                <img src="/author_portrait.jpeg" alt="Portrait of Mahbub Hasan Anik" className="profile-img" />
                <div className="profile-name">Mahbub Hasan Anik</div>
                <div className="profile-title">Editor-in-Chief & Lead Engineer</div>
              </div>
              <div className="ad-box">
                <div className="ad-title" style={{fontSize: '1.8rem'}}>CONTACT</div>
                <p style={{fontSize: '0.9rem', marginBottom: '0.2rem'}}><strong>Phone:</strong> +8801846799863</p>
                <p style={{fontSize: '0.9rem'}}><strong>Email:</strong> mahbub.anik02@gmail.com</p>
              </div>
            </aside>
          </section>

          {/* SECTION 2: Centerfold Feature (MEEK) */}
          <section className="editorial-section centerfold-banner">
            <div className="centerfold-content">
              <h2 className="centerfold-headline">MEEK: THE INTERACTIVE SPIRITUAL CHALLENGE</h2>
              <p className="centerfold-subhead">"Can you say it perfectly?"</p>
              <div className="centerfold-image-container">
                <a href="https://joinmeek.vercel.app" target="_blank" rel="noopener noreferrer">
                  <img src="/meek.png" alt="Meek App" className="centerfold-img" />
                </a>
              </div>
              <p className="centerfold-text">
                Standing out as his premier digital venture, MEEK is an interactive spiritual application that bridges technology with mindfulness. It challenges users to perfect their pronunciation and engagement. Beautifully engineered, deployed on Vercel, and built to engage. <a href="https://joinmeek.vercel.app" target="_blank" rel="noopener noreferrer"><strong>Experience Meek Live Today.</strong></a>
              </p>
            </div>
          </section>

          {/* SECTION 3: Dual Feature Article (Agent & Bishod) */}
          <section className="editorial-section dual-feature">
            <h2 className="section-title">THE DIGITAL ENGINEERING SHOWCASE</h2>
            <div className="newspaper-divider"></div>
            
            <div className="feature-split">
              <div className="feature-column">
                <h3 className="feature-headline">AUTOMATING THE FUTURE: AI LEAD GEN AGENT</h3>
                <a href="https://github.com/hasanmahbuub-netizen/Agent" target="_blank" rel="noopener noreferrer">
                  <img src="/ai_agent.png" alt="AI Lead Generation Agent" className="feature-img" />
                </a>
                <p>
                  An autonomous artificial intelligence agent designed to fully automate and optimize the grueling process of lead generation. Built with modern AI workflows, this agent acts as an untiring digital employee, finding, verifying, and delivering high-quality prospects.
                </p>
              </div>
              
              <div className="feature-column">
                <h3 className="feature-headline">FINANCIAL CLARITY: THE BISHOD INITIATIVE</h3>
                <a href="https://bishod.lovable.app" target="_blank" rel="noopener noreferrer">
                  <img src="/bishod.png" alt="Bishod App" className="feature-img" />
                </a>
                <p>
                  A powerful financial aggregator answering the crucial question: "Which bank actually gives you the best deal?" Bishod cuts through the marketing noise of modern banking, delivering raw, comparative data to empower consumer financial decisions.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4: Classifieds & Kumoo Store */}
          <section className="editorial-section bottom-showcase">
            <div className="classifieds-wrapper">
              <h3 className="section-title" style={{fontSize: '1.8rem'}}>THE CLASSIFIEDS: SKILLS & ARSENAL</h3>
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

            <div className="kumoo-wrapper">
              <h3 className="section-title" style={{fontSize: '1.8rem'}}>FEATURED PRODUCT</h3>
              <div className="venture-box">
                <a href="https://kumooshop.vercel.app" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/kumoo.png" alt="Kumoo Shop" className="venture-img" />
                  <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.2rem', marginBottom: '0.2rem' }}>KUMOO SHOP</h4>
                  <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>kumooshop.vercel.app</p>
                  <p style={{ fontSize: '0.9rem' }}>An e-commerce storefront for artisan crochet plushies with integrated chat support.</p>
                </a>
              </div>
            </div>
          </section>

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
