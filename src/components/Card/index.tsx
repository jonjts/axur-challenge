import React, { memo } from 'react';

import Button from '../Button';

import { Container, Footer } from './styles';

type Props = {
    bounce?: boolean,
    pointer?: boolean,
    onClick?(): void,
    showBackButton?: boolean,
    showSubmitButton?: boolean,
    submitButtonColor?: string,
    onBackClicked?(): void,
    onSubmitClicked?(): void,
    disableButtons?: boolean,
    submitText?: string,
    backText?: string
};

const Card: React.FC<Props> = ({
    children,
    bounce,
    pointer,
    onClick,
    showBackButton,
    showSubmitButton,
    onBackClicked,
    onSubmitClicked,
    submitButtonColor,
    backText,
    submitText,
    disableButtons
}) => (
    <Container
        className={bounce ? 'bounce' : ''}
        pointer={pointer}
        onClick={onClick}
    >
        {children}
        {
            (showBackButton || showSubmitButton) && (
                <Footer>
                    {showBackButton && (
                        <Button
                            isLink
                            disabled={disableButtons}
                            onClick={onBackClicked}
                        >
                            {backText}
                        </Button>
                    )}
                    {
                        showSubmitButton && (
                            <Button
                                color={submitButtonColor}
                                disabled={disableButtons}
                                onClick={onSubmitClicked}
                            >
                                {submitText}
                            </Button>
                        )}
                </Footer>
            )
        }
    </Container>
);

export default memo(Card) as React.FC<Props>;