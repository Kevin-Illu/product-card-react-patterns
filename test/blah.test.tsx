import * as ReactDOM from 'react-dom';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<div>hola</div>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
