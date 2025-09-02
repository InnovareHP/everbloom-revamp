export default function ContentSection() {
  return (
    <section id="our-care" className="py-16 md:py-32 bg-primary-5">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-light lg:text-5xl text-foreground">
          The EverBloom experience brings together
          <span className="text-primary font-medium"> compassionate care</span>.
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="aspect-[5/5] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-10"></div>

              <img
                src="/image/content-first.png"
                className="w-full h-full object-cover filter brightness-105"
                alt="Beautiful, comfortable living space at EverBloom with warm lighting and cozy furniture"
              />
            </div>
          </div>

          <div className="relative space-y-6">
            <div className="space-y-4">
              <p className="sticky text-muted-foreground text-lg leading-relaxed">
                EverBloom is evolving to be more than just a care facility.{" "}
                <span>
                  We provide a thoughtfully designed living space with a
                  combination of private and semi-private rooms, allowing
                  residents to feel both comfortable and connected. Our home is
                  newly renovated with your loved one’s dignity, safety, and
                  well-being in mind.
                </span>
                <p>
                  But what truly sets us apart is the heart behind our care. We
                  believe every individual deserves personalized support that
                  respects their independence and honors their life story. From
                  daily assistance to warm conversation, we’re here to help
                  residents live fully and feel deeply valued.
                </p>
                <p>
                  Whether you're beginning the search for care or ready to make
                  a move, we're here to help every step of the way
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
