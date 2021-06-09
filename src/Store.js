import {createState} from '@hookstate/core';
const globalState = createState({
    start: "",
    finish: "",
    error: "",
    data: {}
});
export default globalState;