/* global React */
const { useState, useEffect, useMemo } = React;

/* =================== CONSTANTS =================== */
// Photos: only 3 verified-working Unsplash IDs, distributed across slots.
// CSS filters in styles.css create visual variety per slot. Real photos
// can replace these later (the user will swap in their own).
const _BRYCE = "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1800&q=80";
const _CANYON = "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1800&q=80";
const _VEGAS = "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=1800&q=80";
const PHOTOS = {
  bryceSunrise: _BRYCE,
  bryceHoodoos: _BRYCE,
  bryceTrail:   _CANYON,
  bryceStars:   _BRYCE,
  zionCanyon:   _CANYON,
  zionNarrows:  _CANYON,
  zionEmerald:  _CANYON,
  zionDrive:    _CANYON,
  vegasStrip:   _VEGAS,
  vegasNeon:    _VEGAS,
  vegasNight:   _VEGAS,
  vegasPool:    _VEGAS,
  helicopter:   _VEGAS,
  sphere:       _VEGAS,
};

const AUDIENCES = {
  family: {
    key: "family",
    label: "Family",
    sub: "The Inner Circle",
    days: [1,2,3,4,5,6,7,8,9],
    description: "Full master plan — every detail of the 9-day journey.",
  },
  zion: {
    key: "zion",
    label: "Zion Crew",
    sub: "Joining July 14",
    days: [3,4,5,6,7,8,9],
    description: "You're joining at Zion on Day 3 and rolling with us through Vegas.",
  },
  vegas: {
    key: "vegas",
    label: "Vegas Crew",
    sub: "Joining July 17",
    days: [6,7,8,9],
    description: "You're joining for the big surprise reveal in Vegas on Day 6.",
  },
};

/* =================== SURPRISE BANNER =================== */
function SurpriseBanner() {
  return (
    <div className="surprise-banner">
      <span>🤫 TOP SECRET — HUNTER DOES NOT KNOW · OPERATION NATURE TO NEON</span>
    </div>
  );
}

/* =================== NAV =================== */
function Nav({ audience, setAudience, activeSection }) {
  const sections = [
    { id: "hero",      label: "Cover" },
    { id: "countdown", label: "Countdown" },
    { id: "route",     label: "The Route" },
    { id: "bryce",     label: "Bryce" },
    { id: "zion",      label: "Zion" },
    { id: "surprise",  label: "The Surprise" },
    { id: "vegas",     label: "Vegas" },
    { id: "info",      label: "Info Hub" },
  ];
  return (
    <nav className="nav">
      <div className="nav__brand">
        <span className="nav__brand-mark">N→N</span>
        <span className="nav__brand-sub">Hunter · 5.0</span>
      </div>
      <div className="nav__sections">
        {sections.map(s => (
          <a key={s.id} href={`#${s.id}`}
             className={`nav__link ${activeSection === s.id ? "nav__link--active" : ""}`}>
            {s.label}
          </a>
        ))}
      </div>
      <div className="audience" role="tablist" aria-label="Audience">
        {Object.values(AUDIENCES).map(a => (
          <button key={a.key}
            onClick={() => setAudience(a.key)}
            className={`audience__btn ${audience === a.key ? "audience__btn--active" : ""}`}
            title={a.description}>
            {a.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

/* =================== HERO / COVER =================== */
function Hero({ audience }) {
  const aud = AUDIENCES[audience];
  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__photo hero__photo--bryce">
          <img src={PHOTOS.bryceSunrise} alt="" />
        </div>
        <div className="hero__photo hero__photo--zion">
          <img src={PHOTOS.zionCanyon} alt="" />
        </div>
        <div className="hero__photo hero__photo--vegas">
          <img src={PHOTOS.vegasNeon} alt="" />
        </div>
        <div className="hero__overlay"></div>
      </div>
      <div className="hero__content">
        <div className="hero__eyebrow">
          <span className="hero__star">✦</span>
          <span>A Surprise 50th Birthday Journey</span>
          <span className="hero__star">✦</span>
        </div>
        <h1 className="hero__title">
          <span className="hero__title-line hero__title-line--nature">Nature</span>
          <span className="hero__title-line hero__title-line--to">to</span>
          <span className="hero__title-line hero__title-line--neon">Neon</span>
        </h1>
        <div className="hero__meta">
          <div className="hero__meta-block">
            <div className="hero__meta-label">For</div>
            <div className="hero__meta-value">Hunter · 5.0</div>
          </div>
          <div className="hero__meta-divider"></div>
          <div className="hero__meta-block">
            <div className="hero__meta-label">Dates</div>
            <div className="hero__meta-value">Jul 12 – 20, 2026</div>
          </div>
          <div className="hero__meta-divider"></div>
          <div className="hero__meta-block">
            <div className="hero__meta-label">Route</div>
            <div className="hero__meta-value">BNA → LAS</div>
          </div>
        </div>
        <div className="hero__chapters">
          <div className="hero__chapter">
            <div className="hero__chapter-num">I</div>
            <div className="hero__chapter-name">Bryce Canyon</div>
            <div className="hero__chapter-sub">Nature begins</div>
          </div>
          <div className="hero__chapter-arrow">→</div>
          <div className="hero__chapter">
            <div className="hero__chapter-num">II</div>
            <div className="hero__chapter-name">Zion</div>
            <div className="hero__chapter-sub">Adventure & celebration</div>
          </div>
          <div className="hero__chapter-arrow">→</div>
          <div className="hero__chapter">
            <div className="hero__chapter-num">III</div>
            <div className="hero__chapter-name">Las Vegas</div>
            <div className="hero__chapter-sub">Neon finale</div>
          </div>
        </div>
        <div className="hero__viewing-as">
          Viewing as <strong>{aud.label}</strong> — {aud.sub}
        </div>
      </div>
      <div className="hero__scroll-hint">
        <div className="hero__scroll-line"></div>
        <div className="hero__scroll-text">scroll the journey</div>
      </div>
    </section>
  );
}

/* =================== COUNTDOWN =================== */
function Countdown() {
  const target = new Date("2026-07-12T07:55:00-05:00");
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const days  = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins  = Math.floor((diff % 3600000) / 60000);
  const secs  = Math.floor((diff % 60000) / 1000);
  return (
    <section id="countdown" className="countdown">
      <div className="countdown__label">Wheels up</div>
      <div className="countdown__grid">
        <div className="countdown__cell">
          <div className="countdown__num">{days}</div>
          <div className="countdown__unit">days</div>
        </div>
        <div className="countdown__sep">:</div>
        <div className="countdown__cell">
          <div className="countdown__num">{String(hours).padStart(2,"0")}</div>
          <div className="countdown__unit">hours</div>
        </div>
        <div className="countdown__sep">:</div>
        <div className="countdown__cell">
          <div className="countdown__num">{String(mins).padStart(2,"0")}</div>
          <div className="countdown__unit">min</div>
        </div>
        <div className="countdown__sep">:</div>
        <div className="countdown__cell">
          <div className="countdown__num">{String(secs).padStart(2,"0")}</div>
          <div className="countdown__unit">sec</div>
        </div>
      </div>
      <div className="countdown__flight">
        <span>BNA</span>
        <span className="countdown__plane">✈</span>
        <span>LAS</span>
        <span className="countdown__time">7:55 AM · Sun Jul 12</span>
      </div>
    </section>
  );
}

Object.assign(window, { PHOTOS, AUDIENCES, SurpriseBanner, Nav, Hero, Countdown });
