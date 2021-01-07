import { ChangeEvent } from 'react';

interface OnChangeEvent {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface OnSubmitEvent {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export {
    OnChangeEvent,
    OnSubmitEvent
};
