export type Category =
  | "tool"
  | "interactive"
  | "map"
  | "art"
  | "daily"
  | "fact";

export interface Biscuit {
  slug: string;
  title: string;
  link: string;
  category: Category;
  blurb: string;
  whyCool: string;
  date: string;
}

export const CATEGORY_LABEL: Record<Category, string> = {
  tool: "TOOL",
  interactive: "INTERACTIVE",
  map: "MAP",
  art: "ART",
  daily: "DAILY",
  fact: "FACT",
};

export const CATEGORY_COLOR: Record<Category, string> = {
  tool: "text-cyan",
  interactive: "text-amber",
  map: "text-emerald-300",
  art: "text-fuchsia-300",
  daily: "text-sky-300",
  fact: "text-rose-300",
};

export const biscuits: Biscuit[] = [
  {
    slug: "library-of-babel",
    title: "The Library of Babel",
    link: "https://libraryofbabel.info",
    category: "art",
    blurb: "A library containing every possible combination of letters — every book ever written, and every book that ever will be.",
    whyCool:
      "It mathematically contains your own biography, word-for-word. It's a thought experiment you can actually browse.",
    date: "2026-09-20",
  },
  {
    slug: "radio-garden",
    title: "Radio Garden",
    link: "https://radio.garden",
    category: "map",
    blurb: "Spin a globe and tune into live radio stations anywhere on Earth in real time.",
    whyCool:
      "Thousands of stations, one globe — a way to teleport into a city's actual airwaves.",
    date: "2026-09-18",
  },
  {
    slug: "the-deep-sea",
    title: "The Deep Sea",
    link: "https://neal.fun/deep-sea/",
    category: "interactive",
    blurb: "Scroll down and descend the ocean, meter by meter, past creatures you've never heard of.",
    whyCool:
      "The deeper you scroll, the darker and stranger it gets. You feel the pressure of it.",
    date: "2026-09-15",
  },
  {
    slug: "window-swap",
    title: "Window Swap",
    link: "https://www.window-swap.com",
    category: "interactive",
    blurb: "Look out a random stranger's window, anywhere in the world.",
    whyCool:
      "A window into someone else's ordinary afternoon — the internet's most peaceful voyeurism.",
    date: "2026-09-12",
  },
  {
    slug: "a-soft-murmur",
    title: "A Soft Murmur",
    link: "https://asoftmurmur.com",
    category: "tool",
    blurb: "Mixable ambient sounds — rain, waves, fire, coffee shop — to drown out the noise.",
    whyCool:
      "You're mixing your own room tone. Deep focus in 30 seconds flat.",
    date: "2026-09-10",
  },
  {
    slug: "apod",
    title: "Astronomy Picture of the Day",
    link: "https://apod.nasa.gov/apod/astropix.html",
    category: "daily",
    blurb: "NASA posts a new image of the universe every single day since 1995.",
    whyCool:
      "A free daily hit of cosmic awe. Thirty years of it, never once skipped.",
    date: "2026-09-08",
  },
  {
    slug: "zoom-earth",
    title: "Zoom Earth",
    link: "https://zoom.earth",
    category: "map",
    blurb: "Near-live satellite imagery, weather, and storms, in your browser.",
    whyCool:
      "Watch a hurricane spin from orbit, in near real time. Weather porn.",
    date: "2026-09-05",
  },
  {
    slug: "this-is-sand",
    title: "This Is Sand",
    link: "https://thisissand.com",
    category: "art",
    blurb: "Pour digital sand into layered gradients, one pixel at a time.",
    whyCool:
      "It's a meditation disguised as a toy. You'll lose an hour and feel calmer for it.",
    date: "2026-09-02",
  },
];
