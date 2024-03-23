import { capitalize } from '../../utils'
import { FunctionComponent, ReactNode } from 'react'

interface ProfileCardProps {
  avatarImage: string
  profileName: string
  profileEmail: string
}

export const ProfileCard: FunctionComponent<ProfileCardProps> = ({
  avatarImage,
  profileName,
  profileEmail
}: ProfileCardProps): ReactNode => {
  return (
    <>
      <div className="flex justify-between pl-1">
        <div className="flex p-4">
          <img
            className="inline-block h-11 w-11 rounded-full ring-2 ring-white"
            src={avatarImage}
            alt="User Avatar"
          />
          <div className="flex flex-col justify-start ml-2 p-1">
            <p className="text-gray-900 leading-none font-bold text-left">
              {capitalize(profileName)}
            </p>
            <p className="text-gray-400 text-sm text-left py-1">
              {capitalize(profileEmail)}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
