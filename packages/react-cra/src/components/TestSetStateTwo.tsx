import { Component } from 'react'
class TestSetStateTwo extends Component {
    state = {
        count: 0
    }
    componentDidMount() {
        this.setState({ count: this.state.count + 1 }, () => {
            console.log('in', this.state.count)
        })
        this.setState({ count: this.state.count + 1 }, () => {
            console.log('in', this.state.count)
        })
    }
    render () {
        return (
            <div>{this.state.count}</div>
        )
    }
}
export default TestSetStateTwo