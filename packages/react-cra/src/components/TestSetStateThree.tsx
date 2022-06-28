import { Component } from 'react'
class TestSetStateThree extends Component {
    state = {
        count: 0
    }
    componentDidMount() {
        this.setState(preState => ({ count: preState.count + 1 }), () => {
            console.log('in', this.state.count)
        })
        this.setState(preState => ({ count: preState.count + 1 }), () => {
            console.log('in', this.state.count)
        })
    }
    render () {
        return (
            <div>{this.state.count}</div>
        )
    }
}
export default TestSetStateThree