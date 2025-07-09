'use client';
import { Mail, Github, Send } from "lucide-react";
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
            <div className="bg-[#112240] border border-[#64ffda] rounded-xl p-4">
              <a href="https://play.google.com/store/apps/details?id=com.pixlr.faceflip" target="_blank">
                <img src="https://play-lh.googleusercontent.com/VsXErzKY..." alt="FaceFlip AI" className="w-full h-48 object-cover rounded-lg" />
              </a>
              <h3 className="text-xl font-semibold mt-2">FaceFlip AI</h3>
              <p className="text-sm mt-1">Face swapping app using AI with social login, video player, analytics and more.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold mb-4 text-[#64ffda]">Contact</h2>
          <p>Feel free to reach out to me by email or Telegram. I'm open to freelance or remote work opportunities.</p>
          <button className="mt-4 bg-[#64ffda] text-[#0a192f] px-4 py-2 rounded hover:bg-[#52ddc9] transition">Send me a message</button>
        </section>
      </section>
    </main>
  );
}