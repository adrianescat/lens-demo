import { GetServerSideProps } from 'next';
import LensView from '../../components/LensView';
import { Lens } from '../../types/lens';

interface ServerSideProps {
  name: string;
  data: Lens;
}

export default function Dashboard({ data }: ServerSideProps): JSX.Element {
  if (!data) {
    return (<div>Lens not found</div>)
  }

  return (
    <div className="container" >
      <LensView
        data={data}
      />
    </div>
  )
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (context) => {
  const res = await fetch(`http://localhost:3000/api/lensById/${context.query.id}`);
  const data = await res.json();

  return {
    props: {
      pageTag: 'view',
      name: 'Lens: Dashboard',
      data: data.lens ? data.lens : null
    }
  }
}
