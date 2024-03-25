import { FunctionComponent, ReactNode } from 'react'

interface MainContentProps {
    children: ReactNode
}

export const MainContent: FunctionComponent<MainContentProps> = ({
    children
}: MainContentProps): ReactNode => {
    return (
        <div className="w-full h-full p-4 relative border">
            {children}
        </div>
    )
}