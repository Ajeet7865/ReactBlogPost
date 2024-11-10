import React, { useState } from 'react';

const SimpleReactForm = () => {
    const [formData, setFormData] = useState({
        fname: '',
        mname: '',
        lname: '',
        gender: '',
        country: '',
        terms: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Form validation function
    const validateForm = () => {
        const newErrors = {};

        if (!formData.fname) {
            newErrors.fname = 'First name is required';
        } else if (formData.fname.length < 3) {
            newErrors.fname = 'Minimum length is 3';
        } else if (formData.fname.length > 6) {
            newErrors.fname = 'Maximum length is 6';
        }

        if (!formData.mname) {
            newErrors.mname = 'Middle name is required';
        } else if (!/^[A-Za-z]+$/.test(formData.mname)) {
            newErrors.mname = 'Name must be a valid string';
        }

        if (!formData.lname) {
            newErrors.lname = 'Last name is required';
        }

        if (!formData.gender) {
            newErrors.gender = 'Gender is required';
        }

        if (!formData.country) {
            newErrors.country = 'Country is required';
        }

        if (!formData.terms) {
            newErrors.terms = 'You must accept the terms';
        }

        return newErrors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setIsSubmitting(true);
            console.log("Form is submitting...");

            await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulating async operation

            console.log(formData);
            setIsSubmitting(false);
            setFormSubmitted(true);
        }
    };

    if (formSubmitted) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                <div className="alert alert-success text-center" role="alert">
                    <h3>Form has been successfully submitted!</h3>
                </div>
            </div>
        );
    } else {
        return (
            <form onSubmit={handleSubmit}>
                <h1 className="mb-4">Simple React Form</h1>

                <div className="form-row">
                    {/* First Name */}
                    <div className="form-group col-md-4">
                        <label htmlFor="fname">First Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.fname ? 'is-invalid' : ''}`}
                            id="fname"
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                        />
                        {errors.fname && <p className="text-danger">{errors.fname}</p>}
                    </div>

                    {/* Middle Name */}
                    <div className="form-group col-md-4">
                        <label htmlFor="mname">Middle Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.mname ? 'is-invalid' : ''}`}
                            id="mname"
                            name="mname"
                            value={formData.mname}
                            onChange={handleChange}
                        />
                        {errors.mname && <p className="text-danger">{errors.mname}</p>}
                    </div>

                    {/* Last Name */}
                    <div className="form-group col-md-4">
                        <label htmlFor="lname">Last Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.lname ? 'is-invalid' : ''}`}
                            id="lname"
                            name="lname"
                            value={formData.lname}
                            onChange={handleChange}
                        />
                        {errors.lname && <p className="text-danger">{errors.lname}</p>}
                    </div>
                </div>

                {/* Gender Radio Buttons */}
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Gender</label>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="male"
                                name="gender"
                                value="male"
                                checked={formData.gender === "male"}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="female"
                                name="gender"
                                value="female"
                                checked={formData.gender === "female"}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                        {errors.gender && <p className="text-danger">{errors.gender}</p>}
                    </div>

                    {/* Country Dropdown */}
                    <div className="form-group col-md-4">
                        <label htmlFor="country">Country</label>
                        <select
                            className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option value="">Select a Country</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="India">India</option>
                            <option value="UK">UK</option>
                        </select>
                        {errors.country && <p className="text-danger">{errors.country}</p>}
                    </div>
                </div>

                {/* Terms Checkbox */}
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
                                id="terms"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="terms">I agree to the terms and conditions</label>
                        </div>
                        {errors.terms && <p className="text-danger">{errors.terms}</p>}
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
        );
    }
};

export default SimpleReactForm;
