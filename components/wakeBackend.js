'use client';

import { useEffect } from 'react';
import { wakeBackendService } from '@/services/auth/wakeBackendService';

export default function WakeBackend() {
  useEffect(() => {
    const wake = async () => {
      const res = await wakeBackendService();

      if (res.success) {
        console.log('🔥 Backend awake:', res.data);
      } else {
        console.log('⚠️ Wake failed:', res.message);
      }
    };

    wake();
  }, []);

  return null;
}
