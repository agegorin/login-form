type Validator = (value: string) => boolean;

export const emailValidator: Validator = (value) => value.length !== 0 && value.indexOf('@') !== -1;
export const passwordValidator: Validator = (value) => value.length !== 0;
