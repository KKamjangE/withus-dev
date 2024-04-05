import { EnvelopeIcon, KeyIcon, UserIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const CreateAccountPage = () => {
    const [profileImg, setProfileImg] = useState(null);
    return (
        <div className="flex flex-col items-center gap-12 mt-28">
            <form className="flex flex-col gap-3 w-full max-w-sm">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">
                        <span className="text-red-500">*</span>Email
                    </p>
                    <label className="input input-secondary flex items-center gap-2">
                        <EnvelopeIcon width={18} />
                        <input
                            type="text"
                            className="grow"
                            autoFocus
                            required
                            placeholder="name@work-email.com"
                        />
                    </label>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">
                        <span className="text-red-500">*</span>User Name
                    </p>
                    <label className="input input-secondary flex items-center gap-2">
                        <UserIcon width={18} />
                        <input
                            type="text"
                            className="grow"
                            required
                            placeholder="Superman"
                        />
                    </label>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">
                        <span className="text-red-500">*</span>Password
                    </p>
                    <label className="input input-secondary flex items-center gap-2">
                        <KeyIcon width={18} />
                        <input
                            type="password"
                            className="grow"
                            required
                            placeholder="password"
                        />
                    </label>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">
                        <span className="text-red-500">*</span>Password Check
                    </p>
                    <label className="input input-secondary flex items-center gap-2">
                        <KeyIcon width={18} />
                        <input
                            type="password"
                            className="grow"
                            required
                            placeholder="password check"
                        />
                    </label>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-semibold">Profile Image</p>
                    <div className="avatar placeholder self-center">
                        <div className="w-24 rounded-full bg-neutral-content">
                            {profileImg ? (
                                <img src="" alt="profile image" />
                            ) : (
                                <span className="text-sm">Superman</span>
                            )}
                        </div>
                    </div>
                    <input
                        type="file"
                        className="file-input file-input-bordered w-full max-w-sm"
                    />
                </div>
            </form>
            <button
                type="submit"
                className="btn btn-neutral text-lg font-medium max-w-sm"
            >
                새로운 계정 만들기
            </button>
        </div>
    );
};

export default CreateAccountPage;
