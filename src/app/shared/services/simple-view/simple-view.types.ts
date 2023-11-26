export interface SimpleViewDialogConfig
{
    title?: string;
    id?: number;
    message?: string;
    actions?: {
        confirm?: {
            show?: boolean;
            label?: string;
            color?: 'primary' | 'accent' | 'warn';
        };
        cancel?: {
            show?: boolean;
            label?: string;
        };
        switchOrder?: boolean;
    };
}
