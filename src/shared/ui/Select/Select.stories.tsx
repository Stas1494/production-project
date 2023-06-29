import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select } from './Select';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Select',
    component: Select,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 'укажите указатель',
    options: [
        { value: '1', content: 'option 1' },
        { value: '2', content: 'option 2' },
        { value: '3', content: 'option 3' },
        { value: '4', content: 'option 4' },
    ],
};

export const invertedPrimary = Template.bind({});

invertedPrimary.args = {
    label: 'укажите указатель',
    options: [
        { value: '1', content: 'option 1' },
        { value: '2', content: 'option 2' },
        { value: '3', content: 'option 3' },
        { value: '4', content: 'option 4' },
    ],
};
invertedPrimary.decorators = [ThemeDecorator(Theme.DARK)];
