import { Button } from 'element-react'
import React, { Component } from 'react'

export default class Upload extends Component {

    op1 = (_type) => {
        return ()=>{
            // store.dispatch({type: _type, data: 1})    
        }
    }

    render() {
        // const {count} = store.getState()
        return (
            <div>
                {/* Upload count: {count}

                <hr/>
                <Button onClick={this.op1('add')} style={{margin: '0 10px'}} icon='plus' type='primary'></Button>
                <Button onClick={this.op1('sub')} style={{margin: '0 10px'}} icon='minus' type='primary'></Button> */}
            </div>
        )
    }
}
