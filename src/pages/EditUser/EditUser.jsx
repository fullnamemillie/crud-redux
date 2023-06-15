import React from "react";
import InputField from "../../components/Input/InputField";
import Button from "../../components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../redux/slices/userSlice";

const EditUser = () => {
  const navigate = useNavigate();

  const params = useParams();
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const existingUser = users.filter(user => user.id === params.id);
  const { name, email } = existingUser[0];

  const [values, setValues] = React.useState({
    name: name,
    email: email,
  });

  const handleEditUser = () => {
    setValues({
      name: "",
      email: "",
    });

    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );

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
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
