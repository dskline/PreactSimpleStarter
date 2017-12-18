import sinon from 'sinon'

export default function mockReactComponent (componentClass) {
  function stub(method) {
    return sinon.stub(componentClass.default.prototype, method).returns(null)
  }
  return {
    render: stub('render'),
    componentWillMount: stub('componentWillMount'),
    componentWillReceiveProps: stub('componentWillReceiveProps'),
    shouldComponentUpdate: stub('shouldComponentUpdate'),
    componentWillUpdate: stub('componentWillUpdate'),
    componentDidUpdate: stub('componentDidUpdate'),
    componentWillUnmount: stub('componentWillUnmount')
  }
}
