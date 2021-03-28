import React, { memo } from 'react';

import { ButtonContainer, LinkContainer } from './styles';

type Props = {
    color?: string,
    onClick?(): void,
    disabled?: boolean,
    isLink?: boolean
};

const Button: React.FC<Props> = ({
    children,
    color,
    onClick,
    disabled,
    isLink
}) => (
    <>
        {
            !isLink ?
                <ButtonContainer
                    color={color}
                    onClick={!disabled ? onClick : undefined}
                    className={disabled ? 'disabled' : ''}
                >
                    {children}
                </ButtonContainer>
                :
                <LinkContainer
                    onClick={!disabled ? onClick : undefined}
                    className={disabled ? 'disabled' : ''}
                >
                    {children}
                </LinkContainer>
        }
    </>
);

export default memo(Button) as React.FC<Props>;