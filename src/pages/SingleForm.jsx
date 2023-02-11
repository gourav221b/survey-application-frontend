import React, { useContext, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import FormContext from "../context/FormContext";
const SingleForm = () => {
  const location = useLocation();
  const params = useParams();
  const { formList } = useContext(FormContext);
  const [form, setForm] = useState(formList.filter((x) => x.id == params?.id));
  console.log(form);
  return (
    <div>
      {formList
        .filter((x) => x.id == params?.id)
        .map((form) => (
          <>
            <div>{form.formTitle}</div>
            <div>{form.formDescription}</div>
          </>
        ))}
    </div>
  );
};

export default SingleForm;
