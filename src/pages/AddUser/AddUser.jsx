import React from "react";
import InputField from "../../components/Input/InputField";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/userSlice";
import { nanoid } from 'nanoid';

const AddUser = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({
      name: "",
      email: "",
    });

    dispatch(
      addUser({
        id: nanoid(),
        name: values.name,
        email: values.email,
      })
    );

    console.log(values);

    navigate("/");
  };

  return (
    <div className="my-5">
      <InputField
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        label="Name"
        inputProps={{ type: "text", placeholder: "Alex Ivanov" }}
      />
      <InputField
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        label="Email"
        inputProps={{ type: "email", placeholder: "alex@test.com" }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
