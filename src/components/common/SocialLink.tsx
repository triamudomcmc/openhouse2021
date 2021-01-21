import Image from 'next/image'

export const SocialLink = () => (
  <div className="flex flex-row pt-8 space-x-4 md:hidden">
    <div>
      <Image src="/assets/vectors/facebook.svg" width={40} height={41} />
    </div>
    <div>
      <Image src="/assets/vectors/instagram.svg" width={40} height={41} />
    </div>
    <div>
      <Image src="/assets/vectors/twitter.svg" width={40} height={41} />
    </div>
    <div>
      <Image src="/assets/vectors/youtube.svg" width={40} height={41} />
    </div>
  </div>
)
