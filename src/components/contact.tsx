import { useState, useRef, useEffect } from 'react';
import { Variants, motion } from 'motion/react';
import SectionWrapper from './sectionWrapper';
import { slideIn } from '../utils/motion';
import DogCanvas from './dog';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    const button = buttonRef.current;
    if (button)
      button.addEventListener('click', () => {
        // webGLFluidEnhanced.splats();
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://europe-north1-michaelbrusegard.cloudfunctions.net/emailSender', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setFeedbackMessage('Email sent successfully');
        setForm({ name: '', email: '', message: '' });
      } else {
        setFeedbackMessage('Error sending email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFeedbackMessage('Error sending email');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setFeedbackMessage('');
      }, 5000);
    }
  };

  return (
    <div className='pointer-events-auto flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1) as Variants} className='flex-[0.75] rounded-2xl bg-secondary p-8'>
        <p className='section-subtitle'>Get in touch</p>
        <h3 className='section-title'>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='outlined-none rounded-lg border-none bg-background px-6 py-4 font-medium placeholder:opacity-75'
              required
              disabled={loading}
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className='outlined-none rounded-lg border-none bg-background px-6 py-4 font-medium placeholder:opacity-75'
              required
              disabled={loading}
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='outlined-none resize-none rounded-lg border-none bg-background px-6 py-4 font-medium placeholder:opacity-75'
              required
              disabled={loading}
            />
          </label>

          <button
            ref={buttonRef}
            type='submit'
            className={`w-fit select-none rounded-xl bg-primary px-8 py-3 font-semibold text-background transition-all duration-200 ${
              loading
                ? 'pointer-events-none'
                : 'hover:-translate-y-1 hover:from-primary hover:to-accent hover:text-foreground hover:shadow-xl hover:shadow-primary hover:bg-gradient-30 focus:-translate-y-1 focus:from-primary focus:to-accent focus:text-foreground focus:shadow-xl focus:shadow-primary focus:bg-gradient-30'
            }`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {feedbackMessage && (
            <p className={`ml-1 font-semibold ${feedbackMessage === 'Email sent successfully' ? 'text-green-600' : 'text-red-600'}`}>{feedbackMessage}</p>
          )}
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1) as Variants} className='h-[350px] md:h-[550px] xl:h-auto xl:w-[550px] xl:flex-1'>
        <DogCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
