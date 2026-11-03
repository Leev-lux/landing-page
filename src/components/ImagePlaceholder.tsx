interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  aspect?: string;
}

/**
 * Neutral placeholder used wherever a real Leev photo has not yet been supplied.
 * Renders a tasteful gradient tile with an optional caption. Replacing the
 * placeholder with a real image is done in the centralized data file, not here.
 */
export function ImagePlaceholder({ label, className = '', aspect = 'aspect-[4/3]' }: ImagePlaceholderProps) {
  return (
    <div
      className={`placeholder-tile relative w-full overflow-hidden ${aspect} ${className}`}
      role="img"
      aria-label={label}
    >
      <svg
        className="absolute inset-0 m-auto h-12 w-12 opacity-30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      {label && (
        <span className="absolute bottom-3 left-3 text-xs font-medium uppercase tracking-[0.18em] text-charcoal/45">
          {label}
        </span>
      )}
    </div>
  );
}
