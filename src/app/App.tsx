import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { AboutSection } from "./components/AboutSection";
import { ResumeSection } from "./components/ResumeSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const style = document.createElement("style");
    style.textContent = `
      ::-webkit-scrollbar { width: 0; background: transparent; }
      * { scrollbar-width: none; }
    `;
    document.head.appendChild(style);

    // Lily flower favicon
    const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <defs>
        <radialGradient id="pg" cx="200" cy="200" r="155" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FEF0F5"/>
          <stop offset="18%" stop-color="#F9CCDE"/>
          <stop offset="50%" stop-color="#EF96BF"/>
          <stop offset="100%" stop-color="#D458A0"/>
        </radialGradient>
        <radialGradient id="pgb" cx="200" cy="200" r="155" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FDEAF4"/>
          <stop offset="18%" stop-color="#F5BEDD"/>
          <stop offset="50%" stop-color="#E888B8"/>
          <stop offset="100%" stop-color="#CC4898"/>
        </radialGradient>
      </defs>
      <g transform="translate(200,200)">
        ${[15,135,255].map(a=>`<g transform="rotate(${a})"><path d="M 0,0 C -7,-14, -38,-30, -46,-62 C -54,-94, -30,-124, -8,-136 C -2,-138, 2,-138, 8,-136 C 30,-124, 54,-94, 46,-62 C 38,-30, 7,-14, 0,0 Z" fill="url(#pgb)"/></g>`).join('')}
        ${[75,195,315].map(a=>`<g transform="rotate(${a})"><path d="M 0,0 C -6,-12, -34,-28, -41,-58 C -48,-88, -26,-118, -6,-132 C -2,-134, 2,-134, 6,-132 C 26,-118, 48,-88, 41,-58 C 34,-28, 6,-12, 0,0 Z" fill="url(#pg)"/></g>`).join('')}
        ${[0,60,120,180,240,300].map(a=>`<g transform="rotate(${a})"><line x1="0" y1="-10" x2="0" y2="-54" stroke="#B8D888" stroke-width="1.4" stroke-linecap="round"/><ellipse cx="0" cy="-58" rx="4" ry="6.5" fill="#7A1830"/></g>`).join('')}
        <circle r="16" fill="#F2FDE8"/>
      </g>
    </svg>`;
    const faviconUrl = `data:image/svg+xml,${encodeURIComponent(svgFavicon)}`;
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = faviconUrl;

    return () => document.head.removeChild(style);
  }, []);

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "#FEFEF7", fontFamily: "DM Sans, sans-serif" }}
    >
      <Navigation />
      <main>
        <AboutSection />
        <div className="px-6 md:px-12">
          <div
            className="max-w-6xl mx-auto h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(18,16,14,0.1) 30%, rgba(18,16,14,0.1) 70%, transparent)",
            }}
          />
        </div>
        <ProjectsSection />
        <div className="px-6 md:px-12">
          <div
            className="max-w-6xl mx-auto h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(18,16,14,0.1) 30%, rgba(18,16,14,0.1) 70%, transparent)",
            }}
          />
        </div>
        <ResumeSection />
      </main>
      <Footer />
    </div>
  );
}
