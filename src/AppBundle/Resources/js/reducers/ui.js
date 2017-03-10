const initialState = {
    loading: false
};

const uiReducer = (ui = initialState, action) => {

    switch (action.type) {
        case 'SHOW_LOADER':
            return {
                ...ui,
                loading: true
            };

        case 'HIDE_LOADER':
            return {
                ...ui,
                loading: false
            };

        default:
            return ui;
    }
};

export default uiReducer;
