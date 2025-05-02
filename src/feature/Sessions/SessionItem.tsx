import Button from '../../components/ui/Button';

type SessionItemProps = {
  session: {
    id: string;
    title: string;
    summary: string;
    image: string;
  };
};

function SessionItem({ session }: SessionItemProps) {
  const { id, image, summary, title } = session;

  return (
    <li className='session-item'>
      <article>
        <img src={image} alt={title} />

        <div className='session-data'>
          <h3>{title}</h3>
          <p>{summary}</p>

          <div className='actions'>
            <Button to={id}>Learn More</Button>
          </div>
        </div>
      </article>
    </li>
  );
}

export default SessionItem;
