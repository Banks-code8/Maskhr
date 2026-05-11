import DoublePageBorders from '@/components/Wrappers/DoublePageBorders';
import LoginForm from '@/components/form/LoginForm';

export const metadata = {
  title: 'Mask HR',
  description: 'Login to Mask HR',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <DoublePageBorders>
        <LoginForm />
      </DoublePageBorders>
    </div>
  );
}
