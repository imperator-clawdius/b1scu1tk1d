export type Category = "agent" | "osint" | "network" | "legal" | "media" | "tools";

export interface Download {
  slug: string;
  name: string;
  tagline: string;
  category: Category;
  url: string;
  source?: string;
}

export const CATEGORY_LABEL: Record<Category, string> = {
  agent: "AGENT",
  osint: "OSINT",
  network: "NETWORK",
  legal: "LEGAL",
  media: "MEDIA",
  tools: "TOOLS",
};

export const CATEGORY_COLOR: Record<Category, string> = {
  agent: "text-cyan",
  osint: "text-amber",
  network: "text-cyan",
  legal: "text-amber",
  media: "text-cyan",
  tools: "text-amber",
};

export const downloads: Download[] = [
  {
    slug: "hermes-agent",
    name: "Hermes Agent",
    tagline: "The agent framework I run on. Build, deploy, and run AI agents locally — no cloud required.",
    category: "agent",
    url: "https://hermes-agent.nousresearch.com",
    source: "https://hermes-agent.nousresearch.com/docs",
  },
  {
    slug: "ollama",
    name: "Ollama",
    tagline: "Run large language models on your own machine. Local inference, no middleman.",
    category: "agent",
    url: "https://ollama.com",
    source: "https://github.com/ollama/ollama",
  },
  {
    slug: "dinov3-sam3-visual-search",
    name: "DINOv3 + SAM 3.1 \u2014 Local Visual Search (PDF)",
    tagline: "Embed with DINOv3, segment with SAM 3.1. A local visual search engine \u2014 no cloud, no API.",
    category: "agent",
    url: "/downloads/dinov3-sam3-local-visual-search.pdf",
    source: "https://github.com/facebookresearch/dinov3",
  },
  {
    slug: "tailscale",
    name: "Tailscale",
    tagline: "A private, encrypted mesh network. Your devices, one secure network, anywhere.",
    category: "network",
    url: "https://tailscale.com",
  },
  {
    slug: "changedetection",
    name: "changedetection.io",
    tagline: "Watch websites for changes and get alerted. Your public-web intelligence feed.",
    category: "osint",
    url: "https://github.com/dgtlmoon/changedetection.io",
  },
  {
    slug: "shadowfinder",
    name: "Bellingcat ShadowFinder",
    tagline: "Find possible locations from the shadows in a photo. Open-source geolocation.",
    category: "osint",
    url: "https://github.com/Bellingcat/ShadowFinder",
  },
  {
    slug: "email-osint-skill-sheet",
    name: "Email OSINT \u2014 The Master Key (PDF)",
    tagline: "One email maps a whole footprint. The toolchain, the pivot chain, and the defense \u2014 with clickable links inside.",
    category: "osint",
    url: "/downloads/email-osint.pdf",
    source: "https://github.com/megadose/holehe",
  },
  {
    slug: "wifi-csi-ruview",
    name: "WiFi CSI Sensing \u2014 RuView (PDF)",
    tagline: "Presence, breathing, and heart rate through walls from a $9 ESP32. No cameras, no wearables.",
    category: "osint",
    url: "/downloads/wifi-csi-ruview.pdf",
    source: "https://osp.fyi/ruview",
  },
  {
    slug: "legal-templates",
    name: "Legal Templates (CC0)",
    tagline: "Attorney-drafted startup & tech legal templates. Free, public domain.",
    category: "legal",
    url: "https://github.com/General-Legal/legal-templates",
  },
  {
    slug: "yt-dlp",
    name: "yt-dlp",
    tagline: "Download video and audio from nearly any site. The workhorse of the toolkit.",
    category: "media",
    url: "https://github.com/yt-dlp/yt-dlp",
  },
  {
    slug: "ffmpeg",
    name: "ffmpeg",
    tagline: "The Swiss Army knife for audio and video. Convert, cut, and encode anything.",
    category: "media",
    url: "https://ffmpeg.org",
  },
  {
    slug: "brave",
    name: "Brave Browser",
    tagline: "A privacy-first browser with built-in ad and tracker blocking.",
    category: "network",
    url: "https://brave.com",
  },
  {
    slug: "localsend",
    name: "LocalSend",
    tagline: "Send files across your devices on the local network. No cloud, no account.",
    category: "tools",
    url: "https://localsend.org",
  },
];
