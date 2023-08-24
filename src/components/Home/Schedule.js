import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { AppRegistrationRounded, InterpreterModeRounded, TerminalRounded, SmartToyRounded, WorkspacesRounded, TourRounded  } from '@mui/icons-material';

const Schedule = () => {

  return (
    <>
      <div id="schedule" className="items-center">
        <div class="container mx-auto text-center mt-24 mb-12">
          <h1>比賽日程</h1>
        </div>
        <div class="container mx-auto text-center">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(231,146,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(231,146,0)' }}
              iconStyle={{ background: 'rgb(231,146,0)', color: '#fff' }}
              icon={<AppRegistrationRounded />}
            >
              <h2 className="vertical-timeline-element-title">2023.9.1 - 2024.2.29</h2>
              <h3 className="vertical-timeline-element-subtitle">開始報名</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(231,146,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(231,146,0)' }}
              iconStyle={{ background: 'rgb(231,146,0)', color: '#fff' }}
              icon={<InterpreterModeRounded />}
            >
              <h2 className="vertical-timeline-element-title">2023.11</h2>
              <h3 className="vertical-timeline-element-subtitle">比賽簡介會（香港）</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(231,146,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(231,146,0)' }}
              iconStyle={{ background: 'rgb(231,146,0)', color: '#fff' }}
              icon={<TerminalRounded />}
            >
              <h2 className="vertical-timeline-element-title">2024.4</h2>
              <h3 className="vertical-timeline-element-subtitle">完成火星探測車編程訓練班</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(231,146,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(231,146,0)' }}
              iconStyle={{ background: 'rgb(231,146,0)', color: '#fff' }}
              icon={<SmartToyRounded />}
            >
              <h2 className="vertical-timeline-element-title">2024.4</h2>
              <h3 className="vertical-timeline-element-subtitle">香港區航天機械人編程大賽</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(231,146,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(231,146,0)' }}
              iconStyle={{ background: 'rgb(231,146,0)', color: '#fff' }}
              icon={<WorkspacesRounded />}
            >
              <h2 className="vertical-timeline-element-title">2024.6</h2>
              <h3 className="vertical-timeline-element-subtitle">大灣區比賽開幕禮</h3>
              <h3 className="vertical-timeline-element-subtitle">大灣區比賽工作坊</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(231,146,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(231,146,0)' }}
              iconStyle={{ background: 'rgb(231,146,0)', color: '#fff' }}
              icon={<TourRounded />}
            >
              <h2 className="vertical-timeline-element-title">2024.7</h2>
              <h3 className="vertical-timeline-element-subtitle">大灣區航天機械人編程大賽</h3>
              <h3 className="vertical-timeline-element-subtitle">大灣區航天科技交流團</h3>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Schedule;