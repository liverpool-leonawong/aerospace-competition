import { React } from 'react';
import Collapse from '../common/Collapse';

export default ({ refFaq }) => {
  return (
    <>
      <div id="faq" className="container mx-auto text-center mt-24 mb-8">
      <div class="container mx-auto text-center mb-5">
          <div class="flex items-center justify-center mt-16 mb-12 px-10"><img src="/assets/title_faq.svg" width="480px"></img></div>
        </div>
      </div>
      {data.map((i, index) => (
        <div className="container mx-auto px-4 xl:px-20">
        <Collapse item={i} key={index} index={index} />
        </div>
      ))}
    </>
  );
};

const data = [
  {
    title: '報名表格可否以中文/英文填寫？',
    description: (
      <div className="faq_answer mb-4">
        所有資料按表格内的提示爲準,填寫相應語言的資料。 
      </div>
    ),
  },
  {
    title: '比賽如何計分?',
    description: (
      <div className="faq_answer mb-4">
        在比賽日，參賽隊伍會模擬火星探索，進行一系列任務，按任務表現計分（70%）。參賽隊伍提交演講文件分享設計理念和特色，評委專家將對創意，美觀和實用性進行評核（30%）。 
      </div>
    ),
  },
  {
    title: '比賽當日會否提供電源或充電設備？',
    description: (
      <div className="faq_answer mb-4">
        比賽當日場館會提供電源或充電設備，但數量有限，強烈建議參賽隊伍自備電源，以備不時之需。
      </div>
    ),
  },
  {
    title: '比賽當天是否可進行場地測試？',
    description: (
      <div className="faq_answer mb-4">
       比賽當天設有測試場地，每隊最多10分鐘。
      </div>
    ),
  },
  {
    title: '可否使用自備零件改裝機械人？',
    description: (
      <div className="faq_answer mb-4">
        不可以，只接受使用比賽指定零件組裝的機械人，使用額外零件或自行準備的零件，會被要求在正式比賽前拆除。
      </div>
    ),
  },
  {
    title: '如果比賽途中機械人零件掉落/電池耗盡/連線中斷，會否重置比賽?',
    description: <div className="faq_answer mb-4">參賽隊伍應在比賽前檢查機械人的狀態，確保比賽能順利進行。若以上類以情況在比賽途中發生，選手可以示意進入限制區域並立即進行修復，但比賽時間不會因此暫停或停止。
    參賽隊伍亦可以申請重新進行比賽，但會有額外扣分，僅限一次。
    </div>
  },
  {
    title: '請問可否交替使用多於一部設備操控機械人？',
    description: (
      <div className="faq_answer mb-4">賽規無禁止使用多於一部設備操控機械人。但持有操控設備的操控者必須留在指定區域，不得擅自離開。</div>
    ),
  },
  {
    title: '提交的視頻及文檔大小有何要求？',
    description: (
      <div className="faq_answer mb-4">所有提交的文檔及相片大小不可大於5MB，而視頻大小不可大於50MB。提交方法及詳情請參考比賽賽規。</div>
    ),
  },
];