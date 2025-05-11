"use client"

import {
    createContext,
    useContext,
    useState,
    useCallback,
    type ReactNode,
    JSX,
} from "react";
import Toast from "./Toast";
import { ShowToastInput, ToastContextValue, ToastInstance } from "./types";
import "../../foundations/global.css"
import styles from "./styles.module.css";
  
let toastIdCounter = 0;
  
const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function useToast(): ToastContextValue {
    const ctx = useContext(ToastContext);
    if (!ctx) {
        throw new Error("useToast must be used within a ToastProvider")
    };
    return ctx;
}

export function ToastProvider({ children }: { children: ReactNode }): JSX.Element {
    const [toasts, setToasts] = useState<ToastInstance[]>([]);

    const showToast = useCallback(({ content, variant = "info", duration = 5000 }: ShowToastInput) => {
        const id = `toast-${toastIdCounter++}`;
        const newToast: ToastInstance = { id, content, variant, duration };

        setToasts((prev) => [...prev, newToast]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, duration);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className={styles.provider}>
                {toasts.map(({ id, content, variant }) => (
                <Toast key={id} id={id} content={content} variant={variant} />
                ))}
            </div>
        </ToastContext.Provider>
    );
}
