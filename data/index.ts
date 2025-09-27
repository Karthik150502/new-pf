import ai_pdf_chatting from "@/app/assets/as-saas-pdf-chatting.png"
import saas_landing from "@/app/assets/ai-saas-landing-page.png"
import doorbin_video_conferencing from "@/app/assets/video-conferencing-doorbin.png"
import cademy_image from "@/app/assets/cademy.png"

import open_ai from "@/app/assets/svgs/open_ai.svg"
import pinecone from "@/app/assets/svgs/pinecone.svg"
import k8_logo from "@/app/assets/svgs/kubernetes_logo.png"


import prateek_deshmukh from "@/app/assets/Prateek_deshmukh.jpg"
import alberto_gaucin from "@/app/assets/alberto_gaucin.jpg"

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize healthy collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Glanse",
    description: "Menu Builer for Restaurants",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Saas PDF Chatting",
    des: "An AI SaaS application that allows users to study any PDF document by simply asking questions about its content.",
    img: ai_pdf_chatting.src,
    iconLists: [
      "/re.svg", 
      "/next.svg", 
      "/tail.svg", 
      "/ts.svg", 
      open_ai.src,
      pinecone.src,
    ],
    link: "https://docai-ai-pdf-saas.vercel.app/",
  },
  {
    id: 2,
    title: "Doorbin - Video Conferencing",
    des: "Simplify your video conferencing experience with Doorbin. Seamlessly connect with colleagues and friends. built with the Stream Video Calling SDK.",
    img: doorbin_video_conferencing.src,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://doorbin-video-conferencing.vercel.app/",
  },
   {
    id: 3,
    title: "Cademy - Online Streaming Platform",
    des: "An end-to-end Online video streaming platform, with real time whiteboard playback enabled, and video streaming application.",
    img: cademy_image.src,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", k8_logo.src],
    link: "https://drive.google.com/file/d/14iLjkXdXcmqSbpA2_hMs4c0ETRvkSFYf/view?usp=sharing",
  },
  {
    id: 4,
    title: "Modern AI SaaS Landing",
    des: "A modern AI Saas landing page, built using some modern frontend tools, like framer-motion, etc.,",
    img: saas_landing.src,
    iconLists: ["/re.svg","/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://docai-landing-page.vercel.app/",
  },
 
];

export const testimonials = [
  {
    quote:
      "Collaborating with Karthik was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Karthik's enthusiasm for every facet of development truly stands out.",
    name: "Prateek Deshmukh",
    title: "Senior Developer - 4CE Cloud Labs",
    img:prateek_deshmukh.src
  },
   {
    quote:
      `Beyond technical skills, he excels in communication, leadership, and adaptability. He have a natural ability to break down
complex concepts into clear, actionable insights for both technical and non-technical stakeholders. He also mentored
junior engineers, fostering an environment of learning and growth within the team.`,
    name: "Alberto Gaucin",
    title: "Co-Fonuder - Shopvana - albertogaucin.ag@gmail.com",
    img:alberto_gaucin.src

  },  
   {
    quote:
      "Collaborating with Karthik was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Karthik's enthusiasm for every facet of development truly stands out.",
    name: "Prateek Deshmukh",
    title: "Senior Developer - 4CE Cloud Labs",
    img:prateek_deshmukh.src
  },
   {
    quote:
      `Beyond technical skills, he excels in communication, leadership, and adaptability. He have a natural ability to break down
complex concepts into clear, actionable insights for both technical and non-technical stakeholders. He also mentored
junior engineers, fostering an environment of learning and growth within the team.`,
    name: "Alberto Gaucin",
    title: "Co-Fonuder - Shopvana - albertogaucin.ag@gmail.com",
    img:alberto_gaucin.src

  },  
   {
    quote:
      "Collaborating with Karthik was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Karthik's enthusiasm for every facet of development truly stands out.",
    name: "Prateek Deshmukh",
    title: "Senior Developer - 4CE Cloud Labs",
    img:prateek_deshmukh.src
  },
   {
    quote:
      `Beyond technical skills, he excels in communication, leadership, and adaptability. He have a natural ability to break down
complex concepts into clear, actionable insights for both technical and non-technical stakeholders. He also mentored
junior engineers, fostering an environment of learning and growth within the team.`,
    name: "Alberto Gaucin",
    title: "Co-Fonuder - Shopvana - albertogaucin.ag@gmail.com",
    img:alberto_gaucin.src

  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Salesforce Developer, Bangalore Nov 2023 – July 2024",
    desc: "Salesforce Developer at 4CE Cloud Labs, Salesforce Administration, Salesforce Mobile Publisher, Experience Cloud, Apex, Salesforce LWC, Sales Cloud, Financial Services Cloud, Omniscripts",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href:"https://github.com/Karthik150502"
  },
  {
    id: 2,
    img: "/twit.svg",
    href:"https://twitter.com/Karthik72050421"
  },
  {
    id: 3,
    img: "/link.svg",
    href:"https://www.linkedin.com/in/karthik-j-68a915195/"
  },
];
