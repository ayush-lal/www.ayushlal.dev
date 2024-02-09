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

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center space-y-4 bg-background">
      {/* <ModeToggle /> */}

      <div className="text-center">
        <h1 className="text-4xl">Hi, I'm Ayush.</h1>
        <h1 className="text-3xl">I am a Full Stack Software Developer.</h1>
      </div>

      <ContactForm />
    </main>
  );
}
