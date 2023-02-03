export const handleClose = (id) => {
    setShow((prevState) => ({ ...prevState, [id]: false }));
};