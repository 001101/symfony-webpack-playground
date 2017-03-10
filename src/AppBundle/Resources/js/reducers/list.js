const initialState = {
    items: [],
    schema: {name: {title:'Name'}, email: {title:'Email'}},
    selected: []
};

const listReducer = (prefix) => {
    return (list = initialState, action) => {
        switch (action.type) {
            case prefix + '_SELECT_ITEM':
                return {
                    ...list,
                    selected: action.payload
                };

            case prefix + '_ADD_ITEM':
                return {
                    ...list,
                    items: list.items.concat(action.payload)
                };

            case prefix + '_SET_ITEMS':
                return {
                    ...list,
                    items: action.payload
                };

            case prefix + '_SET_SCHEMA':
                return {
                    ...list,
                    schema: action.payload
                };

            default:
                return list;
        }
    }
};

export default listReducer;
