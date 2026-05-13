// Six crew-logo directions for Hunter 5.0 · Nature to Neon
// Each direction exports:  PrimaryMark · OnTee · OnHat
// All marks are color-tokenized so they sit on light or dark garments.

const C = {
  sand: '#f1e6d0',
  sandLight: '#f5ecdd',
  cream: '#fbf6ec',
  clay: '#c5673b',
  canyon: '#a8451e',
  hoodoo: '#8b3211',
  ink: '#1a0e08',
  rock: '#2a1810',
  rose: '#ff3d8a',
  magenta: '#c91d72',
  pink: '#ff2e93',
  cyan: '#14f0e1',
  violet: '#8b5cf6',
  amber: '#ffb800',
  vegas: '#0a0418',
};

/* =================================================================
   01 · PARK BADGE — circular national-park patch
   Three stacked icons (hoodoo, canyon, neon) reading the journey.
   ================================================================= */
function BadgeMark({ fg = C.canyon, bg = C.sand, accent = C.rose }) {
  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }}>
      <defs>
        <path id="badge-top-arc" d="M 70 200 A 130 130 0 0 1 330 200" />
        <path id="badge-bot-arc" d="M 70 200 A 130 130 0 0 0 330 200" />
      </defs>

      {/* outer ring */}
      <circle cx="200" cy="200" r="190" fill={bg} stroke={fg} strokeWidth="6" />
      <circle cx="200" cy="200" r="172" fill="none" stroke={fg} strokeWidth="1.5" />

      {/* top rocker */}
      <text fill={fg} fontFamily="'Big Shoulders Display', sans-serif"
            fontWeight="900" fontSize="24" letterSpacing="6">
        <textPath href="#badge-top-arc" startOffset="50%" textAnchor="middle">
          NATURE · TO · NEON
        </textPath>
      </text>

      {/* bottom rocker */}
      <text fill={fg} fontFamily="'JetBrains Mono', monospace"
            fontWeight="600" fontSize="14" letterSpacing="4">
        <textPath href="#badge-bot-arc" startOffset="50%" textAnchor="middle">
          BRYCE · ZION · VEGAS · MMXXVI
        </textPath>
      </text>

      {/* center scene — hoodoos + sun + neon dots */}
      <g transform="translate(200 215)">
        {/* sun */}
        <circle cx="0" cy="-32" r="36" fill="none" stroke={accent} strokeWidth="3" />
        {/* hoodoos */}
        <path d="M -78 50 L -78 -8 L -64 -8 L -64 -22 L -52 -22 L -52 14 L -36 14 L -36 -34 L -22 -34 L -22 -2 L -8 -2 L -8 22 L 8 22 L 8 -18 L 22 -18 L 22 -42 L 36 -42 L 36 10 L 52 10 L 52 -10 L 64 -10 L 64 30 L 78 30 L 78 50 Z"
              fill={fg} />
        {/* horizon line */}
        <line x1="-100" y1="50" x2="100" y2="50" stroke={fg} strokeWidth="2" />
        {/* neon dots below */}
        <circle cx="-50" cy="68" r="3.5" fill={accent} />
        <circle cx="-20" cy="68" r="3.5" fill={accent} />
        <circle cx="10" cy="68" r="3.5" fill={accent} />
        <circle cx="40" cy="68" r="3.5" fill={accent} />
        <circle cx="70" cy="68" r="3.5" fill={accent} />
      </g>

      {/* Hunter 5.0 lockup centered top */}
      <g transform="translate(200 90)">
        <text textAnchor="middle" fontFamily="'Instrument Serif', serif"
              fontStyle="italic" fontSize="22" fill={fg} opacity="0.8">
          Hunter
        </text>
        <text textAnchor="middle" y="28" fontFamily="'Big Shoulders Display', sans-serif"
              fontWeight="900" fontSize="38" fill={fg} letterSpacing="2">
          5·0
        </text>
      </g>

      {/* small side stars */}
      <text x="36" y="206" fill={accent} fontSize="20">✦</text>
      <text x="354" y="206" fill={accent} fontSize="20" textAnchor="end">✦</text>
    </svg>
  );
}

