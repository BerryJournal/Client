import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from './Skeleton'

const meta = {
	title: 'Components/Skeleton',
	component: Skeleton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
	args: {},
}

export const Round: Story = {
	args: {
		style: {
			width: '150px',
			height: '150px',
			borderRadius: '50%',
		},
	},
}

export const TextSkeleton: Story = {
    args: {
        style: {
            "width": "500px",
            "height": "20px",
            "borderRadius": "4px"
        }
    }
};
