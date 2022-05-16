import {ADD, DELETE} from "../constant";

const createPersonAddAction = (person) => ({type: ADD, data: person});
const createPersonDeleteAction = (person) => ({type: DELETE, data: person});

export {createPersonAddAction, createPersonDeleteAction};