/* =================================================================
   02 · TOUR TEE — concert-tour back print, dates as tour stops
   ================================================================= */
function TourMark({ fg = C.sandLight, accent = C.rose }) {
  return (
    <div style={{ width: '100%', maxWidth: 460, textAlign: 'center', color: fg, fontFamily: 'Inter Tight, sans-serif' }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.32em', opacity: 0.7, marginBottom: 12 }}>
        ★ THE WORLD TOUR ★
      </div>
      <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 30, lineHeight: 1, marginBottom: 2 }}>
        CHS
      </div>
      <div style={{ fontFamily: 'Big Shoulders Display, sans-serif', fontWeight: 900, fontSize: 96, lineHeight: 0.86, letterSpacing: '-0.015em' }}>
        5·0
      </div>
      <div style={{ fontFamily: 'Big Shoulders Display, sans-serif', fontWeight: 900, fontSize: 28, letterSpacing: '0.04em', marginTop: 6 }}>
        NATURE <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontWeight: 400, opacity: 0.7 }}>to</span> <span style={{ color: accent }}>NEON</span>
      </div>
      <div style={{ height: 1.5, background: fg, opacity: 0.5, margin: '18px auto 14px', width: '92%' }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.08em' }}>
        {[
          ['JUL 12', 'BRYCE CANYON', 'UT'],
          ['JUL 14', 'ZION · OPEN SKY', 'UT'],
          ['JUL 15', '★ THE BIG ONE ★', '50'],
          ['JUL 17', 'LAS VEGAS', 'NV'],
          ['JUL 20', 'HOME ·', 'TN'],
        ].map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '70px 1fr 36px', gap: 10, alignItems: 'baseline', textAlign: 'left' }}>
            <b style={{ opacity: 0.85, letterSpacing: '0.14em' }}>{row[0]}</b>
            <span style={{ fontWeight: 700, letterSpacing: '0.16em' }}>{row[1]}</span>
            <span style={{ opacity: 0.6, textAlign: 'right', letterSpacing: '0.14em' }}>{row[2]}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 18, opacity: 0.85 }}>
        the crew · 9 deep
      </div>
    </div>
  );
}

/* =================================================================
   03 · ATHLETIC BLOCK — collegiate H·5 with rockers
   ================================================================= */
function AthleticMark({ fg = C.canyon, accent = C.rose, bg = C.sand }) {
  return (
    <div style={{ textAlign: 'center', color: fg, width: '100%', maxWidth: 460 }}>
      <div style={{ fontFamily: 'Anton, Big Shoulders Display, sans-serif', fontWeight: 900, letterSpacing: '0.22em', fontSize: 16, marginBottom: 10 }}>
        EST · MCMLXXVI
      </div>
      <div style={{
        fontFamily: 'Anton, Big Shoulders Display, sans-serif',
        fontWeight: 900, fontSize: 220, lineHeight: 0.82, letterSpacing: '-0.04em',
        display: 'inline-flex', alignItems: 'baseline', gap: 0,
      }}>
        <span style={{ color: 'transparent', WebkitTextStroke: `5px ${fg}`, textShadow: `8px 8px 0 ${accent}` }}>H</span>
        <span style={{ color: accent, fontSize: 100, transform: 'translateY(-30px)', display: 'inline-block', margin: '0 6px' }}>·</span>
        <span style={{ color: fg, textShadow: `8px 8px 0 ${accent}` }}>5.0</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, margin: '14px 0 12px' }}>
        <span style={{ height: 2, flex: 1, maxWidth: 90, background: fg }}></span>
        <b style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.3em', fontWeight: 700 }}>
          THE BIG ONE
        </b>
        <span style={{ height: 2, flex: 1, maxWidth: 90, background: fg }}></span>
      </div>
      <div style={{ fontFamily: 'Anton, Big Shoulders Display, sans-serif', fontWeight: 900, fontSize: 15, letterSpacing: '0.32em' }}>
        NATURE · TO · NEON · CREW
      </div>
    </div>
  );
}

