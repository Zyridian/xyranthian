export type ToastVariants = "success" | "error" | "info";

export interface ShowToastInput extends Pick<ToastProps, "content" | "variant"> {
    /**
     * Duration for toast notificaiton
     */
    duration?: number;
}

export interface ToastContextValue {
    /**
     * Callback function to show toast notification
     */
    showToast: (toast: ShowToastInput) => void;
}

export interface ToastInstance extends ShowToastInput {
    /**
     * The unique identifier for the toast notification
     */
    id: string;
}

export interface ToastProps extends React.AriaAttributes {
    /**
     * Description text in the alert
     * @default ""
     */
    content?: React.ReactNode;
    /**
     * A unique identifier for an HTML element
     */
    id?: string;
    /**
     * Communicates the purpose of a component for
     * assistive technologies.
     * @default "alert"
     */
    role?: React.AriaRole;    
    /**
     * The variant of the Toast notification.
     * @default "info"
     */
    variant?: ToastVariants;
}
