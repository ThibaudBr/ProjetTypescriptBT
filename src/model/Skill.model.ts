export interface ISkill {
    name: string;
    type: string;
    power: number;
}

export class Skill implements ISkill{
    name: string;
    power: number;
    type: string;


    constructor(props: ISkill) {
        this.name = props.name;
        this.power = props.power;
        this.type = props.type;
    }
}
