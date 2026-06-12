import {
  ArrowUpRight,
  Monitor,
  Smartphone,
  ShoppingCart,
  Brain,
} from "lucide-react";
import StaticNetworkBG from "../../assets/images/Nav/image.png";


const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    description:
      "A scalable multi-vendor e-commerce solution with payment gateway integration.",
    tech: ["React", "Django", "PostgreSQL"],
    icon: ShoppingCart,
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile App",
    description:
      "Appointment booking, telemedicine, and patient management platform.",
    tech: ["Flutter", "Firebase", "Node.js"],
    icon: Smartphone,
  },
  {
    title: "AI Customer Assistant",
    category: "Artificial Intelligence",
    description:
      "AI-powered chatbot for customer support and lead generation.",
    tech: ["OpenAI", "Python", "FastAPI"],
    icon: Brain,
  },
  {
    title: "Corporate ERP System",
    category: "Enterprise Software",
    description:
      "Complete ERP ecosystem for inventory, HR, finance and operations.",
    tech: ["React", "Django", "Redis"],
    icon: Monitor,
  },
];

function ProjectCard({
  title,
  category,
  description,
  tech,
  icon: Icon,
}) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      cursor-pointer
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-cyan-400/40
      hover:shadow-[0_0_70px_rgba(34,211,238,0.16)]
    "
    >
      <div
        className="
        pointer-events-none
        absolute
        inset-0
        bg-linear-to-br
        from-violet-500/15
        via-cyan-500/10
        to-fuchsia-500/10
        opacity-70
        transition-opacity
        duration-500
        group-hover:opacity-100
      "
      />

      <div
        className="
        pointer-events-none
        absolute
        -inset-px
        rounded-3xl
        bg-linear-to-r
        from-transparent
        via-white/10
        to-transparent
        opacity-0
        blur-2xl
        transition-opacity
        duration-700
        group-hover:opacity-100
      "
      />

      {/* Project Preview Area */}
      <div
        className="
        relative
        h-64
        flex
        items-center
        justify-center
        overflow-hidden
        bg-linear-to-br
        from-violet-500/15
        via-cyan-500/10
        to-fuchsia-500/10
      "
      >
        <div
          className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.16),transparent_35%)]
        "
        />

        <div
          className="
          absolute
          h-56
          w-56
          rounded-full
          bg-cyan-400/20
          blur-3xl
          transition-transform
          duration-700
          group-hover:scale-125
        "
        />

        <div
          className="
          absolute
          inset-x-10
          bottom-10
          h-px
          bg-linear-to-r
          from-transparent
          via-white/35
          to-transparent
          opacity-70
          transition-all
          duration-700
          group-hover:via-cyan-300/70
        "
        />

        <Icon
          size={80}
          className="
            relative
            z-10
            text-cyan-300
            drop-shadow-[0_0_18px_rgba(34,211,238,0.45)]
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:-rotate-6
          "
        />
      </div>

      <div className="relative z-10 p-8">

        <span
          className="
          inline-flex
          px-3
          py-1
          rounded-full
          text-xs
          font-medium
          border
          border-cyan-400/20
          bg-cyan-400/10
          text-cyan-200
          transition-all
          duration-300
          group-hover:border-cyan-300/40
          group-hover:bg-cyan-300/15
        "
        >
          {category}
        </span>

        <h3 className="mt-5 text-2xl font-bold text-white transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </h3>

        <p className="mt-4 text-white/60 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {tech.map((item) => (
            <span
              key={item}
              className="
              transition-all
              duration-300
              px-3
              py-1
              rounded-lg
              bg-white/[0.06]
              border border-white/10
              text-white/75
              text-sm
              group-hover:border-white/20
              group-hover:bg-white/10
              group-hover:translate-y-[-1px]
            "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-8">
          <button
            className="
            inline-flex
            items-center
            gap-2
            text-cyan-300
            hover:text-white
            font-medium
            transition-all
            duration-300
            group-hover:translate-x-1
          "
          >
            View Project
            <ArrowUpRight size={16} />
          </button>

          <button
            className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            text-white/55
            hover:text-white
            hover:border-white/20
            hover:bg-white/10
            transition-all
            duration-300
          "
          >
            Case Study
          </button>
        </div>

        <div
          className="
          pointer-events-none
          absolute
          inset-x-8
          bottom-4
          h-1
          rounded-full
          bg-linear-to-r
          from-violet-500/0
          via-cyan-400/0
          to-fuchsia-500/0
          transition-all
          duration-500
          group-hover:from-violet-500/70
          group-hover:via-cyan-400/80
          group-hover:to-fuchsia-500/70
        "
        />

      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
        <section
          id="portfolio"
         className="relative scroll-mt-24 overflow-hidden bg-[#020132] bg-cover bg-center bg-scroll bg-no-repeat bg-blend-overlay px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32 md:bg-fixed"
               style={{ backgroundImage: `url(${StaticNetworkBG})` }}
        
        >
          

            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">

              <span
                className="
            inline-flex
            px-4
            py-2
            rounded-full
            border border-cyan-500/20
            bg-cyan-500/10
            text-cyan-300
            text-sm
            font-medium
          "
              >
                Our Portfolio
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
                Projects That
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
                  Deliver Results
                </span>
              </h2>

              <p className="mt-6 text-lg text-white/60">
                We build software products that solve real business
                problems, improve efficiency, and accelerate growth.
              </p>

            </div>

            {/* Portfolio Grid */}
            <div
              className="
              grid
              md:grid-cols-2
              gap-8
            "
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                />
              ))}
            </div>

          
        </section>
  );
}
