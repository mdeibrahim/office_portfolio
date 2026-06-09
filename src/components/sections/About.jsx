import {
  CheckCircle2,
  Users,
  Rocket,
  Globe2,
} from "lucide-react";
import CircularGallery from '../common/CircularGallery';
import StaticNetworkBG from "../../assets/images/Nav/image.png";

import LogoLoop from '../common/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';


const highlights = [
  "Experienced Software Engineers",
  "Agile Development Process",
  "Transparent Communication",
  "Long-Term Technical Support",
];

const stats = [
  {
    icon: Rocket,
    value: "100+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
  },
  {
    icon: Globe2,
    value: "10+",
    label: "Countries Served",
  },
];


const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-cover bg-center bg-fixed bg-overlay px-6 py-32
            bg-no-repeat bg-blend-overlay bg-[#020132]"
      style={{ backgroundImage: `url(${StaticNetworkBG})` }}>
      <section
        className="relative px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Content */}
            <div>

              <span
                className="
              inline-flex
              px-4 py-2
              rounded-full
              border border-violet-500/20
              bg-violet-500/10
              text-violet-300
              text-sm
              font-medium
            "
              >
                About Us
              </span>

              <h2
                className="
              mt-6
              text-4xl
              md:text-6xl
              font-extrabold
              text-white
              leading-tight
            "
              >
                We Build
                <span
                  className="
                block
                bg-linear-to-r
                from-violet-400
                via-cyan-400
                to-violet-400
                bg-clip-text
                text-transparent
              "
                >
                  Digital Experiences
                </span>
              </h2>

              <p
                className="
              mt-8
              text-lg
              text-white/60
              leading-relaxed
            "
              >
                We are a passionate software development
                company helping startups, businesses,
                and enterprises transform ideas into
                scalable digital products.
              </p>

              <p
                className="
              mt-6
              text-white/60
              leading-relaxed
            "
              >
                From custom web applications and mobile
                apps to AI-powered solutions and cloud
                infrastructure, we create technology
                that drives growth and innovation.
              </p>

              {/* Highlights */}
              <div className="mt-10 space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      className="text-violet-400"
                      size={20}
                    />

                    <span className="text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Side */}
            <div>

              <div
                className="
              relative
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/3
              backdrop-blur-xl
              p-10
            "
              >
                {/* Glow */}
                <div
                  className="
                absolute
                inset-0
                bg-linear-to-br
                from-violet-500/10
                via-transparent
                to-cyan-500/10
              "
                />

                <div className="relative z-10">

                  <h3
                    className="
                  text-2xl
                  font-bold
                  text-white
                  mb-8
                "
                  >
                    Why Choose Us?
                  </h3>

                  <div className="grid gap-6">

                    {stats.map(
                      ({ icon: Icon, value, label }) => (
                        <div
                          key={label}
                          className="
                        flex
                        items-center
                        gap-5
                        p-5
                        rounded-2xl
                        bg-white/3
                        border border-white/5
                      "
                        >
                          <div
                            className="
                          w-14 h-14
                          rounded-2xl
                          flex items-center
                          justify-center
                          bg-linear-to-br
                          from-violet-600
                          to-cyan-500
                        "
                          >
                            <Icon
                              size={24}
                              className="text-white"
                            />
                          </div>

                          <div>
                            <h4
                              className="
                            text-3xl
                            font-bold
                            text-white
                          "
                            >
                              {value}
                            </h4>

                            <p className="text-white/60">
                              {label}
                            </p>
                          </div>
                        </div>
                      )
                    )}

                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
      <section className="justify-center flex">
        {/* Circular Gallery */}
        <div className="flex justify-center" style={{ height: '600px', width: '80%' }}>
          <CircularGallery
            bend={1}
            textColor="#ffffff"
            borderRadius={0.07}
            scrollEase={0.06}
            // Optionally load a custom font for the labels.
            // Accepts a stylesheet URL (e.g. Google Fonts) or a direct font file.
            fontUrl=""
            font="bold 30px Orbitron"
            scrollSpeed={1.5}
          />
        </div>
      </section>
      <section>
        <div style={{ padding: '115px', height: '200px', position: 'relative', overflow: 'hidden' }}>
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={techLogos}
            speed={70}
            direction="left"
            logoHeight={70}
            gap={60}
            hoverSpeed={30}
            scaleOnHover
            // fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
            useCustomRender={true}
          />

          {/* Vertical loop with deceleration on hover */}
          {/* <LogoLoop
            logos={techLogos}
            useCustomRender={false}
          /> */}
        </div>
      </section>
    </section>
  );
}