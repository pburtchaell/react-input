import Input from './input';

const ON_CHANGE = () => { };

describe('<Input />', () => {
  it('should render an textarea element', () => {
    const wrapper = shallow(
      <Input
        type={TYPES.TEXTAREA}
        onChange={ON_CHANGE}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a text input element', () => {
    const wrapper = shallow(
      <Input
        type={TYPES.TEXT}
        onChange={ON_CHANGE}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
