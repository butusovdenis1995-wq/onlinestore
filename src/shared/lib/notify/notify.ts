import { toast } from "sonner";

const styles = {
  success: {
    position: "top-center",
    style: {
      background: "var(--color-toastSuccess-bg)",
      border: "1px solid var(--color-toastSuccess-border)",
      color: "var(--color-toastSuccess-text)",
      borderRadius: "12px",
      padding: "16px",
    },
    classNames: {
      description: "!text-[var(--color-toastSuccess-text)] opacity-100",
    },
  },
  warning: {
    position: "top-center",
    style: {
      background: "var(--color-toastWarning-bg)",
      border: "1px solid var(--color-toastWarning-border)",
      color: "var(--color-toastWarning-text)",
      borderRadius: "12px",
      padding: "16px",
    },
    classNames: {
      description: "!text-[var(--color-toastWarning-text)] opacity-100",
    },
  },
  error: {
    position: "top-center",
    style: {
      background: "var(--color-toastError-bg)",
      border: "1px solid var(--color-toastError-border)",
      color: "var(--color-toastError-text)",
      borderRadius: "12px",
      padding: "16px",
    },
    classNames: {
      description: "!text-[var(--color-toastWarning-text)] opacity-100",
    },
  },
} as const;

export const notifyToast = {
  success: (title: string, description?: string) =>
    toast.success(title, { ...styles.success, description }),
  warning: (title: string, description?: string) =>
    toast.warning(title, { ...styles.warning, description }),

  error: (title: string, description?: string) =>
    toast.error(title, { ...styles.error, description }),

  info: (title: string, description?: string) =>
    toast.info(title, { description }),
};

export type TNotify = typeof notifyToast;
