export interface Lesson {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    content: string;
    resources: string[];
}

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
    bio?: string;
}