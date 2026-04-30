import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3l7 3v6c0 4.5-2.7 7.8-7 9-4.3-1.2-7-4.5-7-9V6l7-3Z" />
      <path d="M9.5 12l1.7 1.7L14.8 10" />
    </BaseIcon>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M16 21v-1.5A3.5 3.5 0 0 0 12.5 16H7.5A3.5 3.5 0 0 0 4 19.5V21" />
      <circle cx="10" cy="9" r="3" />
      <path d="M20 21v-1a3 3 0 0 0-2-2.83" />
      <path d="M15.5 4.5a3 3 0 0 1 0 5.83" />
    </BaseIcon>
  );
}

export function SproutIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21v-8" />
      <path d="M12 13c0-4 2.5-7 7-8-1 5-4 8-8 8h1Z" />
      <path d="M12 13c0-3-2-5.5-6-7 0 4.5 2 7 6 7Z" />
    </BaseIcon>
  );
}

export function HeartHandshakeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8.5 11.5 6 14a2 2 0 0 0 2.8 2.8l1.9-1.9" />
      <path d="m12.5 13.5 1.7 1.7a2 2 0 0 0 2.8-2.8L14 9.4a2 2 0 0 0-2.8 0l-3.1 3.1a2 2 0 0 1-2.8 0l-.3-.3a2 2 0 0 1 0-2.8L7.6 6.8a4 4 0 0 1 5.7 0l.7.7.7-.7a4 4 0 0 1 5.7 5.7L18.3 15" />
    </BaseIcon>
  );
}

export function FileSearchIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5" />
      <circle cx="11" cy="13" r="2.5" />
      <path d="m13 15 1.8 1.8" />
    </BaseIcon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </BaseIcon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </BaseIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.8a2 2 0 0 1-.6 1.7l-1.2 1.2a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 1.7-.6l2.8.4A2 2 0 0 1 22 16.9Z" />
    </BaseIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </BaseIcon>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11 10.13 11.93v-8.43H7.08v-3.5h3.05V9.41c0-3.03 1.79-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.5h-2.79V24C19.61 23.07 24 18.09 24 12.07Z" />
    </svg>
  );
}

export const iconMap = {
  Shield: ShieldIcon,
  Users: UsersIcon,
  Sprout: SproutIcon,
  HeartHandshake: HeartHandshakeIcon,
  FileSearch: FileSearchIcon,
};
