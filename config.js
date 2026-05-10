/* ═══════════════════════════════════════════════════════════════════════
   RADIO BIDAR – Episode Config
   ✏️  Edit ONLY this file for each new episode. Touch nothing else.
═══════════════════════════════════════════════════════════════════════ */
const CONFIG = {

  /* ── Branding ──────────────────────────────────────────────────────── */
  siteUrl:          "Radio.BIDAR.ca",
  siteTagline:      "صدای آگاهی و گفتگو",
  logoLetter:       "B",

  /* ── Episode details ───────────────────────────────────────────────── */
  episodeNumber:    "118",
  episodeTime:      "20:00",
  episodeDate:      "11 می",
  episodeTopic:     "حمایت از مهاجران ایرانی برای ورود به بازار کار",
  timezone:         "به وقت شرق کانادا",

  /* ── Hero copy (main title + description) ──────────────────────────── */
  heroLine1:        "حمایت از",
  heroLineAccent:   "مهاجران ایرانی",
  heroLine2:        "برای ورود به بازار کار",
  heroDesc: [
    "در گفتگوهای زنده شرکت کنید،",
    "سوال بپرسید، نظر بدهید و بخشی",
    "از جامعه آگاه و بیدار باشید.",
  ],

  /* ── Guest ─────────────────────────────────────────────────────────── */
  guestName:        "خانم مینا",
  guestTitle:       "مهمان برنامه",
  guestOrg:         "کانون برنامه نویسان ایرانی در کانادا",
  guestPhotoUrl:    "",     // Remote URL, or "" to auto-try speaker.png
  guestUrl:         "",     // LinkedIn / personal URL ("" = not clickable)

  /* ── Telegram / Live CTA ───────────────────────────────────────────── */
  liveBadgeLabel:   "برنامه زنده در تلگرام",
  telegramLiveUrl:  "https://t.me/BIDAR_live",
  telegramHandle:   "t.me/BIDAR_live",
  ctaJoinTitle:     "همین حالا عضو شوید!",
  ctaJoinSubtext:   "لینک ورود به برنامه زنده در تلگرام",

  /* ── Schedule strip (3 items in the hero visual) ───────────────────── */
  scheduleTitle: "زمان برنامه بعدی:",
  scheduleItems: [
    { icon: "🎤", label: "ایپزود",   value: "118"    },
    { icon: "🕒", label: "ساعت",     value: "20:00"  },
    { icon: "📅", label: "تاریخ",    value: "11 می"  },
  ],

  /* ── Live-show features (4 cards) ──────────────────────────────────── */
  featuresSectionTitle: "در برنامه زنده چه خبر است؟",
  features: [
    { icon: "👥", title: "جامعه‌ای از همراهان",  desc: "مکان امن برای گفتگو و یادگیری"    },
    { icon: "🎙️", title: "موضوعات متنوع",        desc: "تحلیل، تجربه، آگاهی و راهکار"     },
    { icon: "👤", title: "پرسش و پاسخ زنده",      desc: "سوالات شما پاسخ داده می‌شود"      },
    { icon: "💬", title: "گفتگو و تبادل نظر",     desc: "با مهمان و سایر شرکت‌کنندگان"    },
  ],

  /* ── Platforms strip ───────────────────────────────────────────────── */
  platformsSectionTitle:   "مشاهده نسخه ضبط شده برنامه",
  platformsSectionSubtext: "ویدیو و پادکست برنامه را در کانال‌های زیر دنبال کنید",
  platforms: [
    { icon: "▶️",  label: "YouTube"         },
    { icon: "🟢",  label: "Spotify"         },
    { icon: "🟣",  label: "Apple Podcasts"  },
    { icon: "🎧",  label: "Google Podcasts" },
    { icon: "✈️",  label: "Telegram"        },
  ],

  /* ── QR Code ───────────────────────────────────────────────────────── */
  qrUrl:      "https://t.me/BIDAR_ca",   // URL encoded in the QR image
  qrLabel:    "اسکن کنید",

  /* ── Footer ────────────────────────────────────────────────────────── */
  followUsTitle:  "ما را در رسانه‌های دیگر دنبال کنید",
  socialHandle:   "@BIDAR_ca",
  socialsLine:    "🌐 Instagram · X · Facebook",
  bellTitle:      "زنگوله را فعال کنید",
  bellSubtext:    "تا زمان شروع برنامه زنده را از دست ندهید!",

};
