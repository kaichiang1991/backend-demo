import React, { Component } from 'react'
import { connect } from 'react-redux'


class Content extends Component {
    render() {
        // const {options} = store.getState()
        console.log(this.props)
        return (
            <div id="content">
                {/* <Switch>
                    {options.map(option => <Route key={option.id} path={option.path} component={compMap[option.path]}></Route>)}
                    <Redirect to={options[0].path}/>
                </Switch> */}
            </div>
        )
    }
}

export default connect(
    state => ({con: state.content})
)(Content)