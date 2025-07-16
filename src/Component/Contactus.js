import { useState } from "react";
import "./Contact.css";

function Contactus() {
  const [formdata, setFormdata] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    address: "",
    country: "",
    subscribe:""
  });
  const[errors , setErrors]= useState({});
  const onhandlesubmit = (event) => {

    event.preventDefault();
    console.log(formdata);
    setErrors({});
    if(formdata.fname === ''|| formdata.fname === null ||  !isNaN(formdata.fname)){
      setErrors({
        err1:"**First name can not be blank or not a number"
      })
    }
    else if (formdata.password.length <=3 || formdata.password.length >= 9) {
       setErrors({
        err2 :"**Password must be at least 6 characters"
      })
        
  }
  };
  const onhandlechange = (event) => {
    setFormdata({
      ...formdata,
      [event.target.name]:event.target.type === 'checkbox'?event.target.checked: event.target.value,
    });
  };
  return (
    <>
      <p className="text-center fs-3 fw-bold text-primary">Contact Us Page</p>
      <form className="contact-form" onSubmit={onhandlesubmit}>
        <input name="fname" value={formdata.fname} onChange={onhandlechange} />{errors && <span className="text-danger">{errors.err1}</span>}
        <br />
        <br />
        <input
          name="lname"
          value={formdata.lname}
          onChange={onhandlechange}
        />{" "}
        <br />
        <br />
        <input
          name="email"
          value={formdata.email}
          onChange={onhandlechange}
        />{" "}
        <br />
        <br />
        <input
          type="password"
          name="password"
          value={formdata.password}
          onChange={onhandlechange}
        />{errors && <span className="text-danger">{errors.err2}</span>}
        <br />
        <br />
        <textarea rows={5} cols={10} name="address" onChange={onhandlechange} />
        <br />
        <br />
        <select
          name="country"
          value={formdata.country}
          onChange={onhandlechange}
        >
          <option value="USA">USA</option>
          <option value="Uk">Uk</option>
          <option value="INDIA">INDIA</option>
          <option value="JAPAN">JAPAN</option>
        </select>
        <br />
        <br />
        <input
        name="subscribe"
        // value={formdata.subscribe}
        checked={formdata.subscribe}
        type="checkbox"
        onChange={onhandlechange}/> Subscribe to Newsletter
         <br />
        <br />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <p>{JSON.stringify(formdata)}</p>
        {/* used to convert object to string  */}
      </form>
    </>
  );
}
export default Contactus;
