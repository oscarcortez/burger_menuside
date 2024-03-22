export const Avatar = ({ image, alt }: { image?: string; alt: string }) => {
  return (
    <>
      <img
        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        src={image}
        alt={alt}
      />
    </>
  )
}
