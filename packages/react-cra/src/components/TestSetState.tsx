import { Component } from 'react'
class TestSetState extends Component {
    state = {
        count: 0
    }
    componentDidMount() {
        this.setState({ count: 1 }, () => {
            console.log('in', this.state.count)
        })
        console.log('out', this.state.count)
    }
    render () {
        return (
            <div>{this.state.count}</div>
        )
    }
}
export default TestSetState