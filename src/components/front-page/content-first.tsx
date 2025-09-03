import { motion, type Variants } from "framer-motion";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const imagePop = {
  hidden: { opacity: 0, scale: 0.94, rotate: -1.2 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

export default function ContentSection() {
  return (
    <section id="our-care" className="py-16 md:py-32 bg-primary/5">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <motion.h2
          className="relative z-10 max-w-xl text-4xl font-light lg:text-5xl text-foreground"
          variants={fadeUp as Variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          The EverBloom experience brings together
          <span className="text-pink-400 font-medium"> compassionate care</span>
          .
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Image */}
          <motion.div
            className="relative mb-6 sm:mb-0"
            variants={imagePop as Variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/10"
              whileHover={{ rotate: -0.8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-10"
              />
              <img
                src="/image/content-first.jpg"
                className="w-full h-full object-cover brightness-105"
                alt="Comfortable, thoughtfully designed living space at EverBloom"
              />
            </motion.div>
          </motion.div>

          {/* Copy */}
          <motion.div
            className="relative space-y-6"
            variants={stagger as Variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <motion.p variants={fadeUp as Variants}>
                EverBloom is evolving to be more than just a care facility. We
                provide a thoughtfully designed living space with a combination
                of private and semi-private rooms, allowing residents to feel
                both comfortable and connected. Our home is newly renovated with
                your loved one’s dignity, safety, and well-being in mind.
              </motion.p>

              <motion.p variants={fadeUp as Variants}>
                But what truly sets us apart is the heart behind our care. We
                believe every individual deserves personalized support that
                respects their independence and honors their life story. From
                daily assistance to warm conversation, we’re here to help
                residents live fully and feel deeply valued.
              </motion.p>

              <motion.p variants={fadeUp as Variants}>
                Whether you're beginning the search for care or ready to make a
                move, we're here to help every step of the way.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
