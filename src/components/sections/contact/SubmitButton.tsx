import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className='w-fit rounded-xl bg-primary px-8 py-3 font-semibold text-background disabled:opacity-75'
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

export { SubmitButton };
