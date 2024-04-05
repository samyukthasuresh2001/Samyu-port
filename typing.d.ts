interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: String;
}

interface Image {
    _type: "image";
    asset: {
        _ref: String;
        _type: "reference";

    }
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: String;
    backgroundInformation: String;
    email: String;
    role: String;
    heroImage: Image;
    name: String;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Experience extends SanityBody { 
    _type: "project";
    jobTitle: string;
    companyImage: Image;
    company: string;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    points: string[];
    technologies: Technology[];
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Social extends SanityBody{
    _type: "social";
    title: String;
    url: String;
}