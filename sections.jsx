/* global React, AUDIENCES, PHOTOS */

/* =================== ROUTE / MAP =================== */
function Route() {
  return (
    <section id="route" className="route">
      <div className="section__label"><span>The Route</span></div>
      <h2 className="route__title display">
        Nashville to Bryce to Zion to Vegas.<br/>
        <em className="editorial-italic">Three states. Nine days. One reveal.</em>
      </h2>
      <div className="route__map">
        <svg viewBox="0 0 1000 380" className="route__svg" preserveAspectRatio="xMidYMid meet">
          {/* Path from Nashville → Bryce → Zion → Vegas */}
          <defs>
            <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"  stopColor="#c5673b" />
              <stop offset="40%" stopColor="#a8451e" />
              <stop offset="70%" stopColor="#c91d72" />
              <stop offset="100%" stopColor="#ff2e93" />
            </linearGradient>
          </defs>
          <path d="M 880 200 Q 700 100 480 140 Q 380 170 340 180 Q 260 200 220 220"
                stroke="url(#routeGrad)" strokeWidth="3" fill="none"
                strokeDasharray="6 8" className="route__path" />
          {/* Pins */}
          <Pin x={880} y={200} label="NASHVILLE" sub="BNA · Jul 12 · 7:55 AM" color="#c5673b" />
          <Pin x={340} y={180} label="BRYCE CANYON" sub="Jul 12 – 14" color="#a8451e" />
          <Pin x={290} y={205} label="ZION" sub="Jul 14 – 17" color="#c91d72" />
          <Pin x={220} y={220} label="LAS VEGAS" sub="Jul 17 – 20" color="#ff2e93" big />
        </svg>
      </div>
      <div className="route__legs">
        <div className="route__leg">
          <div className="route__leg-num">01</div>
          <div className="route__leg-from">BNA → LAS</div>
          <div className="route__leg-mode">Flight · 2h 55m</div>
        </div>
        <div className="route__leg">
          <div className="route__leg-num">02</div>
          <div className="route__leg-from">LAS → Bryce</div>
          <div className="route__leg-mode">Drive · ~4 hrs</div>
        </div>
        <div className="route__leg">
          <div className="route__leg-num">03</div>
          <div className="route__leg-from">Bryce → Zion</div>
          <div className="route__leg-mode">Drive · ~2 hrs</div>
        </div>
        <div className="route__leg">
          <div className="route__leg-num">04</div>
          <div className="route__leg-from">Zion → LAS</div>
          <div className="route__leg-mode">Drive · ~2.5 hrs</div>
        </div>
        <div className="route__leg">
          <div className="route__leg-num">05</div>
          <div className="route__leg-from">LAS → BNA</div>
          <div className="route__leg-mode">Flight · Jul 20 · 1 PM</div>
        </div>
      </div>
    </section>
  );
}

function Pin({ x, y, label, sub, color, big }) {
  return (
    <g className="route__pin">
      <circle cx={x} cy={y} r={big ? 9 : 6} fill={color} className="route__pin-dot" />
      {big && <circle cx={x} cy={y} r="14" fill="none" stroke={color} strokeWidth="1.5" opacity="0.5" />}
      <text x={x} y={y - (big ? 22 : 18)} textAnchor="middle"
            fill={color} fontSize="11" fontWeight="800" letterSpacing="2">{label}</text>
      <text x={x} y={y + (big ? 26 : 22)} textAnchor="middle"
            fill="rgba(245,236,221,0.7)" fontSize="8" letterSpacing="1.5">{sub}</text>
    </g>
  );
}