/* =================================================================
   04 · NEON MARQUEE — Vegas sign, glow
   ================================================================= */
function MarqueeMark() {
  const pink = C.pink;
  const cyan = C.cyan;
  return (
    <div style={{
      border: `2px solid ${pink}`,
      borderRadius: 8,
      padding: '24px 38px 28px',
      background: 'rgba(255,46,147,0.06)',
      boxShadow: `0 0 36px rgba(255,46,147,0.5), inset 0 0 22px rgba(255,46,147,0.18)`,
      position: 'relative',
      textAlign: 'center',
      color: '#fff',
      maxWidth: 460,
    }}>
      {/* corner bulbs */}
      {[[8,8],[8,'auto',8,'auto'],['auto',8,'auto',8],['auto','auto',8,8]].map(() => null)}
      <span style={{position:'absolute', top:8, left:8, width:8, height:8, borderRadius:'50%', background:pink, boxShadow:`0 0 12px ${pink}`}}></span>
      <span style={{position:'absolute', top:8, right:8, width:8, height:8, borderRadius:'50%', background:pink, boxShadow:`0 0 12px ${pink}`}}></span>
      <span style={{position:'absolute', bottom:8, left:8, width:8, height:8, borderRadius:'50%', background:pink, boxShadow:`0 0 12px ${pink}`}}></span>
      <span style={{position:'absolute', bottom:8, right:8, width:8, height:8, borderRadius:'50%', background:pink, boxShadow:`0 0 12px ${pink}`}}></span>

      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.36em', color: cyan, fontWeight: 700, marginBottom: 14 }}>
        ★ NOW PLAYING ★
      </div>
      <div style={{
        fontFamily: '"Climate Crisis", "Big Shoulders Display", sans-serif',
        fontSize: 96, lineHeight: 0.86, color: '#fff',
        textShadow: `0 0 10px rgba(255,46,147,0.9), 0 0 26px rgba(255,46,147,0.6), 0 0 50px rgba(217,22,184,0.5)`,
      }}>
        HUNTER
      </div>
      <div style={{
        fontFamily: 'Instrument Serif, serif', fontStyle: 'italic',
        fontSize: 56, color: cyan,
        textShadow: `0 0 16px rgba(20,240,225,0.7)`,
        margin: '-2px 0',
      }}>
        5.0
      </div>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.3em',
        color: '#fff', opacity: 0.85, marginTop: 12,
      }}>
        ★ THE CREW · JULY 2026 ★
      </div>
    </div>
  );
}

/* =================================================================
   05 · EDITORIAL WORDMARK — minimal serif lockup
   ================================================================= */
function EditorialMark({ fg = C.ink, accent = C.magenta, bg = C.cream }) {
  return (
    <div style={{ textAlign: 'center', color: fg, width: '100%', maxWidth: 480 }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.32em', opacity: 0.6, marginBottom: 20 }}>
        VOL · V · ISSUE 050
      </div>
      <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 92, lineHeight: 0.92, letterSpacing: '-0.03em' }}>
        Nature<br/>
        <em style={{ color: accent, fontStyle: 'italic' }}>to</em> Neon
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, margin: '22px 0 14px' }}>
        <span style={{ height: 1, flex: 1, maxWidth: 90, background: fg, opacity: 0.5 }}></span>
        <b style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 14, letterSpacing: '0.28em', fontWeight: 700 }}>
          CHS · 5·0
        </b>
        <span style={{ height: 1, flex: 1, maxWidth: 90, background: fg, opacity: 0.5 }}></span>
      </div>
      <div style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600, opacity: 0.65 }}>
        Bryce · Zion · Vegas
      </div>
    </div>
  );
}

/* =================================================================
   06 · TRAIL BLAZE — vintage hiking stamp, geometric
   ================================================================= */
