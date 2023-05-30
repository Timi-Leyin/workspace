import { create } from 'zustand'

const useStepStore = create((set) => ({
  step: 1,
  stepUp: () => set((state: { step: number }) => ({ step: state.step + 1 })),
  stepUDown: () => set((state: { step: number }) => ({ step: state.step - 1 })),
  setStep:(step:number)=> set({ step}),
  clear: () => set({ step: 1 }),
}))

export default useStepStore