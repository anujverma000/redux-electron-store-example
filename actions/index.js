import { BrowserWindow } from 'electron'
import {createAction} from './actionCreator'
import {WINDOW_ACTIONS} from '../actionTypes'

export function openWindow(dispatch, getState) {
	dispatch(createAction(WINDOW_ACTIONS.OPEN_WINDOW, {name: 'New Window'}))
}

export function sendBackToMainWindow(dispatch, getState) {
	dispatch(createAction(WINDOW_ACTIONS.DATA_FOR_MAIN_WINDOW, {data: 'From notification window'}))
}

