import { useState, useCallback } from "react";
import { useSelector } from 'react-redux';

export default (initialValues) => {
    const [formValues, setFormValues] = useState({ ...initialValues });

    const { editInputValue: editValue } = useSelector(state => state.todoPage);

    const handleForFieldChange = useCallback((event) => {
        const { value, name } = event.target;

        const stateCopy = { ...formValues };

        stateCopy[name] = value;

        setFormValues(stateCopy);
    }, [formValues]);


    const handleForFieldClick = useCallback((event) => {
        if (event) {
            const { name } = event.target;

            const stateCopy = { ...formValues };

            stateCopy[name] = editValue;

            setFormValues(stateCopy);
        }
    }, [formValues, editValue]);


    const handleFormReset = useCallback(() => {
        setFormValues(initialValues);
    }, [initialValues]);

    const handleFormSubmit = useCallback(() => {
    }, []);

    return [formValues, handleForFieldChange, handleForFieldClick, handleFormReset, handleFormSubmit];
}