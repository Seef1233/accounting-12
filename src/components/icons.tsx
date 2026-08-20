import type { ComponentType } from "react";

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconLedger({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M8 5h13a2 2 0 0 1 2 2v18l-3.5-2-3.5 2-3.5-2-3.5 2V8a3 3 0 0 1 3-3Z" />
      <path d="M12 12h7M12 16h7M12 20h4" />
    </svg>
  );
}

export function IconPercent({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M7 8h18M7 24l18-18" />
      <circle cx="11.5" cy="11.5" r="3.2" />
      <circle cx="20.5" cy="20.5" r="3.2" />
    </svg>
  );
}

export function IconFolderChart({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M5 9a2 2 0 0 1 2-2h5l2.4 3H25a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z" />
      <path d="M11 22v-6M16 22v-9M21 22v-4" />
    </svg>
  );
}

export function IconBulbChat({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M16 6a7 7 0 0 0-4 12.7V22h8v-3.3A7 7 0 0 0 16 6Z" />
      <path d="M13.5 26h5M14.5 22h3" />
    </svg>
  );
}

export function IconWallet({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M5 11a3 3 0 0 1 3-3h15a2 2 0 0 1 2 2v3" />
      <path d="M5 11v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V15a2 2 0 0 0-2-2H8a3 3 0 0 1-3-3Z" />
      <circle cx="22.5" cy="19" r="1.6" />
    </svg>
  );
}

export function IconCompass({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="16" cy="16" r="11" />
      <path d="m19.5 12.5-2.2 5.8-5.8 2.2 2.2-5.8Z" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M16 5.5 25 9v7.2c0 6-4 9.7-9 11.3-5-1.6-9-5.3-9-11.3V9Z" />
      <path d="m12.2 16 2.6 2.6 5-5" />
    </svg>
  );
}

export function IconMortarboard({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M16 8 4 13.5 16 19l12-5.5Z" />
      <path d="M9.5 16.3v5.4c0 1.8 3 3.8 6.5 3.8s6.5-2 6.5-3.8v-5.4" />
      <path d="M25.5 14v6.5" />
    </svg>
  );
}

export function IconSpark({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M16 5v6M16 21v6M5 16h6M21 16h6" />
      <path d="M8.5 8.5 13 13M23.5 8.5 19 13M8.5 23.5 13 19M23.5 23.5 19 19" />
    </svg>
  );
}

export function IconHandshake({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 15h5l3.5-3 3 2.5 3.5-3H24l4 4-4.5 4.5-2-1.6" />
      <path d="m10.5 16 5 4.8a1.8 1.8 0 0 0 2.6-2.4M13 20.2a1.8 1.8 0 0 0 2.6 2.4l1-.9" />
      <path d="M4 15v7h3M28 15v7h-3" />
    </svg>
  );
}

export const iconMap: Record<string, ComponentType<IconProps>> = {
  ledger: IconLedger,
  percent: IconPercent,
  folder: IconFolderChart,
  bulb: IconBulbChat,
  wallet: IconWallet,
  compass: IconCompass,
  shield: IconShield,
  mortarboard: IconMortarboard,
  spark: IconSpark,
  handshake: IconHandshake,
};
