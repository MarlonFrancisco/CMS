export interface IProject {
    _id: string;
    name: string;
    contents: IContent[];
    members: IMember[];
}

export interface IMember {
    _id: string;
    name: string;
    email: string;
    member: IProject[];
}

export interface IContent {
    project: IProject;
    publish: Date;
    content: any;
    assignedTo: any;
}

export interface IChangeData {
    name: string;
    password: string;
    email: string;
}
