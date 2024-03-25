import { FunctionComponent, ReactNode } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

interface ProfileCardProps {
  avatarImage: string
  profileName: string
  profileEmail: string
  onClose: () => void
}

export const ProfileCard: FunctionComponent<ProfileCardProps> = ({
  avatarImage,
  profileName,
  profileEmail,
  onClose
}): ReactNode => {
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
              {profileName}
            </p>
            <p className="text-gray-400 text-sm text-left py-1">
              {profileEmail}
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 py-6 pr-4">
          <AiOutlineCloseCircle
            onClick={onClose}
            size={25}
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  )
}
