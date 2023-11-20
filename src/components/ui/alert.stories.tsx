import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertTitle } from "./alert";

function AlertDemo({
  title,
  description,
  variant,
}: {
  title: string;
  description: string;
  variant: "informative" | "warning" | "critical";
}) {
  return (
    <Alert variant={variant}>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}

const meta = {
  title: "Alert",
  component: AlertDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["informative", "warning", "critical"],
      },
    },
  },
} satisfies Meta<typeof AlertDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Informative: Story = {
  args: {
    title: "Renew card",
    description:
      "Your records are in order, indicating that you have successfully passed the relevant health, safety, and environment test within the last two years and the CPCS Renewal test for the necessary categories. You may proceed with the renewal of your CPCS Blue Competent Operator Card at your earliest convenience.",
    variant: "informative",
  },
};
export const Warning = {
  args: {
    title: "You are not able to renew your card",
    description:
      "It looks like you need to pass the Health, Safety, and Environment Test for your category, or your previous test has expired. To renew your CPCS Blue Competent Operator Card, please complete the current Health, Safety, and Environment Test.",
    variant: "warning",
  },
};
export const Critical = {
  args: {
    title: "Critical",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    variant: "critical",
  },
};
