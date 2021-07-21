import React from 'react'

export default function Form(props) {
    const { 
        values,
        change,
        submit,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        
        <form className='form container' onSubmit={onSubmit}>
            <h2>Add a User</h2>
            <div>
                <label>Full Name&nbsp;
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                    {errors.name}
                </label>
            </div>
            <div>
                <label>Email Address&nbsp;
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='email'
                    />
                    {errors.email}
                </label>
            </div>
            <div>
                <label>Birthday&nbsp;
                    <input
                        value={values.birthday}
                        onChange={onChange}
                        name='birthday'
                        type='date'
                    />
                    {errors.birthday}
                </label>
            </div>
            <div>
                <label>User Role&nbsp;
                    <select
                        value={values.userRole}
                        onChange={onChange}
                        name='userRole'
                    >
                        <option value=''>- Select an Option -</option>
                        <option value='warlock'>Warlock</option>
                        <option value='paladin'>Paladin</option>
                        <option value='ranger'>Ranger</option>
                        <option value='bard'>Bard</option>
                        <option value='wizard'>Wizard</option>
                    </select>
                    {errors.userRole}
                </label>
            </div>
            <div>
                <label>Profile Picture&nbsp;
                    <input
                        value={values.profilePic}
                        onChange={onChange}
                        name='profilePic'
                        type='file'
                    />
                    {errors.profilePic}
                </label>
            </div>
            <div>
                <label>Username&nbsp;
                    <input
                        value={values.username}
                        onChange={onChange}
                        name='username'
                        type='text'
                    />
                    {errors.username}
                </label>
            </div>
            <div>
                <label>Password&nbsp;
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='password'
                    />
                    {errors.password}
                </label>
            </div>

            
                
                


            <div>
                <button disabled={disabled}>Submit</button>
            </div>
            
        </form>
    )

}