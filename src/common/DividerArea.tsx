

interface DividerAreaProps {
  className?: string;
}

export default function DividerArea({ className }: DividerAreaProps) {
  return (
    <div className={`container ${className || ''}`}>
      <div className="divider3"></div>
    </div>
  )
}
