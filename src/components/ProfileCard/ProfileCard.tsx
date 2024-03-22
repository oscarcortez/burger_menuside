import { AiFillCloseCircle } from 'react-icons/ai'

import { Avatar } from '../Avatar/Avatar'

export const ProfileCard = ({
  avatarImage,
  profileName,
  profileEmail
}: {
  avatarImage: string
  profileName: string
  profileEmail: string
}) => {
  return (
    <>
      <div className="flex justify-between bg-gray-200 pl-1">
        <div className="flex">
          <Avatar image={avatarImage} alt={profileName} />
          <span className="mr-3"></span>
          <div className="flex flex-col justify-start">
            <p className="text-gray-900 leading-none font-bold text-left">
              {profileName}
            </p>
            <p className="text-gray-600 text-sm text-left">{profileEmail}</p>
          </div>
        </div>
        <div className="flex flex-col justify-end items-center">
          <AiFillCloseCircle size={30} className="cursor-pointer mb-1" />
        </div>
      </div>
    </>
  )
}
