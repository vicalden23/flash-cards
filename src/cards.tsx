import React from 'react';
import { styled, Theme, useTheme } from '@mui/material';

const Text = styled('p')({
  position: 'relative',
  top: '40%',
  transform: 'translateY(-50%)',
  margin: '16px 40px',
  lineHeight: '1.5',
  fontSize: '22px',
});

const LongText = styled('p')(({ theme }: { theme: Theme }) => ({
  position: 'relative',
  margin: '16px',
  fontSize: '20px',
  [theme.breakpoints.up('md')]: {
    margin: '16px 40px',
    lineHeight: '1.5',
    fontSize: '22px',
  },
}));

function TextComponent({ text }: { text: string }) {
  const muiTheme = useTheme();
  return (
    <div style={{ height: 'inherit', overflowY: 'scroll' }}>
      <LongText theme={muiTheme}>{text}</LongText>
    </div>
  );
}

export const cards = [
  {
    id: 1,
    frontHTML: <Text>What is insurance?</Text>,
    backHTML: (
      <Text>
        A contract that transfers the risk of financial loss from an individual
        or business to an insurer. In return, the insurer agrees to cover the
        individual for losses if they occur.
      </Text>
    ),
  },
  {
    id: 2,
    frontHTML: <Text>What is risk?</Text>,
    backHTML: (
      <Text>
        Uncertainty about whether a loss will occur. If a loss is certain to
        occur, there is no risk.
      </Text>
    ),
  },
  {
    id: 3,
    frontHTML: <Text>What are two types of risk?</Text>,
    backHTML: <Text>Speculative and Pure</Text>,
  },
  {
    id: 4,
    frontHTML: <Text>What is speculative risk?</Text>,
    backHTML: <Text>Loss or gain can occur where loss is UNINSURABLE</Text>,
  },
  {
    id: 5,
    frontHTML: <Text>What is pure risk?</Text>,
    backHTML: <Text>Only loss can occur, loss is INSURABLE</Text>,
  },
  {
    id: 6,
    frontHTML: <Text>What is loss?</Text>,
    backHTML: (
      <Text>
        Reduction in value of an asset. The amount of loss is the value before
        loss minus value after loss
      </Text>
    ),
  },
  {
    id: 7,
    frontHTML: <Text>What is exposure?</Text>,
    backHTML: (
      <Text>
        Risks for which the company would be liable. Exposure is measured in
        units.
      </Text>
    ),
  },
  {
    id: 8,
    frontHTML: <Text>What is peril?</Text>,
    backHTML: <Text>Cause of a loss</Text>,
  },
  {
    id: 9,
    frontHTML: <Text>What is a hazard?</Text>,
    backHTML: (
      <Text>
        Anything that increases the chance that a loss will occur. Hazards do
        not cause losses, but they make a loss more likely.
      </Text>
    ),
  },
  {
    id: 10,
    frontHTML: <Text>What are 3 types of hazards?</Text>,
    backHTML: (
      <Text>
        Physical - can be seen or determined. ex. Heart condition
        <br />
        Moral - intentionally causing a loss. ex. dishonesty
        <br />
        Morale - carelessness. ex. leaving a door unlocked
      </Text>
    ),
  },
  {
    id: 11,
    frontHTML: <Text>What are methods for handling risk?</Text>,
    backHTML: (
      <Text>
        STARR
        <br />
        Sharing, transfer, avoidance, retention, reduction
      </Text>
    ),
  },
  {
    id: 13,
    frontHTML: <Text>Explain risk sharing</Text>,
    backHTML: (
      <Text>
        Two or more individuals agree to pay a portion of any loss incurred by
        any member in the group. Stockholders in a corporation share the risk of
        profit or loss
      </Text>
    ),
  },
  {
    id: 14,
    frontHTML: <Text>Explain transfer of risk</Text>,
    backHTML: (
      <TextComponent
        text="This is what happens with insurance. The insurer agrees to pay if an
          individual or business has a loss. Insurance companies use the risk
          management method of transfer to spread a risk of loss among thousands
          if not millions of insureds. Not everyone will experience an accident
          while they own an insurance policy. The large number of insureds who
          do not have an accident will be paying for the losses of the few who
          do have an accident. This is the only way that insurance can work and
          make the premiums affordable."
      />
    ),
  },
  {
    id: 15,
    frontHTML: <Text>Explain risk avoidance</Text>,
    backHTML: (
      <Text>
        Risk avoidance means eliminating a particular risk by not engaging in a
        certain activity.
      </Text>
    ),
  },
  {
    id: 16,
    frontHTML: <Text>Explain risk reduction</Text>,
    backHTML: (
      <Text>
        Lessening the chance that a loss will occur, or to lessening the extent
        of a loss that does occur. ex - seatbelts, smoke alarm
      </Text>
    ),
  },
  {
    id: 17,
    frontHTML: <Text>Explain risk retention</Text>,
    backHTML: <Text>The individual will pay for the loss if it occurs.</Text>,
  },
  {
    id: 17,
    frontHTML: <Text>What is the law of large numbers?</Text>,
    backHTML: (
      <Text>
        The larger the group--the more accurate losses can be predicted
      </Text>
    ),
  },
  {
    id: 18,
    frontHTML: <Text>What are the elements of insurable risk?</Text>,
    backHTML: (
      <Text>
        CANHAM
        <br />
        Calculable, affordable, non-catastrophic, homogeneous, accidental,
        measurable
      </Text>
    ),
  },
  {
    id: 19,
    frontHTML: <Text>Elements of insurable risk - Explain Calculable</Text>,
    backHTML: (
      <Text>
        Premiums must be calculable based upon prior loss statistics for that
        particular risk in order to predict future losses
      </Text>
    ),
  },
  {
    id: 20,
    frontHTML: <Text>Elements of insurable risk - Explain Affordable</Text>,
    backHTML: (
      <Text>
        The premium for transferring the risk should be affordable for the
        average consumer.
      </Text>
    ),
  },
  {
    id: 21,
    frontHTML: (
      <Text>Elements of insurable risk - Explain Non-catastrophic</Text>
    ),
    backHTML: (
      <Text>
        Insurance cannot insure events that cause widespread losses to large
        numbers of insureds at the same time. That is why the peril of war is
        excluded from most policies because the risk is much too large for the
        insurance company to pay.
      </Text>
    ),
  },
  {
    id: 22,
    frontHTML: <Text>Elements of insurable risk - Explain Homogeneous</Text>,
    backHTML: (
      <Text>
        The individual risks that the insurer covers must all be similar, or
        homogeneous, in regard to factors that affect the chance of loss.
      </Text>
    ),
  },
  {
    id: 23,
    frontHTML: <Text>Elements of insurable risk - Explain Accidental</Text>,
    backHTML: (
      <Text>
        Insurance is a method of handling risk. If a loss is certain to occur,
        there is no risk.
      </Text>
    ),
  },
  {
    id: 24,
    frontHTML: <Text>Elements of insurable risk - Explain Measureable</Text>,
    backHTML: (
      <Text>
        It must be possible to estimate the loss as a dollar amount. Insurance
        covers the financial loss of unexpected death or medical bills from
        sickness.
      </Text>
    ),
  },
  {
    id: 25,
    frontHTML: <Text>Elements of insurable risk - Explain Calculable</Text>,
    backHTML: <Text>The individual will pay for the loss if it occurs.</Text>,
  },
];
