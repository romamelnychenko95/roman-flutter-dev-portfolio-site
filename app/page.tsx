'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#0a192f] text-[#ccd6f6]">
      <aside className="fixed top-0 left-0 h-full w-64 bg-[#112240] p-6 flex flex-col justify-between">
        <div>
          <Image
            src="/placeholder-profile.png"
            alt="Profile photo"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h1 className="text-2xl font-bold text-center mt-4">Roman Melnychenko</h1>
          <p className="text-center text-sm text-[#64ffda]">Flutter Developer</p>
          <nav className="mt-8 space-y-4">
            <a href="#about" className="block hover:text-[#64ffda]">About</a>
            <a href="#projects" className="block hover:text-[#64ffda]">Projects</a>
            <a href="#contact" className="block hover:text-[#64ffda]">Contact</a>
          </nav>
        </div>
        <div className="flex justify-around">
          <a href="mailto:romamelnychenko95@gmail.com" className="hover:text-[#64ffda]"><Mail /></a>
          <a href="https://github.com/" className="hover:text-[#64ffda]"><Github /></a>
          <a href="https://t.me/flutter_dev_rm" className="hover:text-[#64ffda]"><Send /></a>
        </div>
      </aside>

      <section className="ml-64 p-10 w-full">
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold mb-4 text-[#64ffda]">About Me</h2>
          <p>
            I'm a passionate Flutter developer with over 3 years of experience, following 6+ years in native iOS (Swift/ObjC). I've worked on 20+ apps, from MVPs to full-featured applications, with a focus on clean architecture, REST API integration, animations, geolocation, and performance optimization.
          </p>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-4 text-[#64ffda]">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Project
              title="FaceFlip AI"
              image="https://play-lh.googleusercontent.com/VsXErzKY..."
              link="https://play.google.com/store/apps/details?id=com.pixlr.faceflip"
              description="Face swapping app using AI with social login, video player, analytics and more."
            />
            <Project
              title="AI Image Generator"
              image="https://play-lh.googleusercontent.com/O2UTSbb..."
              link="https://play.google.com/store/apps/details?id=com.pixlr.aiart"
              description="AI-based art generation app using Flutter, Firebase, and social login."
            />
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold mb-4 text-[#64ffda]">Contact</h2>
          <p>Feel free to reach out to me by email or Telegram. I'm open to freelance or remote work opportunities.</p>
          <Button className="mt-4">Send me a message</Button>
        </section>
      </section>
    </main>
  );
}

function Project({ title, image, description, link }: any) {
  return (
    <Card className="bg-[#112240] text-[#ccd6f6] border border-[#64ffda]">
      <CardContent className="p-4">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
        </a>
        <h3 className="text-xl font-semibold mt-2">{title}</h3>
        <p className="text-sm mt-1">{description}</p>
      </CardContent>
    </Card>
  );
}