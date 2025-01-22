
import { useForm } from "react-hook-form";

export const Form = () => {
    const formGroup = useForm();

    const { register, handleSubmit, formState } = formGroup;
    const { errors } = formState;

    const onSubmit = (data) => {
        console.log(data);

    }

    return (<>
        <div className="container text-center formParent">
            <h2>This is react form component</h2>
            <div className="form-container text-left m-5">
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group m-5">
                        <label className='pb-2' htmlFor="regName">Name</label>
                        <input type="text" id="regName" {...register("regName", { required: { value: true, message: 'Enter your Name' } })} className="form-control" />
                        <p>{errors.regName?.message}</p>
                    </div>
                    <div className="form-group m-5 ">
                        <label className='pb-2' htmlFor="eMail">Email Id</label>
                        <input type="text" id="eMail" {...register("regMail",
                            {
                                required: { value: true, message: 'Enter your regMail' },
                                pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Enter your corret Mail' }
                            }
                        )} className="form-control" />
                        <p>{errors.regMail?.message}</p>
                    </div>
                    <div className="form-group m-5">
                        <label className='pb-2' htmlFor="regPhone">Phone Number</label>
                        <input type="text" id="regPhone" {...register("regPhone", {
                            required: { value: true, message: 'Enter your regNum' },
                            pattern: { value: /^[6-9]\d{9}$/, message: 'Enter your corret Number' }
                        }
                        )} className="form-control" />
                        <p>{errors.regPhone?.message}</p>
                    </div>
                    <div className="form-group m-5">
                        <label className='pb-2' htmlFor="regPhone">Password</label>
                        <input type="text" id="regPass" {...register("regPass", { required: { value: true, message: 'Enter your regPass' } })} className="form-control" />
                        <p>{errors.regPass?.message}</p>
                    </div>
                    <div className="form-group m-5">
                        <label className='pb-2' htmlFor="regConfPass">Confirm Password</label>
                        <input type="text" id="regConfPass" {...register("regConfPass", { required: { value: true, message: 'Enter your regConfPass' } })} className="form-control" />
                        <p>{errors.regConfPass?.message}</p>
                    </div>
                    <button className="btn btn-danger mb-5">Submit</button>

                </form>

            </div>
        </div>
    </>)
}