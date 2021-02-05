import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ClubIndex = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center md:flex-col ">
        <div className="flex flex-wrap w-1/2 max-w-full space-y-4 md:space-y-0 md:flex-nowrap justify-end md:w-full md:flex-row">
          <Link href="clubs/boardgameclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/boardgameclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมห้องสมุด (บอร์ดเกม)</h1>
            </div>
          </Link>

          <Link href="clubs/mathclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/nok.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมคณิตศาสตร์</h1>
            </div>
          </Link>

          <Link href="clubs/triamudomsuksashortfilmclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image
                src="/assets/clubs/triamudomsuksashortfilmclub_image_1.jpg"
                width={200}
                height={137}
              />
              <h1 className="font-bold ">ชมรมภาพยนตร์สั้นเเละสื่อโทรทัศน์</h1>
            </div>
          </Link>

          <Link href="clubs/nitadesilp(zodotu)">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/nitadesilp(zodotu)_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมนิเทศศิลป (ZODUTU)</h1>
            </div>
          </Link>

          <Link href="clubs/tuartclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/tuartclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมศิลปศึกษา</h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap w-1/2 max-w-full space-y-4 md:space-y-0 md:flex-nowrap md:w-full md:flex-row">
          <Link href="clubs/koreanclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/koreanclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมสีสรรพ์ภาษาต่างประเทศที่ 2 (ภาษาเกาหลี)</h1>
            </div>
          </Link>

          <Link href="clubs/triamudomenglishdramaclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image
                src="/assets/clubs/triamudomenglishdramaclub_image_1.jpg"
                width={200}
                height={137}
              />
              <h1 className="font-bold ">ชมรมภาษาอังกฤษ (English Drama)_</h1>
            </div>
          </Link>

          <Link href="clubs/socialyouthassociation">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image
                src="/assets/clubs/socialyouthassociation_image_1.jpg"
                width={200}
                height={137}
              />
              <h1 className="font-bold ">ชมรมสังคมศึกษา (ภาคีสังคม)</h1>
            </div>
          </Link>

          <Link href="clubs/spanishclub(clubdeespañol)">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image
                src="/assets/clubs/spanishclub(clubdeespañol)_image_1.jpg"
                width={200}
                height={137}
              />
              <h1 className="font-bold ">ชมรมสีสรรพ์ภาษาต่างประเทศที่ 2 (ภาษาสเปน)</h1>
            </div>
          </Link>

          <Link href="clubs/triamudoma-mathclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/triamudoma-mathclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมคณิตศาสตร์ (A-math)</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center md:flex-col ">
        <div className="flex flex-wrap w-1/2 max-w-full space-y-4 md:space-y-0 md:flex-nowrap md:w-full md:flex-row">
          <Link href="clubs/cactusclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/cactusclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมเพาะพันธุ์ไม้</h1>
            </div>
          </Link>

          <Link href="clubs/triamudomcomicclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/triamudomcomicclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมการ์ตูน</h1>
            </div>
          </Link>

          <Link href="clubs/computerclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/computerclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมคอมพิวเตอร์</h1>
            </div>
          </Link>

          <Link href="clubs/lawclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/lawclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมกฎหมายน่ารู้</h1>
            </div>
          </Link>

          <Link href="clubs/tuband">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/tuband_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมดุริยางค์</h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap w-1/2 max-w-full space-y-4 md:space-y-0 md:flex-nowrap md:w-full md:flex-row">
          <Link href="clubs/thaiclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/thaiclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมภาษาไทย</h1>
            </div>
          </Link>

          <Link href="clubs/globetriamudom">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/globetriamudom_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมวิทยาศาสตร์โลกทั้งระบบ</h1>
            </div>
          </Link>

          <Link href="clubs/earthscienceclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/earthscienceclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมโลกศาสตร์</h1>
            </div>
          </Link>

          <Link href="clubs/scienceclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/scienceclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมวิทยาศาสตร์</h1>
            </div>
          </Link>

          <Link href="clubs/goclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/goclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมคณิตศาสตร์ (หมากล้อม)</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center md:flex-col ">
        <div className="flex flex-wrap w-1/2 max-w-full space-y-4 md:space-y-0 md:flex-nowrap md:w-full md:flex-row">
          <Link href="clubs/libraryclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/libraryclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมห้องสมุด</h1>
            </div>
          </Link>

          <Link href="clubs/japaneselanguageclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image
                src="/assets/clubs/japaneselanguageclub_image_1.jpg"
                width={200}
                height={137}
              />
              <h1 className="font-bold ">ชมรมสีสรรพ์ภาษาต่างประเทศที่ 2 (ภาษาญี่ปุ่น)</h1>
            </div>
          </Link>

          <Link href="clubs/tuds(triamudomdesigners)">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image
                src="/assets/clubs/tuds(triamudomdesigners)_image_1.jpg"
                width={200}
                height={137}
              />
              <h1 className="font-bold ">ชมรมนิเทศศิลป (ฝ่ายเเฟชั่น)</h1>
            </div>
          </Link>

          <Link href="clubs/conservationclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/conservationclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมอนุรักษ์ธรรมชาติ</h1>
            </div>
          </Link>

          <Link href="clubs/thaimusicclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/thaimusicclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมดนตรีไทย</h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap w-1/2 max-w-full space-y-4 md:space-y-0 md:flex-nowrap md:w-full md:flex-row">
          <Link href="clubs/socialstudiesclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/socialstudiesclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมสังคมศึกษา</h1>
            </div>
          </Link>

          <Link href="clubs/foreignlanguagesclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image
                src="/assets/clubs/foreignlanguagesclub_image_1.jpg"
                width={200}
                height={137}
              />
              <h1 className="font-bold ">ชมรมสีสรรพ์ภาษาต่างประเทศที่ 2</h1>
            </div>
          </Link>

          <Link href="clubs/recreationsandsportsclub(cheerclub)">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image
                src="/assets/clubs/recreationsandsportsclub(cheerclub)_image_1.jpg"
                width={200}
                height={137}
              />
              <h1 className="font-bold ">ชมรมนันทนาการกีฬา (ชมรมเชียร์)</h1>
            </div>
          </Link>

          <Link href="clubs/bookscreationclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/bookscreationclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมสร้างสรรค์หนังสือ</h1>
            </div>
          </Link>

          <Link href="clubs/frenchclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/frenchclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมสีสรรพ์ภาษาต่างประเทศที่ 2 (ภาษาฝรั่งเศส)</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center md:flex-col ">
        <div className="flex flex-wrap w-1/2 max-w-full space-y-4 md:space-y-0 md:flex-nowrap md:w-full md:flex-row">
          <Link href="clubs/triamhistorysociety">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/triamhistorysociety_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมสังคมศึกษา (หลากทัศนประวัติศาสตร์)</h1>
            </div>
          </Link>

          <Link href="clubs/nitadesilpdesign">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/nitadesilpdesign_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมนิเทศศิลป (ฝ่ายละครเวที)</h1>
            </div>
          </Link>

          <Link href="clubs/englishclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/englishclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมภาษาอังกฤษ</h1>
            </div>
          </Link>

          <Link href="clubs/economicsclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/economicsclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมเศรษฐศาสตร์</h1>
            </div>
          </Link>

          <Link href="clubs/triamudommedicalclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image
                src="/assets/clubs/triamudommedicalclub_image_1.jpg"
                width={200}
                height={137}
              />
              <h1 className="font-bold ">ชมรมผู้นำเยาวชนสาธารณสุขฯ</h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap w-1/2 max-w-full space-y-4 md:space-y-0 md:flex-nowrap md:w-full md:flex-row">
          <Link href="clubs/englishperformancechorus">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image
                src="/assets/clubs/englishperformancechorus_image_1.jpg"
                width={200}
                height={137}
              />
              <h1 className="font-bold ">ชมรมขับร้องประสานเสียง</h1>
            </div>
          </Link>

          <Link href="clubs/sci-techclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/sci-techclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมพัฒนาศักยภาพวิทยาศาสตร์</h1>
            </div>
          </Link>

          <Link href="clubs/triamchessclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/triamchessclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมหมากกระดาน</h1>
            </div>
          </Link>

          <Link href="clubs/triamudommodelunitednations(triammun)">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image
                src="/assets/clubs/triamudommodelunitednations(triammun)_image_1.jpg"
                width={200}
                height={137}
              />
              <h1 className="font-bold ">ชมรมภาษาอังกฤษ (Triam Udom Model United Nations)</h1>
            </div>
          </Link>

          <Link href="clubs/triamudommusicclub(tumc)">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image
                src="/assets/clubs/triamudommusicclub(tumc)_image_1.jpg"
                width={200}
                height={137}
              />
              <h1 className="font-bold ">ชมรมดนตรีสากล</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center md:flex-col ">
        <div className="flex flex-wrap w-1/2 max-w-full space-y-4 md:space-y-0 md:flex-nowrap md:w-full md:flex-row">
          <Link href="clubs/turobotclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/turobotclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมหุ่นยนต์</h1>
            </div>
          </Link>

          <Link href="clubs/thaireligionandculture">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image
                src="/assets/clubs/thaireligionandculture_image_1.jpg"
                width={200}
                height={137}
              />
              <h1 className="font-bold ">ชมรมศาสนาและวัฒนธรรมไทย</h1>
            </div>
          </Link>

          <Link href="clubs/crossword">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/crossword_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมภาษาอังกฤษ (crossword)</h1>
            </div>
          </Link>

          <Link href="clubs/watasilp">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/watasilp_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมวาทศิลป์</h1>
            </div>
          </Link>

          <Link href="clubs/literaryartclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/literaryartclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมวรรณศิลป์ ต.อ_</h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap w-1/2 max-w-full space-y-4 md:space-y-0 md:flex-nowrap md:w-full md:flex-row">
          <Link href="clubs/tupeercounselingclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image
                src="/assets/clubs/tupeercounselingclub_image_1.jpg"
                width={200}
                height={137}
              />
              <h1 className="font-bold ">ชมรมเพื่อนที่ปรึกษา</h1>
            </div>
          </Link>

          <Link href="clubs/englishdebate">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/englishdebate_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมภาษาอังกฤษ (English Debate)</h1>
            </div>
          </Link>

          <Link href="clubs/nitadesilpdesign">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/nitadesilpdesign_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมนิเทศศิลป (ฝ่ายออกแบบ)</h1>
            </div>
          </Link>

          <Link href="clubs/entertainer">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/entertainer_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมสันทนากร</h1>
            </div>
          </Link>

          <Link href="clubs/triamudomsportsclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/triamudomsportsclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมนันทนาการกีฬา</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center md:flex-col ">
        <div className="flex flex-wrap w-1/2 max-w-full space-y-4 md:space-y-0 md:flex-nowrap md:w-full md:flex-row">
          <Link href="clubs/volunteerclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/volunteerclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมผู้บำเพ็ญประโยชน์</h1>
            </div>
          </Link>

          <Link href="clubs/triamudomphotoclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/triamudomphotoclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมถ่ายภาพ</h1>
            </div>
          </Link>

          <Link href="clubs/triamudomfrenchchorus">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image
                src="/assets/clubs/triamudomfrenchchorus_image_1.jpg"
                width={200}
                height={137}
              />
              <h1 className="font-bold ">ชมรมสีสรรพ์ภาษาต่างประเทศที่ 2 (French Chorus)</h1>
            </div>
          </Link>

          <Link href="clubs/chineseclub">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/chineseclub_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมสีสรรพ์ภาษาต่างประเทศที่ 2 (ภาษาจีน)</h1>
            </div>
          </Link>

          <Link href="clubs/nartasilptu">
            <div className="relative flex flex-col items-center justify-between flex-grow-0 pb-1 mx-2 space-y-2 shadow-md md:w-1/5 rounded-xl md:shadow-none">
              <Image src="/assets/clubs/nartasilptu_image_1.jpg" width={200} height={137} />
              <h1 className="font-bold ">ชมรมนาฏศิลป์</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
