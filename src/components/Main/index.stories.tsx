import { Meta, Story } from '@storybook/react'

import Main from './index'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default title',
    description: 'Default description'
  }
} as Meta

export const Basic: Story = args => <Main {...args} />

export const Default: Story = args => <Main {...args} />