/* =================== HELICOPTER CROWN JEWEL =================== */
function Helicopter() {
  return (
    <section id="helicopter" className="heli">
      <div className="heli__photo photo">
        <img src={PHOTOS.helicopter} alt="" loading="lazy" />
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
          <div className="heli__stat">
            <div className="heli__stat-label">Covered</div>
            <div className="heli__stat-value">Dannheim family (4)</div>
          </div>
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
            <InfoItem tag="✓ OUR TREAT" label="Eiffel Tower Restaurant · Friday"
              desc="Dinner Friday night — we've got you covered." />
            <InfoItem tag="✓ OUR TREAT" label="Helicopter · Dannheim Family"
              desc="Covering the helicopter for the Dannheim family (4 people) — already taken care of." />
          </div>
        </div>
        <div className="info__col">
          <h3 className="info__col-title">Split / Optional</h3>
          <div className="info__items">
            <InfoItem tag="÷ SPLIT" label="XS Nightclub · Table"
              desc="Table charge will be split evenly amongst all guests attending." kind="split" />
            <InfoItem tag="$ VENMO · OPTIONAL" label="Helicopter · All Others"
              desc="$300 per person · Let us know if you're in and we'll add you to the booking." kind="venmo" />
            <InfoItem tag="$ VENMO · OPTIONAL" label="The Sphere · Wizard of Oz"
              desc="~$175 per ticket · Let us know and we'll secure your seat." kind="venmo" />
          </div>
          <div className="info__note">
            Interested in the helicopter or Sphere? Just let us know and Venmo once we confirm your spot.
          </div>
        </div>
      </div>

      <Guests audience={audience} />

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
              <li>Club look for XS</li>
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
    { day: "Tue Jul 14", date: "Jul 14", venue: "Open Sky Resort", kind: "stay", note: "Check-in 12:30 PM · Zion", parts: ["family","zion"] },
    { day: "Wed Jul 15", date: "9:00 AM", venue: "Zion E-Bike Rental", kind: "ride", note: "Rad Runner ×4 · 1101 Zion Park Blvd · until 5 PM", parts: ["family","zion"] },
    { day: "Wed Jul 15", date: "6:00 PM", venue: "Black Sage", kind: "dinner", note: "🥂 Birthday dinner · Hunter's 50th · Virgin, UT", parts: ["family","zion"], hero: true },
    { day: "Thu Jul 16", date: "7:00 AM", venue: "Canyoneering Adventure", kind: "hike", note: "Half-day guided · Springdale · 4 people", parts: ["family","zion"], hero: true },
    { day: "Thu Jul 16", date: "1:30 PM", venue: "Gems of Zion", kind: "view", note: "Canyon Overlook Trailhead + Anasazi Petroglyphs", parts: ["family","zion"] },
    { day: "Fri Jul 17", date: "1:30 PM", venue: "The Cosmopolitan", kind: "stay", note: "Check-in · SURPRISE reveal", parts: ["family","zion","vegas"], hero: true },
    { day: "Fri Jul 17", date: "3:00 PM", venue: "Cosmo Pool Cabana", kind: "pool", note: "Until 6 PM · our treat", parts: ["family","zion","vegas"] },
    { day: "Fri Jul 17", date: "8:00 PM", venue: "Eiffel Tower Restaurant", kind: "dinner", note: "Paris Las Vegas · our treat", parts: ["family","zion","vegas"] },
    { day: "Sat Jul 18", date: "11:30 AM", venue: "The Henry", kind: "brunch", note: "Cosmo · brunch", parts: ["family","zion","vegas"] },
    { day: "Sat Jul 18", date: "2:00 PM", venue: "The Sphere", kind: "show", note: "Wizard of Oz · ~$175 pp", parts: ["family","zion","vegas"] },
    { day: "Sat Jul 18", date: "8:00 PM", venue: "Beauty & Essex", kind: "dinner", note: "The Cosmopolitan", parts: ["family","zion","vegas"] },
    { day: "Sat Jul 18", date: "11:30 PM", venue: "XS Nightclub", kind: "night", note: "Odesza DJ set · Encore", parts: ["family","zion","vegas"], hero: true },
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
    { title: "The Narrows",
      desc: "Wading through the Virgin River into a cathedral of ancient slot canyon walls.",
      photo: PHOTOS.zionNarrows, part: "nature" },
    { title: "The Surprise Arrival",
      desc: "Vegas ambush at the Cosmopolitan — the moment the whole trip pivots to celebration.",
      photo: PHOTOS.vegasNight, part: "pivot" },
    { title: "Eiffel Tower Dinner",
      desc: "Elevated French dining with Strip views on night one in Vegas.",
      photo: PHOTOS.vegasStrip, part: "neon" },
    { title: "Wizard of Oz · The Sphere",
      desc: "Inside the world's most immersive entertainment venue.",
      photo: PHOTOS.sphere, part: "neon" },
    { title: "Odesza at XS",
      desc: "Late-night Odesza DJ set at the iconic XS Nightclub at Encore.",
      photo: PHOTOS.vegasNeon, part: "neon" },
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

Object.assign(window, { Route, Helicopter, InfoHub, Guests, Reservations, Moments });
