import { ReactNode } from "react"

interface FaqRootProps {
  children: ReactNode
}

export default function FaqRoot({ children }: FaqRootProps) {
  return (
    <div className="text-white mt-24 xl:mx-auto xl:w-[1200px]">{children}</div>
  )
}