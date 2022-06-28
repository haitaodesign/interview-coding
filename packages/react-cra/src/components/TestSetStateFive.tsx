import { Component } from 'react'
class TestSetStateFive extends Component {
    state = {
        count: 0
    }
    componentDidMount() {
        this.setState({ count: this.state.count + 1})
        console.log('out', this.state.count)
        this.setState({ count: this.state.count + 1})
        console.log('out', this.state.count)
        setTimeout(() => {
            this.setState({ count: this.state.count + 1})
            console.log('setTimeout', this.state.count)
            this.setState({ count: this.state.count + 1})
            console.log('setTimeout', this.state.count)
        }, 0);
    }
    render () {
        return null
    }
}
export default TestSetStateFive