import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import StaticNetworkBG from "../../assets/images/Nav/image.png";


export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-cover bg-center bg-fixed bg-overlay px-6 py-32
                  bg-no-repeat bg-blend-overlay bg-[#020132]"
                style={{ backgroundImage: `url(${StaticNetworkBG})` }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <span
            className="
            inline-flex
            px-4 py-2
            rounded-full
            border border-cyan-500/20
            bg-cyan-500/10
            text-cyan-300
            text-sm
            font-medium
          "
          >
            Contact Us
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
            Let's Build Something
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
              Amazing Together
            </span>
          </h2>

          <p className="mt-6 text-lg text-white/60">
            Tell us about your project and we'll help
            transform your ideas into powerful digital
            solutions.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div
            className="
            rounded-3xl
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
          "
          >

            <h3 className="text-3xl font-bold text-white mb-6">
              Get In Touch
            </h3>

            <p className="text-white/60 leading-relaxed mb-10">
              Whether you're a startup looking to launch
              your first product or an enterprise seeking
              digital transformation, we're ready to help.
            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div
                  className="
                  w-12 h-12
                  rounded-xl
                  bg-gradient-to-br
                  from-violet-600
                  to-cyan-500
                  flex items-center justify-center
                "
                >
                  <Mail size={20} className="text-white" />
                </div>

                <div>
                  <p className="text-white font-medium">
                    Email
                  </p>
                  <p className="text-white/60">
                    hello@yourcompany.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                  w-12 h-12
                  rounded-xl
                  bg-gradient-to-br
                  from-violet-600
                  to-cyan-500
                  flex items-center justify-center
                "
                >
                  <Phone size={20} className="text-white" />
                </div>

                <div>
                  <p className="text-white font-medium">
                    Phone
                  </p>
                  <p className="text-white/60">
                    +880 1234 567890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                  w-12 h-12
                  rounded-xl
                  bg-gradient-to-br
                  from-violet-600
                  to-cyan-500
                  flex items-center justify-center
                "
                >
                  <MapPin size={20} className="text-white" />
                </div>

                <div>
                  <p className="text-white font-medium">
                    Location
                  </p>
                  <p className="text-white/60">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side Form */}
          <div
            className="
            rounded-3xl
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
          "
          >

            <form className="space-y-5">

              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                    w-full
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    px-4 py-3
                    text-white
                    placeholder:text-white/40
                    focus:outline-none
                    focus:border-violet-500
                  "
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="
                    w-full
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    px-4 py-3
                    text-white
                    placeholder:text-white/40
                    focus:outline-none
                    focus:border-violet-500
                  "
                />
              </div>

              <div>
                <select
                  className="
                    w-full
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    px-4 py-3
                    text-white
                    focus:outline-none
                    focus:border-violet-500
                  "
                >
                  <option className="bg-slate-900">
                    Web Development
                  </option>

                  <option className="bg-slate-900">
                    Mobile App Development
                  </option>

                  <option className="bg-slate-900">
                    UI / UX Design
                  </option>

                  <option className="bg-slate-900">
                    AI Solutions
                  </option>
                </select>
              </div>

              <div>
                <textarea
                  rows="6"
                  placeholder="Tell us about your project..."
                  className="
                    w-full
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    px-4 py-3
                    text-white
                    placeholder:text-white/40
                    focus:outline-none
                    focus:border-violet-500
                    resize-none
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-cyan-500
                  text-white
                  font-semibold
                  transition
                  hover:scale-[1.02]
                "
              >
                Send Message
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}