import {MouseEventHandler} from 'react';
import { FormErrors } from '../rehoming/constants/formQuestions';
import { AxiosError } from 'axios';

export interface CustomButtonProps {
    content: string;
    btnStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface form_data {
    name : string;
    type : string;
    breed : string;
    color : string;
    gender : string;
    age : string;
    medical_condition : string;
    reason : string;
    petImgUrl: string;
    owner: string;
    characteristics : string[];
    [key: string]: any; // Add an index signature to allow dynamic keys
}

export interface FormProps {
    formData: form_data;
    formErrors?: FormErrors;
    imageError?: string;
    imageProps?: string;
    handleFormInput(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void;
    handleNext?: () => void;
    handlePrevious?: () => void;
    handleImageInput?(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void;
}

export interface FormTextFieldProps {
    fieldTitle : string;
    value: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>) : void;
    field_id : string;
    placeholder?: string;
}

export interface FormRadioFieldProps {
    fieldTitle : string;
    value: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>) : void;
    option_1 : string;
    option_2 : string;
    option_3? : string;
    option_4? : string;
    field_id : string;
}

export interface UserDataResponse {
    user: userData | null;
    error: AxiosError | null;
}

export interface userData {
    email: string;
}