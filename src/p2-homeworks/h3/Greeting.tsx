import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.trueClass   // need to fix with (?:)

    const onKeyPressAddUser = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addUser()

    return (
        <div className={s.mainClass}>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressAddUser}/>
            <span className={s.errorMessage}>{error}</span>
            <button onClick={addUser} className={s.buttonClass}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
