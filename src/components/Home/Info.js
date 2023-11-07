import React from 'react';
import { Tab } from '@headlessui/react'
import { useTranslation } from "react-i18next";

const Information = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div id="information" className="items-center">
        <div className="container mx-auto text-center mb-5">
          <div className="flex items-center justify-center mt-16 mb-12 px-10"><img src="/assets/title_info.svg" width="480px" alt="比賽資料"></img></div>
        </div>
        <div className="container mx-auto text-center">
          {/* 參賽規則 */}
          <div className="flex text-center justify-center mt-8 mb-6">
            <h3 className="info-headline">{t("entry-rules")}</h3>
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
                  {t("region-hk")}
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
                  {t("region-gba")}
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
                      <dt><div className="info-title">{t("match-group")}</div></dt>
                      <dd className="info-description">{t("target-aud")}</dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">{t("participators")}</div></dt>
                      <dd className="info-description">{t("team-members-hk")}</dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">{t("quota")}</div></dt>
                      <dd className="info-description">{t("nomination-hk")}</dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">{t("prizes")}</div></dt>
                      <dd className="info-description">
                        {t("prize1")}<br />
                        {t("prize2")}<br />
                        {t("prize3")}<br />
                        {t("prize4")}
                      </dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">{t("criteria")}</div></dt>
                      <dd className="info-description">{t("criteria1")}<br />{t("criteria2")}</dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">{t("venue")}</div></dt>
                      <dd className="info-description">{t("venue-hk")}</dd>
                    </div>
                    <div className="flex text-center justify-center mt-8 mb-12"><a href="/assets/aerospace_competition_info.pdf" target="_blank"><button className="btn btn-download">{t("download-hk")}</button></a></div>
                  </dl>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                {/*大灣區*/}
                <div className="container mx-auto no-border text-left sm:px-6 lg:px-20 xl:px-40">
                  <dl>
                    <div className="table-grid">
                      <dt><div className="info-title">{t("match-group")}</div></dt>
                      <dd className="info-description">{t("target-aud")}</dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">{t("participators")}</div></dt>
                      <dd className="info-description">{t("team-members-gba")}</dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">{t("quota")}</div></dt>
                      <dd className="info-description">{t("nomination-gba")}</dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">{t("prizes")}</div></dt>
                      <dd className="info-description">
                        {t("prize1")}<br />
                        {t("prize2")}<br />
                        {t("prize3")}<br />
                        {t("prize4")}
                      </dd>
                    </div>
                    <div className="table-grid">
                      <dt><div className="info-title">{t("criteria")}</div></dt>
                      <dd className="info-description">{t("criteria1")}<br />{t("criteria2")}</dd>
                    </div>
                    <div className="table-grid">
                    <dt><div className="info-title">{t("venue")}</div></dt>
                      <dd className="info-description">{t("venue-gba")}</dd>
                    </div>
                  </dl>
                  <div className="flex text-center justify-center mt-8 mb-12"><button className="btn btn-download">{t("download-gba")}</button></div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          {/* 場地 */}
          <div className="flex text-center justify-center mt-8 mb-6">
            <h3 className="info-headline mb-8">{t("venue-ref")}</h3>
          </div>
          <div className="container mx-auto px-10 grid grid-cols-1 gap-12 text-left md:grid-cols-2 xl:px-40">
            <div className="sm:order-last">
              <ul>
                <li>{t("venue-ref1")}</li>
                <li>{t("venue-ref2")}</li>
                <li>{t("venue-ref3")}</li>
                <li className="mt-3 font-semibold"><li>{t("venue-remarks")}</li></li>
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