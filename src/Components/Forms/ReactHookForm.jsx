import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {

    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, } = useForm();
    const [formSubmitted, setFormSubmitted] = useState(false)

    async function onSubmit(data) {
        console.log("Form Is Submitting");
        await new Promise((resolve) => setTimeout(resolve, 5000));
        console.log(data);
        console.log("Form Submitting Successfully");
        setFormSubmitted(true);

    }
    if (formSubmitted) {
        return (

            <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                <div className="alert alert-success text-center" role="alert">
                    <h3> Form has been successfully submitted!</h3>
                </div>
            </div>
        )
    }
    else {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="mb-4">React Hook Form</h1>

                <div className="form-row">
                    {/* First Name */}
                    <div className="form-group col-md-4">
                        <label htmlFor="fname">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fname"
                            {...register('fname', {
                                required: { value: true, message: 'First name is required' },
                                minLength: { value: 3, message: 'Minimum length is 3' },
                                maxLength: { value: 6, message: 'Maximum length is 6' }
                            })}
                        />
                        {errors.fname && <p className="text-danger">{errors.fname.message}</p>}
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="mname">Middle Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="mname"
                            {...register('mname', {
                                required: "Middle Name Is Required",
                                pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: 'Name must be a valid string'
                                }
                            })}
                        />
                        {errors.mname && <p className="text-danger">{errors.mname.message}</p>}
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="lname">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lname"
                            {...register('lname', {
                                required: {
                                    value: true, message: 'Last Name is required'
                                }
                            })
                            }
                        />
                        {errors.lname && <p className="text-danger">{errors.lname.message}</p>}
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Gender</label>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="male"
                                {...register("gender", { required: "Gender is required" })}
                                value="male"
                            />
                            <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="female"
                                {...register("gender", { required: "Gender is required" })}
                                value="female"
                            />
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                        {errors.gender && <p className="text-danger">{errors.gender.message}</p>}
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="country">Country</label>
                        <select
                            className="form-control"
                            id="country"
                            {...register("country", { required: "Country is required" })}
                        >
                            <option value="">Select a Country</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="India">India</option>
                            <option value="UK">UK</option>
                        </select>
                        {errors.country && <p className="text-danger">{errors.country.message}</p>}
                    </div>
                </div>

                {/* Terms Checkbox */}
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="terms"
                                {...register("terms", { required: "You must accept the terms" })}
                            />
                            <label className="form-check-label" htmlFor="terms">I agree to the terms and conditions</label>
                        </div>
                        {errors.terms && <p className="text-danger">{errors.terms.message}</p>}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </div>
            </form>
        )
    }

}

export default ReactHookForm