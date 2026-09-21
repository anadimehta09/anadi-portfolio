/**
 * A button-styled link. If `href` is empty it renders a disabled,
 * non-clickable button instead of a broken link.
 */
export default function LinkButton({
  href,
  variant = "ghost",
  icon = null,
  download = false,
  external = true,
  missingLabel = "Link not added yet",
  children,
}) {
  const className = `btn btn-${variant}`;

  if (!href) {
    return (
      <span className={`${className} is-disabled`} aria-disabled="true" title={missingLabel}>
        {icon}
        {children}
      </span>
    );
  }

  return (
    <a
      className={className}
      href={href}
      download={download ? "" : undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
    >
      {icon}
      {children}
    </a>
  );
}
