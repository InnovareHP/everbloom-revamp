export default function PromosAndOffersSection() {
  return (
    <section
      id="promo"
      className="relative py-16 md:py-24 bg-primary/40 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Top Two Image Cards - Full Width */}
        <div className="grid gap-6 md:grid-cols-2 mb-20">
          {/* Living Room Card */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/image/home-1.jpg"
              alt="Warm and welcoming living room with comfortable seating"
              className="w-full h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-primary-foreground p-6">
              <p className="text-sm leading-relaxed italic">
                Our living room is a warm and welcoming space for relaxing,
                socializing, and feeling at home—together.
              </p>
            </div>
          </div>

          {/* Dining Area Card */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/image/home-2.jpg"
              alt="Bright dining area with natural light and wooden table"
              className="w-full h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-primary-foreground p-6">
              <p className="text-sm leading-relaxed italic">
                Our bright, welcoming dining area is the heart of the home—where
                residents gather to enjoy freshly prepared meals, good
                conversation, and a sense of community around the table.
              </p>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-primary-foreground tracking-wide">
            PROMOS AND OFFERS
          </h2>
        </div>

        {/* Three Service Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Medication Management */}
          <div className="bg-primary-foreground rounded-2xl overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src="/image/medication-management.jpg"
                alt="Professional caregiver assisting with medication management"
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-medium text-foreground">
                Medication Management
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Medication management can be tricky. Our caregivers are here to
                help keep routines on track.
              </p>
            </div>
          </div>

          {/* Personalized Care Plans */}
          <div className="bg-primary-foreground rounded-2xl overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src="/image/promo-2.webp"
                alt="Happy seniors enjoying outdoor activities together"
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-medium text-foreground">
                Personalized Care Plans
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Custom-tailored care designed around each resident's unique
                needs and preferences.
              </p>
            </div>
          </div>

          {/* 24/7 On-Site Caregivers */}
          <div className="bg-primary-foreground rounded-2xl overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src="/image/promo-3.webp"
                alt="Compassionate caregiver spending quality time with resident"
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-medium text-foreground">
                24/7 On-Site Caregivers
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Around-the-clock staff availability for peace of mind and
                immediate support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
