import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getAppointment } from "../redux/action/AppointmentAction/AppointmentAction";
import { toast } from "react-toastify";
import { countryCodes } from "../data/countryCode";

const Appointment = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      dob: "",
      appointmentDate: "",
      appointmentTime: "",
      countryCode: "+977",
      appointmentType: "virtual",
      service: "suit",
      expectedDate: "",
    },
  });

  const onSubmit = (data) => {
    const payload = {
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      dob: data.dob,
      countryCode: data.countryCode,
      appointmentType: data.appointmentType,
      whatAreYouLookingFor: data.service,
      expectedDateOfDelivery: data.expectedDate,
      date: data.appointmentDate,
      time: data.appointmentTime,
    };

    dispatch(getAppointment(payload))
      .unwrap()
      .then(() => {
        toast.success("Appointment sent successfully!");
        reset();
      })
      .catch((err) => toast.error(err?.message || "Appointment failed"));
  };
  const selectedCountryCode = watch("countryCode");

  return (
    <div className="flex flex-col gap-8 bg-white mt-24">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 mx-6 md:mx-24 lg:mx-32 xl:mx-48"
      >
        <div>
          <h2 className="text-2xl text-gray-800 mb-6">Your Info</h2>
          <div className="space-y-4">
            <div>
              <input
                {...register("fullName", { required: "Full Name is required" })}
                placeholder="Full Name *"
                className={`w-full border ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } p-3 text-gray-700 focus:outline-none`}
              />
              {errors.fullName && (
                <p className="text-primary-red text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Email *"
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } p-3 text-gray-700 focus:outline-none`}
              />
              {errors.email && (
                <p className="text-primary-red text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <div className="relative w-1/3">
                <select
                  {...register("countryCode")}
                  onChange={(e) => setValue("countryCode", e.target.value)}
                  className="w-full border border-gray-300 p-3 text-gray-700 focus:outline-none bg-white appearance-none"
                >
                  {countryCodes.map((country) => (
                    <option key={country.isoCode} value={country.dialCode}>
                      {country.dialCode} ({country.name})
                    </option>
                  ))}
                </select>
              </div>

              <input
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                })}
                type="tel"
                placeholder="Phone Number *"
                className={`w-2/3 border ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                } p-3 text-gray-700 focus:outline-none`}
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-primary-red text-sm mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
            <div>
              <p className="text-sm text-gray-500 mb-1">Date of Birth</p>
              <input
                {...register("dob", { required: "Date of Birth is required" })}
                type="date"
                className={`w-full border ${
                  errors.dob ? "border-red-500" : "border-gray-300"
                } p-3 text-gray-700 focus:outline-none`}
              />
              {errors.dob && (
                <p className="text-primary-red text-sm mt-1">
                  {errors.dob.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-gray-800 mb-6">Your Appointment</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Appointment Date</p>
              <input
                {...register("appointmentDate", {
                  required: "Appointment Date is required",
                })}
                type="date"
                className={`w-full border ${
                  errors.appointmentDate ? "border-red-500" : "border-gray-300"
                } p-3 text-gray-700 focus:outline-none`}
              />
              {errors.appointmentDate && (
                <p className="text-primary-red text-sm mt-1">
                  {errors.appointmentDate.message}
                </p>
              )}
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Appointment Time</p>
              <input
                {...register("appointmentTime", {
                  required: "Appointment Time is required",
                })}
                type="time"
                className={`w-full border ${
                  errors.appointmentTime ? "border-red-500" : "border-gray-300"
                } p-3 text-gray-700 focus:outline-none`}
              />
              {errors.appointmentTime && (
                <p className="text-primary-red text-sm mt-1">
                  {errors.appointmentTime.message}
                </p>
              )}
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Appointment Type</p>
              <select
                {...register("appointmentType")}
                className="w-full border border-gray-300 p-3 text-gray-700 focus:outline-none bg-white"
              >
                <option value="virtual">Virtual</option>
                <option value="atTheStudio">At the Studio</option>
              </select>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Service</p>
              <select
                {...register("service", { required: "Service is required" })}
                className="w-full border border-gray-300 p-3 text-gray-700 focus:outline-none bg-white"
              >
                <option value="suit">Suit</option>
                <option value="shirt">Shirt</option>
                <option value="trousers">Trousers</option>
                <option value="overcoat">Overcoat</option>
                <option value="others">Others</option>
              </select>
              {errors.service && (
                <p className="text-primary-red text-sm mt-1">
                  {errors.service.message}
                </p>
              )}
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Expected Date</p>
              <input
                {...register("expectedDate")}
                type="date"
                placeholder="Expected Delivery Date"
                className="w-full border border-gray-300 p-3 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-gray-800 mb-6">Confirm Booking</h2>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 hover:bg-black transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
