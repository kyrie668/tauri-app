'use client';
import React from 'react';
import { createContext, useReducer } from 'react';

interface IResumeLibaryProvide {
  children: React.ReactNode;
}
export const ResumeLibaryContext = createContext<any>(null);

interface IResumeLibaryState {
  requireAgainThreadId: string;
  current: number;
  filename: string;
  resumeCode: string;
  uploadTaskCode: string;
  isProcessing: boolean;
}

const initialState: IResumeLibaryState = {
  requireAgainThreadId: '',
  current: 1,
  filename: '',
  resumeCode: '',
  uploadTaskCode: '',
  isProcessing: false,
};

const ResumeLibaryProvide: React.FC<IResumeLibaryProvide> = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state: IResumeLibaryState, action: any) => ({ ...state, ...action }),
    initialState
  );
  return (
    <ResumeLibaryContext.Provider
      value={{
        resumeLibaryState: state,
        resumeLibaryDispatch: dispatch,
        resetState: () => dispatch(initialState),
      }}
    >
      {children}
    </ResumeLibaryContext.Provider>
  );
};

export default ResumeLibaryProvide;
