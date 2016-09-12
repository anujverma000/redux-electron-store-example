import React from 'react'
import { connect } from 'react-redux'
import {sendBackToMainWindow} from '../../../actions'

const Notification = (props) => (
  <div>
    Aaa haaa! Notification :)
    <div>
      <input type="button" value="Send Data to Main Window" onClick={props.sendBackToMainWindow}/>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    status: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendBackToMainWindow: () => {
      dispatch(sendBackToMainWindow)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notification)