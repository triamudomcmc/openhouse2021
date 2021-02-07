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
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400">
              ชมรมภาษาอังกฤษ (English Drama)_
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 60 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/triamudomenglishdramaclub_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              การแสดงละครเพลง Cellmates the Musical ในงาน Triam Udom Open House 2020
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรม English Drama มีหลายฝ่าย Actor ซักซ้อมบท
              และฝึกจำตำแหน่งบนเวทีหอประชุมสำหรับการแสดง Stage Crew คิดและทำอุปกรณ์ประกอบฉาก Costume
              Designer หาชุดที่เหมาะสมให้นักแสดง PR ประชาสัมพันธ์กิจกรรมของชมรม Editor ตัดต่อ
              แต่งเสียง และใส่คำบรรยาย (Surtitle) ให้พร้อมฉายในวันแสดงจริง Makeup Artist แต่งหน้า
              ทำผม ให้กับนักแสดงในวันแสดง
              ในคาบชมรมจะมีเพียงสองฝ่ายที่มีงานรับผิดชอบของตนเองทุกสัปดาห์คือ Actor และ Stage Crew
              แต่ทุกฝ่ายจะมีการซ้อมใหญ่ ก่อนแสดงที่หอประชุม นอกจากนั้นการเตรียมพร้อมสำหรับวันแสดง
              ยังรวมถึงการเรียนการแสดงพื้นฐาน Workshop เกี่ยวกับละครเวทีภาษาอังกฤษ
              และการถ่ายโปสเตอร์โปรโมตอีกด้วย
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/triamudomenglishdramaclub_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                การแสดงละครเวที Sincerely Yours ในงาน Triam Udom English Week 2020
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              1\. ได้ทักษะการผลิตละครเวทีหรือละครเพลงภาษาอังกฤษแบบมืออาชีพ 2\.
              ได้ฝึกความคิดสร้างสรรค์และจินตนาการ 3\. ได้ความสามัคคีและความสนิทสนมในชมรม 4\.
              ได้ฝึกทักษะการฟัง พูด อ่านภาษาอังกฤษในชีวิตประจำวัน
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/triamudomenglishdramaclub_image_3.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                การซักซ้อมของนักแสดง
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม 1\. Owl Hall (Triam Udom English Week 2019) 2\. Sincerely Yours (Triam Udom
              English Week 2020 ) 3\. Letters to Juliet (Triam Udom Open House 2018) 4\. Haters the
              Musical (Triam Udom Open House 2019) 5\. Cellmates the Musical (Triam Udom Open House
              2020)
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/triamudomenglishdramaclub_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">กานต์</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: phongphisut__</span>
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
                  หรือสมาชิกเก่า สวัสดีค้าบ นายพงศ์พิสุทธิ์ ปุรินัย หรือ กานต์ นะครับ
                  เราเป็นประธานชมรม Triam Udom English Drama Club ประจำปีการศึกษา 2563 นี้
                  เริ่มแรกเราขอแทนชื่อชมรมเป็น “อิ้งม่า” นะ ชินกับคำนี้สุด ๆ ตั้งแต่เราเข้าอิ้งม่ามา
                  เราประทับใจ และภูมิใจในชีวิตเกียมดมของเราตลอด อิ้งม่ามันทำให้เราเป็นคนสนุกสนาน
                  ร่าเริง รู้จักเพื่อนใหม่เยอะมาก ๆ (ขอย้ำว่า มาก ๆ ) ตอนแรกเราก็เหมือนเด็ก ม.4
                  ทั่วไปแหละ ไม่รู้ว่าจะออดิชันชมรมไหนดี
                  ตั้งแต่เกิดมาเรายังไม่เคยเจอโรงเรียนไหนที่มีชมรมละครเวทีแบบที่เตรียมเลย
                  เราเริ่มต้นจากการเป็นเด็กใหม่ที่อยากเข้าชมรมอิ้งม่า
                  พอประกาศผลว่าออดิชันผ่านตำแหน่งนักแสดง (คงไม่ต้องบอกว่าดีใจมากขนาดไหน)
                  วันแรกที่เราเข้าชมรม มันเป็นความรู้สึกที่ดีสุด ๆ เลยนะ ลองจินตนาการตามดู
                  คนที่มีความชอบสิ่งใดสิ่งหนึ่งเหมือนกัน มาอยู่รวมกัน อายุไม่ต่างกัน
                  พร้อมที่จะทำละครเวทีภาษาอังกฤษที่สนุกสุดยอดให้ผู้ชมได้ชม โปรดักชันแรก Owl Hall
                  ละครเรื่องแรกของเรา เราเล่นเป็นพ่อที่ประสาทแดกชื่อ Peter แน่นอนว่าเราชอบบทนี้มาก
                  มันแสดงอารมณ์ง่ายดี และมีมิติตัวละครที่น่าสนใจ แต่พอมาโปร 2 เรื่อง Cellmates โอ้โห
                  ทั้งสเกลเวที ฉาก เสียง แสง อะไรต่อมิอะไรบนเวทีมันดูยิ่งใหญ่ขึ้น 300 เท่า
                  เราเล่นเป็น Ted Watson นักโทษเจ้าปัญหาที่จะพานักโทษคนอื่นแหกคุก
                  ตัวเอกของเรื่องด้วยนะ ถ้าจะพูดถึงประสบการณ์จากทั้งสองเรื่อง
                  เราว่ามันเกินบรรยายจริง ๆ เรารู้สึกตื้นตันสุด ๆ หลังจากแสดงเสร็จมันจะได้ซีนเซเลป
                  ทุกคนปรบมือ มาถ่ายรูป แสดงความยินดี เหล่าครูอาจารย์ เพื่อน
                  ผู้ปกครองชื่นชมเราในการที่เราได้ทำสิ่งที่เราชอบ มันเป็นอะไรที่มีความสุขสุด ๆ ไปเลย
                  ยอดฟอลไอจีก็เพิ่ม คนรู้จักเรามากขึ้น จำเราได้
                  เวลาเดินสวนกับเพื่อนในโรงเรียนก็จะมีคนทักว่า “เห้ย แกเล่นเป็นนักโทษคนนั้นใช่ป่ะ”
                  มันรู้สึกปลาบปลื้มบอกไม่ถูก ที่ผ่านมาตลอดม.4 เราเจอเพื่อนดี ๆ ในชมรม คุณครูน่ารัก
                  ๆ เวลาเราทำกิจกรรมอยู่ที่โรงเรียนหลังเลิกเรียน มีคุณครูเอาขนมมาให้ ได้กินขนม
                  คุยเล่นกันกับเพื่อน ๆ ซ้อมเสร็จก็เดินกลับสยามด้วยกัน โอ้ยยย พูดแล้วก็คิดถึง
                  มันเป็นช่วงเวลาที่มีความสุขสุด ๆ เลย ส่วนที่สนุกไม่แพ้กันคือตอนม.5
                  เราก็อยู่ชมรมนี้เป็นปีที่ 2 แล้ว แล้วเราก็อยู่ห้องคิงวิทย์คุณด้วย เรียนก็แสนจะหนัก
                  แต่งานชมรมมันน่าสนุกขึ้นเรื่อย ๆ ตอนเราเป็นรักแสดงเราได้เห็นแต่เบื้องหน้า
                  คราวนี้คือการทำเบื้องหลังของจริงของเราแล้ว จะบอกเลยว่าชมรมเราทำเองทุกอย่างเลย
                  แต่งบท ติดต่อหาไฟ หาเครื่องเสียง หาชุด ซื้อชุด ทำพร้อบ ทำซับอัดเสียง
                  สารพัดสิ่งที่เห็นในงาน Open House คือผลงานของเรา 100%
                  แล้วพอเราเป็นรุ่นพี่เราก็มีทักษะการทำงาน หรือทักษะการแสดงที่มากขึ้น
                  ก็สามารถสอนน้อง ๆ ที่เข้าชมรมมาต่อไปเรื่อย ๆ ได้ ก็คือสรุปง่าย ๆ ว่า ทำงานทั้ง ม.4
                  และ 5 แต่คนละอย่างกัน แต่สิ่งที่มีมากกว่าเดิมคือ มิตรภาพ ความรัก
                  และความผูกพันที่ชมรมนี้มอบให้เรา ตั้งแต่เข้าเตรียมมาปี 2019 สิ่งที่ทำให้เรา Live a
                  Life ก็คืออิ้งม่านี่แหละ โดย กานต์ TU82 (ig:phongphisut__)
                  <h1 className="md:hidden text-center text-gray-300 text-6xl h-22 w-full">”</h1>
                </div>
                <div className="hidden md:block relative">
                  <span className="absolute text-gray-300 text-8xl right-16 -top-20">”</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/triamudomenglishdramaclub_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เเพท</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: @napattpat</span>
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
                  ก็ เราชื่อแพท เป็น TU82 อยู่สายศิลป์จีน แล้วก็เป็นสมาชิกชมรม English Drama
                  มาเป็นปีที่ 2 แล้วคับ เราเริ่มจากได้ดูละครของรุ่นพี่ปีก่อนหน้า
                  เป็นละครเวทีที่ใช้ภาษาอังกฤษล้วน ไปดูละรู้สึกอเมซิ่งมาก ทำไม production
                  ทุกอย่างถึงดูเท่มาก ๆๆ บวกกับเราชอบภาษาอังกฤษ ก็เลยลงออดิชั่นตำแหน่งนักแสดงเลย
                  (แต่ไม่มีทักษะการแสดงนะ) อยากลองก้าวออกจาก comfort zone ของตัวเอง ละก็เอา skill
                  ภาษาอังกฤษมาใช้แบบเต็มที่ดู แล้วพอออดิชั่นติดก็ได้เล่นละครเรื่องแรกในชีวิต ชื่อ
                  Owl Hall เป็นละครเกี่ยวกับครอบครัวนึงที่มาพักผ่อนที่บ้านตากอากาศชื่อ Owl Hall
                  แล้วได้เจอกับเรื่องมากมาย เราเล่นเป็นหมอจิตวิทยาชื่อ Helen Ward
                  การเล่นละครเรื่องนี้ทำให้ปลดล็อก skill ใหม่ ๆ จริง ๆ เรื่องการแสดง ศัพท์แสลงต่าง ๆ
                  และคนในชมรมก็มาจากหลายสายการเรียน หลายรุ่น แล้วก็นิสัยต่างกันพอตัว ทั้งต้องปรับตัว
                  จำบท ซ้อม research ข้อมูล (เราไปหา reference ท่ายืนของหมอจิตวิทยา
                  แล้วก็ต้องไปดูซีรีส์ที่มีหมอจิต อะไรแบบนั้น)
                  จำได้ว่าเป็นอะไรที่ใหม่และน่าตื่นเต้นมาก พอเรื่องถัดมาก็คือ Cellmates the Musical
                  ที่แสดงในงาน Triam Udom Open House 2020 รอบนี้เป็น Musical
                  เป็นเรื่องเกี่ยวกับแก๊งค์นักโทษจะแหกคุกกัน เราเล่นเป็นนักโทษที่มีอาการทางจิตชื่อ
                  Gwen Meisner เรื่องนี้คือหลุดจากตัวเองไปมาก ๆ การจะเล่นเป็นตัวละครที่มี character
                  ต่างจากตัวเองแบบชัดเจนไม่ใช่เรื่องง่าย ทั้งท่ายืน ท่าเดิน ท่าเอียงหัว
                  ขนาดรอยยิ้มยังเปลี่ยน แต่เป็น character ที่สนุกมาก ท้าทายมาก
                  ทุกวันนี้ก็รู้สึกเหมือนมี Gwen ติดตัวอยู่ เป็นประสบการณ์ที่มีเรื่องปวดหัวเยอะอยู่
                  แต่ก็เป็นละครที่เราภูมิใจมาก ๆ และสุดท้ายก็คือการทำหน้าที่ในทีม production
                  ของละครเรื่อง Sincerely Yours เราทำหน้าที่เป็น Stage Manager
                  ก็คือดูแลเวทีอยู่หลังม่าน ดู sequence ปิด-เปิดม่าน เตรียมนักแสดง จัด blocking
                  อันนี้ก็เป็นประสบการณ์แบบใหม่ ต้องคอย manage ทุกคนแทน พอมาม.5
                  ทำให้รู้จักคนในชมรมแบบทั่วถึงมากขึ้น (เพราะต้องประสานงานต่าง ๆ ) ได้คุยกันมากขึ้น
                  มันทำให้เราโตขึ้นแบบก้าวกระโดด ถึงแม้จะเจอสถานการณ์โควิดทำให้หลาย ๆ อย่าง
                  unpredictable แต่ทุกคนก็ผ่านมาได้ ! ส่วนมาก production ของเรา จะทำงานกันที่ห้องตึก
                  3 ชั้น 2 (ไม่บอกเลขห้องหรอกแบร่ ลองมาออเดี๋ยวก็รู้ ! ) เป็นห้องชมรมเราแหละ
                  ก็ทั้งซ้อมละคร ทำฉากก็ทำแถว ๆ นั้น หรือกินขนมกินข้าวก็กินที่ห้องนั้น
                  ห้องมันติดกับหมวดอังกฤษด้วย เราเลยได้อภินันทนาการจากอาจารย์ในห้องหมวดตลอด
                  (ขนมเยอะมาก ๆ) ถึงงานส่วนมากจะเป็นฝีมือนักเรียน แต่แน่นอนว่าเราก็ต้องมีอาจารย์คอย
                  supervised เสมอ อาจารย์ทุกคนน่ารักและเต็มที่กับพวกเรามาก ๆ
                  ถ้ามีตรงไหนที่ไม่ควรก็ช่วยแก้ มีเรื่องอะไรเราสามารถปรึกษาเค้าได้จริง ๆ
                  และเราประทับใจอาจารย์ทุกคนมาก ที่ประทับใจอีกอย่างคือทุกคนในชมรมเก่งมาก ตลอด 2
                  ปีที่ได้อยู่ไม่ว่าจะสมาชิกรุ่นไหนแต่ทุกคนตั้งใจ เก่งในที่นี้คือทุกคน full of
                  effort เสมอ ถึงเหนื่อยก็สู้จริง ๆ รู้สึกว่าทุกคน proud กับผลงานของตัวเอง
                  ถึงมันจะมีข้อผิดพลาดแต่มันก็คือ project ที่ร่วมด้วยช่วยกันทำ
                  เราสามารถเป็นตัวเราได้แบบเต็มที่ พูดอังกฤษทั้งวันยังไงก็ไม่มีใครว่า
                  เพราะก็พูดกันทั้งชมรม ด่ากันเป็นภาษาอังกฤษก็มี 555555555 มันเป็น community
                  ที่เจ๋งมาก แบบรวมคนหลายแบบสุด ๆ (จะ introvert extrovert เด็กเรียน เด็กกิจกรรม
                  เด็กไม่เรียน เรามีแม้กระทั่งคิงห้องวิทย์!) แต่ทุกคนสามารถอยู่ด้วยกันได้
                  เราเป็นนักแสดง ก็สนิทกับพวกนักแสดงในรุ่นเดียวกันมาก ๆ พอม. 5
                  ก็สนิทกับตำแหน่งอื่นมากขึ้น มีทั้งคอลกัน หรือเราไปจุ้บจิ้บดูเค้าทำงานงี้
                  กับนักแสดงรุ่นใหม่ก็ไม่รู้สึกว่ามี boundary ของ seniority ขนาดนั้น เอาเข้าจริง ๆ
                  อิ้งม่า (ชื่อเล่นของชมรม มาจาก English Drama) ก็เป็นชมรมปกติเลยนะ 55555555
                  แบบมันไม่ได้มีอะไรที่ extra เรื่องไม่ดีก็ไม่ใช่ว่าไม่มี
                  ทะเลาะกันหรือผิดใจกันก็ทำมาหมดแล้ว ไม่มีทางที่มันจะมีแต่เรื่องดี
                  เป็นเรื่องธรรมดาในทุกที่ แต่สำหรับเราที่ได้พัวพันกับชมรมมา 2 ปีเราก็รู้สึกว่ามัน
                  special เสมอ เป็น community ที่หาจากที่ไหนของโรงเรียนไม่ได้ และมันเป็นที่ ๆ
                  เรารู้สึก fit in ในทุก ๆ วันที่ไปจอยงานของชมรม
                  ถ้าอยากรู้จักชมรมเราเพิ่มเติมก็สามารถติดตามได้จาก social media ของชมรมต่าง ๆ
                  หรือลองดูในช่องวีดิโอก็จะเห็นผลงานของพวกเรา (และรายการพิเศษใน live ที่ห้ามพลาด !)
                  หรือถ้าอยากรู้จักเราเพิ่มเติมก็มาทักทายได้ที่ IG เรานะคะ (แต่อย่าลืมไปดู live นะ !
                  งานนี้เราก็เป็นคนจัด มุแง) รอเจอทุกคนอยู่นะคะ โดย เเพท TU82 (ig:@napattpat)
                  <h1 className="md:hidden text-center text-gray-300 text-6xl h-22 w-full">”</h1>
                </div>
                <div className="hidden md:block relative">
                  <span className="absolute text-gray-300 text-8xl right-16 -top-20">”</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/triamudomenglishdramaclub_profile_3.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">ต้าหลี่</h1>
                  <span className="text-xs">เตรียมอุดม 81</span>
                  <span className="w-max text-xs">IG: dontcallmeluis</span>
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
                  สวัสดีครับ ต้าหลี่ครับผม นายณัฐนันท์ ศิริไพพรรณ TU81 แผนการเรียนภาษา-ภาษาสเปน
                  จากชมรม Triam Udom English Drama Club โดยมีตำแหน่งเป็น Public Relations Staff ค้าบ
                  ก็ สำหรับชมรมเราก็ตรงตัวเลย ชมรมเราทำละครภาษาอังกฤษ โดยตัวอย่างละครที่เคยทำก็เช่น
                  Haters the Musical, Cellmates the Musical และเรื่องล่าสุดเลย "Sincerely Yours"
                  ที่เพิ่งแสดงไปเมื่อช่วงเดือนกันยายนที่ผ่านมา ตำแหน่งของเรา Public Relations Staff
                  หรือเรียกย่อ ๆ ว่า PR
                  มีหน้าที่หลักคือโปรโมทละครและดูแลแอคเคาท์โซเชียลมีเดียของชมรมครับ ก็คือโพสต์ต่าง ๆ
                  ที่ลงในแอคเคาท์ของชมรมเราเป็นคนทำนั่นเอง แต่นอกจากตำแหน่งเราแล้ว
                  ชมรมเรายังมีอีกหลายตำแหน่งมาก ๆ ที่ทำงานทั้งเบื้องหน้าและเบื้องหลังในชมรม
                  อยากบอกทุกคนเลยครับว่า ลองมั้ย ลองมาดูละคร TUEDC กัน (Cellmates the Musical
                  รับชมได้ใน Youtube นะครับ) สำหรับเราแล้ว ชมรมนี้ให้อะไรกับเราเยอะมาก ๆ เลย
                  ทั้งทักษะการทำงาน มิตรภาพ และภาระหน้าที่ 5555 ก็ดีใจและภูมิใจนะครับ
                  ที่ได้เป็นส่วนหนึ่งของ English Drama Club! โดย ต้าหลี่ TU81 (ig:dontcallmeluis)
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
