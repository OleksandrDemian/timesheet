export function booleanToTemplate(val){
    return val ? "Si" : "No";
}

export const handleFormInput = handler => {
    return e => {
        const value = e.target.value;
        handler(value);
    }
}