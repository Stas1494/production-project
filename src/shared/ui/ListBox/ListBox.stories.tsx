import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 200 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;
const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const BottomRight = Template.bind({});

BottomRight.args = {
    value: '1',
    items: [
        { value: '1', content: '1231231wawdqweqe' },
        { value: '1123', content: '1231231wawdqweqe' },
        { value: '12', content: '1231231wawdqweqe' },
    ],
    direction: 'bottom right',
};

export const TopRight = Template.bind({});

TopRight.args = {
    value: '1',
    items: [
        { value: '1', content: '1231231wawdqweqe' },
        { value: '1123', content: '1231231wawdqweqe' },
        { value: '12', content: '1231231wawdqweqe' },
    ],
    direction: 'top right',
};

export const BottomLeft = Template.bind({});

BottomLeft.args = {
    value: '1',
    items: [
        { value: '1', content: '1231231wawdqweqe' },
        { value: '1123', content: '1231231wawdqweqe' },
        { value: '12', content: '1231231wawdqweqe' },
    ],
    direction: 'bottom left',
};

export const TopLeft = Template.bind({});

TopLeft.args = {
    value: '1',
    items: [
        { value: '1', content: '1231231wawdqweqe' },
        { value: '1123', content: '1231231wawdqweqe' },
        { value: '12', content: '1231231wawdqweqe' },
    ],
    direction: 'top left',
};
