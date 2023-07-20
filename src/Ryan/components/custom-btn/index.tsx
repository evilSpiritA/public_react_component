// ver 1.0 by ryan
import './style.scss';
import { useState, useEffect } from 'react';
import { clsx } from "clsx";

type T_ItemProps = {
    className?: string;
    href?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    width?: string;
    radius?: string;
    startIcon?: any;
    endIcon?: any;
    variant?: "contained" | "outlined" | 'text';
    themeColor?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    spinnerClassName?: string;
    spinnerColor?: string;
    spinnerSize?: string;
};

const CustomBtn: React.FC<T_ItemProps> = (
    { className, spinnerClassName, themeColor, spinnerColor, spinnerSize, href, isLoading, isDisabled,
        variant = 'contained', radius, width, startIcon, endIcon, onClick, children }
) => {

    const [isHovering, setIsHovering] = useState(false);
    const [finalThemeColor, setFinalThemeColor] = useState('#b3d6dd');
    const [finalSpinnerColor, setFinalSpinnerColor] = useState('#474bff');

    useEffect(() => {
        if (themeColor != undefined) useColor('themeColor', themeColor);
        if (spinnerColor != undefined) useColor('spinnerColor', spinnerColor);
    }, [themeColor, spinnerColor])

    const containedStyle = {
        backgroundColor: finalThemeColor,
        opacity: isDisabled ? '1' : isHovering ? '0.3' : '1',
    };

    const outlinedStyle = {
        backgroundColor: isDisabled ? 'var(--disable)' : isHovering ? finalThemeColor : '#fff',
        border: '1px solid ' + finalThemeColor,
    };

    const textStyle = {
        backgroundColor: '#fff',
    };

    const variantMap: { contained: Object, outlined: Object, text: Object } = {
        contained: containedStyle,
        outlined: outlinedStyle,
        text: textStyle,
    };

    const aContainedStyle = {};

    const aOutlinedStyle = {
        color: (isHovering || isDisabled) ? '#fff' : finalThemeColor,
    };

    const aTextStyle = {
        color: finalThemeColor,
    };

    const aVariantMap: { contained: Object, outlined: Object, text: Object } = {
        contained: aContainedStyle,
        outlined: aOutlinedStyle,
        text: aTextStyle,
    };

    function useColor(type: string, themeColor: string) {
        let isValidColorCode = false;
        if (themeColor.startsWith('#')) {
            const colorRegex = new RegExp(/(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^)]*\)/);
            isValidColorCode = colorRegex.test(themeColor?.toLocaleLowerCase());
        }
        if (type == 'themeColor') {
            const madeColor = isValidColorCode ? themeColor : '#b3d6dd';
            setFinalThemeColor(madeColor);
        } else if (type = 'spinnerColor') {
            const madeColor = isValidColorCode ? themeColor : '#474bff';
            setFinalSpinnerColor(madeColor);
        }
    }

    return (
        <div
            className={clsx('defaultStyle', variant, className, isDisabled && 'isDisabledStyle')}
            style={{
                ...variantMap[variant],
                borderRadius: radius + "px",
                width: width,
            }}
            onMouseOver={() => { setIsHovering(true) }}
            onMouseOut={() => { setIsHovering(false) }}
            onClick={isDisabled ? (e) => { e.preventDefault() } : onClick}
        >
            <a
                href={href || undefined}
                style={aVariantMap[variant]}
            >
                {isLoading && <div className={clsx("spinner", spinnerClassName)} style={{ borderColor: finalSpinnerColor, width: spinnerSize }}></div>}
                {startIcon && <div className="startIconStyle">{startIcon}</div>}
                <span>{children || 'BUTTON'}</span>
                {endIcon && <div className="endIconStyle">{endIcon}</div>}
            </a>
        </div>
    )
}

export default CustomBtn;