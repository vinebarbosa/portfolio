import Image from 'next/image'

export const DevImg = ({
  containerStyles,
  imgSrc,
}: Record<'containerStyles' | 'imgSrc', string>) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill alt="" />
    </div>
  )
}
