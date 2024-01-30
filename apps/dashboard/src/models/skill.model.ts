const { Filters } = require('shared/utilities/criteria');

export class Skill {
    id: number;
    name: string;

    constructor(obj: any) {
        this.id = obj.id;
        this.name = obj.name;
    }
}

export class SkillQ extends Filters {
    public static id = 'id';
    public static skillName = 'name';
}