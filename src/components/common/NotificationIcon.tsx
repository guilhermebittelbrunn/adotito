import { NotificationTypeEnum } from "@/types";

function getNotificationIcon(type: NotificationTypeEnum) {
  switch (type) {
    case NotificationTypeEnum.SUCCESS:
      return (
        <span className="flex items-center justify-center w-12 h-12 rounded-full text-2xl text-green-600  dark:max-sm:bg-none">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </span>
      );
    case NotificationTypeEnum.INFO:
      return (
        <span className="flex items-center justify-center w-12 h-12 rounded-full text-2xl text-blue-600 dark:max-sm:bg-none">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        </span>
      );
    case NotificationTypeEnum.ERROR:
      return (
        <span className="flex items-center justify-center w-12 h-12 rounded-full text-2xl text-red-600 dark:max-sm:bg-none">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </span>
      );
    case NotificationTypeEnum.WARNING:
      return (
        <span className="flex items-center justify-center w-12 h-12 rounded-full text-2xl text-yellow-600 dark:max-sm:bg-none">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </span>
      );
    default:
      return null;
  }
}


export default function NotificationIcon({ type }: { type: NotificationTypeEnum }) {
  return (
    <div>
      {getNotificationIcon(type)}
    </div>
  )
}