const initialState = [];
export default function produk(state=initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case "SEARCH":
            return{ 
                ...state,
                data : payload
            }
        case "GET":
            return state;
        default:
            return state;
    }
}
