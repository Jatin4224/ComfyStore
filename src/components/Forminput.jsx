const FormInput = ({ label, name, type, defaultvalue }) => {
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text">{label}?</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultvalue}
        className="input input-bordered"
      />
    </div>
  );
};

export default FormInput;
