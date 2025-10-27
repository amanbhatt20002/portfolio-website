import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

export default function AboutOurApps() {
  const sectionData = [
    {
      title: "🎓 Education",
      description:
        "Bachelor of Computer Applications (2022–2025) — Hemvati Nandan Bahuguna Garhwal University (A Central University). Focused on software development and web technologies.",
      className:
        "py-10 border-b border-slate-700 md:py-0 md:border-r md:border-b-0 md:px-10",
    },

    {
      title: "Skills / Tech Stack",
      description:
        "Programming Language: Python | JS            Front-End :>> Js | React | HTML | Tailwind | CSS | React-Dev-Tool | Developed Reusable Components | Built Component Logic | Context API | Component Life Cycle | Redux | RTK | Backend:>> Node | Express | MongoDB | REST API | Authentication | Authrization | API Integration | Mongoose | Multer | Cloudinary | Jwt | Passport | OAuth  | Build Tool : vite  Version Control Tool : Git | github | VS Code | Vercel | Postman |",

      className:
        "py-10 border-b border-slate-700 md:py-0 lg:border-r md:border-b-0 md:px-10",
    },
    {
      title: "Certification",
      description:
        "Python Fullstack : js | React | Tailwind | Css | HTML | Axios | Fetch | Python | Django | ORM | SQL | MySql | REST API |",
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png",
      className:
        "py-10 border-b border-slate-700 md:py-0 md:border-b-0 md:px-10",
    },
  ];
  return (
    <section className="flex flex-col items-center" id="about">
      <SectionTitle
        title="About Me"
        description="A visual collection of our most recent works - each piece crafted with intention, emotion, and style."
      />
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-0 mt-18">
        {sectionData.map((data, index) => (
          <motion.div
            key={data.title}
            className={data.className}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: `${index * 0.15}`,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            {/* <div className="size-10 p-2 bg-indigo-600/20 border border-indigo-600/30 rounded">
                            <img src={data.image} alt="" />
                        </div> */}
            <div className="mt-5 space-y-2">
              <h3 className="text-2xl font-medium text-slate-200">
                {data.title}
              </h3>

              <p className="text-sm text-slate-400">{data.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
