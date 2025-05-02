import Button from '../../components/ui/Button';
import { Session, useSession } from '../../store/session-store';

type UpcomingSessionProps = {
  session: Session;
};

function UpcomingSession({ session }: UpcomingSessionProps) {
  const { cancelSession } = useSession();

  const { title, summary, date, id } = session;

  return (
    <li>
      <article className='upcoming-session'>
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
          <time dateTime={new Date(date).toISOString()}>
            {new Date(date).toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </time>
        </div>

        <div className='actions'>
          <Button textOnly onClick={() => cancelSession(id)}>
            Cancel
          </Button>
        </div>
      </article>
    </li>
  );
}

export default UpcomingSession;
