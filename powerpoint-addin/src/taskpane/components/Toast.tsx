import { useEffect, useState } from "react";

interface ToastProps {
  message: string | null;
  type: "success" | "error";
}

export function Toast({ message, type }: ToastProps) {
  const [visible, setVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);

  useEffect(() => {
    if (message) {
      setCurrentMessage(message);
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!visible || !currentMessage) return null;

  return (
    <div className={`toast ${type}`}>
      <span>{type === "success" ? "\u2705" : "\u274C"}</span>
      <span>{currentMessage}</span>
    </div>
  );
}
