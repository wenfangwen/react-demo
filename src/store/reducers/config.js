const initialState = {
    documentTitle: ''
};
export default function(state = initialState, action) {
    switch (action.type) {
        case 'setTitle': {
            const { title } = action.payload;
            return {
                ...state,
                documentTitle: title
            };
        }
        default:
            return state;
    }
}
