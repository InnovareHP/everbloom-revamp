"use client";

import { Button } from "@/components/ui/button";
import { Ripple } from "@/components/ui/ripple";
import { motion, type Variants } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

const popImage = {
  hidden: { opacity: 0, scale: 0.92, rotate: -2 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 90, damping: 14, delay: 0.15 },
  },
};

export default function HeroSectionFrontPage() {
  return (
    <div
      id="hero-section"
      className="overflow-x-hidden bg-gradient-to-br from-background via-primary/5 to-primary/10 min-h-screen relative"
    >
      <Ripple className="sm:block hidden" />

      {/* Floating accents (looping) */}
      <motion.div
        className="absolute top-20 left-16 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.35, scale: [1, 1.06, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="size-12 bg-primary/30 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-12 z-10"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 0.35, y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="size-6 bg-primary/40 rounded-full" />
      </motion.div>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid min-h-[90vh] items-center gap-10 md:grid-cols-2 py-16 md:py-24">
            {/* TEXT */}
            <motion.div
              className="text-center md:text-left"
              variants={container as Variants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h1
                className="max-w-3xl text-balance text-4xl font-light md:text-5xl xl:text-6xl text-foreground leading-tight"
                variants={item as Variants}
              >
                <span className="block mb-2">EVERBLOOM</span>
                <span className="block mb-2 text-primary font-medium">OF</span>
                <span className="block">GRAND RAPIDS</span>
              </motion.h1>

              <motion.p
                className="mt-6 max-w-3xl text-pretty text-lg text-muted-foreground leading-relaxed"
                variants={item as Variants}
              >
                Located in the quiet, accessible southeast portion of the Grand
                Rapids metro area, EverBloom is a state-licensed,
                wheelchair-accessible Adult Foster Care residence offering a
                safe and supportive environment for adults who need extra care.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start"
                variants={item as Variants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="px-8 py-3 text-base bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    <a href="#link">
                      <span className="text-nowrap">Tour Our Home</span>
                    </a>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="px-8 py-3 text-base border-2 border-primary/30 text-primary hover:bg-primary/5 rounded-full shadow-sm hover:shadow-md transition-all"
                  >
                    <a href="#contact">
                      <span className="text-nowrap">Contact Us</span>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* IMAGE + DECORATIVE CIRCLES */}
            <motion.div
              className="relative flex items-center justify-center"
              variants={popImage as Variants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Back orbs */}
              <motion.div
                className="absolute h-[28rem] w-[28rem] bg-primary/15 rounded-full -z-10"
                animate={{ scale: [1, 1.04, 1], opacity: [0.18, 0.28, 0.18] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute h-80 w-80 bg-primary/10 rounded-full -z-10"
                animate={{ scale: [1, 1.08, 1], opacity: [0.14, 0.24, 0.14] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              />

              {/* Image */}
              <motion.div
                className="relative h-96 w-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20 will-change-transform"
                whileHover={{ rotate: -0.6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
              >
                <img
                  src="https://www.agegracefullyamerica.com/wp-content/uploads/2019/05/bigstock-Nurse-taking-care-of-old-woman-262131685.jpg"
                  alt="Loving caregiver embracing senior resident at EverBloom"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/5" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
