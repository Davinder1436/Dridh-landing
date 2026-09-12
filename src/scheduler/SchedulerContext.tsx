import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

interface SchedulerApi {
  isOpen: boolean
  open: () => void
  close: () => void
}

const Ctx = createContext<SchedulerApi | null>(null)

export function SchedulerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false)
  const open = useCallback(() => setOpen(true), [])
  const close = useCallback(() => setOpen(false), [])
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useScheduler(): SchedulerApi {
  const v = useContext(Ctx)
  if (!v) throw new Error('useScheduler must be used inside <SchedulerProvider>')
  return v
}
