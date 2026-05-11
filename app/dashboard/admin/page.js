import DoublePageBorders from '@/components/Wrappers/DoublePageBorders';

export const metadata = {
  title: 'Mask HR',
  description: ' MaskHR Admin Dashboard',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <DoublePageBorders>
        <div>Admin Dashboard</div>
      </DoublePageBorders>
    </div>
  );
}
