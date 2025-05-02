import { useEffect, useRef } from 'react';
import Modal, { ModalHandle } from '../../components/ui/Modal';
import Button from '../../components/ui/Button';
import { useSession } from '../../store/session-store';
import UpcomingSession from './UpcomingSession';

type UpcomingSessionsProps = {
  onClose: () => void;
};

function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  const modalRef = useRef<ModalHandle>(null);
  const { upcomingSessions } = useSession();

  const hasSessions = upcomingSessions.length > 0;

  useEffect(function () {
    if (modalRef.current) modalRef.current.open();
  }, []);

  return (
    <Modal ref={modalRef} onClose={onClose}>
      <h2>Upcoming Sessions</h2>

      {hasSessions && (
        <ul>
          {upcomingSessions.map((session) => (
            <UpcomingSession key={session.id} session={session} />
          ))}
        </ul>
      )}

      {!hasSessions && <p>No upcoming sessions.</p>}

      <div className='actions'>
        <Button onClick={onClose} type='button'>
          Close
        </Button>
      </div>
    </Modal>
  );
}

export default UpcomingSessions;
