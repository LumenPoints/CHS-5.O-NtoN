/* global React, PHOTOS, AUDIENCES */
const { useState: useState_d } = React;

/* =================== DAY DATA =================== */
const DAYS = [
  {
    n: 1, dow: "Sunday", date: "July 12", part: "bryce",
    title: "Arrival + Settle In",
    subtitle: "Wheels down. Hoodoos by sundown.",
    photo: PHOTOS.bryceTrail,
    stay: "Clear Sky Resorts · Bryce Canyon",
    items: [
      { time: "7:55 AM",  text: "Depart Nashville (BNA)", kind: "flight" },
      { time: "9:50 AM",  text: "Arrive Las Vegas (LAS)", kind: "flight" },
      { time: "10:30 AM", text: "Scenic drive Vegas → Bryce Canyon (~4 hrs)", kind: "drive" },
      { time: "3:00 PM",  text: "Check-in + settle in at Clear Sky Resorts", kind: "stay" },
      { time: "5:00 PM",  text: "Short exploratory hike — first look at the hoodoos", kind: "hike" },
      { time: "7:30 PM",  text: "Casual dinner, early night", kind: "eat" },
    ],
    audiences: ["family"],
  },
  {
    n: 2, dow: "Monday", date: "July 13", part: "bryce",
    title: "Bryce Canyon Exploration",
    subtitle: "Sunrise on the hoodoos. Stars at dark.",
    photo: PHOTOS.bryceHoodoos,
    stay: "Clear Sky Resorts · Bryce Canyon",
    items: [
      { time: "Sunrise",  text: "Sunrise viewpoints — Sunrise Point or Bryce Point", kind: "view" },
      { time: "Morning",  text: "Navajo Loop + Queen's Garden combo trail", kind: "hike" },
      { time: "Afternoon",text: "Optional horseback riding through the canyon", kind: "ride" },
      { time: "Evening",  text: "Stargazing — Bryce is a designated Dark Sky Park ✦", kind: "stars" },
    ],
    audiences: ["family"],
  },
  {
    n: 3, dow: "Tuesday", date: "July 14", part: "zion",
    title: "Zion Arrival · Friends Join",
    subtitle: "Bryce to Zion. The crew comes together.",
    photo: PHOTOS.zionDrive,
    stay: "Open Sky Resort · Zion",
    items: [
      { time: "Morning",  text: "Scenic drive Bryce → Zion (~2 hours)", kind: "drive" },
      { time: "12:30 PM", text: "Check-in at Open Sky Resort", kind: "stay" },
      { time: "3:00 PM",  text: "🎉 Friends arrive — the crew is together", kind: "people", highlight: true },
      { time: "7:00 PM",  text: "Welcome group dinner", kind: "eat" },
    ],
    audiences: ["family", "zion"],
  },
  {
    n: 4, dow: "Wednesday", date: "July 15", part: "zion",
    title: "E-Bikes + Birthday Dinner",
    subtitle: "Zion Canyon like a local. Black Sage by night.",
    photo: PHOTOS.zionEmerald,
    stay: "Open Sky Resort · Zion",
    items: [
      { time: "9:00 AM",  text: "Zion E-Bike Rental — Rad Runner ×4 · 1101 Zion Park Blvd, Springdale", kind: "ride", highlight: true },
      { time: "All day",  text: "Skip the shuttle lines — move through the park like a local (rentals until 5 PM)", kind: "ride" },
      { time: "5:30 PM",  text: "Return bikes · rinse off back at Open Sky", kind: "rest" },
      { time: "6:00 PM",  text: "🥂 Birthday Dinner at Black Sage — celebrating Hunter's 50th · Virgin, UT", kind: "celebrate", highlight: true },
    ],
    audiences: ["family", "zion"],
  },
  {
    n: 5, dow: "Thursday", date: "July 16", part: "zion",
    title: "Canyoneering + Gems of Zion",
    subtitle: "Rappel in the morning. Petroglyphs by afternoon.",
    photo: PHOTOS.zionNarrows,
    stay: "Open Sky Resort · Zion",
    badge: "Adventure day",
    items: [
      { time: "7:00 AM",  text: "Half-Day Guided Canyoneering Adventure — Springdale (4 people)", kind: "hike", highlight: true },
      { time: "11:00 AM", text: "Wrap canyoneering · lunch + recovery", kind: "eat" },
      { time: "1:30 PM",  text: "Gems of Zion — start at Canyon Overlook Trailhead", kind: "view", highlight: true },
      { time: "Afternoon",text: "💎 Anasazi Petroglyph Canyon — ~2.5 mi past east entrance, small wooden fence on the left", kind: "view" },
      { time: "Evening",  text: "Casual group dinner — stories from the canyon", kind: "eat" },
    ],
    audiences: ["family", "zion"],
  },
  {
    n: 6, dow: "Friday", date: "July 17", part: "vegas",
    title: "The Surprise · Pool · Eiffel Night",
    subtitle: "The trip pivots. Nature ends. Neon begins.",
    photo: PHOTOS.vegasNight,
    stay: "The Cosmopolitan of Las Vegas",
    surprise: true,
    items: [
      { time: "Morning",  text: "Drive Zion → Vegas (~2.5 hours)", kind: "drive" },
      { time: "12:30 PM", text: "Stop at The STRAT Tower — thrill rides + decoy 'trip ending' moment", kind: "decoy" },
      { time: "1:30 PM",  text: "💥 Cosmo arrival — THE SURPRISE", kind: "surprise", highlight: true },
      { time: "3:00 PM",  text: "Pool cabana at the Cosmo (until 6:00 PM)", kind: "pool" },
      { time: "8:00 PM",  text: "Dinner at Eiffel Tower Restaurant", kind: "eat", highlight: true },
    ],
    audiences: ["family", "zion", "vegas"],
  },
  {
    n: 7, dow: "Saturday", date: "July 18", part: "vegas",
    title: "Brunch · Sphere · Iconic Night",
    subtitle: "Oz at the Sphere. Odesza after dark.",
    photo: PHOTOS.sphere,
    stay: "The Cosmopolitan of Las Vegas",
    items: [
      { time: "11:30 AM", text: "Brunch at The Henry", kind: "eat" },
      { time: "2:00 PM",  text: "Wizard of Oz at The Sphere", kind: "show", highlight: true },
      { time: "Afternoon",text: "Pool / shopping / AREA15", kind: "pool" },
      { time: "8:00 PM",  text: "Dinner at Beauty & Essex", kind: "eat" },
      { time: "11:30 PM", text: "XS Nightclub — Odesza DJ Set", kind: "night", highlight: true },
    ],
    audiences: ["family", "zion", "vegas"],
  },
  {
    n: 8, dow: "Sunday", date: "July 19", part: "vegas",
    title: "Helicopter · Farewell Peak",
    subtitle: "Red Rock to the Strip. The crown jewel.",
    photo: PHOTOS.helicopter,
    stay: "The Cosmopolitan of Las Vegas",
    items: [
      { time: "11:45 AM", text: "Brunch at Wicked Spoon", kind: "eat" },
      { time: "Afternoon",text: "Shopping + relaxing", kind: "rest" },
      { time: "5:45 PM",  text: "Arrive Maverick Helicopters", kind: "fly" },
      { time: "6:00 PM",  text: "✦ Neon & Nature VIP Flight — sunset → twilight", kind: "fly", highlight: true },
      { time: "Evening",  text: "Celebratory drinks / casual dinner", kind: "eat" },
      { time: "11:00 PM", text: "Friends depart", kind: "flight" },
    ],
    audiences: ["family", "zion", "vegas"],
  },
  {
    n: 9, dow: "Monday", date: "July 20", part: "vegas",
    title: "Departure Day",
    subtitle: "One last Vegas moment.",
    photo: PHOTOS.vegasPool,
    stay: "Heading home",
    items: [
      { time: "Morning",  text: "Relaxed morning — coffee, pool, one last Vegas moment", kind: "rest" },
      { time: "1:00 PM",  text: "Depart LAS → BNA", kind: "flight" },
    ],
    audiences: ["family"],
  },
];

