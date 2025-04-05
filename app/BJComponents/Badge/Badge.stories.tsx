import type { Meta, StoryObj } from '@storybook/react'

import { Button } from 'components/Button'
import { Badge } from './Badge'

const meta = {
	title: 'Components/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
	args: {
		children: <Button>123</Button>,
	},
}
