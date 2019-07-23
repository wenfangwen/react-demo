const initialState = {
    fixedHeader: false
};
export default function(state = initialState, action) {
    switch (action.type) {
        case 'changeSetting': {
            const { key, value } = action.payload;
            return Object.assign({}, state, {
                [key]: value
            });
        }
        default:
            return state;
    }
}
