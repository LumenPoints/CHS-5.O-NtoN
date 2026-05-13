/* global React, AUDIENCES, PHOTOS */
const { useState } = React;

// === ORGANIZER CONFIG ===
// To get RSVPs in your inbox + a dashboard:
//   1. Sign up free at https://formspree.io → New Form → copy your endpoint URL
//   2. Paste the URL below (e.g. "https://formspree.io/f/xyzabc123")
// Until then, the form falls back to a pre-filled email (mailto:) to RSVP_EMAIL.
const RSVP_EMAIL = "your-email@example.com";
const RSVP_FORMSPREE = "https://formspree.io/f/mjglzwwb";


/* =================== ROUTE / MAP =================== */
function Route({ audience }) {
  return (
    <section id="route" className="route">
      <div className="section__label"><span>The Route</span></div>
      <h2 className="route__title display">
        {audience === "vegas"
          ? <>Everyone converges on Vegas.<br/>
              <em className="editorial-italic">Friday, July 17 · The reveal.</em></>
          : <>Nashville to Bryce to Zion to Vegas.<br/>
              <em className="editorial-italic">Three states. Nine days. One reveal.</em></>}
      </h2>
      <div className="route__map">
        <svg viewBox="0 0 1000 420" className="route__svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"  stopColor="#c5673b" />
              <stop offset="40%" stopColor="#a8451e" />
              <stop offset="70%" stopColor="#c91d72" />
              <stop offset="100%" stopColor="#ff2e93" />
            </linearGradient>
            <linearGradient id="routeGradFL" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%"  stopColor="#14b8a6" />
              <stop offset="60%" stopColor="#0ea5b8" />
              <stop offset="100%" stopColor="#c91d72" />
            </linearGradient>
            <linearGradient id="routeGradFri" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"  stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#ff2e93" />
            </linearGradient>
          </defs>
          {/* Nashville → Vegas → Zion → Bryce (Sheldens, Jul 12) */}
          <path d="M 880 200 Q 700 100 480 140 Q 380 170 340 180 Q 260 200 220 220"
                stroke="url(#routeGrad)" strokeWidth="3" fill="none"
                strokeDasharray="6 8" className="route__path" />
          {/* Ft. Lauderdale → Vegas (Dannheim crew, Jul 14) */}
          <path d="M 920 340 Q 700 320 480 260 Q 360 240 290 230"
                stroke="url(#routeGradFL)" strokeWidth="2.5" fill="none"
                strokeDasharray="4 7" className="route__path route__path--fl" />
          {/* Friday Vegas Crew arrivals — TN, TX, UT */}
          <path d="M 880 200 Q 600 260 360 240 Q 290 230 230 225"
                stroke="url(#routeGradFri)" strokeWidth="2" fill="none"
                strokeDasharray="3 6" className="route__path route__path--fri" />
          <path d="M 720 290 Q 540 280 380 260 Q 300 240 230 230"
                stroke="url(#routeGradFri)" strokeWidth="2" fill="none"
                strokeDasharray="3 6" className="route__path route__path--fri" />
          <path d="M 320 80 Q 280 130 240 200 Q 230 215 225 220"
                stroke="url(#routeGradFri)" strokeWidth="2" fill="none"
                strokeDasharray="3 6" className="route__path route__path--fri" />
          {/* Pins */}
          <Pin x={880} y={200} label="NASHVILLE" sub="BNA · Jul 12 · 7:55 AM" color="#c5673b" />
          <Pin x={920} y={340} label="FT. LAUDERDALE" sub="FLL · Jul 14 · Dannheim crew" color="#14b8a6" />
          <Pin x={720} y={290} label="TEXAS" sub="Jul 17 · Sheldens TX" color="#a78bfa" smallSub />
          <Pin x={320} y={80}  label="UTAH" sub="SLC · Jul 17 · local crew" color="#a78bfa" smallSub topLabel />
          <Pin x={340} y={180} label="BRYCE CANYON" sub="Jul 12 – 14" color="#a8451e" />
          <Pin x={290} y={205} label="ZION" sub="Jul 14 – 17" color="#c91d72" />
          <Pin x={220} y={220} label="LAS VEGAS" sub="Jul 17 – 20" color="#ff2e93" big />
        </svg>
      </div>
      <div className="route__legs">
        <div className="route__legs-group">
          <div className="route__legs-head">
            <span className="route__legs-phase">Sun · Jul 12</span>
            <span className="route__legs-sub">Outbound · Nature begins</span>
          </div>
          <div className="route__leg">
            <span className="route__leg-icon">✈</span>
            <span className="route__leg-route">BNA → LAS</span>
            <span className="route__leg-who">Sheldens · 7:55 AM</span>
          </div>
        </div>

        <div className="route__legs-group">
          <div className="route__legs-head">
            <span className="route__legs-phase">Tue · Jul 14</span>
            <span className="route__legs-sub route__legs-sub--fl">Zion arrival</span>
          </div>
          <div className="route__leg route__leg--fl">
            <span className="route__leg-icon">✈</span>
            <span className="route__leg-route">FLL → LAS</span>
            <span className="route__leg-who">Dannheim crew</span>
          </div>
        </div>

        <div className="route__legs-group route__legs-group--wide">
          <div className="route__legs-head">
            <span className="route__legs-phase">Fri · Jul 17</span>
            <span className="route__legs-sub route__legs-sub--fri">The Vegas crew converges</span>
          </div>
          <div className="route__legs-row">
            <div className="route__leg route__leg--fri">
              <span className="route__leg-icon">✈</span>
              <span className="route__leg-route">BNA → LAS</span>
              <span className="route__leg-who">TN friends</span>
            </div>
            <div className="route__leg route__leg--fri">
              <span className="route__leg-icon">✈</span>
              <span className="route__leg-route">TX → LAS</span>
              <span className="route__leg-who">Sheldens TX</span>
            </div>
            <div className="route__leg route__leg--fri">
              <span className="route__leg-icon">✈</span>
              <span className="route__leg-route">SLC → LAS</span>
              <span className="route__leg-who">Erb/Pieczonka · 8:50 AM</span>
            </div>
          </div>
        </div>

        <div className="route__legs-group">
          <div className="route__legs-head">
            <span className="route__legs-phase">Mon · Jul 20</span>
            <span className="route__legs-sub">Home</span>
          </div>
          <div className="route__leg">
            <span className="route__leg-icon">✈</span>
            <span className="route__leg-route">LAS → BNA</span>
            <span className="route__leg-who">~1:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pin({ x, y, label, sub, color, big, smallSub, topLabel }) {
  const labelYOffset = topLabel ? (big ? 32 : 26) : -(big ? 22 : 18);
  const subYOffset = topLabel ? -(big ? 18 : 14) : (big ? 26 : 22);
  return (
    <g className="route__pin">
      <circle cx={x} cy={y} r={big ? 9 : 6} fill={color} className="route__pin-dot" />
      {big && <circle cx={x} cy={y} r="14" fill="none" stroke={color} strokeWidth="1.5" opacity="0.5" />}
      <text x={x} y={y + labelYOffset} textAnchor="middle"
            fill={color} fontSize={big ? 12 : (smallSub ? 9 : 11)} fontWeight="800" letterSpacing="2">{label}</text>
      <text x={x} y={y + subYOffset} textAnchor="middle"
            fill="rgba(245,236,221,0.7)" fontSize={smallSub ? 7 : 8} letterSpacing="1.5">{sub}</text>
    </g>
  );
}

/* =================== HELICOPTER CROWN JEWEL =================== */
function Helicopter({ audience }) {
  return (
    <section id="helicopter" className="heli">
      <div className="heli__photo photo">
        <img src={PHOTOS.vegasStrip} alt="" loading="lazy" />
      </div>
      <div className="heli__content">
        <div className="heli__badge">✦ Crown Jewel · Booked</div>
        <h2 className="heli__title display">Neon &amp; Nature<br/>VIP Flight</h2>
        <p className="heli__lede editorial-italic">
          Maverick Helicopters · Sunday, July 19 · 6:00 – 7:45 PM
        </p>
        <p className="heli__copy">
          Red Rock Canyon at golden hour, the full Strip flyover at twilight.
          Nature meets neon at 1,000 feet. Hunter in the front seat.
        </p>
        <div className="heli__stats">
          <div className="heli__stat">
            <div className="heli__stat-label">Group</div>
            <div className="heli__stat-value">7 adults · 5 teens</div>
          </div>
          <div className="heli__stat">
            <div className="heli__stat-label">Front seats</div>
            <div className="heli__stat-value">Hunter + you</div>
          </div>
          <div className="heli__stat">
            <div className="heli__stat-label">Timing</div>
            <div className="heli__stat-value">Sunset → twilight</div>
          </div>
          {(audience === "family" || audience === "zion") && (
            <div className="heli__stat">
              <div className="heli__stat-label">Covered</div>
              <div className="heli__stat-value">Dannheim family (4)</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* =================== GUEST INFO HUB =================== */
function InfoHub({ audience }) {
  const intro = {
    family: "The master plan. Everything covered, everything to track.",
    zion: "Everything you need for the Zion leg + Vegas weekend.",
    vegas: "Everything you need to know about the Vegas weekend.",
  };
  return (
    <section id="info" className="info">
      <div className="section__label"><span>The Info Hub</span></div>
      <h2 className="info__title display">For Our Guests</h2>
      <p className="info__lede editorial-italic">{intro[audience]}</p>

      <div className="info__columns">
        <div className="info__col">
          <h3 className="info__col-title">Our Treat</h3>
          <div className="info__items">
            <InfoItem tag="✓ OUR TREAT" label="Pool Cabana · Friday"
              desc="Cosmo pool cabana Friday afternoon — covered for everyone joining us." />
            <InfoItem tag="✓ OUR TREAT" label="Dinner · Friday"
              desc="Dinner at Mon Ami Gabi (Le Cabaret room) — covered." />
            {(audience === "family" || audience === "zion") && (
              <InfoItem tag="✓ OUR TREAT" label="Helicopter · Dannheim Family"
                desc="Covering the helicopter for the Dannheim family (4 people) — already taken care of." />
            )}
          </div>
        </div>
        <div className="info__col">
          <h3 className="info__col-title">Opt-in &amp; Split</h3>
          <RSVPForm />
        </div>
      </div>

      <Guests audience={audience} />
      <Logistics audience={audience} />

      <div className="info__pack">
        <h3 className="info__col-title">Pack for Nature → Neon</h3>
        <div className="info__pack-grid">
          <div className="info__pack-col">
            <div className="info__pack-head">Bryce & Zion · Nature</div>
            <ul>
              <li>Sturdy hiking shoes (Narrows = wet shoes)</li>
              <li>Layers — cool mornings, warm days</li>
              <li>Sun hat + serious SPF</li>
              <li>Refillable water bottle</li>
              <li>Headlamp for stargazing</li>
              <li>Cozy for resort nights</li>
            </ul>
          </div>
          <div className="info__pack-col">
            <div className="info__pack-head">Vegas · Neon</div>
            <ul>
              <li>Pool day — swim + cover-up</li>
              <li>Eiffel Tower dinner — dressy night</li>
              <li>Saturday night at AREA15 — something you can move in</li>
              <li>Comfortable shoes for the Strip</li>
              <li>Layers for the helicopter</li>
              <li>Sphere — bring an open mind</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Guests({ audience }) {
  const zionFams = [
    { name: "Shelden", adults: 2, kids: 3, ages: "20 · 15 · 15", total: 5 },
    { name: "Dannheim", adults: 2, kids: 2, ages: "18 · 15", total: 4 },
  ];
  const vegasOnly = [
    { name: "B. Jarreau", count: 1 },
    { name: "J. Kruger", count: 1 },
    { name: "Shelden TX", count: 2 },
    { name: "Elliott", count: 2 },
    { name: "DeHombre", count: 2 },
    { name: "Erb / Pieczonka", count: 2 },
  ];
  const vegasTotal = vegasOnly.reduce((a, g) => a + g.count, 0);
  const zionTotal = zionFams.reduce((a, f) => a + f.total, 0);
  return (
    <div className="guests">
      <h3 className="info__col-title">The Guest List</h3>
      <div className="guests__cols">
        <div className="guests__col">
          <div className="guests__head">
            Zion Crew <span className="guests__tally">{zionTotal} guests · joining Jul 14</span>
          </div>
          <div className="guests__items">
            {zionFams.map(f => (
              <div key={f.name} className="guests__row">
                <div className="guests__name">{f.name}</div>
                <div className="guests__detail">
                  {f.adults} adults · {f.kids} kids
                  <span className="guests__ages"> ({f.ages})</span>
                </div>
                <div className="guests__count">{f.total}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="guests__col">
          <div className="guests__head">
            Vegas Additions <span className="guests__tally">{vegasTotal} adults · joining Jul 17</span>
          </div>
          <div className="guests__items">
            {vegasOnly.map(g => (
              <div key={g.name} className="guests__row">
                <div className="guests__name">{g.name}</div>
                <div className="guests__detail">{g.count === 1 ? "adult" : `${g.count} adults`}</div>
                <div className="guests__count">{g.count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="guests__total">
        Vegas weekend total: <strong>{zionTotal + vegasTotal + 2} people</strong>
        <span className="guests__sub"> (Zion crew {zionTotal} + Vegas additions {vegasTotal} + you & Hunter)</span>
      </div>
    </div>
  );
}

function RSVPForm() {
  const OPTIONS = [
    { id: "helicopter", label: "Helicopter · Neon & Nature VIP", price: "$300 / person",
      desc: "Maverick · Sun Jul 19, 6 PM · Red Rock + Strip flyover at sunset" },
    { id: "sphere", label: "The Sphere · Wizard of Oz", price: "~$175 / ticket",
      desc: "Sat Jul 18, 2 PM · most immersive venue on the planet" },
    { id: "area15", label: "AREA15 · Saturday Dinner + Experience", price: "Split evenly",
      desc: "Sat Jul 18, 8:30 PM · dinner + immersive experience" },
  ];

  const MEALS = [
    { id: "monami",  label: "Mon Ami Gabi · Friday dinner",
      desc: "Fri Jul 17, 8 PM · Paris LV · we're covering" },
    { id: "henry",   label: "The Henry · Saturday brunch",
      desc: "Sat Jul 18, 11:30 AM · The Cosmopolitan" },
    { id: "wicked",  label: "Wicked Spoon · Sunday brunch",
      desc: "Sun Jul 19, 11:45 AM · Cosmo buffet" },
  ];

  const STORE_KEY = "n2n-rsvp-draft";
  const [name, setName] = useState("");
  const [partySize, setPartySize] = useState(1);
  const [picks, setPicks] = useState({});
  const [meals, setMeals] = useState({});
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  React.useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
      if (saved) {
        setName(saved.name || "");
        setPartySize(saved.partySize || 1);
        setPicks(saved.picks || {});
        setMeals(saved.meals || {});
        setNotes(saved.notes || "");
      }
    } catch {}
  }, []);

  React.useEffect(() => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify({ name, partySize, picks, meals, notes })); } catch {}
  }, [name, partySize, picks, meals, notes]);

  const togglePick = (id) => setPicks(p => ({ ...p, [id]: !p[id] }));
  const toggleMeal = (id) => setMeals(m => ({ ...m, [id]: !m[id] }));

  const buildBody = () => {
    const chosen = OPTIONS.filter(o => picks[o.id]);
    const mealsChosen = MEALS.filter(m => meals[m.id]);
    const lines = [
      `Name: ${name || "(not provided)"}`,
      `Party size: ${partySize}`,
      "",
      "Counting me in for:",
      ...(chosen.length ? chosen.map(o => `  ✓ ${o.label} — ${o.price}`) : ["  (none)"]),
      "",
      "Meals I'll join (so we can book the right headcount):",
      ...(mealsChosen.length ? mealsChosen.map(m => `  ✓ ${m.label}`) : ["  (none)"]),
      "",
      notes ? `Notes: ${notes}` : "",
    ].filter(Boolean);
    return lines.join("\n");
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!name.trim()) { alert("Please add your name first"); return; }
    const chosen = OPTIONS.filter(o => picks[o.id]).map(o => o.label);
    const mealsList = MEALS.filter(m => meals[m.id]).map(m => m.label);
    const payload = {
      name, partySize, notes,
      area15:     !!picks.area15,
      helicopter: !!picks.helicopter,
      sphere:     !!picks.sphere,
      monAmiGabi: !!meals.monami,
      theHenry:   !!meals.henry,
      wickedSpoon: !!meals.wicked,
      committed:  chosen.join(" · "),
      mealsJoining: mealsList.join(" · "),
      _subject:   `[Hunter 5.0 RSVP] ${name}`,
    };

    if (RSVP_FORMSPREE) {
      try {
        setStatus("sending");
        const res = await fetch(RSVP_FORMSPREE, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("network");
        setStatus("sent");
        return;
      } catch (err) {
        setStatus("error");
        // fall through to mailto below
      }
    }
    // Mailto fallback
    const subject = encodeURIComponent(`Hunter 5.0 RSVP — ${name}`);
    const body = encodeURIComponent(buildBody());
    window.location.href = `mailto:${RSVP_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  const reset = () => {
    setPicks({}); setMeals({}); setNotes(""); setStatus("idle");
  };

  if (status === "sent") {
    return (
      <div className="rsvp rsvp--sent">
        <div className="rsvp__check">✓</div>
        <div className="rsvp__sent-title">Got it — thanks, {name.split(" ")[0]}!</div>
        <div className="rsvp__sent-body">
          Your selections are on the way. We'll confirm spots and send Venmo details soon.
        </div>
        <button type="button" className="rsvp__reset" onClick={reset}>Edit my response</button>
      </div>
    );
  }

  return (
    <form className="rsvp" onSubmit={submit}>
      <div className="rsvp__lede">
        Let us know what you're in for. We'll confirm and send Venmo details after.
      </div>

      <div className="rsvp__field">
        <label htmlFor="rsvp-name">Your name</label>
        <input id="rsvp-name" type="text" value={name}
               onChange={e => setName(e.target.value)} placeholder="First + last"
               autoComplete="name" />
      </div>

      <div className="rsvp__field rsvp__field--narrow">
        <label htmlFor="rsvp-party"># in your party</label>
        <input id="rsvp-party" type="number" min="1" max="10" value={partySize}
               onChange={e => setPartySize(parseInt(e.target.value) || 1)} />
      </div>

      <div className="rsvp__section-head">
        <span className="rsvp__section-num">01</span>
        <span className="rsvp__section-label">Activities · paid add-ons</span>
      </div>
      <div className="rsvp__opts">
        {OPTIONS.map(o => (
          <label key={o.id} className={`rsvp__opt ${picks[o.id] ? "rsvp__opt--on" : ""}`}>
            <input type="checkbox" checked={!!picks[o.id]} onChange={() => togglePick(o.id)} />
            <div className="rsvp__opt-body">
              <div className="rsvp__opt-row">
                <span className="rsvp__opt-label">{o.label}</span>
                <span className="rsvp__opt-price">{o.price}</span>
              </div>
              <div className="rsvp__opt-desc">{o.desc}</div>
            </div>
          </label>
        ))}
      </div>

      <div className="rsvp__section-head">
        <span className="rsvp__section-num">02</span>
        <span className="rsvp__section-label">Meal reservations · headcount only</span>
      </div>
      <div className="rsvp__opts">
        {MEALS.map(o => (
          <label key={o.id} className={`rsvp__opt rsvp__opt--meal ${meals[o.id] ? "rsvp__opt--on" : ""}`}>
            <input type="checkbox" checked={!!meals[o.id]} onChange={() => toggleMeal(o.id)} />
            <div className="rsvp__opt-body">
              <div className="rsvp__opt-row">
                <span className="rsvp__opt-label">{o.label}</span>
              </div>
              <div className="rsvp__opt-desc">{o.desc}</div>
            </div>
          </label>
        ))}
      </div>

      <div className="rsvp__field">
        <label htmlFor="rsvp-notes">Notes (allergies, special requests, anything else)</label>
        <textarea id="rsvp-notes" value={notes} rows="2"
                  onChange={e => setNotes(e.target.value)} placeholder="Optional" />
      </div>

      <button type="submit" className="rsvp__submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send my RSVP →"}
      </button>
      {status === "error" && (
        <div className="rsvp__error">Couldn't send automatically — opening email as backup.</div>
      )}
      <div className="rsvp__fine">
        Your responses save in this browser as you type. Send when ready.
      </div>
    </form>
  );
}

function Logistics({ audience }) {
  // === EDIT FLIGHT + RSVP DETAILS HERE ===
  // - Replace "TBD" strings with real times when guests confirm.
  // - Update `inFor` arrays as RSVPs come in:
  //     "helicopter" · "sphere" · "area15"  (any combination)
  //   Anything still "TBD" shows a yellow pill so you can spot what's missing.
  const groups = [
    {
      key: "shelden",
      name: "Shelden Family",
      sub: "2 adults + 3 kids (20·15·15) · the inner circle",
      visible: ["family", "zion", "vegas"],
      arrival:   { route: "BNA → LAS", date: "Sun Jul 12", time: "9:50 AM" },
      departure: { route: "LAS → BNA", date: "Mon Jul 20", time: "~1:00 PM" },
      hotels: [
        { range: "Jul 12 – 14", name: "Clear Sky Resorts · Bryce" },
        { range: "Jul 14 – 17", name: "Open Sky Resort · Zion" },
        { range: "Jul 17 – 20", name: "The Cosmopolitan · Las Vegas" },
      ],
      inFor: ["helicopter", "sphere", "area15"],
    },
    {
      key: "dannheim",
      name: "Dannheim Family",
      sub: "2 adults + 2 kids (18·15) · joining at Zion",
      visible: ["family", "zion", "vegas"],
      arrival:   { route: "FLL → LAS", date: "Tue Jul 14", time: "TBD",
                   note: "Then drive LAS → Zion (~2.5 hrs) — arrive Open Sky ~3 PM" },
      departure: { route: "LAS → FLL", date: "TBD", time: "TBD" },
      hotels: [
        { range: "Jul 14 – 17", name: "Open Sky Resort · Zion" },
        { range: "Jul 17 – 20", name: "The Cosmopolitan · Las Vegas" },
      ],
      inFor: ["helicopter"],
      inForNote: "Helicopter covered as our gift",
    },
    {
      key: "jarreau",
      name: "B. Jarreau",
      sub: "1 adult · Vegas only",
      visible: ["family", "vegas"],
      arrival:   { route: "→ LAS", date: "Fri Jul 17", time: "TBD" },
      departure: { route: "LAS →", date: "TBD", time: "TBD" },
      hotels: [{ range: "Jul 17 – TBD", name: "The Cosmopolitan · Las Vegas" }],
      inFor: ["TBD"],
    },
    {
      key: "kruger",
      name: "J. Kruger",
      sub: "1 adult · Vegas only",
      visible: ["family", "vegas"],
      arrival:   { route: "→ LAS", date: "Fri Jul 17", time: "TBD" },
      departure: { route: "LAS →", date: "TBD", time: "TBD" },
      hotels: [{ range: "Jul 17 – TBD", name: "The Cosmopolitan · Las Vegas" }],
      inFor: ["TBD"],
    },
    {
      key: "shelden-tx",
      name: "Shelden TX",
      sub: "2 adults · Vegas only",
      visible: ["family", "vegas"],
      arrival:   { route: "TX → LAS", date: "Fri Jul 17", time: "TBD" },
      departure: { route: "LAS → TX", date: "TBD", time: "TBD" },
      hotels: [{ range: "Jul 17 – TBD", name: "The Cosmopolitan · Las Vegas" }],
      inFor: ["TBD"],
    },
    {
      key: "elliott",
      name: "Elliott",
      sub: "2 adults · Vegas only",
      visible: ["family", "vegas"],
      arrival:   { route: "→ LAS", date: "Fri Jul 17", time: "TBD" },
      departure: { route: "LAS →", date: "TBD", time: "TBD" },
      hotels: [{ range: "Jul 17 – TBD", name: "TBD" }],
      inFor: ["TBD"],
    },
    {
      key: "dehombre",
      name: "DeHombre",
      sub: "2 adults · Vegas only · staying at the Venetian",
      visible: ["family", "vegas"],
      arrival:   { route: "→ LAS", date: "Fri Jul 17", time: "TBD" },
      departure: { route: "LAS →", date: "TBD", time: "TBD" },
      hotels: [{ range: "Jul 17 – TBD", name: "The Venetian · Las Vegas" }],
      inFor: ["TBD"],
    },
    {
      key: "erb",
      name: "Erb / Pieczonka",
      sub: "2 adults · Vegas only · flying in from SLC",
      visible: ["family", "vegas"],
      arrival:   { route: "SLC → LAS", date: "Fri Jul 17", time: "8:50 AM" },
      departure: { route: "LAS → SLC", date: "Sun Jul 19", time: "7:55 PM" },
      hotels: [{ range: "Jul 17 – 19", name: "The Cosmopolitan · Las Vegas" }],
      inFor: ["TBD"],
    },
  ];

  const visible = groups.filter(g => g.visible.includes(audience));
  const missingCount = visible.reduce((n, g) => {
    let m = 0;
    if (g.arrival.time === "TBD") m++;
    if (g.arrival.date === "TBD") m++;
    if (g.departure.time === "TBD") m++;
    if (g.departure.date === "TBD") m++;
    g.hotels.forEach(h => { if (h.name === "TBD" || h.range.includes("TBD")) m++; });
    if (g.inFor.includes("TBD")) m++;
    return n + m;
  }, 0);

  const headline = audience === "vegas"
    ? "Vegas Crew · Arrivals · Hotels · RSVPs"
    : audience === "zion"
      ? "Zion + Vegas · Arrivals · Hotels · RSVPs"
      : "Arrivals · Departures · Hotels · RSVPs";

  return (
    <div className="logistics">
      <div className="logistics__head">
        <h3 className="info__col-title">{headline}</h3>
        {missingCount > 0 && (
          <div className="logistics__missing">
            {missingCount} detail{missingCount === 1 ? "" : "s"} still to fill in
          </div>
        )}
      </div>
      <div className="logistics__grid">
        {visible.map(g => <LogisticsCard key={g.key} g={g} />)}
      </div>
    </div>
  );
}

const RSVP_LABELS = {
  helicopter: { label: "Helicopter", color: "cyan" },
  sphere:     { label: "Sphere · Oz", color: "violet" },
  area15:     { label: "AREA15", color: "pink" },
};

function LogisticsCard({ g }) {
  const TBD = ({ children }) =>
    children === "TBD"
      ? <span className="logi__tbd">TBD</span>
      : <span>{children}</span>;

  const hasRsvp = g.inFor && g.inFor.length && !(g.inFor.length === 1 && g.inFor[0] === "TBD") && !(g.inFor.length === 1 && g.inFor[0] === "none");
  const isNone = g.inFor && g.inFor.length === 1 && g.inFor[0] === "none";
  const isTbd  = g.inFor && g.inFor.length === 1 && g.inFor[0] === "TBD";

  return (
    <div className="logi-card">
      <div className="logi-card__head">
        <div className="logi-card__name">{g.name}</div>
        <div className="logi-card__sub">{g.sub}</div>
      </div>

      <div className="logi-card__leg">
        <div className="logi-card__leg-label">
          <span className="logi-card__leg-icon">✈</span> Arrival
        </div>
        <div className="logi-card__route">{g.arrival.route}</div>
        <div className="logi-card__details">
          <TBD>{g.arrival.date}</TBD> · <TBD>{g.arrival.time}</TBD>
        </div>
        {g.arrival.note && <div className="logi-card__note">{g.arrival.note}</div>}
      </div>

      <div className="logi-card__leg">
        <div className="logi-card__leg-label">
          <span className="logi-card__leg-icon">✈</span> Departure
        </div>
        <div className="logi-card__route">{g.departure.route}</div>
        <div className="logi-card__details">
          <TBD>{g.departure.date}</TBD> · <TBD>{g.departure.time}</TBD>
        </div>
      </div>

      <div className="logi-card__hotels">
        <div className="logi-card__leg-label">
          <span className="logi-card__leg-icon">⌂</span> Where they sleep
        </div>
        {g.hotels.map((h, i) => (
          <div key={i} className="logi-card__hotel">
            <span className="logi-card__hotel-range">
              <TBD>{h.range}</TBD>
            </span>
            <span className="logi-card__hotel-name">
              <TBD>{h.name}</TBD>
            </span>
          </div>
        ))}
      </div>

      <div className="logi-card__rsvp">
        <div className="logi-card__leg-label">
          <span className="logi-card__leg-icon">✦</span> Counting them in for
        </div>
        {hasRsvp && (
          <div className="logi-card__chips">
            {g.inFor.map(k => RSVP_LABELS[k] && (
              <span key={k} className={`logi-chip logi-chip--${RSVP_LABELS[k].color}`}>
                ✓ {RSVP_LABELS[k].label}
              </span>
            ))}
          </div>
        )}
        {isTbd  && <div className="logi-card__details"><span className="logi__tbd">Awaiting RSVP</span></div>}
        {isNone && <div className="logi-card__details" style={{opacity: 0.6}}>None — just here for the party</div>}
        {g.inForNote && <div className="logi-card__note">{g.inForNote}</div>}
      </div>
    </div>
  );
}

function InfoItem({ tag, label, desc, kind }) {
  return (
    <div className={`info-item info-item--${kind || "treat"}`}>
      <div className="info-item__tag">{tag}</div>
      <div className="info-item__label">{label}</div>
      <div className="info-item__desc">{desc}</div>
    </div>
  );
}

/* =================== RESERVATIONS CHEAT SHEET =================== */
function Reservations({ audience }) {
  const rows = [
    { day: "Sun Jul 12", date: "Jul 12", venue: "Clear Sky Resorts", kind: "stay", note: "Check-in PM · Bryce Canyon", parts: ["family"] },
    { day: "Tue Jul 14", date: "2:00 PM", venue: "Open Sky Resort", kind: "stay", note: "Check-in · Zion · tents + swim gear", parts: ["family","zion"] },
    { day: "Tue Jul 14", date: "Evening", venue: "Spotted Dog Cafe", kind: "dinner", note: "Welcome dinner · Springdale · party of 9 · BOOK ASAP", parts: ["family","zion"] },
    { day: "Wed Jul 15", date: "9:00 AM", venue: "Zion E-Bike Rental", kind: "ride", note: "Rad Runner ×4 · 1101 Zion Park Blvd · until 5 PM", parts: ["family","zion"] },
    { day: "Wed Jul 15", date: "6:00 PM", venue: "Black Sage", kind: "dinner", note: "🥂 Birthday dinner · Hunter's 50th · on-property at Open Sky", parts: ["family","zion"], hero: true },
    { day: "Thu Jul 16", date: "6:30 PM", venue: "Wild Thyme Cafe", kind: "dinner", note: "Tree's Ranch · online waitlist only · post-hike attire OK", parts: ["family","zion"] },
    { day: "Thu Jul 16", date: "7:00 AM", venue: "Canyoneering Adventure", kind: "hike", note: "Half-day guided · Springdale · 4 people", parts: ["family","zion"], hero: true },
    { day: "Thu Jul 16", date: "1:30 PM", venue: "Gems of Zion", kind: "view", note: "Canyon Overlook + Hidden Swimming Hole · east side", parts: ["family","zion"] },
    { day: "Fri Jul 17", date: "1:30 PM", venue: "The Cosmopolitan", kind: "stay", note: "Check-in · SURPRISE reveal", parts: ["family","zion","vegas"], hero: true },
    { day: "Fri Jul 17", date: "3:00 PM", venue: "Cosmo Pool Cabana", kind: "pool", note: "Until 6 PM · our treat", parts: ["family","zion","vegas"] },
    { day: "Fri Jul 17", date: "6:00 PM", venue: "Eiffel Tower · drinks", kind: "night", note: "Pre-dinner drinks + Strip views · 11th floor", parts: ["family","zion","vegas"] },
    { day: "Fri Jul 17", date: "8:00 PM", venue: "Mon Ami Gabi", kind: "dinner", note: "Le Cabaret semi-private room (aiming) · Paris LV · our treat", parts: ["family","zion","vegas"] },
    { day: "Sat Jul 18", date: "11:30 AM", venue: "The Henry", kind: "brunch", note: "Cosmo · brunch", parts: ["family","zion","vegas"] },
    { day: "Sat Jul 18", date: "2:00 PM", venue: "The Sphere", kind: "show", note: "Wizard of Oz · ~$175 pp", parts: ["family","zion","vegas"] },
    { day: "Sat Jul 18", date: "6:00 PM", venue: "Chandelier Bar", kind: "night", note: "Pre-night drinks · The Cosmopolitan", parts: ["family","zion","vegas"] },
    { day: "Sat Jul 18", date: "8:30 PM", venue: "AREA15", kind: "night", note: "Dinner + immersive experience · the crew move", parts: ["family","zion","vegas"], hero: true },
    { day: "Sun Jul 19", date: "11:45 AM", venue: "Wicked Spoon", kind: "brunch", note: "Cosmo buffet", parts: ["family","zion","vegas"] },
    { day: "Sun Jul 19", date: "5:45 PM", venue: "Maverick Helicopters", kind: "fly", note: "Neon & Nature VIP · 6:00–7:45 PM", parts: ["family","zion","vegas"], hero: true },
  ];
  const visible = rows.filter(r => r.parts.includes(audience));
  return (
    <section id="reservations" className="resv">
      <div className="section__label"><span>Reservations</span></div>
      <h2 className="resv__title display">The Cheat Sheet</h2>
      <p className="resv__lede editorial-italic">Every check-in, dinner, show and seat — in one list.</p>
      <div className="resv__table">
        <div className="resv__header">
          <div>When</div><div>Time</div><div>Venue</div><div>Notes</div>
        </div>
        {visible.map((r, i) => (
          <div key={i} className={`resv__row ${r.hero ? "resv__row--hero" : ""}`}>
            <div className="resv__day">{r.day}</div>
            <div className="resv__time">{r.date}</div>
            <div className="resv__venue">
              <span className={`resv__kind resv__kind--${r.kind}`}>{r.kind}</span>
              {r.venue}
            </div>
            <div className="resv__note">{r.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =================== SIGNATURE MOMENTS =================== */
function Moments() {
  const moments = [
    { title: "Bryce Canyon Sunrise",
      desc: "Hoodoos glowing in first light — one of the most otherworldly views on the planet.",
      photo: PHOTOS.bryceSunrise, part: "nature" },
    { title: "Zion National Park",
      desc: "Sandstone monoliths, the Virgin River, the gateway to the next chapter.",
      photo: PHOTOS.zionCanyon, part: "nature" },
    { title: "E-Bikes Through the Canyon",
      desc: "Pedal-assist into Zion Canyon — Hunter's birthday, like a local.",
      photo: PHOTOS.zionEmerald, part: "nature" },
    { title: "Gems of Zion",
      desc: "Ancient petroglyphs, the hidden swimming hole, the canyon overlook.",
      photo: PHOTOS.zionNarrows, part: "nature" },
    { title: "The Surprise Arrival",
      desc: "Paris on the Strip at night — Vegas ambush at the Cosmopolitan.",
      photo: PHOTOS.vegasNight, part: "pivot" },
    { title: "Eiffel Tower Drinks",
      desc: "Pre-dinner cocktails on the 11th floor with the Strip rolled out below.",
      photo: PHOTOS.vegasNight, part: "neon" },
    { title: "Wizard of Oz · The Sphere",
      desc: "Inside the world's most immersive entertainment venue.",
      photo: PHOTOS.sphere, part: "neon" },
    { title: "AREA15 After Dark",
      desc: "Dinner + immersive experience — weird Vegas at its best, with the whole crew.",
      photo: PHOTOS.vegasStrip, part: "neon" },
    { title: "Neon & Nature Helicopter",
      desc: "Red Rock Canyon into full Strip flyover at golden hour. Nature meets neon at 1,000 feet.",
      photo: PHOTOS.helicopter, part: "crown" },
  ];
  return (
    <section id="moments" className="moments">
      <div className="section__label"><span>Signature Moments</span></div>
      <h2 className="moments__title display">The Highlights</h2>
      <div className="moments__grid">
        {moments.map((m, i) => (
          <div key={i} className={`moments__card moments__card--${m.part} ${m.part === "crown" ? "moments__card--wide" : ""}`}>
            <div className="moments__photo photo">
              <img src={m.photo} alt="" loading="lazy" />
            </div>
            <div className="moments__body">
              <div className="moments__num">0{i+1}</div>
              <h3 className="moments__name display">{m.title}</h3>
              <p className="moments__desc">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =================== SHARE KIT (family-only) =================== */
function ShareKit() {
  const [copied, setCopied] = useState(null);

  // Auto-detect base URL so links always match where the site is hosted
  const baseUrl = (() => {
    try {
      const o = window.location.origin;
      const p = window.location.pathname.replace(/\/(index\.html|Nature%20to%20Neon\.html|Nature to Neon\.html)$/, "/");
      return o + p;
    } catch { return "https://lumenpoints.github.io/CHS-5.O-NtoN/"; }
  })();

  const stripUrl = (u) => u.replace(/^https?:\/\//, "");

  const groups = [
    {
      key: "zion",
      emoji: "🏔",
      title: "Zion Crew",
      who: "Sheldens + Dannheims",
      url: `${baseUrl}?for=zion`,
      text: `Hunter's 50th is happening July 12–20 and you're a key part of it. 🎉

Here's the trip site — your link lands on the Zion view:
${baseUrl}?for=zion

📲 Save to home screen so you have it offline in the canyon:
iPhone: open in Safari → Share → Add to Home Screen
Android: open in Chrome → ⋮ menu → Install app

Scroll to the Info Hub at the bottom and fill out the RSVP — let us know about the helicopter add-on so we can lock in spots.

🤫 One rule: Hunter cannot know. Don't post, don't tag, don't text him about the trip. Love you all — can't wait.`,
    },
    {
      key: "vegas",
      emoji: "🎰",
      title: "Vegas Crew",
      who: "Jarreau · Kruger · Sheldens TX · Elliott · DeHombre · Erb/Pieczonka",
      url: `${baseUrl}?for=vegas`,
      text: `Saving the date one more time — Hunter's surprise 50th in Vegas, Jul 17–20. You're in.

Full plan here, your link drops you on the Vegas view:
${baseUrl}?for=vegas

📲 Save it to your home screen — opens offline once installed:
iPhone: Safari → Share → Add to Home Screen
Android: Chrome → ⋮ → Install app

Scroll to the bottom and RSVP — let me know if you're in for the helicopter ($300), the Sphere (~$175), and AREA15 Saturday so we can confirm spots.

🚨 PHONE DISCIPLINE: From Thursday night Jul 16 onward — no posts, no tags, no "see you in Vegas" texts, nothing on his Find My. The reveal is at the pool cabana Friday at 1:30 PM and we want his face to be priceless.

Can't wait to see you all 💥`,
    },
    {
      key: "family",
      emoji: "🤐",
      title: "Inside Team",
      who: "Owen + David",
      url: `${baseUrl}?for=family`,
      text: `Operations doc for the surprise — full master view, including the reveal beat sheet:
${baseUrl}?for=family

Save to home screen so you have it on you Friday. Scroll to the dedicated "Surprise" section for the minute-by-minute plan from Zion checkout through the 1:30 PM reveal at the pool cabana.

Lmk if anything in there feels off — we'll tighten before the trip.`,
    },
  ];

  const copy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = text; document.body.appendChild(ta);
      ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <section id="share" className="share">
      <div className="section__label"><span>Share Kit</span></div>
      <h2 className="share__title display">Send The Word</h2>
      <p className="share__lede editorial-italic">
        Copy-paste-ready texts for each group. Hit copy, paste into iMessage.
      </p>
      <div className="share__base">
        <span className="share__base-label">Base URL · auto-detected:</span>
        <code className="share__base-url">{stripUrl(baseUrl)}</code>
      </div>

      <div className="share__cards">
        {groups.map(g => (
          <div key={g.key} className="share-card">
            <div className="share-card__head">
              <div className="share-card__emoji">{g.emoji}</div>
              <div>
                <div className="share-card__title">{g.title}</div>
                <div className="share-card__who">{g.who}</div>
              </div>
            </div>
            <div className="share-card__url">
              <span className="share-card__url-label">Their link:</span>
              <a href={g.url} target="_blank" rel="noopener noreferrer">
                {stripUrl(g.url)}
              </a>
            </div>
            <pre className="share-card__text">{g.text}</pre>
            <div className="share-card__actions">
              <button type="button" className="share-card__copy"
                      onClick={() => copy(g.key, g.text)}>
                {copied === g.key ? "✓ Copied!" : "Copy text"}
              </button>
              <button type="button" className="share-card__copy share-card__copy--alt"
                      onClick={() => copy(g.key + "-url", g.url)}>
                {copied === g.key + "-url" ? "✓ Copied!" : "Copy link only"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="share__strategy">
        <h3 className="share__strategy-title">Sending strategy</h3>
        <ol className="share__strategy-list">
          <li><strong>Vegas crew first (~Jun)</strong> — they need lead time for flights + helicopter/Sphere RSVPs.</li>
          <li><strong>Zion crew ~3 weeks out</strong> — they're already booked, this just gives them the goods.</li>
          <li><strong>Owen + David anytime</strong> — they're operations, they want early eyes.</li>
          <li><strong>Don't blast all three at once</strong> — leave breathing room for questions.</li>
          <li><strong>Group thread for Vegas crew</strong> works (small enough, helps coordinate Friday positioning). Zion crew = separate threads per family.</li>
        </ol>
      </div>
    </section>
  );
}

Object.assign(window, { Route, Helicopter, InfoHub, Guests, Reservations, Moments, ShareKit });
