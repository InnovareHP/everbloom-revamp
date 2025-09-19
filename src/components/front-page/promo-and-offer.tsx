"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function PromosAndOffersSection() {
  return (
    <section
      id="promo"
      className="relative py-16 md:py-24 bg-primary/40 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Top Two Image Cards */}
        <motion.div
          className="grid gap-6 md:grid-cols=2 md:grid-cols-2 mb-20"
          variants={stagger as Variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          {/* Living Room */}
          <motion.article
            className="relative overflow-hidden rounded-2xl shadow-lg group"
            variants={card as Variants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 140, damping: 16 }}
          >
            <motion.img
              src="/image/home-1.jpg"
              alt="Warm and welcoming living room with comfortable seating"
              className="w-full h-72 object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100"
              aria-hidden
              transition={{ duration: 0.35 }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-primary-foreground p-6">
              <p className="text-sm leading-relaxed italic">
                Our living room is a warm and welcoming space for relaxing,
                socializing, and feeling at home—together.
              </p>
            </div>
          </motion.article>

          {/* Dining Area */}
          <motion.article
            className="relative overflow-hidden rounded-2xl shadow-lg group"
            variants={card as Variants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 140, damping: 16 }}
          >
            <motion.img
              src="/image/home-2.jpg"
              alt="Bright dining area with natural light and wooden table"
              className="w-full h-72 object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100"
              aria-hidden
              transition={{ duration: 0.35 }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-primary-foreground p-6">
              <p className="text-sm leading-relaxed italic">
                Our bright, welcoming dining area is the heart of the home—where
                residents gather to enjoy freshly prepared meals, good
                conversation, and a sense of community.
              </p>
            </div>
          </motion.article>
        </motion.div>

        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp as Variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-primary-foreground tracking-wide">
          SERVICES OFFERED
          </h2>
        </motion.div>

        {/* Three Service Cards */}
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={stagger as Variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            {
              src: "/image/medication-management.jpg",
              title: "Medication Management",
              body: "Medication management can be tricky. Our caregivers are here to help keep routines on track.",
              alt: "Professional caregiver assisting with medication management",
            },
            {
              src: "/image/promo-2.webp",
              title: "Personalized Care Plans",
              body: "Custom-tailored care designed around each resident's unique needs and preferences.",
              alt: "Happy seniors enjoying outdoor activities together",
            },
            {
              src: "/image/promo-3.webp",
              title: "24/7 On-Site Caregivers",
              body: "Around-the-clock staff availability for peace of mind and immediate support.",
              alt: "Compassionate caregiver spending quality time with resident",
            },
          ].map((c) => (
            <motion.article
              key={c.title}
              className="bg-primary-foreground rounded-2xl overflow-hidden shadow-lg"
              variants={card as Variants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 140, damping: 14 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-medium text-foreground">
                  {c.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {c.body}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
