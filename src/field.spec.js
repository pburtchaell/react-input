import Field from './field';

const NAME = 'First name';

describe('<Field />', () => {
  it('should render a field', () => {
    const wrapper = shallow(
      <Field
        id="name"
        name={NAME}
        type="text"
        label={true}
        onChange={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
