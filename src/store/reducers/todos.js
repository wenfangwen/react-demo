const initialState = {
    title: 'nn'
};
export default function(state = initialState, action) {
    switch (action.type) {
        case 'addConfig': {
            const { title } = action.payload;
            return {
                ...state,
                title
            };
        }
        default:
            return state;
    }
}
