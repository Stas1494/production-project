import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Currency } from 'entities/Currency';
import { ListBox } from './ListBox';

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR, disabled: true },
    { value: Currency.USD, content: Currency.USD },
];
export default {
    title: 'shared/ListBox',
    component: ListBox,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;
const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const DropdownBottom = Template.bind({});

DropdownBottom.args = {
    defaultValue: 'Укажите значение',
    value: '1',
    items: options,
    direction: 'bottom',
};

export const DropdownTop = Template.bind({});

DropdownTop.args = {
    defaultValue: 'Укажите значение',
    value: '1',
    items: options,
    direction: 'top',
};
