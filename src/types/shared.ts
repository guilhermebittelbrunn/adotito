export enum NotificationTypeEnum {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export interface INotification {
  title: string;
  description?: string;
  associationId?: string;
  userId?: string;
  type: NotificationTypeEnum;
  createdAt: Date;
}