import BackgroundImage from "../../assets/images/Nav/image.png";
export default function HeroBackground() {
  return (
    <section
      id="projects"
      className="section-padding bg-cover bg-center bg-fixed bg-overlay p-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BackgroundImage})`,
      }}
    ></section>
  );
}
