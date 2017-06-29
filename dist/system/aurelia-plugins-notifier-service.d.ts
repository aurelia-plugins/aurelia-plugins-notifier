export declare class NotifierService {
    _config: any;
    _cssAnimator: any;
    _container: any;
    _notifications: any[];
    constructor(config: any, cssAnimator: any);
    clear(): void;
    danger(title: any, message: any, options: {}, event: any): void;
    info(title: any, message: any, options: {}, event: any): void;
    muted(title: any, message: any, options: {}, event: any): void;
    notify(title: any, message: any, options: any, event: any): void;
    primary(title: any, message: any, options: {}, event: any): void;
    remove(): void;
    secondary(title: any, message: any, options: {}, event: any): void;
    success(title: any, message: any, options: {}, event: any): void;
    warn(title: any, message: any, options: {}, event: any): void;
    _createContainer(position: any): void;
    _createElement(text: any, className: any, notification: any): void;
    _createNotification(title: any, message: any, type: any, event: any): HTMLLIElement;
    _removeContainer(): void;
    _removeNotification(notification: any): Promise<void>;
    _showNotification(notification: any, options: any): void;
}
