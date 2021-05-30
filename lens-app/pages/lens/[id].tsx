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
    <LensView
      data={data}
    />
  )
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (context) => {
  const res = await fetch(`http://localhost:3000/api/lensById/${context.query.id}`);
  const data = await res.json();
  const name = data.lens ? `Lens: ${data.lens.id}` : 'Lens 404';

  return {
    props: {
      pageTag: 'view',
      name,
      data: data.lens ? data.lens : null
    }
  }
}
