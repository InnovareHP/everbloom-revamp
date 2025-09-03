import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-32 bg-primary/5">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-light lg:text-5xl text-foreground">
            Trusted by{" "}
            <span className="text-pink-400 font-medium">families</span>, loved
            by <span className="text-pink-400 font-medium">residents</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            EverBloom is more than just a care facility. We create a nurturing
            community where residents thrive and families find peace of mind,
            knowing their loved ones receive compassionate, personalized care.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          {/* Large Featured Testimonial */}
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2 border-primary/10 shadow-lg">
            <CardHeader className="pb-0">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 text-pink-400 fill-pink-400"
                  />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-lg font-medium text-foreground leading-relaxed">
                  "EverBloom is beautifully renovated and welcoming. It feels
                  warm and comfortable—truly a place where residents can feel at
                  home."
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                  <Avatar className="size-14">
                    <AvatarImage
                      src="/image/richard-nollen.jpeg"
                      alt="Rich Nollen"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      RN
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-base font-medium text-foreground not-italic">
                      Rich Nollen
                    </cite>
                    <span className="text-muted-foreground block text-sm">
                      BSN, RN
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Medium Testimonial */}
          <Card className="md:col-span-2 border-primary/10 shadow-lg">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[auto_1fr_auto] gap-6">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-pink-400 fill-pink-400"
                    />
                  ))}
                </div>

                <p className="text-lg font-medium text-foreground leading-relaxed">
                  "The wheelchair accessibility at EverBloom is a big win—it
                  makes everything easier and more comfortable for the
                  resident."
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="/image/cheryl-szcytko.jpg"
                      alt="Cheryl Szczytko"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      CS
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium text-foreground not-italic">
                      Cheryl Szczytko
                    </cite>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 border-primary/10 shadow-lg">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[auto_1fr_auto] gap-6">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-pink-400 fill-pink-400"
                    />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed">
                  "Finding licensed facilities with wheelchair accessibility is
                  sometimes challenging. This home not only offers that feature
                  but also a beautiful space for a loved one needing
                  personalized care."
                </p>

                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                  <Avatar className="size-12">
                    <AvatarImage
                      src=""
                      alt="Eleanor Williams"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      NC
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium text-foreground not-italic">
                      Nadine Carlson
                    </cite>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
