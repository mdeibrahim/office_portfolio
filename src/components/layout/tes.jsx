import BackgroundImage from "../../assets/images/Nav/image.png";
export default function HeroBackground() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#020132] bg-cover bg-center bg-scroll bg-no-repeat bg-blend-overlay px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32 md:bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BackgroundImage})`,
      }}
    ></section>
  );
}
