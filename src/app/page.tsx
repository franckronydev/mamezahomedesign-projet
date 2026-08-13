import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import HomeSlideshow from "@/components/HomeSlideshow/HomeSlideshow";
import TextImageSection from "@/components/HomeSections/TextImageSection";
import ImageTextSection from "@/components/HomeSections/ImageTextSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Header />

      <main>
        {/* Full-width slideshow directly under the header */}
        <HomeSlideshow />

        {/* Section 01 — Text left / Image right */}
        <TextImageSection
          eyebrow="Professional home staging"
          title="Quality styling that sets your house apart from the competition"
          description="Thoughtfully styled interiors designed to create a strong first impression and help your property stand out."
          primaryButton="Schedule Your Staging"
          secondaryButton="View portfolio"
          image="/images/home/home-section-01.jpg"
          imageAlt="Professionally staged interior"
        />

        {/* Section 02 — Image left / Text right */}
        <ImageTextSection
          eyebrow="Our approach"
          title="Every space deserves to be presented at its best"
          description="We create inviting interiors that help potential buyers connect with a property from the moment they walk through the door."
          button="Learn more"
          image="/images/home/home-section-02.jpg"
          imageAlt="Styled home interior"
        />

        {/* Section 03 — Text left / Image right */}
        <TextImageSection
          eyebrow="Designed to impress"
          title="Beautiful spaces create memorable first impressions"
          description="From furniture selection to styling details, every element is carefully considered to create a cohesive and welcoming atmosphere."
          button="View our work"
          image="/images/home/home-section-03.jpg"
          imageAlt="Elegant staged living room"
        />

        {/* Section 04 — Image left / Text right */}
        <ImageTextSection
          eyebrow="Ready to sell"
          title="Let's make your property stand out"
          description="Professional staging can transform the way buyers experience your home and create a stronger visual presentation."
          button="Schedule Your Staging"
          image="/images/home/home-section-04.jpg"
          imageAlt="Beautifully staged property"
        />

        {/* Section 05 — Text left / Image right */}
        <TextImageSection
          eyebrow="Mameza Home Staging"
          title="Thoughtful design. Strategic presentation."
          description="Our goal is simple: create spaces that feel beautiful, intentional and ready for the next chapter."
          button="Discover Mameza"
          image="/images/home/home-section-05.jpg"
          imageAlt="Mameza staged interior"
        />

        {/* Section 06 — Image left / Text right */}
        <ImageTextSection
          eyebrow="Portfolio"
          title="Explore our latest transformations"
          description="Discover a selection of interiors transformed through thoughtful styling, furniture and carefully selected details."
          button="View portfolio"
          image="/images/home/home-section-06.jpg"
          imageAlt="Mameza Home Staging project"
        />

        {/* Trusted by */}
        <section className="overflow-hidden bg-[#1F2A24] py-20 text-white">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#D4A373]">
                Trusted by
              </p>

              <h2 className="font-serif text-3xl md:text-4xl">
                Trusted by professionals and homeowners
              </h2>
            </div>

            <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-5">
              {[
                "trusted-logo-01.svg",
                "trusted-logo-02.svg",
                "trusted-logo-03.svg",
                "trusted-logo-04.svg",
                "trusted-logo-05.svg",
              ].map((logo) => (
                <div
                  key={logo}
                  className="flex h-20 items-center justify-center"
                >
                  <img
                    src={`/images/home/${logo}`}
                    alt="Trusted partner"
                    className="max-h-12 max-w-[150px] object-contain opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}