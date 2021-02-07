import React from 'react'
import Footer from '../../components/common/Footer'
import { Layout } from '../../components/common/Layout'
import PlaceholderSuggestion from '../../assets/vectors/clubs/PlaceholderSuggestion'

const Page = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-10/12 md:max-w-3xl">
          <div className="flex flex-col justify-center items-center mt-20">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">ชมรมภาษาอังกฤษ</h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 160 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img src="/assets/clubs/englishclub_image_1.jpg" className="h-60 md:h-96 w-full" />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              แสดงละคร Open House ของชมรม English Drama
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมภาษาอังกฤษเป็นชมรมที่เน้นการใช้ภาษาอังกฤษในการดำเนินการชมรม หากนักเรียนเข้ามาแล้ว
              นักเรียนจะได้มีโอกาสในการฝึก เรียนรู้ และใช้ภาษาอังกฤษกับเพื่อน ๆ
              ในชมรมย่อยของเราที่มีความสนใจคล้าย ๆ กับนักเรียน มีการจัดงาน จัดการแสดง งานประกวด
              รวมทั้งการแข่งขันทุกปี ไม่ว่าจะเป็นในงาน Open House หรือ English Week
              มีการสร้างนิตยสารและเกมภาษาอังกฤษ
              รวมทั้งมีการส่งนักเรียนในชมรมไปแข่งขันกับโรงเรียนอื่นทั้งระดับชาติและนานาชาติเสมอ
              ชมรมภาษาอังกฤษแบ่งเป็นชมรมย่อยกว่าสิบชมรม โดยภายในชมรมย่อยเหล่านี้
              นักเรียนสามารถเลือกเข้าได้ 1 ชมรมตามที่ต้องการ และบางชมรมย่อยอาจมี audition
              เพื่อเข้าชมรม และโดยปกติแล้ว ตัวของชมรมภาษาอังกฤษใหญ่นั้นจะไม่มีการเรียนการสอนใด ๆ
              แต่เป็นการเข้าเรียนตามชมรมย่อยทั้งหมดเลยนั่นเอง โดยชมรมย่อยในชมรมภาษาอังกฤษมีดังนี้
              1\) MUN 2\) English Drama 3\) Debate 4\) Crossword 5\) English Skills M.6 6\) English
              Skills M.5 7\) English Skills M.4 8\) Vocabulary M.4 9\) นักเรียนแลกเปลี่ยน 10\)
              Public Speaking 11\) Quiz 12\) Spelling Bee 13\) The Oracle
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/englishclub_image_2.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                ได้รับรางวัล High School Champion พร้อมเงินรางวัลจากการแข่งขัน National Intervarsity
                Debate Championship ของชมรม Debate
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ได้รับความสนุกสนานและได้พัฒนาตนเอง ได้รับโอกาสในการเรียนรู้
              และฝึกใช้ภาษาอังกฤษกับเพื่อน ๆ ในกิจกรรมต่าง ๆ ด้วย
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img src="/assets/clubs/englishclub_image_3.jpg" className="h-60 md:h-96 w-full" />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                จัดงาน TriamMUNx2020 ที่โรงเรียนเตรียมอุดมศึกษาโดยชมรมTriamMUN
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม การจัดงาน TriamMUNx2020 โดยชมรม TriamMUN, การแสดงละครเวทีในวัน Open House
              ของชมรม English Drama, การจัดการแข่งขัน Spelling Bee ใน English Week โดยชมรม Spelling
              Bee การสร้างนิตยสารและแต่งเรื่องภาษาอังกฤษเพื่อแจกจ่าย โดยชมรม Oracle นอกจากนี้
              ยังมีการส่งนักเรียนในชมรมไปแข่งขันกับโรงเรียนอื่นทั้งระดับชาติและนานาชาติเสมอ
              หลายครั้งชมรมภาษาอังกฤษก็จะได้รับรางวัลจากการแข่งจึงนําชื่อเสียงมาให้แก่โรงเรียนเตรียมอุดมศึกษา
              เช่น ชมรม Debate แข่งขัน National Intervarsity Debate Championship และได้รับรางวัล
              Champion, TriamMUN ส่งนักเรียนไปแข่งขัน Model United Nations ระดับนานาชาติ ThaiMUN,
              SMISMUN, ChulaMUN, อื่นๆ และมักได้รับรางวัล Honorable/Best delegate ทุกครั้ง
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/englishclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ป๊อป</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: papa.oscar.papa</span>
                </div>
              </div>
              <div className="flex flex-col md:ml-4">
                <div className="hidden md:block relative">
                  <span className="absolute text-gray-300 text-8xl left-10 top-6">“</span>
                </div>
                <div className="bg-whtie text-medium md:text-xl shadow-lg text-gray-500 rounded-3xl md:py-16 px-6 md:px-16">
                  <div className="md:hidden text-center text-gray-300 text-6xl pt-2 h-10">
                    <span className="absolute">“</span>
                  </div>
                  หรือสมาชิกเก่า สวัสดีผู้อ่านทุกท่านครับ ผมป๊อบ อดีตประธานชมรมภาษาอังกฤษ
                  อย่างแรกผมขอบอกผู้อ่านก่อนเลยว่า ความจริงแล้วชมรมภาษาอังกฤษเป็นชมรมที่ใหญ่มาก ๆ
                  เมื่อเทียบกับชมรมอื่น ๆ ในโรงเรียน
                  เราจึงจัดให้มีชมรมย่อยให้นักเรียนเลือกเข้าได้ตามความสนใจ
                  อีกทั้งชมรมภาษาอังกฤษยังมีชมรมย่อยมากที่สุดในโรงเรียนนี้
                  ในแต่ละชมรมย่อยก็จะมีนักเรียนที่มีความสนใจคล้ายกันรวมกันอยู่
                  สิ่งนั้นจะทำให้นักเรียนได้เจอกับเพื่อนที่มีความสนใจคล้าย ๆ กับเรานั่นเองครบ
                  ก่อนที่จะจากไป ผมก็ขอบคุณผู้อ่านที่มาอ่านหน้าแนะนำชมรมภาษาอังกฤษ
                  และรีวิวชมรมของผมนะครับ และหากผู้อ่านเป็นนักเรียนว่าที่ ต.อ. 84 แล้วนั้น
                  ผมขอเชิญชวนผู้อ่านทุกท่านให้มาร่วมเป็นส่วนหนึ่งของชมรมภาษาอังกฤษด้วยกันนะครับ โดย
                  ป๊อป TU82 (IG: papa.oscar.papa)
                  <h1 className="md:hidden text-center text-gray-300 text-6xl h-22 w-full">”</h1>
                </div>
                <div className="hidden md:block relative">
                  <span className="absolute text-gray-300 text-8xl right-16 -top-20">”</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="text-2xl font-bold text-center mb-6">ชมรมอื่นๆ</h1>
            <div className="flex flex-wrap justify-center space-x-4">
              <div className="text-center mb-10">
                <PlaceholderSuggestion className="pb-2 w-60" />
                <span className="font-semibold">พัฒนาศักยภาพทางวิทยาศาสตร์</span>
              </div>
              <div className="text-center mb-10">
                <PlaceholderSuggestion className="pb-2 w-60" />
                <span className="font-semibold">พัฒนาศักยภาพทางวิทยาศาสตร์</span>
              </div>
              <div className="text-center mb-10">
                <PlaceholderSuggestion className="pb-2 w-60" />
                <span className="font-semibold">พัฒนาศักยภาพทางวิทยาศาสตร์</span>
              </div>
              <div className="text-center mb-10">
                <PlaceholderSuggestion className="pb-2 w-60" />
                <span className="font-semibold">พัฒนาศักยภาพทางวิทยาศาสตร์</span>
              </div>
              <div className="text-center mb-10">
                <PlaceholderSuggestion className="pb-2 w-60" />
                <span className="font-semibold">พัฒนาศักยภาพทางวิทยาศาสตร์</span>
              </div>
              <div className="text-center mb-10">
                <PlaceholderSuggestion className="pb-2 w-60" />
                <span className="font-semibold">พัฒนาศักยภาพทางวิทยาศาสตร์</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default Page
