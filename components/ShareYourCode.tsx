type ReferralCode = {
  referralCode: string;
};

const ShareYourCode: React.FC<ReferralCode> = ({ referralCode }) => {
  const smsText = `sms:?&body=Hey! Checkout this new Perks app to earn credits! Sign up using my referral code ${referralCode}`;
  return (
    <a className="block text-center" href={smsText}>
      Share code using SMS &uarr;
    </a>
  );
};

export default ShareYourCode;
