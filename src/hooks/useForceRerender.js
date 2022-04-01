import {useEffect, useReducer} from "react";

export const useForceRender = (interval) => {
    const render = useReducer(() => ({}))[1];
    useEffect(() => {
        const id = setInterval(render, interval);
        return () => clearInterval(id);
    }, [interval, render]);
};
