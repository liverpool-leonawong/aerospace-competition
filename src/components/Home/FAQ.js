import { React } from 'react';
import Collapse from '../common/Collapse';
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t, i18n } = useTranslation();
  const data = [
    {
      title: (<div>{t("Q1")}</div>),
      description: (
        <div className="faq_answer mb-4">
          {t("A1")}
        </div>
      ),
    },
    {
      title: (<div>{t("Q2")}</div>),
      description: (
        <div className="faq_answer mb-4">
          {t("A2")}
        </div>
      ),
    },
    {
      title: (<div>{t("Q3")}</div>),
      description: (
        <div className="faq_answer mb-4">
          {t("A3")}
        </div>
      ),
    },
    {
      title: (<div>{t("Q4")}</div>),
      description: (
        <div className="faq_answer mb-4">
          {t("A4")}
        </div>
      ),
    },
    {
      title: (<div>{t("Q5")}</div>),
      description: (
        <div className="faq_answer mb-4">
          {t("A5")}
        </div>
      ),
    },
    {
      title: (<div>{t("Q6")}</div>),
      description:
        <div className="faq_answer mb-4">
          {t("A6")}
        </div>
    },
    {
      title: (<div>{t("Q7")}</div>),
      description: (
        <div className="faq_answer mb-4">
          {t("A7")}
        </div>
      ),
    },
    {
      title: (<div>{t("Q8")}</div>),
      description: (
        <div className="faq_answer mb-4">
          {t("A8")}
        </div>
      ),
    },
  ];
  return (
    <>
      <div id="faq" className="container mx-auto text-center mt-24 mb-8">
        <div class="container mx-auto text-center mb-5">
          <div class="flex items-center justify-center mt-16 mb-12 px-10"><img src="/assets/title_faq.svg" width="480px" alt="常見問題"></img></div>
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
export default FAQ;