function TrailMark({ fg = C.cream, accent = C.rose, bg = C.hoodoo }) {
  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', maxWidth: 460 }}>
      <defs>
        <path id="trail-arc" d="M 70 338 A 140 140 0 0 0 330 338" />
      </defs>
      {/* shield outline */}
      <path d="M 200 30 L 360 70 L 360 220 Q 360 320 200 372 Q 40 320 40 220 L 40 70 Z"
            fill="none" stroke={fg} strokeWidth="4" />
      <path d="M 200 50 L 344 84 L 344 220 Q 344 308 200 354 Q 56 308 56 220 L 56 84 Z"
            fill="none" stroke={fg} strokeWidth="1" opacity="0.5" />

      {/* mountains */}
      <g transform="translate(200 200)">
        <path d="M -120 40 L -60 -60 L -20 -10 L 30 -90 L 90 0 L 120 40 Z"
              fill={fg} />
        <path d="M -60 -60 L -45 -40 L -55 -30 Z" fill={bg} opacity="0.4" />
        <path d="M 30 -90 L 50 -65 L 38 -55 Z" fill={bg} opacity="0.4" />
        {/* sun */}
        <circle cx="0" cy="-80" r="22" fill={accent} />
        {/* baseline */}
        <line x1="-130" y1="40" x2="130" y2="40" stroke={fg} strokeWidth="3" />
      </g>

      {/* est top */}
      <text x="200" y="112" textAnchor="middle"
            fontFamily="'JetBrains Mono', monospace"
            fontWeight="700" fontSize="13" fill={fg} letterSpacing="4" opacity="0.7">
        ★ EST · MMXXVI ★
      </text>

      {/* CHS below mountains */}
      <text x="200" y="270" textAnchor="middle"
            fontFamily="'Big Shoulders Display', sans-serif"
            fontWeight="900" fontSize="22" fill={fg} letterSpacing="8">
        CHS
      </text>

      {/* 5·0 bottom big */}
      <text x="200" y="312" textAnchor="middle"
            fontFamily="'Big Shoulders Display', sans-serif"
            fontWeight="900" fontSize="48" fill={accent} letterSpacing="2">
        5·0
      </text>

      {/* arc bottom text */}
      <text fontFamily="'JetBrains Mono', monospace"
            fontSize="13" fontWeight="600" fill={fg} letterSpacing="3">
        <textPath href="#trail-arc" startOffset="50%" textAnchor="middle">
          NATURE · TO · NEON · 2026
        </textPath>
      </text>
    </svg>
  );
}

/* =================================================================
   GARMENT MOCKUPS — simple SVG tee + flat-bill hat
   Children slot into the chest / front-panel area.
   ================================================================= */
