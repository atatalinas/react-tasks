import { useState, useCallback } from "react";

export default (initialValues) => {
    const [formValues, setFormValues] = useState({ ...initialValues });

    const handleForFieldChange = useCallback((event) => {
        const { value, name } = event.target;

        const stateCopy = { ...formValues };

        stateCopy[name] = value;

        setFormValues(stateCopy);
    }, [formValues]);

    const handleFormReset = useCallback(() => {
        setFormValues(initialValues);
    }, [initialValues]);

    const handleFormSubmit = useCallback(() => {
    }, [formValues]);

    return [formValues, handleForFieldChange, handleFormReset, handleFormSubmit];
}