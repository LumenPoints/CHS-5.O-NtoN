/* global React, ReactDOM, SurpriseBanner, Nav, Hero, Countdown, Route, Journey, Helicopter, InfoHub, Reservations, Moments, AUDIENCES */
const { useState, useEffect } = React;

function App() {
  const [audience, setAudience] = useState(() => {
    try { return localStorage.getItem("n2n-audience") || "family"; }
    catch { return "family"; }
  });
  const [activeSection, setActiveSection] = useState("hero");
  const [sceneClass, setSceneClass] = useState("scene-bg--nature");

  useEffect(() => {
    try { localStorage.setItem("n2n-audience", audience); } catch {}
  }, [audience]);

  // Scroll-based background palette shift
  useEffect(() => {
    const sections = ["hero","countdown","route","bryce","zion","surprise","vegas","helicopter","info","reservations","moments"];
    const onScroll = () => {
      let active = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.4) active = id;
      }
      setActiveSection(active);
      if (["hero","countdown","route","bryce"].includes(active)) setSceneClass("scene-bg--nature");
      else if (["zion","surprise"].includes(active)) setSceneClass("scene-bg--zion");
      else setSceneClass("scene-bg--vegas");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={`scene-bg ${sceneClass}`}></div>
      <SurpriseBanner />
      <Nav audience={audience} setAudience={setAudience} activeSection={activeSection} />
      <main>
        <Hero audience={audience} />
        <Countdown />
        <Route />
        <Journey audience={audience} />
        <Helicopter />
        <InfoHub audience={audience} />
        <Reservations audience={audience} />
        <Moments />
        <footer className="footer">
          <div className="footer__mark">Nature → Neon</div>
          <div className="footer__line">Hunter · 5.0 · July 12 – 20, 2026</div>
          <div className="footer__line">BNA → LAS · A surprise 50th birthday journey</div>
          <div className="footer__secret">Made with love. Keep the secret.</div>
        </footer>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
