import type { Meta, StoryObj } from '@storybook/react'

import { Button } from 'components/Button'
import { Modal } from './Modal'

const meta = {
	title: 'Components/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
	args: {
		isOpen: true,
		title: '1234',
		titlePosition: 'center',
		children: (
			<div>
				<h3>Custom Content</h3>
				<p>This is custom content inside the modal.</p>
			</div>
		),
		footer: [<Button>123</Button>],
	},
}

export const WithCloseButton: Story = {
	name: 'With close button',
	args: {
		isOpen: true,
		children: (
			<div>
				<h3>Custom Content</h3>
				<p>This is custom content inside the modal.</p>
			</div>
		),
		footer: [
			<Button>123</Button>,
			<Button size='xl' variant='danger'>
				123
			</Button>,
		],
	},
}
