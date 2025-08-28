import * as React from 'react'
import styles from './IconButton.module.scss'

export type ButtonVariant = 'bluePrimary' | 'green' | 'purple'

interface IconButtonProps {
    text: string
    variant: ButtonVariant
    outline?: boolean
    iconPosition?: 'left' | 'right'
    /** Ícono desde /public o URL absoluta */
    iconSrc?: string
    iconAlt?: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    className?: string
    style?: React.CSSProperties
}

const IconButton: React.FC<IconButtonProps> = ({
    text,
    variant,
    outline = false,
    iconPosition = 'left',
    iconSrc,
    iconAlt = '',
    onClick,
    type = 'button',
    className,
    style,
}) => {
    const buttonClassName = [
        styles.button,
        styles[variant],
        outline ? styles.outline : '',
        className || '',
    ]
        .filter(Boolean)
        .join(' ')

    const iconClassName = [
        styles.icon,
        styles[
            `icon${iconPosition.charAt(0).toUpperCase()}${iconPosition.slice(
                1
            )}`
        ],
    ].join(' ')

    return (
        <button
            type={type}
            onClick={onClick}
            className={buttonClassName}
            style={style}
        >
            {iconSrc && (
                <img src={iconSrc} alt={iconAlt} className={iconClassName} />
            )}
            {text}
        </button>
    )
}

export default IconButton
