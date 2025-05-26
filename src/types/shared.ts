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
export interface IPicture {
  id: string;
  entityId: string;
  url: string;
  originalName: string;
  path: string;
  sequence: null;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
}

