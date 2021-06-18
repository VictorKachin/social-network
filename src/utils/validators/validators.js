export const required = value => {
    if (value) return undefined;

    return 'Field is required!';
}

// Thunk Creator
//умеет принимать параметр maxLength и использует его дальше
//замыкание - когда ф. возвращает другую ф. и эта внутр. ф-ия может получать
//доступ к переменным, которые находятся в родительской ф-ции

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} characters`;
    return undefined;
}

export const minLengthCreator1 = (minLength) => (value) => {
    if (value.length < minLength) return `Min length is ${minLength} characters`;
    return undefined;
}