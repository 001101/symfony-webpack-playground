
function action(type, payload = {}) {
    return {type, ...payload}
}

export const fetchItems = (prefix) => action('FETCH_REQUESTED', {prefix});
