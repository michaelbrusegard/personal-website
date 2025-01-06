import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className='w-fit rounded-xl bg-primary px-8 py-3 font-semibold text-background outline-2 outline-offset-2 outline-primary/60 transition duration-200 hover:-translate-y-1 hover:from-primary hover:to-accent hover:text-foreground hover:shadow-xl hover:shadow-primary hover:bg-gradient-30 focus-visible:outline disabled:opacity-75'
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

export { SubmitButton };
