interface BadgeProps {
  children: React.ReactNode;
  color?: "purple" | "cyan" | "emerald" | "orange" | "red";
  className?: string;
}

const colors = {
  purple: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  cyan: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  emerald: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  orange: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  red: "bg-red-500/15 text-red-300 border-red-500/30",
};

export default function Badge({ children, color = "purple", className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[color]} ${className}`}>
      {children}
    </span>
  );
}
