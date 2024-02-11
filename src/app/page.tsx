"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import { roboto } from "@/lib/fonts";

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center background">
      <div className="container max-w-3xl">
        <div className="pb-5 text-center">
          <h1
            className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${roboto.className}`}
          >
            Hi, I'm Ayush.
          </h1>
          <h2
            className={`scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 md:text-3xl ${roboto.className}`}
          >
            I'm a Full Stack Software Developer.
          </h2>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
