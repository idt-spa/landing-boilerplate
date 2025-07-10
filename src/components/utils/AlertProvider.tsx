"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { useTranslations } from "next-intl";

type AlertType = "success" | "error";

interface AlertMessage {
  id: number;
  type: AlertType;
  message: string;
}

interface AlertContextType {
  success: (msg: string) => void;
  error: (msg: string) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const t = useTranslations("Alert");
  const [alerts, setAlerts] = useState<AlertMessage[]>([]);

  const showAlert = (type: AlertType, message: string) => {
    const id = Date.now();
    setAlerts((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    }, 3000); // auto-dismiss after 3 sec
  };

  const success = (msg: string) => showAlert("success", msg);
  const error = (msg: string) => showAlert("error", msg);

  return (
    <AlertContext.Provider value={{ success, error }}>
      {children}
      <div
        className={`fixed top-12 inset-0 ${alerts.length > 0 ? "z-50" : "z-0"} flex items-center flex-col  gap-2`}
      >
        {alerts.map(({ id, type, message }) => (
          <Alert
            className={`${type === "success" ? "bg-green-100" : "bg-red-100"} max-w-lg opacity-90`}
            key={id}
            variant={type === "error" ? "destructive" : "default"}
          >
            {type === "success" ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <AlertTriangle className="h-5 w-5" />
            )}
            <AlertTitle>
              {type === "success" ? t("success") : t("error")}
            </AlertTitle>
            <AlertDescription>
              {message ||
                (type === "success" ? t("successMessage") : t("errorMessage"))}
            </AlertDescription>
          </Alert>
        ))}
      </div>
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context)
    throw new Error("useAlert must be used within an AlertProvider");
  return context;
};
