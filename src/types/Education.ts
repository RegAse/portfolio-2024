export interface Project {
    id: number,
    title: string,
    description: string;
    cover: string;
    course: string;
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