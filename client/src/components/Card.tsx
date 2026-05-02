type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border border-gray-300
        p-[clamp(1rem,1.5vw,1.5rem)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}