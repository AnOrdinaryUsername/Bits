import { ChangeEvent } from 'react';

interface OnClickEvent {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface OnChangeEvent {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface OnSubmitEvent {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface OnToggleEvent {
    onToggle: (event: React.MouseEvent<MouseEvent>) => void;
}

export {
    OnClickEvent,
    OnChangeEvent,
    OnSubmitEvent,
    OnToggleEvent,
};
