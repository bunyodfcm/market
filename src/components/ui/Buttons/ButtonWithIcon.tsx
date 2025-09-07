import React from 'react';

type ButtonWithIconProps = {
    icon: React.ReactNode;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
};

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
    icon,
    children,
    onClick,
    disabled = false,
    className = '',
    type = 'button',
}) => (
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center justify-center gap-2 px-6 py-4 rounded-md  text-gray-400 hover:bg-gray-100 border disabled:opacity-50 ${className}`}
    >
        <span className="flex items-center">{icon}</span>
        <span>{children}</span>
    </button>
);

export default ButtonWithIcon;