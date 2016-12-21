import Label from './label';

describe('<Label/>', () => {
  it('should render a label', () => {
    const NAME = 'foo';

    const wrapper = shallow(
      <Label name={NAME} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
