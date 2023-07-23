type ReferralCode = {
  referralCode: string;
};

const ShareYourCode: React.FC<ReferralCode> = ({ referralCode }) => {
  return (
    <a
      href={`sms:?&amp;body=Hey! Checkout this new Perks app to earn credits! Sign up using my referral code ${referralCode}`}
    >
      Click here to share your referral code using SMS
    </a>
  );
};

export default ShareYourCode;
