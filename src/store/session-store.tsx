import { createContext, type ReactNode, use, useReducer } from 'react';

//Session Types
export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};
type SessionState = {
  upcomingSessions: Session[];
};

//Context Type
type SessionContextType = SessionState & {
  bookSession: (session: Session) => void;
  cancelSession: (sessionId: string) => void;
};

//Action Types
type BookSessionAction = {
  type: 'session/book';
  payload: Session;
};
type CancelSessionAction = {
  type: 'session/cancel';
  payload: string;
};
type SessionAction = BookSessionAction | CancelSessionAction;

//Provider Type
type SessionProviderProps = { children: ReactNode };

//MAIN Context
const SessionContext = createContext<SessionContextType | null>(null);

//Reducer
function sessionReducer(state: SessionState, action: SessionAction) {
  switch (action.type) {
    case 'session/book':
      if (
        state.upcomingSessions.some(
          (session) => session.id === action.payload.id
        )
      )
        return state;

      return {
        ...state,
        upcomingSessions: [...state.upcomingSessions, action.payload],
      };

    case 'session/cancel':
      return {
        ...state,
        upcomingSessions: state.upcomingSessions.filter(
          (session) => session.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

function SessionProvider({ children }: SessionProviderProps) {
  const [{ upcomingSessions }, dispatch] = useReducer(sessionReducer, {
    upcomingSessions: [],
  });

  function bookSession(session: Session) {
    dispatch({ type: 'session/book', payload: session });
  }

  function cancelSession(sessionId: string) {
    dispatch({ type: 'session/cancel', payload: sessionId });
  }

  return (
    <SessionContext.Provider
      value={{
        upcomingSessions,
        bookSession,
        cancelSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = use(SessionContext);

  if (!context) throw new Error("useSession used ouside it's provider");

  return context;
}

export default SessionProvider;
