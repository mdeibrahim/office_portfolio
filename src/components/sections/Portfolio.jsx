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
      bg-white/3
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-violet-500/40
      hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]
    "
    >
      {/* Project Preview Area */}
      <div
        className="
        h-64
        flex
        items-center
        justify-center
        bg-linear-to-br
        from-violet-500/10
        via-cyan-500/5
        to-transparent
      "
      >
        <Icon
          size={80}
          className="
            text-violet-400
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-8">

        <span
          className="
          inline-flex
          px-3
          py-1
          rounded-full
          text-xs
          font-medium
          border
          border-violet-500/20
          bg-violet-500/10
          text-violet-300
        "
        >
          {category}
        </span>

        <h3 className="mt-5 text-2xl font-bold text-white">
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
              px-3
              py-1
              rounded-lg
              bg-white/5
              border border-white/10
              text-white/70
              text-sm
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
            text-violet-400
            hover:text-violet-300
            font-medium
          "
          >
            View Project
            <ArrowUpRight size={16} />
          </button>

          <button
            className="
            text-white/50
            hover:text-white
            transition-colors
          "
          >
            Case Study
          </button>
        </div>

      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
        <section
          id="portfolio"
         className="section-padding scroll-mt-24 bg-cover bg-center bg-fixed bg-overlay px-6 py-32 lg:px-8
                 bg-no-repeat bg-blend-overlay bg-[#020132]"
               style={{ backgroundImage: `url(${StaticNetworkBG})` }}
        
        >
          

            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-20">

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
