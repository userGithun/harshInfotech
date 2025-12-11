import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getProfile,
  updateProfile,
  changeFullName,
  changePhoneNumber,
  changeEmail,
  changePassword,
} from "../redux/action/ProfileAction/ProfileAction";
import { logout } from "../redux/reducer/AuthSlice/AuthSlice";
import AuthButton from "../components/layout/AuthButton";
import FormInput from "../utils/form-input";
import { toast } from "react-toastify";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: profile, loading } = useSelector((state) => state.profile);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    countryCode: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setFormData((prev) => ({
        ...prev,
        fullName: profile.fullName || "",
        phoneNumber: profile.phoneNumber || "",
        countryCode: profile.countryCode || "",
        email: profile.email || "",
      }));
    }
  }, [profile]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!profile) return;

    const updates = {};
    Object.keys(formData).forEach((key) => {
      if (
        ["fullName", "phoneNumber", "countryCode", "email"].includes(key) &&
        formData[key] !== profile[key]
      ) {
        updates[key] = formData[key];
      }
    });

    if (Object.keys(updates).length === 0) {
      toast.info("No changes detected.");
      return;
    }

    // handle one field change
    if (Object.keys(updates).length === 1) {
      if (updates.fullName) {
        dispatch(changeFullName(updates.fullName))
          .unwrap()
          .then(() => toast.success("Name changed successfully"))
          .catch(() => toast.error("Failed to change name"));
      } else if (updates.phoneNumber || updates.countryCode) {
        dispatch(
          changePhoneNumber({
            phoneNumber: updates.phoneNumber || profile.phoneNumber,
            countryCode: updates.countryCode || profile.countryCode,
          })
        )
          .unwrap()
          .then(() => toast.success("Phone number changed successfully"))
          .catch(() => toast.error("Failed to change phone number"));
      } else if (updates.email) {
        dispatch(changeEmail(updates.email))
          .unwrap()
          .then(() => toast.success("Email changed successfully"))
          .catch(() => toast.error("Failed to change email"));
      }
    } else {
      // handle multiple updates
      dispatch(updateProfile(updates))
        .unwrap()
        .then(() => toast.success("Profile updated successfully"))
        .catch(() => toast.error("Failed to update profile"));
    }

    setIsEditing(false);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      toast.info("New passwords do not match");
      return;
    }

    const data = {
      oldPassword: formData.oldPassword,
      newPassword: formData.newPassword,
      confirmPassword: formData.confirmPassword,
    };

    dispatch(changePassword(data))
      .unwrap()
      .then(() => {
        toast.success("Password changed successfully!");
        setFormData((prev) => ({
          ...prev,
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        }));
      })
      .catch((err) => {
        toast.error(
          err?.message || "Failed to change password"
        );
      });
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    toast.success("Logged Out Successfully");
  };

  if (loading && !profile) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen px-16 py-12 bg-neutral-50">
      <h1 className="text-3xl font-bold text-primary mb-8">My Profile</h1>
      <p className="text-neutral-600 mb-12 max-w-xl">
        Manage your account information
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Profile info section */}
        <section className="col-span-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-title text-xl text-primary">
              Personal Information
            </h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-sm text-primary hover:text-primary-red underline-transition"
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <FormInput
              label="Full Name"
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              disabled={!isEditing}
            />

            <FormInput
              label="Email Address"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="Country Code"
                type="text"
                id="countryCode"
                value={formData.countryCode}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
              <FormInput
                label="Phone Number"
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>

            {isEditing && <AuthButton type="submit">Save Changes</AuthButton>}
          </form>
        </section>

        {/* Password + logout section */}
        <div className="col-span-1 flex flex-col">
          <section className="mt-12">
            <h2 className="font-title text-xl text-primary mb-6">
              Change Password
            </h2>
            <form className="space-y-6" onSubmit={handlePasswordChange}>
              <FormInput
                label="Current Password"
                type="password"
                id="oldPassword"
                value={formData.oldPassword}
                onChange={handleInputChange}
              />
              <FormInput
                label="New Password"
                type="password"
                id="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
              />
              <FormInput
                label="Confirm New Password"
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <AuthButton type="submit">Update Password</AuthButton>
            </form>
          </section>

          <section className="mt-12">
            <h2 className="font-title text-xl text-primary mb-4">
              Account Actions
            </h2>
            <div className="flex gap-4">
              <button
                onClick={handleLogout}
                className="block text-sm text-primary-red underline-transition"
              >
                Sign Out
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
