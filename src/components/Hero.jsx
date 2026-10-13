import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]
const HOLD_MS = 2800 // Hold time for each phrase
const FIRST_SWAP_MS = 2500 // Wait after load before first rotation
const FIXED = 'We help your business'.split(' ')

/* ---------- Inline SVGs (No external assets) ---------- */
const Svg = ({ children }) => (
  <svg viewBox="0 0 24 24" width="58%" height="58%" aria-hidden="true">
    {children}
  </svg>
)

const stroke = {
  fill: 'none',
  stroke: '#ffffff',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const BrowserIcon = () => (
  <Svg>
    <g {...stroke}>
      <rect x="2" y="3" width="20" height="18" rx="3" />
      <path d="M2 9h20" />
      <circle cx="6" cy="6" r="1" fill="#ffffff" />
      <circle cx="9.5" cy="6" r="1" fill="#ffffff" />
    </g>
  </Svg>
)

const PhoneIcon = () => (
  <Svg>
    <g {...stroke}>
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <line x1="10" y1="18" x2="14" y2="18" />
    </g>
  </Svg>
)

const InstagramIcon = () => (
  <Svg>
    <g {...stroke}>
      <rect x="2" y="2" width="20" height="20" rx="6" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="#ffffff" />
    </g>
  </Svg>
)

const FacebookIcon = () => (
  <Svg>
    <path
      fill="#ffffff"
      d="M14 13.5h2.5l1-3.5H14V8c0-.9.4-1.5 1.6-1.5H17.5V3.5c-.7-.1-1.8-.2-3.1-.2-3.1 0-5 1.9-5 5.2V10H6.5v3.5h2.9V22h4.6v-8.5z"
    />
  </Svg>
)

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="62%" height="62%" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.28-2.09 3.665-5.17 3.665-9.12z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.13z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
    />
  </svg>
)

const IG_GRADIENT = 'linear-gradient(45deg, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%)'

const PHRASES = [
  { text: 'get more customers online', icons: [] },
  { text: 'create beautiful websites', icons: [{ bg: '#2563eb', Icon: BrowserIcon }] },
  { text: 'create mobile apps', icons: [{ bg: '#16a34a', Icon: PhoneIcon }] },
  { text: 'go viral with reels', icons: [{ bg: IG_GRADIENT, Icon: InstagramIcon }] },
  {
    text: 'run ads that convert',
    icons: [
      { bg: '#1877f2', Icon: FacebookIcon },
      { bg: IG_GRADIENT, Icon: InstagramIcon },
      { bg: '#ffffff', Icon: GoogleIcon },
    ],
  },
]

