import SessionItem from './SessionItem';

type SessionListProps = {
  sessions: {
    id: string;
    title: string;
    summary: string;
    image: string;
  }[];
};

function SessionList({ sessions }: SessionListProps) {
  return (
    <ul id='sessions-list'>
      {sessions.map((session) => (
        <SessionItem key={session.id} session={session} />
      ))}
    </ul>
  );
}

export default SessionList;
