import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';

const WorkingStep = () => {
  return (
    <div className='relative bg-cover bg-center bg-working-img py-12'>
      <div className='absolute inset-0 bg-heroBg bg-opacity-90'></div>
      <div className='relative container mx-auto px-8 py-20'>
        {/* Animated Title and Description */}
        <motion.div
         variants={fadeIn("up", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.7 }}
          className='text-center text-white mb-20'
        >
          <h2 className='text-3xl font-bold mb-4'>How It Works</h2>
          <p className='text-lg md:w-1/2 mx-auto'>
          At Clariwell, we believe mental wellness starts with understanding and support. Our process is designed to connect you with professional guidance in a safe and confidential environment—step by step. From your first conversation to ongoing care, we’re here to help you heal, grow, and thrive.
          </p>
        </motion.div>
        
        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8'>
          {/* Animated Step 1 */}
          <motion.div
           variants={fadeIn("up", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}
            className='relative bg-white text-center rounded-lg p-6 flex-1'
          >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-600 text-white size-14 rounded-full flex items-center justify-center text-xl font-bold'>
              1
            </div>
            <h3 className='text-lg font-medium mt-8'>Fill a Form</h3>
            <p className='my-2'>
              Step 1: Share a few details about yourself and what you're looking for. This helps us understand your needs and preferences before we begin.
            </p>
          </motion.div>
          
          {/* Animated Step 2 */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='relative bg-white text-center rounded-lg p-6 flex-1'
          >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-600 text-white size-14 rounded-full flex items-center justify-center text-xl font-bold'>
              2
            </div>
            <h3 className='text-lg font-medium mt-8'>Get Matched</h3>
            <p className='my-2'>
              Step 2 :  Based on your form, we’ll match you with a qualified therapist who best fits your goals, background, and communication style.
            </p>
          </motion.div>
          
          {/* Animated Step 3 */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='relative bg-white text-center rounded-lg p-6 flex-1'
          >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-600 text-white size-14 rounded-full flex items-center justify-center text-xl font-bold'>
              3
            </div>
            <h3 className='text-lg font-medium mt-8'>Schedule</h3>
            <p className='my-2'>
              Step 3 : Choose a time that works for you and book your first session. Our flexible scheduling makes it easy to get started on your path to healing..
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkingStep;
