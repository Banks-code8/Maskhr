'use client';

import React from 'react';
import MainText from '../typography/MainText';
import { useForm } from 'react-hook-form';
import { setAuth } from '@/services/utils/auth';
import { registerUser } from '@/services/auth/authService';
import toast from 'react-hot-toast';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    const payload = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };

    await toast.promise(registerUser(payload), {
      loading: 'Creating account...',
      success: () => {
        reset();

        window.location.href = '/login';

        return 'Account created successfully!';
      },
      error: (err) => err.response?.data?.message || 'Signup failed',
    });
  };

  return (
    <div className="flex items-center justify-center rounded-[20px] bg-lightGray p-6">
      <div className="w-full max-w-md space-y-5 rounded-[30px] bg-white p-4">
        {/* Header */}
        <div className="text-center">
          <MainText text="Welcome to MaskHR" bold />
          <MainText text="Redefining remote work" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-start text-[16px] font-bold leading-[22px]">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="text-mainGray placeholder:text-mainGray/50 rounded-[10px] border-none p-[14px] shadow-custom-primary focus:outline-none"
              {...register('fullName', {
                required: 'Full Name is required',
              })}
            />
            {errors.fullName && (
              <p className="text-xs text-red-400">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-start text-[16px] font-bold leading-[22px]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="text-mainGray placeholder:text-mainGray/50 rounded-[10px] border-none p-[14px] shadow-custom-primary focus:outline-none"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email',
                },
              })}
            />
            {errors.email && (
              <p className="text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-start text-[16px] font-bold leading-[22px]">
              Password
            </label>{' '}
            <input
              type="password"
              placeholder="Enter your password"
              className="text-mainGray placeholder:text-mainGray/50 rounded-[10px] border-none p-[14px] shadow-custom-primary focus:outline-none"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Minimum 6 characters',
                },
              })}
            />
            {errors.password && (
              <p className="text-xs text-red-400">{errors.password.message}</p>
            )}
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              {...register('agree', {
                required: 'You must accept the terms',
              })}
            />
            I agree to the terms
          </label>

          {errors.agree && (
            <p className="text-xs text-red-400">{errors.agree.message}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="w-full rounded-[10px] bg-mainBlack p-2 text-white disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
