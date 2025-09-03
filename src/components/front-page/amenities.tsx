"use client";

import { motion, type Variants } from "framer-motion";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const card = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp as Variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-pink-400 tracking-wide">
            AMENITIES
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-8 md:grid-cols-3 mb-20"
          variants={stagger as Variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          {[
            {
              src: "/image/amenity-1.jpg",
              title: "Dining Room",
              body: "Our dining room is a bright, welcoming space where residents enjoy nutritious meals and good company in a comfortable, home-like setting.",
              alt: "Elegant dining room with warm wood furniture and natural lighting",
            },
            {
              src: "/image/amenity-2.jpg",
              title: "Wheelchair Accessible",
              body: "Thoughtfully designed with a gentle ramp and clear pathways, so every resident can arrive with ease and dignity.",
              alt: "Accessible entrance with wheelchair ramp and welcoming exterior",
            },
            {
              src: "/image/amenity-3.jpg",
              title: "5 Spacious Rooms",
              body: "Private and semi-private rooms with extra square footage, accessibility touches, and the privacy to make it truly your own.",
              alt: "Comfortable private bedroom with modern furnishings and natural light",
            },
          ].map((c) => (
            <motion.article
              key={c.title}
              className="group"
              variants={card as Variants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 140, damping: 14 }}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-lg mb-6"
                whileHover={{ scale: 1.01, rotate: -0.3 }}
                transition={{ type: "spring", stiffness: 140, damping: 14 }}
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <div className="space-y-3">
                <h3 className="text-xl font-medium text-foreground">
                  {c.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {c.body}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Suites */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            className="space-y-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-light text-pink-400 leading-tight"
              variants={fadeUp as Variants}
            >
              Our Private &amp; Semi-private Rooms
            </motion.h2>

            <motion.p
              className="text-muted-foreground leading-relaxed"
              variants={fadeUp as Variants}
            >
              Designed with both comfort and dignity in mind, our{" "}
              <span className="font-medium text-foreground">
                Private Suites
              </span>{" "}
              offer a spacious, fully furnished room tailored to meet the unique
              needs of each resident. This upgraded living space includes
              thoughtful touches for accessibility and the privacy to make it
              truly your own.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ type: "spring", stiffness: 90, damping: 16 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/image/suites.jpg"
                alt="Peaceful private bedroom with comfortable furnishings and personal touches"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>

            {/* Quote */}
            <motion.div
              className="absolute bottom-4 left-4 right-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            >
              <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-primary/10">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  “Whether relaxing, visiting with loved ones, or enjoying quiet
                  time, residents benefit from a peaceful environment that feels
                  both safe and personal.”
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
