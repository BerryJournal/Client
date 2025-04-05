import type { Meta, StoryObj } from '@storybook/react'
import Breadcrumbs from './Breadcrumbs'
import BreadcrumbsItem from './BreadcrumbsItem'

const meta = {
	title: 'Components/Breadcrumbs',
	component: Breadcrumbs,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
	args: {
		children: [
			<BreadcrumbsItem>123</BreadcrumbsItem>,
			<BreadcrumbsItem disabled>321</BreadcrumbsItem>,
			<BreadcrumbsItem href='123'>456</BreadcrumbsItem>,
		],
	},
}

export const Separator: Story = {
	args: {
		children: [
			<BreadcrumbsItem>123</BreadcrumbsItem>,
			<BreadcrumbsItem>321</BreadcrumbsItem>,
			<BreadcrumbsItem>456</BreadcrumbsItem>,
		],
		separator: '>',
	},
}
