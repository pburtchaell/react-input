import Submit from './submit';

describe('<Submit/>', () => {
  it('should render a submit button', () => {
    const TEXT = 'foo';

    const wrapper = shallow(
      <Submit text={TEXT} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
