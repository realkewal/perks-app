interface Referral {
  createdAt: Date;
  email: string;
  name: string | null;
}

type ReferralListProps = {
  referrals: Referral[];
};

const ReferralList: React.FC<ReferralListProps> = ({ referrals }) => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {referrals.map((referral: Referral) => (
        <li key={referral.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {referral.name}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {referral.email}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <div className="mt-1 flex items-center gap-x-1.5">
              <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
              <p className="text-xs leading-5 text-gray-500">
                Member since:{" "}
                {new Date(referral.createdAt).toLocaleDateString("en-au")}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ReferralList;
