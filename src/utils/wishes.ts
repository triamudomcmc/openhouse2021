export const getRandomWishes = () => wishes[Math.floor(Math.random() * wishes.length)]

const wishes = [
  'ทำให้เต็มที่ อย่าเอาตัวเองไปเทียบกับใคร แกเก่งที่สุดในแบบของแกแล้ว เจอกันในเตรียมนะคะ',
  'อย่าหักโหมเกินไปนะ ตั้งใจทำให้เต็มที่ก็พอแล้ว พวกพี่ทุกคนเป็นกำลังใจให้ แล้วเจอกันที่เตรียม',
  'เหนื่อยก็พักนะน้อง สู้เข้าไว้ ปลายทางอีกนิดเดียว!!',
  'สู้ ๆ นะคะว่าที่เด็กเตรียม เราทำได้! ใส่ความพยายาม ใส่ใจ ตอนติดมันฟีลกู๊ดมาก ๆ เลย สู้ ๆ น้า',
  'สู้ ๆ นะคั้บ เป็นกำลังใจให้นะ รักน้องตั้งแต่ยังไม่เห็นหน้า พี่ ๆ รอน้อง ๆ แล้วน้าค้า',
  'ตั้งใจทำนะ สู้ ๆ ขอให้ทำได้เป็นกำลังใจให้นะ ถ้าติดมาเจอกันได้นะ',
  'สู้ ๆ น้าพวกแก เก่งอยู่แล้วว ขอให้สมหวังกับทุกอย่างเลย! แล้วมาเจอกันนะ',
  'สู้ ๆ น้าาา น้อง ๆ ทุกคน ทำให้เต็มที่ที่สุด เชื่อมั่นในความสามารถของตัวเองน้าา อย่าหยุดพยายาม !',
  'สู้ ๆ นะคับ ! ท้อต่อแต่อย่าถอยน้า อีกนิดที่ผ่านมาเก่งมาก ๆ เลยเหนื่อยก็พักบ้าง หาของกินอร่อย ๆ แล้วฮึบใหม่',
  'อ่านหนังสือมาเยอะแล้วใช่ไหม ? อย่าลืมพักบ้างนะ อย่าหักโหมเกินไป ! เป็นกำลังใจให้นะว่าที่ TU84',
  'สู้ ๆ นะคะน้อง ๆ ว่าที่เด็กเตรียมฯ ! เหนื่อยได้ท้อได้แต่ต้องกลับมาสู้ใหม่นะคะ แล้วเจอกันที่เตรียมฯ นะ !',
  'สู้ ๆ นะค้าาาน้อง ๆ เข้ามาแล้วไม่ผิดหวังแน่นอนนน',
  'เป็นกำลังใจให้น้าาาา เหนื่อยหน่อย แต่คุ้มค่า ผ่านอะไรมามากแล้ว ภูมิใจในตัวเองนะคับ',
  'อีกนิดเดียวจะถึงฝันแล้วน้า เหนื่อยก็พักบ้างแล้วค่อยกลับมาตั้งใจใหม่ รอเจอทุกคนอยู่คับ',
  'น้อง ๆ เดินทางมาขนาดนี้แล้วไปให้ถึงนะ !!',
  'สู้สู้นะ ว่าที่ TU84 ทุกคน รอบูมอยู่นะ #รักน้องตั้งแต่ยังไม่เห็นหน้า',
  'ช่วงนี้เหนื่อยหน่อย แต่อดทนอีกอึดใจเดียวก็ใจสบายแล้วนะคะ สู้ ๆ นะ ! มาเป็นรุ่นน้องเราให้ได้นะ',
  'เป็นกำลังใจให้น้อง ๆ ทุกคนน้าา เหนื่อยตอนนี้แต่ผลลัพธ์ที่ได้มามันคุ้มค่าแน่นอน สู้ ๆ ค้าบบบ',
  'ตั้งใจอ่านหนังสือนะคะน้อง ๆ ทุกคน คิดถึงวันประกาศผลไว้ วันที่เราจะมีความสุขที่สุด แล้วเจอกันนะ',
  'เป็นกำลังใจให้นะ รู้ว่าเหนื่อย ถ้าไม่ไหวก็พักบ้าง อย่าหักโหมเกินไป เก่งมาก ๆ เลยนะที่ผ่านมา แล้วเจอกันนะคะ',
  'สู้ ๆ นะน้อง พักผ่อนเยอะ ๆ นะ อย่าเครียดมาก ขอให้วันสอบเป็นวันของน้องนะ แล้วเจอกันที่เตรียมฯ',
  'ถ้ารู้สึกท้อ ให้บอกตัวเองว่าเราทำได้ ! เริ่มต้นจากเชื่อมั่นในตัวเอง แล้วท้ายที่สุดเราก็จะทำมันได้ดีแน่นอนคับ !',
  'รู้ว่าทุกคนเหนื่อย แต่เมื่อถึงวันนั้นมันจะต้องคุ้มค่ามากแน่ ๆ คิดถึงเวลาที่สอบติดเอาไว้นะคะ พี่ ๆ รอน้อง ๆ อยู่นะ',
  'สู้สู้นะค้าบ คนเก่ง ! อีกแป๊บเดียวก็จาสอบแล้ว ฮึบ ๆ ทำได้อยู่แล้ว ไว้มาเจอกันนะ',
  'เป็นกำลังใจให้น้อง ๆ ทุกคนเลยนะคะ ขอให้ทำให้เต็มที่ที่สุดเลยเนอะ แล้วเจอกันในเตรียมอุดมฯ นะคะ',
  'Susu naka nongnong can’t wait for TU84 laew',
  'สู้ ๆ นะ พยายามอีกนิดก็จะทำสำเร็จแล้ว',
  'สู้ ๆ กับการอ่านหนังสือนะคะ มีอะไรดี ๆ หลายอย่างรออยู่ ! แกจะผ่านมันไปได้',
  'พี่เข้าใจนะว่าท้อเหนื่อยหรือหมดไฟ แต่พี่ ๆ ทุกคนรออยู่นะ รอวันที่น้องมาในรั้วและเป็นครอบครัวเดียวกัน',
  'สู้ ๆ นะครับ น้อง ๆ ทุกคน พี่เข้าใจว่าปีนี้มีโควิดซึ่งอาจจะทำให้น้อง ๆ เหนื่อย แต่พี่คอยเป็นกำลังใจให้น้าาา',
  'เหนื่อยได้ท้อได้แต่ห้ามถอยเด็ดขาด ! สู้ ๆ แล้วเจอกัน #รักน้องตั้งแต่ยังไม่เห็นหน้า',
  'เชื่อมันในตัวเองนะคะ',
  'สู้ ๆ นะว่าที่ TU84 ทุกคน เป็นกำลังใจให้น้าาา',
  'รู้ว่าพวกแกเหนื่อยกันมามาก ๆ ขอให้ความตั้งใจทั้งหมดที่มีส่งผลให้น้อง ๆ สอบติดเตรียมฯ นะค้าบ แล้วมาเจอกัน',
  'ไม่รู้ว่าตอนนี้น้อง ๆ จะรู้สึกท้ออยู่หรือเปล่า แต่อยากให้รู้ไว้ว่ายังมีหนึ่งกำลังใจเชียร์อยู่ตรงนี้นะคะ สู้ ๆ !!!',
  'แล้วเจอกันวันบูมก้นหอยนะ สู้ ๆ คับ',
  'พี่เข้าใจนะว่าท้อเหนื่อยหรือหมดไฟแต่พี่ ๆ ทุกคนรออยู่นะ รอวันที่น้องมาในรั้วและเป็นครอบครัวเดียวกัน',
  'เอาใจสู้ในการเรียน ดีกว่าเพียรในความรัก',
  'ทำด้วยความมั่นใจที่จะทำ แล้วคิดให้รอบคอบ',
  'แกน่ะมันโคตรเจ๋ง อย่าเพิ่งท้อนะ อีกนิดเดียวเท่านั้น ความฝันของแกมันใกล้แค่เอื้อมแล้ว สู้สู้ !',
  'สู้ ๆ นะเด็กน้อย ! พยายามเข้านะคะ พี่รอแกมาเป็นรุ่นน้องอยู่นาาา ทำให้เต็มที่นะ แกทำได้ !',
  'สวัสดีงับ เหนื่อยมากเลย แต่อยากให้รู้ไว้ว่ามันจะคุ้มเหนื่อยแน่นอน อยากเจอแล้ว สู้ ๆ นะน้อง !',
  'อีกนิดเดียวเท่านั้น ! แกน่ะ มันเจ๋งเป้งที่สุด อย่ากดดันตัวเองมากเกินไป เหนื่อยก็ต้องพักนะ สู้ ๆ',
  'สู้ ๆ น้าน้อง ๆ ทุกคน พี่เป็นกำลังใจให้เสมอ รักน้องตั้งแต่ยังไม่เห็นหน้า แล้วเจอกันในเตรียมฯ',
  'ไฟต์ติ้งนะคั้บบ ขอให้ประสบความสำเร็จ เหนื่อยได้แต่อย่าท้อ ยังไงก็เป็นกำลังใจให้นะคะ',
  'สู้ ๆ นะคะน้อง ๆ มาถึงโค้งสุดท้ายในการสอบเข้าแล้ว ถ้าเหนื่อยก็พักแล้วค่อยเริ่มในตอนที่พร้อมนะคะ !',
  'เหนื่อยก็พักบ้างนะคะ นอนเยอะ ๆ พักผ่อนให้พอ เราเป็นกำลังใจให้เสมอเลยนะ !',
  'ทำให้เต็มที่ ไม่ว่าผลลัพธ์จะเป็นอย่างไร ก็จงภูมิใจว่าเราพยายาม และทำเต็มที่ที่สุดแล้ว สู้ !',
  'เก่งมากนะคะทุกคนที่พยายามมาขนาดนี้ พี่ขอเป็นกำลังใจให้น้องเป็นตัวเองแบบที่ไม่เสียดายนะ สู้เค้าค่ะ',
  'สู้ ๆ น้าาา น้อง ๆ พี่เชื่อว่าถ้าน้อง ๆ ตั้งใจไม่มีไรไม่สำเร็จแน่นอนนนน !!!! ว่าที่ TU84',
  'ระหว่างทางอาจมีท้อมีเหนื่อยบ้างแต่ห้ามถอยนะ พี่ ๆ ทุกคนรอเจอน้อง ๆ อยู่ต้องมาเจอกันให้ได้เลย สู้ ๆ น้าาา',
  'ช่วงนี้อาจจะเหนื่อยหน่อย เราก็ขอเป็นกำลังใจให้เสมอเลยน้า อีกฮึบเดียว ! แล้วเจอกันในเตรียมค้าบ',
  'Susu kub รอเจอกันในรั้วเตรียมฯ อยู่นะ',
  'เพราะว่าทุกคนพยายามอย่างเต็มที่ ดังนั้นวันจริง ขอให้คุณนางฟ้าอวยพรให้ทุกคนสมปรารถนาครับ',
  'พี่ ๆ เป็นกำลังใจให้น้อง ๆ ทุกคนนะ ทำให้เต็มที่ที่สุดนะค้าบบบ พี่ ๆ รออยู่นะะ',
  'Susu nongnonggg it’s gonna worth your sweat and tear !',
  'เห็นระหว่างทางที่แกเดินมามั้ย พัฒนาขึ้นจากครั้งแรกมาก ๆ แล้ว แกทำดีแล้ว !',
  'เวลานับต่อจากนี้ ถึงจะน้อย แต่ทำให้เต็มที่นะ ! แกจะได้ไม่เสียดาย !',
  'สู้ ๆ นะน้อง ๆ พี่ว่าเราทำได้ ขอให้สอบติดนะ อีกไม่กี่เดือนแล้ว !!',
  'เหนื่อยก็พัก ท้อได้แต่อย่าถอยพี่ ๆ เป็นกำลังใจน้องเสมอนะ ทำให้เต็มที่แล้วมาเจอกันวันบูมนะคะ',
  'สู้ ๆ น้าน้อง ๆ พี่รู้ว่าน้องทำได้อยู่แล้ว เหนื่อยก็พักได้ แต่ก็ต้องกลับมาสู้ใหม่เพื่อความฝันที่เป็นจริงน้าาา'
]