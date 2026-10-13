import type { ImageMetadata } from "astro";
import wsdCover from "../assets/images/projects/weseedo-thumbnail.webp"
import wsdHeroNew from "../assets/images/projects/weseedo-hero-concept.webp"
import meekijkenCover from "../assets/images/projects/123meekijken-thumbnail.webp"
import meekijkenFooter from "../assets/images/projects/123meekijken-footer.webp"
import meekijkenBlogHero from "../assets/images/projects/123meekijken-blog-hero.webp"
import meekijkenMobileNav from "../assets/images/projects/123meekijken-mobile-nav.webp"

type ProjectImage = {
    src: ImageMetadata;
    alt: string;
    caption?: string;
};
type Project = {
    slug: string;
    name: string;
    description: string;
    cover: ProjectImage;
    role: string[];
    stack: string[];
    period: string;
    gallery: ProjectImage[];
    hasBtnDemo?: boolean
}

export const projects: Project[] = [
    {
        slug: "123meekijken",
        name: "123meekijken",
        cover: {
            src: meekijkenCover,
            alt: "123meekijken website displayed on a laptop",
        },
        description:
            "Responsive marketing website introducing 123meekijken to potential customers, with demo and contact request options. Manageable via Wagtail CMS. I refactored and improved the code, and I maintain it",

        role: ["front-end developer", "UI designer"],
        stack: ["JavaScript", "Tailwind CSS", "Django"],
        period: "2025 - present",
        gallery: [
            {
                src: meekijkenCover,
                alt: "123meekijken website displayed on a laptop",
            },
            {
                src: meekijkenFooter,
                alt: "Footer design for 123meekijken with locations, support links and company details",
                caption: "A footer design I made that went live"
            },
            {
                src: meekijkenBlogHero,
                alt: "Hero section of the 123meekijken blog page",
            },
            {
                src: meekijkenMobileNav,
                alt: "Mobile navigation menu of the 123meekijken website",
                caption: "The updated mobile navigation design that I made"
            },
        ],
    },
    {
        slug: "weseedo",
        name: "WeSeeDo",
        cover: {
            src: wsdCover,
            alt: "Screenshot of the weseedo website"
        },
        description:
            "Responsive marketing website for WeSeeDo, a B2B video calling platform. I rewrote it from scratch on current Django and Wagtail versions and migrated the frontend from Bootstrap and Grunt to esbuild and Tailwind CSS.",
        role: ["front-end developer"],
        stack: ["JavaScript", "Tailwindcss", "Django"],
        period: "2025 - present",
        gallery: [
            {
                src: wsdCover,
                alt: "Screenshot of the WeSeeDo website",
            },
            {
                src: wsdHeroNew,
                alt: "Concept for a new WeSeeDo homepage hero",
            },
        ],
        hasBtnDemo: true,
    },

];