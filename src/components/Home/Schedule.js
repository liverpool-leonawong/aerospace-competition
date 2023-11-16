import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { AppRegistrationRounded, InterpreterModeRounded, TerminalRounded, SmartToyRounded, WorkspacesRounded, TourRounded  } from '@mui/icons-material';
import { useTranslation } from "react-i18next";

const Schedule = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div id="schedule" className="items-center">
      <div class="container mx-auto text-center mb-5">
          <div class="flex items-center justify-center mt-16 mb-12 px-10"><img src="/assets/title_schedule.svg" width="480px" alt="比賽日程"></img></div>
        </div>
        <div class="container mx-auto text-center">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255,153,0)' }}
              iconStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              icon={<AppRegistrationRounded />}
            >
              <h1 className="vertical-timeline-element-title pt-3 lg:pt-0">2023.9.15</h1>
              <h2 className="vertical-timeline-element-subtitle">{t("agenda1")}</h2>
              <div>[{t("deadline")}: 2024.4.30]</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255,153,0)' }}
              iconStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              icon={<InterpreterModeRounded />}
            >
              <h1 className="vertical-timeline-element-title pt-3 lg:pt-0">2023.12</h1>
              <h2 className="vertical-timeline-element-subtitle">{t("agenda2")}</h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255,153,0)' }}
              iconStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              icon={<TerminalRounded />}
            >
              <h1 className="vertical-timeline-element-title pt-3 lg:pt-0">2024.04</h1>
              <h2 className="vertical-timeline-element-subtitle">{t("agenda3A")}</h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255,153,0)' }}
              iconStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              icon={<SmartToyRounded />}
            >
              <h1 className="vertical-timeline-element-title pt-3 lg:pt-0">2024.04</h1>
              <h2 className="vertical-timeline-element-subtitle">{t("agenda3B")}</h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255,153,0)' }}
              iconStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              icon={<SmartToyRounded />}
            >
              <h1 className="vertical-timeline-element-title pt-3 lg:pt-0">2024.06</h1>
              <h2 className="vertical-timeline-element-subtitle">{t("agenda4A")}</h2>
              <h2 className="vertical-timeline-element-subtitle">{t("agenda4B")}<br />{t("agendaHKRegion")}</h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255,153,0)' }}
              iconStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              icon={<TourRounded />}
            >
              <h1 className="vertical-timeline-element-title pt-3 lg:pt-0">2024.07</h1>
              <h2 className="vertical-timeline-element-subtitle">{t("agenda4B")}<br />{t("agendaGBARegion")}</h2>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Schedule;