import { CHANGE_QUOTE } from "./types"

export const changeIndex = () => (dispatch)=> {
 dispatch({
    type: CHANGE_QUOTE
})
}