import { FormEvent, useEffect, useRef } from 'react';
import Modal, { ModalHandle } from '../../components/ui/Modal';
import { Session, useSession } from '../../store/session-store';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

type BookSessionProps = {
  session: Session;
  onClose: () => void;
};

function BookSession({ session, onClose }: BookSessionProps) {
  const modalRef = useRef<ModalHandle>(null);
  const { bookSession } = useSession();

  useEffect(function () {
    if (modalRef.current) modalRef.current.open();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // const formData = new FormData(e.currentTarget);
    // const data = Object.fromEntries(formData);

    bookSession(session);

    onClose();
  }

  return (
    <Modal ref={modalRef} onClose={onClose}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input label='Your name' name='name' type='test' />
        <Input label='Your email' name='email' type='email' />

        <p className='actions'>
          <Button type='button' textOnly onClick={onClose}>
            Cancel
          </Button>

          <Button>Submit</Button>
        </p>
      </form>
    </Modal>
  );
}

export default BookSession;
