import { GetServerSideProps } from 'next';
import { LensList } from '../types/lens';
import { default as DashboardComponent } from '../components/Dashboard';

interface ServerSideProps {
  name: string;
  data: LensList;
}

export default function Dashboard({ data }: ServerSideProps): JSX.Element {
  return (
    <div className="container">
      <DashboardComponent
        lens={data.lens}
      />
    </div>
  )
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps<ServerSideProps> = async () => {
  const res = await fetch('http://localhost:3000/api/lens');
  const data = await res.json();

  return {
    props: {
      name: 'Lens: Dashboard',
      data
    }
  }
}
