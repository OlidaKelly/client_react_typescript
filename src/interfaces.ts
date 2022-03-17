
export interface IWilder {
    _id:string;
    name:string;
    city:string;
    description?:string;
    image?:string;
    skills: Array<ISkill> // interface skill object avec des string et des numbers
}

export interface ISkill {
    title:string;
    votes:number
}