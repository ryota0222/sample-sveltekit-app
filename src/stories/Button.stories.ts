import type { Meta, StoryObj } from '@storybook/svelte';
import Button from './Button.svelte';
import { within, expect } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Example/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		primary: true,
		label: 'Button',
		disabled: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: /Button/i });
		expect(button.getAttribute('disabled')).toBe('');
	}
};

export const Secondary: Story = {
	args: {
		label: 'Button'
	}
};

export const Large: Story = {
	args: {
		size: 'large',
		label: 'Button'
	}
};

export const Small: Story = {
	args: {
		size: 'small',
		label: 'Button'
	}
};
