export interface IProject {
    _id: string;
    name: string;
    contents: IContents[];
    members: IMembers[];
}

export interface IMembers {
    _id: string;
    name: string;
    email: string;
    member: IProject[];
}

export interface IContents {
    project: IProject;
    publish: Date;
    content: any;
    assignedTo: any;
}
