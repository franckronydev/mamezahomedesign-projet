import Image from "next/image";

interface TextImageSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  button?: string;
  primaryButton?: string;
  secondaryButton?: string;
}

export default function TextImageSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  button,
  primaryButton,
  secondaryButton,
}: TextImageSectionProps) {
  return (
    <section className="bg-[#F7F4EC]">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
        <div className="flex min-h-[500px] flex-col justify-center px-6 py-16 md:px-12 lg:px-20">
          <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#A77A43]">
            {eyebrow}
          </p>

          <h2 className="max-w-xl font-serif text-4xl leading-tight text-[#1F2A24] md:text-5xl">
            {title}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#5C625D]">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {(primaryButton || button) && (
              <button className="bg-[#1F2A24] px-7 py-4 text-sm font-medium uppercase tracking-[0.08em] text-white transition hover:bg-[#314238]">
                {primaryButton || button}
              </button>
            )}

            {secondaryButton && (
              <button className="border border-[#1F2A24] px-7 py-4 text-sm font-medium uppercase tracking-[0.08em] text-[#1F2A24] transition hover:bg-[#1F2A24] hover:text-white">
                {secondaryButton}
              </button>
            )}
          </div>
        </div>

        <div className="relative min-h-[420px] md:min-h-[600px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}