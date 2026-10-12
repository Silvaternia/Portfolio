import type { ImageMetadata } from "astro";
import wsdCover from "../assets/images/projects/weseedo-thumbnail.webp"
import meekijkenCover from "../assets/images/projects/123meekijken-thumbnail.webp"

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
    year: string;
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
            "Lorem ipsum dolor sit amet consectetur. Aliquam facilisis viverra gravida ultrices amet. Ut enim eu vestibulum viverra pretium nulla.",

        role: ["front-end developer"],
        stack: ["Front-end", "Tailwindcss", "Django"],
        year: "09/2025 - present",
        gallery: [
            {
                src: meekijkenCover,
                alt: "Screenshot of the 123meekijken website",
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
            "Lorem ipsum dolor sit amet consectetur. Aliquam facilisis viverra gravida ultrices amet. Ut enim eu vestibulum viverra pretium nulla.",

        role: ["front-end developer"],
        stack: ["Front-end", "Tailwindcss", "Django"],
        year: "01/2025 - present",
        gallery: [
            {
                src: wsdCover,
                alt: "Desktop layout of the 123meekijken homepage",
            },
        ],
        hasBtnDemo: true,
    },

];

// type Project = {
//     name: string;
//     description: string;
//     imageUrl: ImageMetadata;
//     stack: string[];
//     role: string;
//     year: string;
//     url: string;
// };