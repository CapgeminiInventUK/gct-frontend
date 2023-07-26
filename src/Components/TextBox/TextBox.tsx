import { ChangeEvent } from 'react';
import styles from './TextBox.module.scss'

const TextBox = ({ defaultValue, active, setActive, handleOnChange }: { defaultValue: string, active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>>, handleOnChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }): JSX.Element => {
    return (
        <textarea
            className={`${active ? styles.textBoxActive : styles.textBox} ${defaultValue.length > 0 ? styles.hasContent : ''}`}
            defaultValue={defaultValue}
            onChange={handleOnChange}
            onFocus={(): void => setActive(true)}
            onBlur={(): void => setActive(false)}
        />
    )
}

export default TextBox;