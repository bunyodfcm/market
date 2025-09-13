import { useState, useEffect } from "react";

interface DelayedMountProps {
  children: React.ReactNode;
  delay: number; // kechikish (ms)
  onFinish?: () => void; // delay tugaganda ishlaydigan callback
}

export default function DelayedMount({ children, delay, onFinish }: DelayedMountProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
      onFinish?.();
    }, delay);

    return () => clearTimeout(timer); // cleanup
  }, [delay, onFinish]);

  if (!isMounted) return null;

  return <>{children}</>;
}
