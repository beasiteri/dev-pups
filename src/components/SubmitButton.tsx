import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const status = useFormStatus();
  return (
    <button
      className="mt-4 inline-block rounded bg-cyan-300 px-4 py-2 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
      type="submit"
    >
      {status.pending ? 'Adding puppy...' : 'Add puppy'}
    </button>
  );
};

export default SubmitButton;
