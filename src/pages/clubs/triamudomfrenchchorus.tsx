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
              ชมรมสีสรรพ์ภาษาต่างประเทศที่ 2 (French Chorus)
            </h1>
            <h1 className="text-blue-400 font-medium text-xl md:text-2xl mt-2">ชมรม | 60 คน</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-12">
            <img
              src="/assets/clubs/triamudomfrenchchorus_image_1.jpg"
              className="h-60 md:h-96 w-full"
            />
            <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
              การแข่งขันทักษะภาษาฝรั่งเศส La fête de L’ATPF
            </h1>
          </div>

          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ชมรมนี้ทำอะไรบ้าง</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ชมรมของเราจะมีการฝึกซ้อมขับร้องประสานเสียง
              และมีการฝึกฝนทักษะทางด้านดนตรีที่มีประโยชน์ต่อการขับร้องประสานเสียง เช่น
              การอ่านโน้ตดนตรีสากล Ear Training โดยนอกชมรมของเราจากจะร้องเพลงภาษาฝรั่งเศสแล้ว
              ยังมีเพลงภาษาอื่น ๆ อีกด้วย เช่น ภาษาอังกฤษ ภาษาเยอรมัน ภาษาละติน
              เพื่อใช้สำหรับแสดงในงานต่าง ๆ ทั้งในโรงเรียน และนอกโรงเรียน
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/triamudomfrenchchorus_image_2.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                ค่ายเรียนรู้ภาษาและวัฒนธรรมฝรั่งเศสผ่านการขับร้องเพลงประสานเสียง
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ได้พัฒนาทักษะทางด้านภาษาฝรั่งเศส รวมไปถึงภาษาอื่น ๆ ที่ใช้ขับร้องในชมรม
              พัฒนาทักษะทางด้านดนตรี การขับร้องประสานเสียง เสริมสร้างบุคลิกภาพ
              และได้รับมิตรภาพจากเพื่อน ๆ ในชมรม
            </p>

            <div className="flex flex-col justify-center items-center mt-12">
              <img
                src="/assets/clubs/triamudomfrenchchorus_image_3.jpg"
                className="h-60 md:h-96 w-full"
              />
              <h1 className="text-gray-300 font-semibold text-sm md:text-xl pt-3">
                บรรยากาศวันงานการแข่งขันทักษะภาษาฝรั่งเศส La fête de L’ATPF
              </h1>
            </div>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-2xl md:text-3xl">ผลงานที่ผ่านมา</h1>
            <p className="text-gray-500 text-medium md:text-xl mt-12">
              ของชมรม งาน 333 ปีจากแวร์ซายส์...สู่สวนหลวง ร.9 La fête nationale Bangkok La fête de
              L’ATPF
            </p>
          </div>
          <div className="mt-20">
            <h1 className="font-medium text-3xl">รีวิวจากรุ่นพี่</h1>

            <div className="flex flex-wrap-reverse md:flex-nowrap md:flex-row mt-14">
              <div className="flex flex-row md:flex-col md:mt-0 mt-6">
                <div className="flex">
                  <img
                    src="/assets/clubs/triamudomfrenchchorus_profile_1.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">เน็กซ์</h1>
                  <span className="text-xs">เตรียมอุดม 83</span>
                  <span className="w-max text-xs">IG: @nxtpanii</span>
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
                  หรือสมาชิกเก่า French Chorus คืออะไร สำคัญกับคุณยังไง ถ้าตอบแบบเป็นทางการสุด ๆ
                  French Chorus คือคณะนักร้องประสานเสียงภาษาฝรั่งเศสแห่งโรงเรียนเตรียมอุดมศึกษา
                  เป็นส่วนหนึ่งของชมรมสีสรรพ์ภาษาต่างประเทศที่ 2 นั่นเองค่ะ สำหรับเรา French Chorus
                  คือสิ่งที่ทำให้เราอยากมาโรงเรียนในวันจันทร์
                  (รู้เลยนะว่าปกติหล่อนขี้เกียจตื่นมาโรงเรียน) เพราะว่าอะไรน่ะเหรอ
                  ขออุบไว้เป็นความลับก่อนแล้วกันนะคะ French Chorus ทำอะไรบ้าง
                  ตามชื่อชมรมก็คือร้องเพลงประสานเสียงนั่นแหละค่ะ แต่ ๆ
                  ทุกปีเราจะมีการแข่งขันของสมาคมครูฝรั่งเศสแห่งประเทศไทยแล้วก็การแสดงต่าง ๆ ด้วยนะ
                  ถ้าอยากรู้ว่ามีงานอะไรบ้าง
                  สามารถเข้าไปดูได้ที่เฟซบุ๊กหรืออินสตาแกรมของวงเราได้เลย! แล้วร้องประสานเสียงยากไหม
                  จะว่ายากก็ไม่ยาก จะว่าง่ายก็ไม่ง่ายซะทีเดียว
                  คือแต่ละคนแต่ละพาร์ทก็จะมีความยากง่ายแตกต่างกันไป
                  อย่างเราอยู่พาร์ทโซปราโนก็จะไม่ค่อยมีปัญหากับเรื่องการอ่านหรือจำโน้ตเพลงเท่าไหร่
                  แต่ก็ต้องร้องคีย์ที่แอบสูงปรี๊ดดดด (จริง ๆ ก็ไม่แอบแหละ สูงเลย) ซึ่งพี่ ๆ
                  ก็จะช่วยไกด์ให้เราตลอดนะ ว่าร้องแบบนี้ง่ายกว่า ลองทำแบบนี้สิ ก็จะช่วยได้เยอะเลยค่ะ
                  สังคมในวงเป็นยังไง เพื่อนเป็นยังไงบ้าง ทุกคนน่ารักมากกกกกกก มากจริง ๆ
                  อย่างที่บอกคือรุ่นพี่ช่วยเราตลอด แล้วก็ไม่ดุเลย แต่จะค่อย ๆ ปรับค่อย ๆ
                  แนะนำเราไปเรื่อย ๆมากกว่า กับเพื่อน ๆ ก็คือสนิทกันข้ามขั้นจนงง
                  ชั้นไปสนิทกับแกขนาดนี้ตั้งแต่เมื่อไหร่นะ ?-? ปกติซ้อมที่ไหนบ้าง ตึก 1 ค่ะ
                  ก็คือตึกที่เดินเข้าทางประตูฝั่งพญาไทแล้วเห็นเป็นตึกแรกนั่นแหละ
                  แต่ก็จะมีซ้อมที่อื่นบ้างนิดหน่อยด้วย สนุกไหม ไม่บอก ต้องลองมาสัมผัสเอง ได้อะไรจาก
                  French Chorus ไปบ้าง นอกจากทักษะการร้องเพลงแล้ว
                  สิ่งที่เราได้ไปก็คือมิตรภาพกับประสบการณ์ French Chorus
                  ทำให้เราได้รู้จักกับทั้งเพื่อนทั้งรุ่นพี่ต่างสายเยอะมาก ๆ
                  เพื่อนที่รู้จักกันอยู่แล้วก็สนิทกันขึ้นไปอีก แล้วก็ประสบการณ์แบบนี้ไม่ได้หากันง่าย
                  ๆ นะ ถ้าไม่ใช่ French Chorus เราก็ไม่รู้ว่าจะหาประสบการณ์แบบนี้ที่ไหนเหมือนกัน
                  (ซึ้งเฉย) คนเขาว่า French Chorus ซ้อมหนัก จริงรึเปล่า?
                  ถ้าเป็นช่วงใกล้งานก็จะมีนัดซ้อมเพิ่มเติมบ้าง
                  แต่ว่าช่วงสอบก็จะงดซ้อมเพื่อให้ทุกคนไปซุ่มอ่านหนังสือกันค่ะ ชื่อ French Chorus
                  ร้องแต่เพลงฝรั่งเศสเหรอ แล้วต้องมีพื้นฐานภาษาฝรั่งเศสรึเปล่าถึงจะเข้าได้ ยืนยัน
                  นั่งยัน นอนยัน ตีลังกายันเลยว่า French Chorus ไม่ได้ร้องเพลงภาษาฝรั่งเศสอย่างเดียว
                  เรายังร้องเพลงภาษาอื่นอีกด้วย! แล้วก็ไม่จำเป็นจะต้องมีพื้นฐานภาษาฝรั่งเศสเลย
                  ชมรมของเราเปิดรับทุกสายการเรียน ไม่มีการออดิชั่น!
                  ขอเพียงแค่มีใจรักในการร้องเพลงเท่านั้นค่า มีเรื่องประทับใจอะไรกับ French Chorus
                  บ้างไหม
                  ไหนเล่าให้ฟังหน่อยสิเรื่องที่ประทับใจที่สุดก็คงเป็นเพื่อนกับรุ่นพี่อีกเช่นเคย
                  เราเป็นคนที่มีปัญหาสุขภาพค่อนข้างบ่อยค่ะ เพื่อน ๆ ก็จะคอยช่วยดูแลเรา
                  แล้วก็อีกอย่างหนึ่ง อันนี้พูดได้ใช่ไหมคะพี่จี้ เราว่าสมาชิก French Chorus
                  หลายคนแอบตลก ? ตอนแรกนึกว่าจะเรียบร้อย ไป ๆ มา ๆ
                  ถึงกับต้องร้องเพลงภาพลวงตากันเลยทีเดียวค่ะ อยากจะฝากอะไรถึงว่าที่ TU84
                  หน่อยไหมครับ น่าเสียดายที่ปีนี้วงของพวกเราไม่มีโอกาสแสดงในงาน open house ให้ว่าที่
                  TU84 ได้ชมกันแบบสด ๆ แต่หวังว่าเราจะได้แสดงให้ทุกคนได้ชมหลังเป็น TU84
                  กันอย่างเต็มตัวแล้วนะคะ ระหว่างทางที่จะถึงเป้าหมายนี้ก็ขอให้ทุกคนทำให้เต็มที่
                  พักผ่อนให้เพียงพอ รักษาสุขภาพกันดี ๆ แล้วมาพบกันในรั้วเตรียมค่ะ :) โดย เน็กซ์ TU83
                  IG : @nxtpanii
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
                    src="/assets/clubs/triamudomfrenchchorus_profile_2.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">บี</h1>
                  <span className="text-xs">เตรียมอุดม 83</span>
                  <span className="w-max text-xs">IG: @zehuaaa</span>
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
                  French Chorus คืออะไร สำคัญกับคุณยังไง French Chorus
                  เป็นชมรมหนึ่งที่เป็นมากกว่าชมรมค่ะ เพื่อน ๆ ในวงเป็นกันเอง เเล้วก็สนิทกันมาก ๆ
                  ด้วย เราได้พลังบวกจากชมรมนี้เยอะมากกกกก ไม่ว่าจะจากตอนร้องเพลง หรือว่าจากเพื่อน ๆ
                  ในวง เพื่อน ๆ ในวงน่ารักกับเรามาก ๆ ค่ะ French Chorus ทำอะไรบ้าง ตามชื่อชมรมเลยค่ะ
                  ขับร้องประสานเสียงภาษาฝรั่งเศสค่ะ
                  คือรุ่นเราก็เจอกับโควิดก็เลยไม่ค่อยมีกิจกรรมเยอะเท่ารุ่นพี่เท่าไหร่ค่ะ
                  ส่วนปีของรุ่นพี่ French Chorus 26 ได้ทำอะไรเยอะมากกก งานใหญ่ ๆ
                  ก็จะมีงานของสมาคมครูภาษาฝรั่งเศส (L’A.T.P.F.)
                  เเล้วก็มีงานยิบย่อยในโรงเรียนค่ะแล้วร้องประสานเสียงยากไหม
                  ไม่ยากเเล้วก็ไม่ง่ายซะทีเดียวค่ะ ปกติเเล้ววงคอรัสจะมี 4 พาร์ท เเบ่งเป็น โซปราโน
                  อัลโต เทนเนอร์ เเล้วก็เบส ซึ่งเเต่ละพาร์ทส่วนใหญ่เเล้วจะร้องคนละโน้ตกัน
                  เลยต้องจำโน้ตของพาร์ทตัวเองให้ได้เพื่อที่จะได้ไม่หลงกับโน้ตของพาร์ทอื่นค่ะ
                  รุ่นพี่ก็มีทริกคือให้ฟัง MIDI บ่อย ๆ จะได้จำโน้ตได้เเม่นขึ้นค่ะ
                  เเล้วก็ง่ายขึ้นจริง ๆ เวลาเรามาร้องรวมกันกับเพื่อน ๆ พาร์ทอื่น สังคมในวงเป็นยังไง
                  เพื่อนเป็นยังไงบ้าง ทุกคนในวงเป็นกันเองมากกกกก นอกจากเราจะสนิทกับเพื่อน ๆ French
                  Chorus 27 ด้วยกันเองเเล้ว ตัวบีเองก็สนิทกับรุ่นพี่ด้วยเหมือนกัน อย่างที่หลาย ๆ
                  คนอาจจะทราบอยู่เเล้วว่า French Chorus เปิดรับทุกเเผนการเรียน
                  ไม่ใช่เเค่ศิลป์ฝรั่งเศส ก็เลยทำให้เรารู้จักกับเพื่อนต่างเเผนการเรียนมากขึ้น
                  ที่ไม่ใช่เเค่ศิลป์จีนที่ตัวบีเองอยู่ตอนนี้ บีเคยทำการบ้านคณิตไม่ได้
                  ก็เลยส่งข้อความไปหารุ่นพี่ใน French Chorus ที่อยู่เเผนการเรียนวิทย์-คณิต
                  พี่เขาก็ช่วยสอนจนบีเข้าใจเลยค่ะ น่ารักมาก ๆ ปกติซ้อมที่ไหนบ้าง ซ้อมที่ตึก 1 ค่ะ
                  ส่วนใหญ่เป็นห้อง 48 เเล้วก็มีห้อง Salle de Langue
                  ที่ไม่ได้มีโอกาสใช้ห้องบ่อยเท่าห้อง 48 ส่วนปิดเทอมที่ผ่านมาพวกเรามีซ้อมงาน Open
                  House ของปีนี้ที่เวทีลานบานเย็นค่ะ ขอกระซิบว่าพวกเราตั้งใจซ้อมกันมาก ๆ
                  ในช่วงปิดเทอมที่ผ่านมา เพื่อที่จะให้น้อง ๆ รุ่น 84
                  ทุกคนได้รับความทรงจำที่ดีกับโรงเรียนเตรียมอุดมฯ เเละชมรม French Chorus
                  ของเรากลับไปให้คิดถึงกันค่ะ สนุกไหม สนุกมาก ๆ ค่ะ ตื่นตาตื่นใจด้วย
                  โดยเฉพาะตอนบีออกงานครั้งเเรก คืองานมุทิตาจิต เป็นงานเกษียณอายุราชการของคุณครู
                  เเล้วงานนั้นพวกเราก็ได้ร่วมงานกับ E.P. Chorus ด้วย ถือว่าเป็นงานเเรกที่สนุก
                  น่าตื่นเต้น เเล้วก็ตื่นตาตื่นใจมาก ๆ ได้อะไรจาก French Chorus ไปบ้าง
                  บีกล้าบอกได้เต็มปากเลยว่าได้อะไรใหม่ ๆ เยอะมาก ที่ได้เเน่ ๆ
                  ก็คงเป็นเทคนิคการขับร้องประสานเสียง เช่น การหายใจ การปิดคำ
                  การทำเสียงสะท้อนในช่องกะโหลก เเล้วก็ทักษะการอ่าน การออกเสียงภาษาฝรั่งเศส
                  ที่สำคัญที่สุดคือการได้รู้จักพี่ ๆ ในวงที่ช่วยเหลือเรามาตลอด ซึ่งน่ารักมาก ๆ
                  เเล้วก็มิตรภาพเพื่อน ๆ รุ่น 27 ด้วยกันค่ะ หลังเรียนเสร็จก็มีเครียดบ้าง
                  เเต่พอเราได้มาซ้อม ได้มาร้องเพลง ได้มาเจอคนในวงเเล้วมัน happy อย่างที่บอกไปค่ะ
                  บีได้พลังบวกจากชมรมนี้เยอะมาก ๆ คน เขาว่า French Chorus ซ้อมหนัก จริงรึเปล่า
                  ไม่จริงค่า ชมรมเราสบาย ๆ เลย เวลาร้องเพลงจะมีได้มีความสุขกัน
                  เพราะมันจะทำให้เสียงร้องของเราก็จะสดใสไปด้วย เเถมช่วงก่อนสอบ 1
                  อาทิตย์จะไม่มีการซ้อม เพื่อให้ทุกคนได้ไปเตรียมตัวสอบกันค่ะ ชื่อ French Chorus
                  ร้องแต่เพลงฝรั่งเศสเหรอ แล้วต้องมีพื้นฐานภาษาฝรั่งเศสรึเปล่าถึงจะเข้าได้
                  ถึงชื่อชมรมเราจะเป็น French Chorus เเต่ก็มีร้องเพลงภาษาอื่นนอกจากฝรั่งเศสค่ะ
                  อย่างภาษาไทย ภาษาอังกฤษ เเล้วก็มีภาษา Kiluba ด้วยค่ะ เป็นภาษาในเเถบคองโก
                  ตอนได้ร้องเราก็รู้สึกว้าวมาก ๆ เเล้วเพลงก็เพราะด้วยค่ะ เเล้วก็การเข้ามาใน French
                  Chorus ไม่จำเป็นต้องมีพื้นฐานภาษาฝรั่งเศสก็ได้ค่ะ
                  อย่างตัวบีเองก็เรียนอยู่ศิลป์-จีน เเล้วก็ไม่มีพื้นฐานภาษาฝรั่งเศสเลย
                  เเต่ก็มีรุ่นพี่สอนพื้นฐานการอ่าน การออกเสียงให้ค่ะ มีเรื่องประทับใจอะไรกับ French
                  Chorus บ้างไหม ไหนเล่าให้ฟังหน่อยสิ มีหลายเรื่องที่บีเองประทับใจมากกก
                  ขอพูดถึงครั้งเเรกที่เข้าไปชมรมเเล้วกันนะคะ คือมันมีการคัดพาร์ท
                  คัดพาร์ทคือพี่เขาจะคัดให้ว่าเราได้อยู่พาร์ทไหน โซปราโน อัลโต เทนเนอร์ หรือเบส
                  โดยเราเตรียมเพลงมาเพลงเดียวเเล้วร้องให้พี่ ๆ ฟังค่ะ ตอนนั้นเราเลือกเพลง Cornelia
                  Street ของ Taylor Swift ไป เเล้วตอนเราร้องก็มีพี่ที่โบกไม้โบกมือให้เรา
                  เเถมตอนเราร้องจบเเล้วพี่ ๆ ในห้องก็ปรบมือให้ด้วย ถือว่าเป็น first impression
                  ที่ประทับใจสุด ๆ ค่ะ อยากจะฝากอะไรถึงว่าที่ TU84 หน่อยไหมครับ
                  อยากให้ทุกคนได้พยายามอย่างเต็มที่กับเวลาที่เหลืออีกไม่ถึง 1 เดือน
                  ทุกคนเก่งมากเเล้วจริง ๆ ที่พยายามอย่างหนักมาโดยตลอด บีเข้าใจมาก ๆ
                  ว่าตอนนี้เหนื่อยทั้งงานที่โรงเรียน สอบปลายภาค สอบโอเน็ต
                  เเต่ทุกคนอย่าลืมให้เวลากับตัวเองได้พักผ่อน หรือผ่อนคลายบ้าง ไม่ได้เป็นบาส
                  เเต่เป็นห่วงนะคะ เเล้วบีก็เชื่อว่ามีอีกหลาย ๆ คนที่พื้นฐานไม่ได้ดีนัก
                  ไม่ว่าจะเป็นพื้นฐานความรู้ หรือว่าพื้นฐานเศรษฐกิจของครอบครัว
                  อยากบอกให้รู้ว่ามีเราที่เป็นกำลังใจให้อยู่ตรงนี้เสมอ อย่าโทษตัวเอง อย่าท้อถอย
                  อย่าหมดหวัง อยากให้ได้ลองพยายามซักตั้ง ไม่ว่าผลลัพธ์จะเป็นยังไง
                  ทุกคนก็เก่งขึ้นจากเมื่อ 3 เดือนที่เเล้วมาก ๆ
                  หวังว่าเราจะได้เจอในรั้วเตรียมอุดมศึกษานะคะ เเล้วเจอกันค่ะ โดย บี TU83 IG :
                  @zehuaaa
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
                    src="/assets/clubs/triamudomfrenchchorus_profile_3.jpg"
                    width="96px"
                    height="96px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col text-gray-500 md:pl-0 pl-2">
                  <h1 className="text-xl md:text-2xl font-black">รัญชน์</h1>
                  <span className="text-xs">เตรียมอุดม 82</span>
                  <span className="w-max text-xs">IG: @_ranthjnx_</span>
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
                  French Chorus คืออะไร สำคัญกับคุณยังไง จากใจเลย
                  ถ้าถามว่าวงนี้อะไรก็คงนิยามให้เป็นบ้านหลังที่เท่าไหร่ก็ไม่รู้ของเราอะ 5555
                  มันเป็นที่ที่เรารู้สึกว่าเราได้เจอตัวเองอีกคนในนั้นอะ อยู่ ๆ ไปอยู่ ๆ
                  มามันก็เป็นส่วนหนึ่งในชีวิตเตรียมอุดมฯเราไปแล้ว French Chorus ทำอะไรบ้าง
                  ชมรมนี้เหรอ ถ้าตอบแบบกำปั้นทุบดินก็คือร้องเพลงประสานเสียง
                  ซึ่งเวลาร้องมันต้องแยกประสาท นอกเหนือจากนั้นก็เป็นกิจกรรมในชมรมกรุบกริบต่าง ๆ นา ๆ
                  มีรับงานราษฎร์งานหลวงในโรงเรียน แล้วก็ที่สำคัญที่สุดที่สุดคือ
                  การไปแข่งขับร้องประเภทหมู่ของสมาคมครูฝรั่งเศสแห่งฝรั่งเศส หรือที่เด็กศิลป์-ฝะ'
                  กับเด็ก French Chorus จะรู้จักกันในชื่อ L'A.T.P.F แล้วร้องประสานเสียงยากไหม
                  จะว่าง่ายมันก็ง่าย จะว่ายากมันก็ยาก ประมาณว่ามันคือการร้องโน้ตคนละตัวกัน
                  แล้วมันต้องแยกประสาทให้ออกว่าเราร้องตัวไหน ช่วงแรก ๆ อาจจะยากหน่อย
                  แต่ถ้าฝึกไปเรื่อย ๆ มันก็จะทำได้เอง สังคมในวงเป็นยังไง เพื่อนเป็นยังไงบ้าง
                  มันเป็นสังคมแบบเพื่อนช่วยเพื่อนนะ ด้วยความที่ทุกอย่างมันต้องไปด้วยกัน
                  นักร้องต้องไปด้วยกัน เราก็จะช่วยกัน คนที่อยู่มาก่อนหรือมีประสบการณ์ก็จะช่วยเพื่อน
                  ๆ ที่อาจจะยังไม่ได้กัน ส่วนเพื่อนเนี่ยก็น่ารักกันทุกคน อย่างที่บอกคือช่วยเหลือกัน
                  ใครไม่ทันอะไรก็ช่วยกัน พอมันอยู่วงเดียวกัน ทำอะไรด้วยกันบ่อย มันก็จะสนิทกันด้วย
                  ปกติซ้อมที่ไหนบ้าง ปกติเราจะซ้อมกันที่ตึก 1 เป็นตึกแรกเลยถ้าเดินเข้ามาทางพญาไท
                  ห้องหลัก ๆ ที่จะซ้อมก็เป็นห้อง Salle de langue บางทีก็ย้ายไปซ้อมที่อื่นบ้าง
                  สนุกไหม สนุกนะ เหมือนคล้าย ๆ กับต่อจิ๊กซอว์ ตอนร้องพาร์ทเดียวมันก็จะงง ๆ ว่า เอ๊ะ
                  อะไรวะ แต่พอมันเอามารวมกันแล้วอะ
                  ระหว่างที่เราร้องตรงนั้นเราก็ได้เสพดนตรีที่เราร้องไปด้วย ก็สนุกไปอีกแบบ
                  มันคือสุนทรีย์ล้วน ๆ เลย ได้อะไรจาก French Chorus ไปบ้าง
                  อย่างแรกคือได้ทำตามสิ่งที่ตัวเองอยากทำ 555555 เอาดี ๆ
                  เป็นสิ่งที่ทำให้อยากเข้าเตรียมฯด้วยนะ อย่างที่สองก็คือได้เพื่อน ได้สังคม
                  เพื่อนสนิทหลาย ๆ คนเราก็สนิทจากชมรมนี่แหละ อย่างที่สามคือเราได้เปิดโลกดนตรีไปเลย
                  ความรู้ด้านดนตรีจาก 0 ก็เข้ามาอยู่ที่ 20 ประมาณนั้น แล้วก็สุดท้าย ความทรงจำดี ๆ
                  หลาย ๆ อย่างเราก็ได้จากวงนี่แหละ คนเขาว่า French Chorus ซ้อมหนัก จริงรึเปล่า
                  ก็ไม่ได้หนักนะจริง ๆ แล้ว อาจจะต้องเข้าชมรมถี่ ๆ หน่อย เช่น
                  ชมรมอื่นอาจจะอาทิตย์ละครั้ง แต่ชมรมเราเรียกอาทิตย์ละสองครั้ง แต่พอไปซ้อมจริง ๆ
                  แล้วมันจะมีช่วงพัก คือช่วงเราอาจจะเรียกพาร์ทอื่นไปต่อ ระหว่างนั้นเราก็ต่อกันเอง
                  มันก็จะมีความได้พักไปในตัวด้วย ส่วนถ้าช่วงมีงานก็จะเยอะเป็นพิเศษ
                  ส่วนช่วงสอบก็เราจะซ้อมกันที่สามย่านโคออฟ ซ้อมคอรัส ? เปล่า ซ้อมตาย ;-; ชื่อ French
                  Chorus ร้องแต่เพลงฝรั่งเศสเหรอ แล้วต้องมีพื้นฐานภาษาฝรั่งเศสรึเปล่าถึงจะเข้าได้
                  ไม่ได้ร้องฝรั่งเศสอย่างเดียวนะ เราร้องกันหลายภาษาเลย แบบ ฝรั่งเศส ไทย อังกฤษ ละติน
                  เยอรมันก็มี แต่แค่หลัก ๆ ที่เราจะร้องก็จะเป็นไทยกับฝรั่งเศส
                  ส่วนพื้นฐานทางภาษาต้องมีไหม ตอบไว้เลยว่าไม่ต้องมี เราเน้นว่าเวลาร้องให้สำเนียงถูก
                  การออกเสียงถูกเป็นพอ
                  ซึ่งเราก็จะมีคนที่มีพื้นฐานทางภาษาเนี่ยออกมาสอนอ่านเนื้อให้ฟังอยู่แล้ว
                  เพราะฉะนั้นไม่จำเป็นต้องมีครับ มีเรื่องประทับใจอะไรกับ French Chorus บ้างไหม
                  ไหนเล่าให้ฟังหน่อยสิ ก็จะมีเรื่องตอนซ้อมแข่ง L'A.T.P.F นี่แหละ
                  เป็นจุดเริ่มต้นที่ทำให้รุ่น 26 สนิทกันแบบจริง ๆ จัง ๆ
                  เราซ้อมกันหนักด้วยแหละช่วงนั้น แล้วก็รุ่นเราเป็นรุ่นที่ผ่านร้อนผ่านหนาวมา
                  ผ่านเรื่องเจ็บปวดมา ทุกคนคือเหนื่อยจากการซ้อม ซึ่งเราเองก็เป็นคนนึงที่เหนื่อยมาก ๆ
                  เพราะเราต้องทำเอกสารไปแลกเปลี่ยนด้วย (แต่เนื่องจากติดโควิด ก็อย่างที่ทราบฮะ ;-;)
                  แต่คือพลังงานทุกคนก็ไม่ได้ตกลงไปจนเราก็ชนะการแข่งครั้งนั้นมาได้
                  จำได้ว่าวันนั้นที่เราไปแข่งเป็นวันนึงที่เรามีความสุขมากเลยนะ
                  เป็นวันที่เรารู้สึกว่าเราใช้เวลาได้คุ้มค่ากับที่เราเสียไปจริง ๆ
                  วันนั้นเราจำได้ว่ารุ่นพี่ซื้อชานมมาให้กิน
                  เพราะว่าก่อนแข่งเราจะโดนสั่งห้ามกินของบางอย่าง มันชื่นใจมากเลยนะชานมวันนั้น
                  มันอร่อยกว่าวันอื่น ๆ หลังจากวันนั้นทุกครั้งที่เรากินชานมเวลาที่เหนื่อยมาก ๆ
                  หรือมีเรื่องเครียด ๆ เราจะหวนกลับไปนึกถึงวันนั้นแล้วก็อมยิ้มมีความสุขตลอด
                  หนึ่งในประสบการณ์และความทรงจำดี ๆ อยากจะฝากอะไรถึงว่าที่ TU84 หน่อยไหมครับ
                  ก็ขอให้สู้ ๆ กับการสอบที่จะมาถึงนี้นะครับ มันอาจจะเหนื่อย มันอาจจะยาก
                  แต่ว่าพวกแกทำได้อยู่แล้ว พระเกี้ยวน้อยอยู่ไม่ไกลเกินเอื้อมทุกคนหรอกครับ
                  ขอให้โชคดีนะครับ แล้วก็ขอฝากชมรมขับร้องประสานเสียงภาษาฝรั่งเศส (French Chorus)
                  เอาไว้ในอ้อมอกอ้อมใจด้วยนะครับ :) โดย รัญชน์ TU82 IG : @_ranthjnx_
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