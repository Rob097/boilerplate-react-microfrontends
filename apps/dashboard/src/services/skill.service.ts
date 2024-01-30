const constants = require('context/utilities/constants');
const { View } = require('context/utilities/criteria');
import { Skill, SkillQ } from "../models/skill.model";
import { BaseService } from "./base.service";
const SKILLS_URL = constants.BASE_URL + '/core/skills';
const JSON_HEADER = { "Content-Type": "application/json" }

export class SkillService implements BaseService {


    getById(id: number, view?: string) {
        return fetch(SKILLS_URL + `/${id}` + '?view=' + (view || View.normal), {
            method: constants.METHODS.GET,
            headers: {
                ...JSON_HEADER
            }
        })
    }

    getByCriteria(criteria: SkillQ) {
        return fetch(SKILLS_URL + criteria.toString(), {
            method: constants.METHODS.GET,
            headers: {
                ...JSON_HEADER
            }
        })
    }

    update(skill: Skill) {
        return fetch(SKILLS_URL + `/${skill.id}`, {
            method: constants.METHODS.PUT,
            headers: {
                ...JSON_HEADER
            },
            body: JSON.stringify(skill)
        })
    }
}