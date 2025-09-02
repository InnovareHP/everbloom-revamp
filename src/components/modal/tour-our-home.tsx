"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";

export default function TourOurHome() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState<null | boolean>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  const endpoint = `https://formspree.io/f/xldnwybv`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    data.append(
      "page",
      typeof window !== "undefined" ? window.location.href : ""
    );

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setSuccess(true);
        formRef.current?.reset();
      } else {
        setSuccess(false);
      }
    } catch {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="rounded-full">
          Schedule a Tour
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Schedule a Tour</DialogTitle>
          <DialogDescription>
            Tell us a little about you and when you’d like to visit. We’ll
            follow up to confirm.
          </DialogDescription>
        </DialogHeader>

        {/* Success / error toast area inside modal */}
        {success === true && (
          <div
            className="rounded-md border border-emerald-300 bg-emerald-50 px-3 py-2 text-emerald-700 text-sm"
            role="status"
          >
            Thanks! Your request was sent. We’ll get back to you shortly.
          </div>
        )}
        {success === false && (
          <div
            className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-red-700 text-sm"
            role="alert"
          >
            Sorry—something went wrong. Please try again or call us.
          </div>
        )}

        <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
          {/* Honeypot (spam protection) */}
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid gap-3">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Mobile Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 555-5555"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us anything helpful…"
                rows={4}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-2">
                <Label htmlFor="tour_date">Date</Label>
                <Input id="tour_date" name="tour_date" type="date" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tour_time">Time</Label>
                <Input id="tour_time" name="tour_time" type="time" />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-2">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting…" : "Submit"}
            </Button>
          </div>

          {/* Optional: set a custom subject in Formspree emails */}
          <input
            type="hidden"
            name="_subject"
            value="Tour Request from EverBloom Website"
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
