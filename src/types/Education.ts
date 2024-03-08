export interface Project {
    id: number,
    title: string,
    description: string;
    cover: string;
}

export interface Award {
    id: number;
    title: string
}

export interface Education {
    id: number;
    title: string;
    description: string;
    projects: Project[];
}