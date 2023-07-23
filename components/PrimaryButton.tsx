interface PrimaryButtonProps {
  buttonText: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ buttonText }) => {
  return (
    <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      {buttonText} <span aria-hidden="true">&rarr;</span>
    </button>
  );
};

export default PrimaryButton;
