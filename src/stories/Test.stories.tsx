import type { Meta, StoryObj } from "@storybook/react";

function Test() {
  return <h1 className="bg-red-400">Test</h1>;
}

const meta = {
  title: "Test",
  component: Test,
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test1: Story = {};
