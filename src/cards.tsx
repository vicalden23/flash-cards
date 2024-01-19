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

function LongTextWrapper({ text }: { text: string }) {
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
    backHTML: <Text>Reduction in value of an asset</Text>,
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
      <LongTextWrapper
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
    id: 26,
    frontHTML: <Text>What is adverse selection?</Text>,
    backHTML: (
      <Text>Risks that have a greater than average chance of loss</Text>
    ),
  },
  {
    id: 27,
    frontHTML: <Text>What is underwriting?</Text>,
    backHTML: (
      <Text>
        If an underwriter determines that the risk is higher than average, the
        insurer may charge a higher rate to insure risk, limit the amount of
        coverage, or refuse the application altogether in order to avoid adverse
        selection
      </Text>
    ),
  },
  {
    id: 28,
    frontHTML: <Text>What is reinsurance?</Text>,
    backHTML: (
      <LongTextWrapper
        text="
          Insurance for insurers. It transfers risk from one insurer to another
          insurer in order to reduce the total amount of loss it is liable for.
          The company reducing its risk is called the ceding insurer and the
          company assuming the risk is the reinsurer. ex. Protect insurance
          company from catastrophic losses in certain geographical areas
      "
      />
    ),
  },
  {
    id: 29,
    frontHTML: <Text>What is facultative reinsurance?</Text>,
    backHTML: (
      <Text>
        The reinsurer evaluates each risk before allowing the transfer.
      </Text>
    ),
  },
  {
    id: 30,
    frontHTML: <Text>What is treaty reinsurance?</Text>,
    backHTML: (
      <Text>
        The reinsurer accepts the transfer according to an agreement called a
        treaty.
      </Text>
    ),
  },
  {
    id: 31,
    frontHTML: <Text>What are stock insurers?</Text>,
    backHTML: (
      <Text>
        - Owned by stockholders aka shareholders.
        <br />
        - Board of directors chosen by stockholders
        <br />
        - If the company makes money, a taxable dividend from the profits may be
        paid to stockholders
        <br />- Issues non-participating, or non-par, policies
      </Text>
    ),
  },
  {
    id: 32,
    frontHTML: <Text>What are mutual insurers?</Text>,
    backHTML: (
      <Text>
        - Owned by policyholders/policyowners (customers)
        <br />
        - Board of directors chosen by policyholders
        <br />
        - If the company is profitable, excess premiums can be returned to its
        policyholders (nontaxable dividend)
        <br />- Issues participating, or par, policies
      </Text>
    ),
  },
  {
    id: 33,
    frontHTML: <Text>What are fraternal benefit societies?</Text>,
    backHTML: (
      <Text>
        - Exist for the benefit of its members.
        <br />
        - Fraternal policies are called certificates, and members who own life
        insurance are called certificate holders.
        <br />
        - Certificate holders may be assessed additional charges if premiums are
        not sufficient. These are called open contracts.
        <br />
      </Text>
    ),
  },
  {
    id: 34,
    frontHTML: <Text>What are reciprocal insurers?</Text>,
    backHTML: (
      <Text>
        - Unincorporated groups of people called subscribers
        <br />
        - Members/subscribers are assessed the amount they have to pay if a loss
        to any member of the group occurs
        <br />
        - Run by an attorney-in-fact
        <br />
      </Text>
    ),
  },
  {
    id: 36,
    frontHTML: <Text>What are risk retention groups (RRG)?</Text>,
    backHTML: (
      <Text>
        Liability insurance company created for policyholders from the same
        industry. ex. a car dealers RRG - only car dealers can be policy holders
      </Text>
    ),
  },
  {
    id: 35,
    frontHTML: <Text>What are Lloyds associations?</Text>,
    backHTML: (
      <Text>
        Insurance provided by individual underwriters, not insurance companies.
        Lloyd's associations have insured unusual risks such as the hair of
        athletes and body parts of celecbrities.
      </Text>
    ),
  },
  {
    id: 37,
    frontHTML: <Text>What are self-insurers?</Text>,
    backHTML: (
      <Text>
        Retaining rather than transferring risk. A business that pays its own
        claims.
      </Text>
    ),
  },
  {
    id: 38,
    frontHTML: <Text>What is the residual market?</Text>,
    backHTML: <Text>Insurance from the state or federal government.</Text>,
  },
  {
    id: 39,
    frontHTML: <Text>Explain domestic, foreign, and alien insurers.</Text>,
    backHTML: (
      <Text>
        Domestic - the state where a company is incorporated (home state)
        <br />
        Foreign - any state or US territory other than the state where
        incorporated (another state)
        <br />
        Alien - incorporated in any country other than USA (another country)
      </Text>
    ),
  },
  {
    id: 40,
    frontHTML: <Text>Authorized vs. unauthorized insurers</Text>,
    backHTML: (
      <Text>
        Authorized - Admitted, authorized, or approved is when the state
        requires the insurance company to have a Certificate of Authority (a
        state license for an insurance company)
        <br />
        Unauthorized - Non-admitted, unauthorized, nonapproved is when the
        insurance company is not requred to have a Certificate of Authority
      </Text>
    ),
  },
  {
    id: 41,
    frontHTML: <Text>What are surplus lines insurers?</Text>,
    backHTML: (
      <Text>
        - Insurance sold by unauthorized insurers.
        <br />
        - Can only be sold to certain high risk insureds.
        <br />
        - Can't be sold just for a cheaper rate than licensed/admitted insurers.
        <br />
        Exposure examples - casinos and entertainment, mining, etc
      </Text>
    ),
  },
  {
    id: 42,
    frontHTML: <Text>What is a financial strength rating?</Text>,
    backHTML: (
      <Text>
        A report card of the company
        <br />
        A++ - superior
        <br />
        AAA - exceptionally strong
        <br />
        Aaa - exceptional
      </Text>
    ),
  },
];
