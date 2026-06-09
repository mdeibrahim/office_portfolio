import StaticNetworkBG from "../../assets/images/Nav/image.png";
import MagicBento from '../common/MagicBento';


function ServiceCard() {
  return (
    // <div
    //   className="
    //   group
    //   relative
    //   overflow-hidden
    //   rounded-3xl
    //   border border-white/10
    //   bg-white/[0.03]
    //   backdrop-blur-xl
    //   p-8
    //   transition-all
    //   duration-300
    //   hover:-translate-y-2
    //   hover:border-violet-500/40
    //   hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]
    // "
    // >
    //   {/* glow */}
    //   <div
    //     className="
    //     absolute
    //     inset-0
    //     opacity-0
    //     group-hover:opacity-100
    //     transition-opacity
    //     duration-500
    //     bg-gradient-to-br
    //     from-violet-500/10
    //     via-transparent
    //     to-cyan-500/10
    //   "
    //   />

    //   <div className="relative z-10">
    //     <div
    //       className="
    //       w-14
    //       h-14
    //       rounded-2xl
    //       flex
    //       items-center
    //       justify-center
    //       bg-gradient-to-br
    //       from-violet-600
    //       to-cyan-500
    //       mb-6
    //     "
    //     >
    //       <Icon size={28} className="text-white" />
    //     </div>

    //     <h3 className="text-white text-xl font-bold mb-4">
    //       {title}
    //     </h3>

    //     <p className="text-white/60 leading-relaxed">
    //       {description}
    //     </p>
    //   </div>
    // </div>

    <MagicBento 
  textAutoHide={true}
  enableStars
  enableSpotlight
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={false}
  clickEffect
  spotlightRadius={700}
  particleCount={50}
  glowColor="132, 0, 255"
  disableAnimations={false}
/>

  );
}

export default function Service() {
  return (
    <section
      id="services"
      className="section-padding bg-cover bg-center bg-fixed bg-overlay px-6 py-32
        bg-no-repeat bg-blend-overlay bg-[#020132]"
      style={{ backgroundImage: `url(${StaticNetworkBG})` }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <span
            className="
            inline-flex
            px-4
            py-2
            rounded-full
            border
            border-violet-500/20
            bg-violet-500/10
            text-violet-300
            text-sm
            font-medium
          "
          >
            Our Services
          </span>

          <h2
            className="
            mt-6
            text-4xl
            md:text-6xl
            font-extrabold
            text-white
          "
          >
            Building Digital Products
            <span
              className="
              block
              bg-gradient-to-r
              from-violet-400
              via-cyan-400
              to-violet-400
              bg-clip-text
              text-transparent
            "
            >
              That Scale
            </span>
          </h2>

          <p className="mt-6 text-white/60 text-lg">
            From idea validation to production deployment,
            we help startups and enterprises build reliable,
            scalable and beautiful software products.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="
          justify-center
          gap-8
          flex
          flex-wrap
        "
        >
          <ServiceCard />
        </div>

      </div>
    </section>
  );
}