const KIND_ICON = {
  flight: "✈", drive: "🚗", stay: "⌂", hike: "⛰", view: "◉", ride: "♞",
  stars: "✦", people: "♥", eat: "✦", celebrate: "🥂", pool: "≋",
  decoy: "?", surprise: "✦", show: "◐", night: "♪", fly: "✦", rest: "◯",
};

/* =================== PART HEADER =================== */
function PartHeader({ num, title, subtitle, dates, palette }) {
  return (
    <div className={`part-header part-header--${palette}`}>
      <div className="part-header__num">Part {num}</div>
      <h2 className="part-header__title display">{title}</h2>
      <div className="part-header__sub editorial-italic">{subtitle}</div>
      <div className="part-header__dates">{dates}</div>
    </div>
  );
}

/* =================== DAY CARD =================== */
function DayCard({ day, idx }) {
  const isEven = idx % 2 === 0;
  return (
    <article className={`day day--${day.part} ${isEven ? "day--left" : "day--right"} ${day.surprise ? "day--surprise" : ""}`}>
      <div className="day__photo photo">
        <img src={day.photo} alt="" loading="lazy"
             onError={(e) => { e.target.style.display = 'none'; }} />
        <div className="day__photo-stamp">
          <div className="day__photo-stamp-num">{String(day.n).padStart(2,"0")}</div>
          <div className="day__photo-stamp-day">{day.dow}</div>
        </div>
        {day.badge && <div className="day__badge">{day.badge}</div>}
      </div>
      <div className="day__content">
        <div className="day__meta">
          <span className="day__date">{day.date}</span>
          <span className="day__dot">·</span>
          <span className="day__stay">{day.stay}</span>
        </div>
        <h3 className="day__title display">{day.title}</h3>
        <p className="day__subtitle editorial-italic">{day.subtitle}</p>
        <ul className="day__items">
          {day.items.map((it, i) => (
            <li key={i} className={`day__item ${it.highlight ? "day__item--highlight" : ""}`}>
              <span className="day__item-icon">{KIND_ICON[it.kind] || "·"}</span>
              <span className="day__item-time">{it.time}</span>
              <span className="day__item-text">{it.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* =================== JOURNEY (DAYS) =================== */
function Journey({ audience }) {
  const visibleDays = DAYS.filter(d => d.audiences.includes(audience));
  const bryce = visibleDays.filter(d => d.part === "bryce");
  const zion  = visibleDays.filter(d => d.part === "zion");
  const vegas = visibleDays.filter(d => d.part === "vegas");
  const surpriseDay = vegas[0];
  const restVegas = vegas.slice(1);

  return (
    <>
      {bryce.length > 0 && (
        <section id="bryce" className="journey journey--bryce">
          <PartHeader num="I" title="Bryce Canyon" subtitle="Nature begins"
            dates="July 12 – 14 · Clear Sky Resorts" palette="nature" />
          <div className="journey__days">
            {bryce.map((d, i) => <DayCard key={d.n} day={d} idx={i} />)}
          </div>
        </section>
      )}
      {zion.length > 0 && (
        <section id="zion" className="journey journey--zion">
          <PartHeader num="II" title="Zion" subtitle="Adventure & celebration"
            dates="July 14 – 17 · Open Sky Resort" palette="zion" />
          <div className="journey__days">
            {zion.map((d, i) => <DayCard key={d.n} day={d} idx={i} />)}
          </div>
        </section>
      )}
      {surpriseDay && <SurpriseReveal day={surpriseDay} audience={audience} />}
      {vegas.length > 0 && (
        <section id="vegas" className="journey journey--vegas">
          <PartHeader num="III" title="Las Vegas" subtitle="Neon finale"
            dates="July 17 – 20 · The Cosmopolitan" palette="neon" />
          <div className="journey__days">
            <DayCard day={surpriseDay} idx={0} />
            {restVegas.map((d, i) => <DayCard key={d.n} day={d} idx={i+1} />)}
          </div>
        </section>
      )}
    </>
  );
}

/* =================== THE SURPRISE REVEAL =================== */
function SurpriseReveal({ day, audience }) {
  return (
    <section id="surprise" className="surprise">
      <div className="surprise__before">
        <div className="surprise__before-text editorial-italic">
          Up to this point, Hunter believes the trip is ending.
        </div>
        <div className="surprise__decoy mono">
          The STRAT Tower decoy stop · 12:30 PM
        </div>
      </div>
      <div className="surprise__flash">
        <div className="surprise__chapter mono">CHAPTER III · THE TURN</div>
        <h2 className="surprise__title display">
          <span>The</span>
          <span className="surprise__title-word">Surprise</span>
        </h2>
        <div className="surprise__moment editorial">
          <span className="editorial-italic">1:30 PM</span> ·{" "}
          The Cosmopolitan
        </div>
        <p className="surprise__lede">
          The drive from Zion ends. Hunter thinks he's heading home. He's not.
          The whole crew is waiting in Vegas — and the second half of the
          birthday begins.
        </p>
        <div className="surprise__beats">
          <div className="surprise__beat">
            <div className="surprise__beat-time">11:00 AM</div>
            <div className="surprise__beat-text">Pack out of Zion. Casual. Don't tip the hat.</div>
          </div>
          <div className="surprise__beat">
            <div className="surprise__beat-time">12:30 PM</div>
            <div className="surprise__beat-text">STRAT Tower decoy — "one more thrill before we fly out"</div>
          </div>
          <div className="surprise__beat surprise__beat--peak">
            <div className="surprise__beat-time">1:30 PM</div>
            <div className="surprise__beat-text">Pull into the Cosmo. The crew is in the lobby. 💥</div>
          </div>
          <div className="surprise__beat">
            <div className="surprise__beat-time">3:00 PM</div>
            <div className="surprise__beat-text">Pool cabana — give him 90 minutes to absorb it</div>
          </div>
          <div className="surprise__beat">
            <div className="surprise__beat-time">8:00 PM</div>
            <div className="surprise__beat-text">Eiffel Tower Restaurant — the Strip at his feet</div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { DAYS, Journey, SurpriseReveal, PartHeader, DayCard });