function Tile({ bg, Icon, delay, reduce }) {
  return (
    <motion.span
      initial={reduce ? false : { scale: 0.75, opacity: 0, filter: 'blur(8px)' }}
      animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.65, ease: EASE, delay }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '0.82em',
        height: '0.82em',
        borderRadius: '30%', // Signature Mobbin/iOS squircle
        background: bg,
        boxShadow: 'inset 0 0 0 0.5px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        willChange: 'filter, opacity, transform',
      }}
    >
      <Icon />
    </motion.span>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [rotated, setRotated] = useState(false)

  // Rotation loop: pauses while tab is hidden, disabled for reduced motion
  useEffect(() => {
    if (reduce) return
    let timer

    const tick = () => {
      if (!document.hidden) {
        setRotated(true)
        setI((prev) => (prev + 1) % PHRASES.length)
      }
      timer = setTimeout(tick, HOLD_MS)
    }

    timer = setTimeout(tick, FIRST_SWAP_MS)

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timer)
      } else {
        clearTimeout(timer)
        timer = setTimeout(tick, HOLD_MS)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [reduce])

  const p = PHRASES[i]
  const words = p.text.split(' ')
  const firstWords = words.slice(0, -1).join(' ')
  const lastWord = words[words.length - 1]

  return (
    <section
      id="home"
      className="relative pt-28 pb-8 md:pt-36 md:pb-10 bg-white overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow: Mobbin soft stadium pill */}
        <motion.div
          initial={reduce ? false : { opacity: 0, filter: 'blur(8px)', y: 6 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.75, ease: EASE }}
          style={{ willChange: 'filter, opacity, transform' }}
          className="inline-flex items-center gap-2 bg-[#f3f3f3] text-[#141414] text-xs font-semibold px-4 py-1.5 rounded-full mb-8"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#141414]" />
          <span>GROW YOUR BUSINESS ONLINE</span>
        </motion.div>

        {/* Static, visually hidden h1 for SEO and screen readers */}
        <h1 className="sr-only">
          We help your business get more customers online, create beautiful websites,
          create mobile apps, go viral with reels, and run ads that convert
        </h1>

        {/* Animated Headline marked aria-hidden */}
        <div
          aria-hidden="true"
          style={{
            fontFamily: "'Geist', -apple-system, sans-serif",
            fontSize: 'clamp(36px, 7.2vw, 88px)',
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            fontWeight: 500,
            maxWidth: 1250,
            width: '100%',
          }}
        >
          {/* Word-by-word reveal in Ink Black #141414 */}
          <div className="text-[#141414]">
            {FIXED.map((word, idx) => (
              <span
                key={idx}
                style={{
                  display: 'inline-block',
                  marginRight: '0.24em',
                }}
              >
                <motion.span
                  style={{
                    display: 'inline-block',
                    willChange: 'filter, opacity, transform',
                  }}
                  initial={reduce ? false : { y: 16, opacity: 0, filter: 'blur(16px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.95, ease: EASE, delay: 0.15 + idx * 0.08 }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </div>

          {/* Dissolving Rotating Phrase in Mobbin Muted #707070 */}
          <div
            style={{
              display: 'grid',
              justifyItems: 'center',
              alignItems: 'start',
              minHeight: '1.25em',
              width: '100%',
              marginTop: '0.04em',
            }}
          >
            <AnimatePresence>
              <motion.span
                key={i}
                style={{
                  gridArea: '1 / 1',
                  color: '#707070',
                  display: 'block',
                  willChange: 'filter, opacity, transform',
                }}
                initial={
                  reduce
                    ? false
                    : {
                        opacity: 0,
                        filter: 'blur(16px)',
                        y: 8,
                      }
                }
                animate={{
                  opacity: 1,
                  filter: 'blur(0px)',
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: EASE,
                    delay: rotated ? 0.15 : 0.45,
                  },
                }}
                exit={{
                  opacity: 0,
                  filter: 'blur(16px)',
                  y: -8,
                  transition: {
                    duration: 0.5,
                    ease: EASE,
                  },
                }}
              >
                {firstWords ? `${firstWords} ` : ''}
                <span
                  style={{
                    whiteSpace: 'nowrap',
                    display: 'inline-block',
                  }}
                >
                  {lastWord}
                  {p.icons.length > 0 && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.14em',
                        marginLeft: '0.22em',
                        verticalAlign: 'middle',
                        transform: 'translateY(-0.09em)', // Optical vertical centering
                      }}
                    >
                      {p.icons.map((item, iconIdx) => (
                        <Tile
                          key={iconIdx}
                          {...item}
                          reduce={reduce}
                          delay={(rotated ? 0.35 : 0.6) + iconIdx * 0.08}
                        />
                      ))}
                    </span>
                  )}
                </span>
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Subtitle: Clean light weight counterpoint to heading */}
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
          style={{ willChange: 'filter, opacity, transform' }}
          className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-[300] text-[#707070] leading-relaxed max-w-2xl mx-auto"
        >
          <strong className="text-[#141414] font-medium">bizgrw</strong> builds modern websites, mobile apps, and online ads that bring real paying customers straight to your door — zero technical knowledge needed.
        </motion.p>

        {/* Primary Action Button — Ink Black Stadium Pill */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, ease: EASE, delay: 1.05 }}
          style={{ willChange: 'filter, opacity, transform' }}
          className="flex items-center justify-center mt-6 sm:mt-8"
        >
          <a
            href="#contact"
            className="btn-primary px-8 py-3.5 text-base"
          >
            Get More Customers Now
          </a>
        </motion.div>

        {/* Bottom Kicker in Muted Gray */}
        <motion.p
          initial={reduce ? false : { opacity: 0, filter: 'blur(6px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, ease: EASE, delay: 1.25 }}
          style={{ willChange: 'filter, opacity, transform' }}
          className="mt-14 text-xs font-semibold tracking-wider text-[#adadad] uppercase"
        >
          WE BUILD YOUR WEBSITE • WE RUN YOUR ADS • YOU GROW YOUR BUSINESS
        </motion.p>
      </div>
    </section>
  )
}
