import React from 'react';
import { Tab } from '@headlessui/react'

const Information = () => {

  return (
    <>
      <div id="information" className="items-center">
        <div className="container mx-auto text-center mb-5">
          <div className="flex items-center justify-center mt-16 mb-12 px-10"><img src="/assets/title_info.svg" width="480px" alt="比賽資料"></img></div>
        </div>
        <div className="container mx-auto text-center">
          {/* 參賽規則 */}
          <div className="flex text-center justify-center mt-8 mb-6">
            <h3 className="info-headline">參賽規則</h3>
          </div>
          <Tab.Group>
            <Tab.List>
              <Tab>
                {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'tab tab-selected' : 'tab tab-unselect'
                  }
                >
                  香港區
                </button>
              )}
              </Tab>
              <Tab>
                {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected ? 'tab tab-selected' : 'tab tab-unselect'
                  }
                >
                  大灣區
                </button>
              )}
              </Tab> 
            </Tab.List>
            <Tab.Panels className="mt-4">
              <Tab.Panel>
                {/*香港區*/}
                <div className="container mx-auto no-border text-left sm:px-6 lg:px-20 xl:px-40">
                  <dl>
                    <div className="table-grid">
                      <dt><div className="info-title">參賽組別</div></dt>
                      <dd className="info-description">小四至小六</dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">參賽人數</div></dt>
                      <dd className="info-description">每隊最多3人</dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">參賽名額</div></dt>
                      <dd className="info-description">每間學校最多提名5隊</dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">比賽獎項</div></dt>
                      <dd className="info-description">冠，亞，季，優異獎<br />
                        最佳外形設計<br />
                        最佳編程設計<br />
                        最佳團隊合作精神
                      </dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">評分準則</div></dt>
                      <dd className="info-description">任務分（70%） <br />介紹短片（30%）</dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">比賽場地</div></dt>
                      <dd className="info-description">數碼港</dd>
                    </div>
                  </dl>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                {/*大灣區*/}
                <div className="container mx-auto no-border text-left sm:px-6 lg:px-20 xl:px-40">
                  <dl>
                    <div className="table-grid">
                      <dt><div className="info-title">參賽組別</div></dt>
                      <dd className="info-description">小四至小六</dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">參賽人數</div></dt>
                      <dd className="info-description">每隊最多3人</dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">參賽名額</div></dt>
                      <dd className="info-description">每間學校最少提名1隊</dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">比賽獎項</div></dt>
                      <dd className="info-description">冠，亞，季，優異獎<br />
                        最佳外形設計<br />
                        最佳編程設計<br />
                        最佳團隊合作精神
                      </dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">評分準則</div></dt>
                      <dd className="info-description">任務分（70%） <br />介紹短片（30%）</dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">比賽場地</div></dt>
                      <dd className="info-description">廣州南粵航空航天科技創新研究院</dd>
                    </div>
                  </dl>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          <div className="flex text-center justify-center mt-8 mb-12"><a href="/assets/aerospace_competition_info.pdf" target="_blank"><button className="btn btn-download">下載詳細資料</button></a></div>
          {/* 場地 */}
          <div className="flex text-center justify-center mt-8 mb-6">
            <h3 className="info-headline mb-8">比賽場地參考</h3>
          </div>
          <div className="container mx-auto px-10 grid grid-cols-1 gap-12 text-left md:grid-cols-2 xl:px-40">
            <div className="sm:order-last">
              <ul>
                <li>1. 大小是5m x 5m</li>
                <li>2. 包括基地，任務區域，山體，障礙物</li>
                <li>3. 虛綫僅代表參考路綫，不涉及計分項目</li>
                <li className="mt-3 font-semibold">注：正式比賽場地稍後公佈</li>
              </ul>
            </div>
            <div className="sm:order-first flex items-center"><img src="/assets/dxne_robotic_venue.png" width="400px" alt="比賽場地參考"></img></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;