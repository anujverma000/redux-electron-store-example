import React from 'react'
import { connect } from 'react-redux'
import {openWindow} from '../../../actions'

const Home = (props) => (
  <div>
    <input type="button" value="Open New Window" onClick={props.openWindow}/>
  </div>
)

const mapStateToProps = (state) => {
  	return {
    	status: state
  	}
}

const mapDispatchToProps = (dispatch) => {
  	return {
    	openWindow: () => {
      		dispatch(openWindow)
    	}
  	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)