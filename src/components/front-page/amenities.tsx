export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-primary tracking-wide">
            AMENITIES
          </h2>
        </div>

        {/* Three Card Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-20">
          {/* Dining Room */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6">
              <img
                src="/image/amenity-1.jpg"
                alt="Elegant dining room with warm wood furniture and natural lighting"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-foreground">
                Dining Room
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our dining room is a bright, welcoming space where residents
                enjoy nutritious meals and good company in a comfortable,
                home-like setting.
              </p>
            </div>
          </div>

          {/* Wheelchair Accessible */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6">
              <img
                src="/image/amenity-2.jpg"
                alt="Accessible entrance with wheelchair ramp and welcoming exterior"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-foreground">
                Wheelchair Accessible
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A relaxed and inviting entrance with a wheelchair-accessible
                ramp, thoughtfully designed so every resident can arrive with
                ease and dignity—ready to unwind, connect, or enjoy quiet
                moments in comfort and style.
              </p>
            </div>
          </div>

          {/* Spacious Rooms */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6">
              <img
                src="/image/amenity-3.jpg"
                alt="Comfortable private bedroom with modern furnishings and natural light"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-foreground">
                5 Spacious Rooms
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Designed with both comfort and dignity in mind, our private and
                semi-private rooms offer a spacious, fully furnished room
                tailored to meet the unique needs of each resident. This
                upgraded living space includes extra square footage, thoughtful
                touches for accessibility, and the privacy to make it truly your
                own.
              </p>
            </div>
          </div>
        </div>

        {/* Lower Section - Private & Semi-Private Rooms */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-primary leading-tight">
              Our Private & Semi-private Rooms
            </h2>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Designed with both comfort and dignity in mind, our{" "}
                <span className="font-medium text-foreground">
                  Private Suites
                </span>{" "}
                offers a spacious, fully furnished room tailored to meet the
                unique needs of each resident. This upgraded living space
                includes extra square footage, thoughtful touches for
                accessibility, and the privacy to make it truly your own.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/image/suites.jpg"
                alt="Peaceful private bedroom with comfortable furnishings and personal touches"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>

            {/* Quote Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-primary/10">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "Whether relaxing, visiting with loved ones, or enjoying quiet
                  time, residents benefit from a peaceful environment that feels
                  both safe and personal."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
