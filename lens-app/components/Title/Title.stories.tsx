import { Story } from '@storybook/react';
import Title, { Props } from './Title';

export default {
  title: 'Title',
  component: Title,
};

const Template: Story<Props> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {};