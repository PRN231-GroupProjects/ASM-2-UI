import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function AuthProvider({ children }: React.PropsWithChildren) {

    const navigate = useNavigate()

    useEffect(() => {
        const user = localStorage.getItem('account')
        if (!user) {
            navigate('/')
        }
    }, [])


    return (
        <>
            {children}
        </>
    )
}