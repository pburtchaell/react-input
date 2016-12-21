import Form from './form';

describe('<Form />', () => {
  it('should render an textarea element', () => {
    const wrapper = shallow(
      <Form
        fields={[{
          name: 'Email',
          key: 'email',
          type: 'email'
        }]}
        onChange={() => {}}
        onSubmit={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
