import StaticNetworkBG from "../../assets/images/Nav/image.png";
export default function HeroBackground() {
  return (
    <section
      className="section-padding bg-cover bg-center bg-fixed bg-overlay px-6 py-32 bg-no-repeat bg-blend-overlay bg-[#020132]" style={{ backgroundImage: `url(${StaticNetworkBG})` }}
    >
    </section>
  );
}
