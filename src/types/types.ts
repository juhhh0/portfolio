export type ProjectType = {
    title: string;
    icon: string;
    image?: string;
    description: string;
    content: string;
    screenshots: { src: string; title: string }[];
    cardColor?: string;
    skills?: number[];
}

export type SkillType = {
    id: number,
    title: string,
    icon: string,
    category: string
}