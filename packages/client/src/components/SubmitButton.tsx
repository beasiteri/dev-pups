import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
   const status = useFormStatus();
   return (
      <button
         className="mt-4 inline-block rounded bg-[#4a3b38] px-4 py-2 font-medium text-white hover:bg-[#4a3b38] focus:ring-2 focus:ring-[#4a3b38] focus:outline-none disabled:bg-slate-200 disabled:cursor-not-allowed cursor-pointer"
         type="submit"
         disabled={status.pending}
      >
         {status.pending
            ? `Adding ${status?.data?.get('name') || 'puppy'} ...`
            : 'Add puppy'}
      </button>
   );
};

export default SubmitButton;
