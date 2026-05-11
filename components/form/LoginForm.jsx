'use client';

import React from 'react';
import MainText from '../typography/MainText';
import { useForm } from 'react-hook-form';
import { loginUser } from '@/services/auth/authService';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };

    await toast.promise(loginUser(payload), {
      loading: 'Logging in...',
      success: (res) => {
        const { accessToken, user } = res.data;

        if (!accessToken) throw new Error('Login failed');

        localStorage.setItem('token', accessToken);
        localStorage.setItem('user', JSON.stringify(user));

        if (user.role === 'admin') {
          window.location.href = '/dashboard/admin';
        } else {
          window.location.href = '/dashboard';
        }

        return 'Login successful!';
      },
      error: (err) => err.message || 'Login failed',
    });
  };

  return (
    <div className="flex items-center justify-center rounded-[20px] bg-lightGray p-6">
      <div className="w-full max-w-md space-y-5 rounded-[30px] bg-white p-4">
        {/* Header */}
        <div className="text-center">
          <MainText text="Welcome Back" bold />
          <MainText text="Login to continue" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="text-mainGray placeholder:text-mainGray/50 rounded-[10px] border-none p-[14px] shadow-custom-primary focus:outline-none"
              {...register('password', {
                required: 'Password is required',
              })}
            />
            {errors.password && (
              <p className="text-xs text-red-400">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="w-full rounded-[10px] bg-mainBlack p-2 text-white disabled:opacity-50"
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
