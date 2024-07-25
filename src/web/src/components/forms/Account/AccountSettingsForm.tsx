import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z, ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "react-bootstrap";

interface AccountSettingsFormProps {
    initialValues: {
        userName: string;
        profilePicture: File | null;
        realName: string;
        email: string;
        phoneNumber: string;
        timeZoneId: string;
        emailNotification: boolean;
        smsNotification: boolean;
    };
    timeZoneList: SelectListOption[];
    onSubmit: (values: UserProfile) => void;
}

const schema: ZodSchema = z.object({
    userName: z.string().min(1, "User Name is required"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    realName: z.string().optional(),
    phoneNumber: z.string().optional(),
    timeZoneId: z.string().optional(),
    emailNotification: z.boolean().optional(),
    smsNotification: z.boolean().optional()
});

const AccountSettingsForm: React.FC<AccountSettingsFormProps> = ({ initialValues, timeZoneList, onSubmit }) => {
    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues: initialValues,
        resolver: zodResolver(schema)
    });

    const onSubmitHandler = (data: any) => {
        onSubmit(data);
    };

    return (
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="container-fluid AccountSettings-box">
                        <div className="AccountSettings-header">
                            <h4>Account Settings</h4>
                        </div>
                        <div className="AccountSettings-body">
                            <form onSubmit={handleSubmit(onSubmitHandler)}>
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <div className="input-box">
                                            <label>User Name</label>
                                            <Controller
                                                name="userName"
                                                control={control}
                                                render={({ field }) => (
                                                    <input
                                                        type="text"
                                                        placeholder="User Name"
                                                        {...field}
                                                    />
                                                )}
                                            />
                                            {errors.userName && <div className="error">{errors.userName.message}</div>}
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="input-box file-input-box">
                                            <label>Upload Profile Picture</label>
                                            <Controller
                                                name="profilePicture"
                                                control={control}
                                                render={({ field: { onChange } }) => (
                                                    <input
                                                        type="file"
                                                        onChange={(event) => {
                                                            const file = event.target.files ? event.target.files[0] : null;
                                                            onChange(file);
                                                        }}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="input-box">
                                            <label>Real Name</label>
                                            <Controller
                                                name="realName"
                                                control={control}
                                                render={({ field }) => (
                                                    <input
                                                        type="text"
                                                        placeholder="Real Name"
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="input-box">
                                            <label>Email Address</label>
                                            <Controller
                                                name="email"
                                                control={control}
                                                render={({ field }) => (
                                                    <input
                                                        type="email"
                                                        placeholder="Email Address"
                                                        {...field}
                                                        disabled
                                                    />
                                                )}
                                            />
                                            {errors.email && <div className="error">{errors.email.message}</div>}
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="input-box">
                                            <label>Phone Number</label>
                                            <Controller
                                                name="phoneNumber"
                                                control={control}
                                                render={({ field }) => (
                                                    <input
                                                        type="text"
                                                        placeholder="Phone Number"
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="input-box">
                                            <label>Time Zone</label>
                                            <Controller
                                                name="timeZoneId"
                                                control={control}
                                                render={({ field }) => (
                                                    <select
                                                        className="form-control"
                                                        style={{ height: "34px", borderRadius: "0px !important" }}
                                                        {...field}
                                                    >
                                                        <option value="">Select TimeZone</option>
                                                        {timeZoneList.map((tz) => (
                                                            <option key={tz.value} value={tz.value}>
                                                                {tz.text}
                                                            </option>
                                                        ))}
                                                    </select>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-check my-3">
                                    <Controller
                                        name="emailNotification"
                                        control={control}
                                        render={({ field }) => (
                                            <input
                                                id="emailNotification"
                                                type="checkbox"
                                                className="form-check-input"
                                                checked={field.value}
                                                onChange={field.onChange}
                                                onBlur={field.onBlur}
                                                disabled={field.disabled}
                                            />
                                        )}
                                    />
                                    <label className="form-check-label custom-label">
                                        Allow email notification for menu inquiries, company updates, and
                                        general information. Disabling this feature will remove with
                                        customer and admin.
                                    </label>
                                </div>
                                <div className="form-check">
                                    <Controller
                                        name="smsNotification"
                                        control={control}
                                        render={({ field }) => (
                                            <input
                                                id="smsNotification"
                                                type="checkbox"
                                                className="form-check-input"
                                                checked={field.value}
                                                onChange={field.onChange}
                                                onBlur={field.onBlur}
                                                disabled={field.disabled}
                                            />
                                        )}
                                    />
                                    <label className="form-check-label custom-label">
                                        Allow SMS notification for order status.
                                    </label>
                                </div>
                                <div className='d-flex flex-row-reverse mt-3'>
                                    <Button type="submit" className="btn btn-success" disabled={isSubmitting}>
                                        {isSubmitting ? <span className="spinner-border spinner-border-sm"></span> : ' Update Setting'}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccountSettingsForm;