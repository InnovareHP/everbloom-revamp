const links = [
  {
    title: "Our Services",
    href: "#services",
  },
  {
    title: "Amenities",
    href: "#amenities",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "Contact",
    href: "#contact",
  },
  {
    title: "Tour",
    href: "#tour",
  },
  {
    title: "About Us",
    href: "#about",
  },
];

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <h3 className="text-2xl font-light">
              <img
                src="/image/everbloom-logo-white.png"
                alt="EverBloom"
                className="w-52 h-52"
              />
            </h3>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-3 mb-12">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-medium mb-4 border-b border-primary-foreground/20 pb-2">
              Reservations Office
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div>144 Brownell St. SE</div>
                  <div>Grand Rapids, MI 49548</div>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(269) 270-2463</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>tenderlivinghome@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-medium mb-4 border-b border-primary-foreground/20 pb-2">
              Office Hours
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <div className="font-medium">Monday to Friday</div>
                <div className="text-primary-foreground/80">
                  9:00 am to 6:00 pm
                </div>
              </div>
              <div>
                <div className="font-medium">Saturday</div>
                <div className="text-primary-foreground/80">
                  9:00 am to 12:00 noon
                </div>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-medium mb-4 border-b border-primary-foreground/20 pb-2">
              Follow Us
            </h4>
            <div className="flex gap-4 justify-center md:justify-start mb-6">
              <a
                href="https://www.facebook.com/profile.php?id=61573541590741"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/tender-living-home-kalamazoo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                </svg>
              </a>
              <a
                href="https://www.google.com/maps/place/Tender+Living+Home/@42.2593492,-85.5579724,559m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88179d4b76420ffd:0x7ac51dba3cae8dd7!8m2!3d42.2593453!4d-85.553359!16s%2Fg%2F11x5n4lfkj?entry=tts&g_ep=EgoyMDI1MDYxNy4wIPu8ASoASAFQAw%3D%3D&skid=9155f1c2-834f-457c-9bf8-4bd6cc185884"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
                className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
            </div>

            <div className="bg-primary-foreground/10 rounded-xl p-4 border border-primary-foreground/20">
              <p className="text-sm text-center">Tag us in your photos!</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-primary-foreground/70 border-t border-primary-foreground/20 pt-6">
          © {new Date().getFullYear()} everbloom. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
