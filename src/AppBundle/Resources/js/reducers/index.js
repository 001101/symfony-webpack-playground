import {combineReducers} from 'redux'
import ui from './ui'
import list from './list'

export default combineReducers({
    ui: ui,
    CONTACT: list('CONTACT'),
    ACCOUNT: list('ACCOUNT')
});
