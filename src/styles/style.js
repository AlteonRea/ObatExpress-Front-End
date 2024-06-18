/*
Color
normal text: 474554
inactive/more dark: #3b3b3b or #5e5e5e
highlight: #8083ff
border: #D6F4FF
*/
const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',

  heading2:
    'font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full',
  heading4:
    'font-poppins font-semibold text-[24px] text-black leading-[38px] w-full',
  heading42: 'font-poppins font-semibold text-[24px] leading-[38px] w-full',
  heading5: 'font-poppins font-semibold text-[16px] text-black mb-2',
  paragraph: 'font-poppins font-normal text-black text-[18px] leading-[30.8px]',
  sidebar_item:
    'font-poppins font-semibold text-[#3B3B3B] hover:text-[#8083FF] text-[18px] w-[100%] block py-[10px] px-[30px] text-left',
  sidebar_item_sublink:
    'font-poppins font-semibold text-[#5E5E5E] hover:text-[#8083FF] text-[16px] w-[100%] block py-[8px]',
  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-16 px-6 sm:py-12 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',

  fullScreen: 'h-[100vh] w-[100vw]',

  inputForm:
    'pb-3 outline-none bg-transparent border-b-[1px] border-black font-medium text-[18px]',
  formItem: 'w-full flex flex-col',
  employeeInputForm: 'border-2 px-3',
  stat_card:
    'border-sky-200 border-2 flex-1 rounded-md h-[150px] flex justify-between flex-col relative',

  infoTitle: 'text-[#8b8b8b]',
  infoValue: 'font-semibold font-poppins text-[18px]',

  employeeDetailLabel: 'font-semibold text-[#5e5e5e] text-[14px]',
  employeeDetailSpan: 'font-semibold font-poppins',
  shipmentFinished: `after:content-[''] after:absolute after:left-[-2px] after:top-[0%] after:z-0 after:h-[50%] after:w-0 after:border-l-2 after:border-indigo-500`,
}

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
}

export default styles
