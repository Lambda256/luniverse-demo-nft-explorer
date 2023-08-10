import React, { useEffect } from "react";
import {
	Input,
	InputBox,
	InputLabel,
	RequiredStar,
} from "./InputComponent.styled";

interface InputProps {
	id: string;
	label: string;
	placeHolder?: string;
	type?: string;
	refValue: React.RefObject<HTMLInputElement>;
	required?: boolean;
	defaultValue?: string;
	readOnly?: boolean;
}

const InputComponent: React.FC<InputProps> = ({
	id,
	label,
	placeHolder,
	type = "text",
	refValue,
	required,
	defaultValue,
	readOnly,
}) => {
	function handleOnChange() {
		if (!refValue.current) return;
		if (refValue.current.value === "") {
			refValue.current.classList.remove("has-input");
		} else {
			refValue.current.classList.add("has-input");
		}
	}

	useEffect(() => {
		if (!refValue.current?.value) return;
		const inputValue = refValue.current.value;
		if (inputValue) refValue.current.classList.add("has-input");
	}, [refValue]);

	return (
		<InputBox>
			<Input
				id={id}
				type={type}
				required={required}
				placeholder={placeHolder}
				defaultValue={defaultValue}
				readOnly={readOnly}
				ref={refValue}
				onChange={handleOnChange}
				className={defaultValue && "has-input"}
			/>
			<InputLabel htmlFor={id}>
				{label}
				{required && <RequiredStar>*</RequiredStar>}
			</InputLabel>
		</InputBox>
	);
};

export default InputComponent;
