/**
 * Case Studies Data
 * Edit this file to add, remove, or modify portfolio projects
 */

import { CaseStudy } from "@/components/portfolio/CaseStudyCard";

const userProjectImage = "/portfolio-featured.png";

export const caseStudies: CaseStudy[] = [
  {
    id: "featured-1",
    title: "Machin3 M3trics: The Emerald System",
    description: "A sophisticated modular interface exploring the depths of emerald green and copper accents. This project focuses on reactive layout switching and high-performance UI components.",
    category: "coding",
    image: userProjectImage,
    tags: ["React", "Motion", "Emerald UI", "Modular Design"],
    date: "Jan 2026",
    link: "#",
    featured: true,
    displayMode: "detailed", // Full info for featured project
  },
  {
    id: "1",
    title: "Interactive Data Visualization Platform",
    description: "A comprehensive data visualization platform built with React and D3.js, featuring real-time updates and interactive charts for complex datasets.",
    category: "coding",
    image: "https://images.unsplash.com/photo-1765445666054-b039548214d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvZGluZyUyMGRpZ2l0YWwlMjBhcnR8ZW58MXx8fHwxNzY4Njc0NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "TypeScript", "D3.js", "WebGL"],
    date: "Dec 2025",
    link: "#",
    displayMode: "detailed", // Coding projects get full details
  },
  {
    id: "2",
    title: "Abstract Geometric Art Series",
    description: "A collection of procedurally generated geometric artworks exploring the intersection of mathematics and visual aesthetics.",
    category: "compositions",
    image: "https://images.unsplash.com/photo-1668877038574-77a83e176ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGRlc2lnbnxlbnwxfHx8fDE3Njg2NDA5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Generative Art", "Processing", "Digital Art"],
    date: "Nov 2025",
    link: "#",
    displayMode: "image-only", // Compositions focus on visuals
  },
  {
    id: "3",
    title: "Modern Web Development Toolkit",
    description: "A comprehensive suite of tools and utilities for modern web developers, including code generators and performance analyzers.",
    category: "coding",
    image: "https://images.unsplash.com/photo-1627599936744-51d288f89af4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njg2NTA0MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["JavaScript", "CLI", "Testing", "DevOps"],
    date: "Oct 2025",
    github: "#",
  },
  {
    id: "4",
    title: "Handcrafted Ceramic Collection",
    description: "A series of functional pottery pieces combining traditional techniques with modern aesthetic sensibilities.",
    category: "craft",
    image: "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3Njg2NDgxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Ceramics", "Hand-Built", "Functional"],
    date: "Sep 2025",
    link: "#",
    displayMode: "minimal", // Craft work with less text
  },
  {
    id: "5",
    title: "Minimalist Portfolio Experience",
    description: "An experimental portfolio website exploring minimalist design principles with subtle animations.",
    category: "coding",
    image: "https://images.unsplash.com/photo-1649513137940-daacab3ee11f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJ0d29ya3xlbnwxfHx8fDE3Njg1NTkwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Motion", "UX Design"],
    date: "Aug 2025",
    github: "#",
    displayMode: "detailed",
  },
  {
    id: "6",
    title: "Creative Coding Showcase",
    description: "A curated collection of creative coding experiments and interactive experiences.",
    category: "coding",
    image: "https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbnxlbnwxfHx8fDE3Njg2NzQ1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Three.js", "Canvas API", "WebGL"],
    date: "Jul 2025",
    link: "#",
    displayMode: "detailed",
  },
  {
    id: "7",
    title: "Ethereal Soundscapes",
    description: "A study of ambient sound composition and generative audio using modular synthesis.",
    category: "compositions",
    image: "https://images.unsplash.com/photo-1635776062127-d379bfcbb9c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcmlkZXNjZW50JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3Njg2NzQ1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Audio", "Modular", "Ambient"],
    date: "Jun 2025",
    link: "#",
    displayMode: "minimal",
  },
  {
    id: "8",
    title: "Copper Wire Sculptures",
    description: "Metalwork and sculptural pieces exploring form and light through copper materials.",
    category: "craft",
    image: "https://images.unsplash.com/photo-1558506093-47000787e875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3BwZXIlMjB0ZXh0dXJlfGVufDF8fHwxNzY4Njc0NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Metalwork", "Copper", "Sculpture"],
    date: "May 2025",
    link: "#",
    displayMode: "image-only", // Pure craft showcase
  },
];