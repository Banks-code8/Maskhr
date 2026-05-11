import { LogIn } from 'lucide-react';
import Link from 'next/link';

const LoginIcon = () => {
  return (
    <Link href="/login" className="p-2 hover:opacity-70">
      <LogIn size={22} />
    </Link>
  );
};

export default LoginIcon;
