import React, { useState } from "react";

export default function HomePage({ onLogin, onRegister }) {
  const [showFeaturesModal, setShowFeaturesModal] = useState(false);

  const openFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    setShowFeaturesModal(true);
  };

  const openHow = () => {
    document.getElementById("how")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <nav className="navbar">
        <div className="navbar-brand">Home<span>Worth</span></div>
        <div className="navbar-actions">
          <div className="nav-logo" onClick={openFeatures}><div className="logo-circle">HW</div></div>
          <button className="nav-btn nav-btn-ghost" onClick={openFeatures}>Features</button>
          <button className="nav-btn nav-btn-ghost" onClick={openHow} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.06)" }}>?</div>
            How it works
          </button>
          <button className="nav-btn nav-btn-ghost" onClick={onLogin}>Login</button>
          <button className="nav-btn nav-btn-solid" onClick={onRegister}>Register</button>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(140deg,#2A1A10 0%,#4A2C1C 35%,#C85515 78%,#F5A56B 100%)', padding: '88px 48px 108px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -140, right: -140, width: 520, height: 520, borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} />
        <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto' }} className="fade-up">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 22, padding: '7px 20px', fontSize: 11.5, color: 'rgba(255,255,255,0.9)', fontWeight: 600, letterSpacing: 1.4, textTransform: 'uppercase', marginBottom: 32 }}>
            🏠 India's #1 Property Enhancement Platform
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(40px,6vw,72px)', color: 'white', lineHeight: 1.1, marginBottom: 22 }}>
            Add Real Value to<br /><span style={{ color: '#F5A56B' }}>Your Home</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 18, lineHeight: 1.8, marginBottom: 52 }}>
            Expert-curated improvement ideas for Indian middle-class homes.<br />
            Get personalised recommendations and boost your property's market value.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 56, flexWrap: 'wrap', marginTop: 52 }}>
            {[['10,000+', 'Homeowners'], ['₹2.5Cr+', 'Value Added'], ['95%', 'Satisfaction']].map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, color: '#F5A56B', fontWeight: 700, lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 6, textTransform: 'uppercase', letterSpacing: 1.2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" style={{ background: 'var(--cream)', padding: '72px 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 40, color: 'var(--earth)', marginBottom: 14 }}>Why HomeWorth?</h2>
          <p style={{ color: 'var(--earth-mid)', fontSize: 16, maxWidth: 460, margin: '0 auto' }}>Everything you need to make smart property investment decisions</p>
        </div>

        {/* anchor target for 'How it works' — content moved to page bottom */}
        <div id="how" />

        <div style={{ maxWidth: 980, margin: '0 auto 36px', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
          {[
            { icon: '💡', title: 'Expert-Curated', desc: 'Admin-managed improvement ideas with expected ROI and cost ranges.' },
            { icon: '📋', title: 'Submission & Review', desc: 'Homeowners submit properties; admins review and provide feedback.' },
            { icon: '🔖', title: 'Save & Track', desc: 'Users can save ideas, mark implemented, and track progress.' },
            { icon: '⚙️', title: 'Admin Tools', desc: 'Admins manage recommendations, review properties, and moderate content.' },
          ].map(f => (
            <div key={f.title} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: 8 }}>
              <div style={{ fontSize: 24, width: 44, height: 44, borderRadius: 8, background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{f.icon}</div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>{f.title}</div>
                <div style={{ color: 'var(--earth-mid)', fontSize: 13 }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, maxWidth: 960, margin: '0 auto' }}>
          {[
            { icon: '🏗️', title: 'Expert Curated', desc: 'Admin-verified improvement ideas with proven ROI tailored for Indian homes and budgets.' },
            { icon: '📈', title: 'ROI Focused', desc: "Know exactly how much you'll gain before spending a rupee on any renovation project." },
            { icon: '🇮🇳', title: 'India-Specific', desc: 'Vastu principles, Indian climate, and middle-class budgets are at the heart of every tip.' },
          ].map(f => (
            <div key={f.title} style={{ background: 'white', borderRadius: 16, padding: '36px 28px', boxShadow: 'var(--shadow)', borderTop: '4px solid var(--saffron)', textAlign: 'center', transition: 'transform 0.2s,box-shadow 0.2s' }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; }}>
              <div style={{ fontSize: 44, marginBottom: 18 }}>{f.icon}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, color: 'var(--earth)', marginBottom: 12 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--earth-mid)', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <p style={{ color: 'var(--earth-mid)', fontSize: 16, marginBottom: 22 }}>Ready to transform your property?</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button onClick={onRegister} style={{ padding: '14px 40px', background: 'var(--saffron)', color: 'white', border: 'none', borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", boxShadow: '0 4px 16px rgba(232,99,26,0.35)', transition: 'all 0.2s' }}
              onMouseOver={e => { e.currentTarget.style.background = '#C85515'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'var(--saffron)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              Create Free Account
            </button>
            <button onClick={onLogin} style={{ padding: '14px 40px', background: 'white', color: 'var(--earth)', border: '1.5px solid #DDD5CA', borderRadius: 10, fontSize: 16, fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", transition: 'all 0.2s' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--saffron)'; e.currentTarget.style.background = 'var(--saffron-pale)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = '#DDD5CA'; e.currentTarget.style.background = 'white'; }}>
              Sign In
            </button>
          </div>
        </div>
      </div>

      {showFeaturesModal && (
        <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && setShowFeaturesModal(false)}>
          <div className="modal" style={{ maxWidth: 700 }}>
            <h2 className="modal-title">Top Features of HomeWorth</h2>
            <p className="modal-sub">Quick overview of what this project provides</p>
            <div style={{ display: 'grid', gap: 12 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 22 }}>💡</div>
                <div>
                  <div style={{ fontWeight: 700 }}>Expert-Curated Recommendations</div>
                  <div style={{ color: 'var(--earth-mid)' }}>Admin-managed improvement ideas with expected ROI and cost ranges.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 22 }}>📋</div>
                <div>
                  <div style={{ fontWeight: 700 }}>Property Submission & Review</div>
                  <div style={{ color: 'var(--earth-mid)' }}>Homeowners can submit properties and admins can review and provide feedback.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 22 }}>🔖</div>
                <div>
                  <div style={{ fontWeight: 700 }}>Save & Track Ideas</div>
                  <div style={{ color: 'var(--earth-mid)' }}>Users can save ideas, mark them implemented, and track progress.</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 22 }}>⚙️</div>
                <div>
                  <div style={{ fontWeight: 700 }}>Admin Dashboard</div>
                  <div style={{ color: 'var(--earth-mid)' }}>Admins manage recommendations, review properties, and moderate content.</div>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => setShowFeaturesModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* How-it-Works workflow placed at the bottom of the main page */}
      <div style={{ padding: '48px 48px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--earth)', marginBottom: 18 }}>How it works</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {[
              { n: 1, title: 'Create Account', desc: 'Register as a homeowner to get personalised recommendations.' },
              { n: 2, title: 'Submit Property', desc: 'Add photos and property details for expert review.' },
              { n: 3, title: 'Receive Recommendations', desc: 'Browse curated improvement ideas with estimated ROI & costs.' },
              { n: 4, title: 'Implement & Track', desc: 'Save ideas, mark implemented, and monitor value uplift.' },
            ].map(step => (
              <div key={step.n} style={{ background: 'white', borderRadius: 12, padding: 16, boxShadow: 'var(--shadow)', minHeight: 120 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--saffron-pale)', color: 'var(--saffron)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>{step.n}</div>
                  <div style={{ fontWeight: 800 }}>{step.title}</div>
                </div>
                <p style={{ marginTop: 10, color: 'var(--earth-mid)', fontSize: 13 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--earth)', padding: '24px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, color: 'white' }}>Home<span style={{ color: '#F5A56B' }}>Worth</span></div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Empowering Indian Homeowners · FSAD-PS22</div>
      </div>

    </div>
  );
}
