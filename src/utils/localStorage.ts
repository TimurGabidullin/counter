import {initialState} from "../redux/counterReducer";
import {store} from "../redux/store";

export const loadState = () => {
    try {
        const serializedCount = localStorage.getItem('count');
        const serializedMaxValue = localStorage.getItem('maxValue');
        if (serializedCount === null) {
            return undefined;
        }
        if (serializedMaxValue === null) {
            return undefined;
        }
        return {
            counter:
                {
                    ...initialState,
                    count: JSON.parse(serializedCount),
                    updatedStartValue: JSON.parse(serializedCount),
                    maxValue: JSON.parse(serializedMaxValue),
                    updatedMaxValue: JSON.parse(serializedMaxValue),
                }
        };
    } catch (err) {
        return undefined;
    }
};


export const saveState = () => {
    try {
        localStorage.setItem('count', JSON.stringify(store.getState().counter.updatedStartValue))
        localStorage.setItem('maxValue', JSON.stringify(store.getState().counter.updatedMaxValue))
    } catch {
        // ignore write errors
    }
};