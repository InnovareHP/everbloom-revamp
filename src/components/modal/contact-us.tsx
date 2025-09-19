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

export default function ContactUsDialog() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState<null | boolean>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  const endpoint = `https://formspree.io/f/meolykag`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(null);

    const data = new FormData(e.currentTarget);
    data.append(
      "page",
      typeof window !== "undefined" ? window.location.href : ""
    );
    data.append("_subject", "Contact Request from EverBloom Website");
    data.append("form_name", "Contact Us");

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
        <Button size="lg" variant={"secondary"} className="rounded-full">
          Contact Us
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Send us a note and we’ll get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        {/* Status message */}
        {success === true && (
          <div className="rounded-md border border-emerald-300 bg-emerald-50 px-3 py-2 text-emerald-700 text-sm">
            Thanks! Your message was sent.
          </div>
        )}
        {success === false && (
          <div className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-red-700 text-sm">
            Sorry—something went wrong. Please try again.
          </div>
        )}

        <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
          {/* honeypot */}
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
                placeholder="How can we help?"
                rows={4}
              />
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
        </form>
      </DialogContent>
    </Dialog>
  );
}