function Tee({ color = '#1a0e08', stitch = 'rgba(255,255,255,0.08)', children, printScale = 1, printShift = 0 }) {
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1' }}>
      <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
        {/* tee silhouette */}
        <path d="M 80 80 L 140 50 Q 175 88 200 88 Q 225 88 260 50 L 320 80 L 360 140 L 320 170 L 305 156 L 305 360 Q 200 374 95 360 L 95 156 L 80 170 L 40 140 Z"
              fill={color} />
        {/* collar */}
        <path d="M 140 50 Q 175 88 200 88 Q 225 88 260 50 Q 230 76 200 76 Q 170 76 140 50 Z"
              fill="rgba(0,0,0,0.25)" />
        {/* seams */}
        <path d="M 145 56 Q 175 92 200 92 Q 225 92 255 56"
              fill="none" stroke={stitch} strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 95 156 L 95 360" fill="none" stroke={stitch} strokeWidth="1" />
        <path d="M 305 156 L 305 360" fill="none" stroke={stitch} strokeWidth="1" />
      </svg>
      {/* print area */}
      <div style={{
        position: 'absolute',
        top: '32%', left: '50%',
        transform: `translate(-50%, ${printShift}%) scale(${printScale})`,
        width: '46%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {children}
      </div>
    </div>
  );
}

function Hat({ color = '#1a0e08', accent = '#1a0e08', stitch = 'rgba(255,255,255,0.08)', children, printScale = 1 }) {
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1' }}>
      <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
        {/* brim shadow */}
        <ellipse cx="200" cy="270" rx="170" ry="18" fill="rgba(0,0,0,0.25)" />
        {/* crown */}
        <path d="M 80 240 Q 80 130 200 120 Q 320 130 320 240 Z" fill={color} />
        {/* front panel highlight */}
        <path d="M 130 232 Q 130 150 200 142 Q 270 150 270 232 Z" fill={color} opacity="0.9" />
        {/* brim flat-bill */}
        <path d="M 50 244 Q 200 232 350 244 L 348 274 Q 200 262 52 274 Z" fill={accent} />
        {/* button */}
        <circle cx="200" cy="128" r="5" fill={color} stroke={stitch} strokeWidth="1" />
        {/* seam center */}
        <path d="M 200 132 L 200 232" stroke={stitch} strokeWidth="1" strokeDasharray="2 3" />
        {/* side seams */}
        <path d="M 130 232 Q 130 150 200 142" stroke={stitch} strokeWidth="1" fill="none" strokeDasharray="2 3" />
        <path d="M 270 232 Q 270 150 200 142" stroke={stitch} strokeWidth="1" fill="none" strokeDasharray="2 3" />
        {/* eyelets */}
        <circle cx="174" cy="175" r="2" fill={stitch} />
        <circle cx="226" cy="175" r="2" fill={stitch} />
        <circle cx="158" cy="210" r="2" fill={stitch} />
        <circle cx="242" cy="210" r="2" fill={stitch} />
      </svg>
      {/* print on front panel */}
      <div style={{
        position: 'absolute',
        top: '42%', left: '50%',
        transform: `translate(-50%, -50%) scale(${printScale})`,
        width: '28%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {children}
      </div>
    </div>
  );
}

/* =================================================================
   DIRECTION CARD — primary mark + tee + hat in one layout
   ================================================================= */
function Direction({ name, blurb, bg, fg, Primary, Apparel, teeColor, hatColor, hatBrim, printScales }) {
  const ps = printScales || {};
  return (
    <div style={{
      width: '100%', height: '100%', background: bg, color: fg,
      display: 'grid', gridTemplateColumns: '1.15fr 0.95fr 0.95fr',
      padding: 0, position: 'relative', overflow: 'hidden',
      fontFamily: 'Inter Tight, sans-serif',
    }}>
      {/* Primary mark panel */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 32, borderRight: `1px solid ${fg}22`,
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', top: 18, left: 22, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.24em', opacity: 0.55, textTransform: 'uppercase' }}>
          {name}
        </div>
        <div style={{ position: 'absolute', bottom: 18, left: 22, right: 22, fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 14, opacity: 0.7, lineHeight: 1.35 }}>
          {blurb}
        </div>
        <div style={{ width: '92%', maxWidth: 360, display: 'flex', justifyContent: 'center' }}>
          <Primary />
        </div>
      </div>

      {/* Tee */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, borderRight: `1px solid ${fg}22`, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 18, left: 22, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.24em', opacity: 0.55 }}>TEE</div>
        <div style={{ width: '92%' }}>
          <Tee color={teeColor} printScale={ps.tee || 1} printShift={ps.teeShift || 0}>
            <Apparel kind="tee" />
          </Tee>
        </div>
      </div>

      {/* Hat */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 18, left: 22, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.24em', opacity: 0.55 }}>HAT</div>
        <div style={{ width: '95%' }}>
          <Hat color={hatColor} accent={hatBrim || hatColor} printScale={ps.hat || 1}>
            <Apparel kind="hat" />
          </Hat>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  C, BadgeMark, TourMark, AthleticMark, MarqueeMark, EditorialMark, TrailMark,
  Tee, Hat, Direction,
});
