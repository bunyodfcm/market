import React, { createContext, useContext } from 'react';

interface TooltipContextType {
  delay: number;
  variant: 'dark' | 'light';
  position: 'top' | 'bottom' | 'left' | 'right';
}

const TooltipContext = createContext<TooltipContextType>({
  delay: 0,
  variant: 'dark',
  position: 'top',
});

export const useTooltipContext = () => useContext(TooltipContext);

interface TooltipProviderProps {
  children: React.ReactNode;
  defaultDelay?: number;
  defaultVariant?: 'dark' | 'light';
  defaultPosition?: 'top' | 'bottom' | 'left' | 'right';
}

export const TooltipProvider: React.FC<TooltipProviderProps> = ({
  children,
  defaultDelay = 0,
  defaultVariant = 'dark',
  defaultPosition = 'top',
}) => {
  const value: TooltipContextType = {
    delay: defaultDelay,
    variant: defaultVariant,
    position: defaultPosition,
  };

  return (
    <TooltipContext.Provider value={value}>{children}</TooltipContext.Provider>
  );
};
