import { UserDetails } from "../Types/Data";

export const getUserDetails = (): UserDetails => {
    const userDetails = localStorage.getItem('user_details')?.split(',') ?? [undefined, undefined, undefined];
    return {
        email: userDetails[0],
        grade: userDetails[1],
        engineer: userDetails[2] ? userDetails[2] === 'true' : undefined
    }
}

export const setUserDetails = (email?: string, grade?: string, engineer?: boolean): void => {
    localStorage.setItem('user_details', `${email},${grade},${engineer}`);
}