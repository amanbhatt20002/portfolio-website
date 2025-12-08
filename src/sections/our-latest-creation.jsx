import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";

export default function OurLatestCreation() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [className, setClassName] = useState("");

  const sectionData = [
    {
      title: "Prescipto ",
      description:
        "Prescripto is a modern healthcare platform designed to bridge the gap between patients and healthcare providers. Our vision is to create a seamless healthcare experience for every user, making it easier to access the care you need, when you need it.",
      image: "/assets/prescipto.png",
      align: "object-center",
      link: "https://prescipto-vercel-frontend-d86j.vercel.app/",
    },
    {
      title: "Todo Application",
      description:
        "A full-stack todo application built with React frontend and Node.js backend, featuring user authentication and CRUD operations for task management.",
      image:
        "/assets/todo.png",
      align: "object-right",
      link: "https://todo-frontend-vercel-opal.vercel.app/",
    },
    {
      title: "Github linked Portfolio",
      description:
        "Sharing My Projects and Contributions through a Dynamic Portfolio Linked to GitHub.",
      image:
        "/assets/GITHUB.png",
      align: "object-center",
    },
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sectionData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, sectionData.length]);

  return (
    <section className="flex flex-col items-center" id="creations">
      <SectionTitle
        title="My Latest Projects"
        description="A visual collection of our most recent works - each piece crafted with intention, emotion, and style."
      />

      <div
        className="flex items-center gap-4 h-100 w-full max-w-5xl mt-18 mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {sectionData.map((data, index) => (
          <motion.div
            key={data.title}
            className={`relative group flex-grow h-[400px] rounded-xl overflow-hidden ${
              isHovered && className
                ? "hover:w-full w-56"
                : index === activeIndex
                ? "w-full"
                : "w-56"
            } ${className} ${!className ? "pointer-events-none" : ""}`}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            onAnimationComplete={() =>
              setClassName("transition-all duration-500")
            }
            transition={{
              delay: `${index * 0.15}`,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <img
                className={`h-full w-full object-cover cursor-pointer ${data.align}`}
                src={data.image}
                alt={data.title}
              />
            </a>

            <div
              className={`absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 transition-all duration-300 pointer-events-none ${
                isHovered && className
                  ? "opacity-0 group-hover:opacity-100"
                  : index === activeIndex
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <h1 className="text-3xl font-semibold">{data.title}</h1>
              <p className="text-sm mt-2">{data.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
