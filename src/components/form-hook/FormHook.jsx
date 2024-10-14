"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const FormHook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    const [fileName, setFileName] = useState('');
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };
    const handleButtonClick = () => {
        document.getElementById('file').click();
    };

    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className='w-[583px]'>
                <h2 className='font-bold text-white text-[38px] text-center'>Let's Connect</h2>
                <div className='mt-8'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                className='font-normal py-[10px] px-[14px] border-b text-white placeholder:text-white border-white bg-transparent outline-none text-lg leading-170 w-full'
                                type="text"
                                placeholder='First name'
                                {...register("firstname", { required: "First name is required" })}
                            />
                            {errors.firstname && <span className="text-red-500 pl-[14px] pt-1">{errors.firstname.message}</span>}
                        </div>
                        <div className='mt-10'>
                            <input
                                className='font-normal py-[10px] px-[14px] border-b text-white placeholder:text-white border-white bg-transparent outline-none text-lg leading-170 w-full'
                                type="text"
                                placeholder='Last name'
                                {...register("lastname", { required: "Last name is required" })}
                            />
                            {errors.lastname && <span className="text-red-500 pl-[14px] pt-1">{errors.lastname.message}</span>}
                        </div>
                        <div className='mt-10'>
                            <input
                                className='font-normal py-[10px] px-[14px] border-b text-white placeholder:text-white border-white bg-transparent outline-none text-lg leading-170 w-full'
                                type="email"
                                placeholder='Email address'
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                        message: "Please enter a valid email address"
                                    }
                                })}
                            />
                            {errors.email && <span className="text-red-500 pl-[14px] pt-1">{errors.email.message}</span>}
                        </div>
                        <div className='mt-10'>
                            <div className="border-b border-white w-full px-[14px] pb-2">
                                <input
                                    type="file"
                                    id="file"
                                    className="hidden"
                                    onChange={handleFileChange}
                                    {...register("file", { required: "Please Choose the file" })}

                                />
                                <div className="flex justify-between items-center">
                                    <input
                                        type="text"
                                        id="file-name"
                                        className="placeholder:text-white text-white bg-transparent focus:outline-none w-full text-lg leading-170"
                                        value={fileName}
                                        placeholder="Upload cover letter & resume"
                                        readOnly
                                    />
                                    <div
                                        className="text-white leading-170 text-base text-nowrap py-[4.5px] px-[18px] bg-[#33B6FF] rounded-[4px] cursor-pointer"
                                        onClick={handleButtonClick}>
                                        Choose File
                                    </div>
                                </div>
                            </div>
                            {errors.file && <span className="text-red-500 pl-[14px] pt-1">{errors.file.message}</span>}
                        </div>
                        <div className="mt-10">
                            <div className='text-lg leading-170 text-white'>Why are you interested in working at Zoplenti?</div>
                            <textarea
                                name="textarea"
                                className='h-[152px] border mt-[10px] border-white rounded-[10px] resize-none w-full bg-transparent outline-none text-white p-4'
                                {...register("textarea", { required: "Please provide your reason for interest" })}
                            />
                            {errors.textarea && <span className="text-red-500 pl-[14px] pt-1">{errors.textarea.message}</span>}
                        </div>
                        <div className='mt-10 text-center'>
                            <button type="submit" className='px-4 py-3 rounded-[4px] bg-[#33B6FF] leading-170 text-base font-bold text-white'>Submit  &gt;</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormHook;