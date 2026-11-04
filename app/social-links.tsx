import { socialLinks } from "./site-links";

type SocialNetwork = (typeof socialLinks)[number]["network"];

function SocialIcon({ network }: { network: SocialNetwork }) {
  if (network === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2.5" y="5" width="19" height="14" rx="4" />
        <path className="social-icon-cutout" d="m10 9 5 3-5 3z" />
      </svg>
    );
  }

  if (network === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="social-icon-fill" cx="17.5" cy="6.8" r="1" />
      </svg>
    );
  }

  if (network === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 3v11.2a4.2 4.2 0 1 1-3.5-4.1v3.2a1.2 1.2 0 1 0 .5 1V3h3c.2 2.2 1.5 3.8 3.8 4.3v3.1A8 8 0 0 1 14 8.8" />
      </svg>
    );
  }

  if (network === "bluesky") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 11.2C10.8 8.9 7.5 4.7 5 3.4 2.6 2.2 2 3.7 2.2 5.1c.3 2.5 1.1 5.3 4.7 6.4-3.1-.4-5.8.4-5.3 3.7.6 3.4 4.5 4.4 8.1.5-2.1 3.5-.9 6.9 2.3 6.9s4.4-3.4 2.3-6.9c3.6 3.9 7.5 2.9 8.1-.5.5-3.3-2.2-4.1-5.3-3.7 3.6-1.1 4.4-3.9 4.7-6.4.2-1.4-.4-2.9-2.8-1.7-2.5 1.3-5.8 5.5-7 7.8Z" />
      </svg>
    );
  }

  if (network === "linkedin") {
    return <span className="social-letter social-letter--linkedin" aria-hidden="true">in</span>;
  }

  if (network === "pinterest") {
    return <span className="social-letter social-letter--pinterest" aria-hidden="true">P</span>;
  }

  if (network === "quora") {
    return <span className="social-letter social-letter--quora" aria-hidden="true">Q</span>;
  }

  if (network === "facebook") {
    return <span className="social-letter social-letter--facebook" aria-hidden="true">f</span>;
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 4h3.8l10.2 16h-3.8L5 4Zm13.5 0L5 20" />
    </svg>
  );
}

export function SocialLinks({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <nav
      aria-label="Mạng xã hội"
      className={`social-links${compact ? " social-links--compact" : ""}`}
    >
      {socialLinks.map(({ name, network, url }) => (
        <a
          aria-label={`Mở ${name}`}
          className="social-link"
          href={url}
          key={network}
          rel="noreferrer"
          target="_blank"
          title={name}
        >
          <span className="social-icon">
            <SocialIcon network={network} />
          </span>
          <span className="social-name">{name}</span>
          {!compact && <span className="social-arrow" aria-hidden="true">↗</span>}
        </a>
      ))}
    </nav>
  );
}
