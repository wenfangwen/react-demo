export const setTitle = title => ({
    type: 'setTitle',
    payload: {
        title
    }
});
export const changeSetting = ({ key, value }) => ({
    type: 'changeSetting',
    payload: {
        key,
        value
    }
});
