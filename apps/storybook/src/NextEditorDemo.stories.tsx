import type { Meta, StoryObj } from '@storybook/react';

import NextEditorDemo from './NextEditorDemo';

const meta = {
  component: NextEditorDemo,
} satisfies Meta<typeof NextEditorDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};