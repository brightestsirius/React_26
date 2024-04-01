import actions from './actions'

const initialState = {
    counter: 0,
    inputValue: undefined
}

const reducer = (state, {type, payload}) => {
    switch(type){
        case actions.COUNTER_DECREMENT:
            return {...state, counter: state.counter-1};
        case actions.COUNTER_INCREMENT:
            return {...state, counter: state.counter+1}
        case actions.INPUT_VALUE_SET:
            return {...state, inputValue: +payload};
        case actions.COUNTER_SET:
            return {...state, counter: state.inputValue};
        case actions.COUNTER_SET_TEN:
            return {...state, counter: state.counter+10}
        default:
            return state;
    }
}

export {initialState, reducer}