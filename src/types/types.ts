export type ProjectType = {
    title: string;
    icon: string;
    content: string;
    screenshots: { src: string; title: string }[];
    cardColor?: string;
}

export type SkillType = {
    id: number,
    title: string,
    icon: string,
    category: string
}