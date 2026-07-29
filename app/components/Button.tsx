export function PrimaryButton({ children, ...props }: React.ComponentProps<"button">) {
  return (
    <button {...props} className={`cursor-grab active:cursor-grabbing bg-accent text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity ${props.className ?? ""}`}>
      {children}
    </button>
  );
}

export function SecondaryButton({ children, ...props }: React.ComponentProps<"button">) {
  return (
    <button {...props} className={`cursor-grab active:cursor-grabbing border border-zinc-300 dark:border-zinc-700 px-6 py-3 rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors ${props.className ?? ""}`}>
      {children}
    </button>
  );
}
