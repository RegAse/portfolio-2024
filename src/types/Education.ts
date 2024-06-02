export interface Project {
    id: number,
    title: string,
    description: string;
    cover: string;
    course: string;
    video: string;
    link: string;
    tags: string[];
    images?: ProjectImage[];
}

export interface ProjectImage {
    source: string;
}

export interface Award {
    id: number;
    title: string
}

export interface Course {
    id: number,
    name: string;
    description: string;
    highlight?: boolean;
}

export interface Education {
    id: number;
    title: string;
    description: string;
    tags: string[];
    projects: Project[];
    awards: Award[];
    courses: Course[];
}