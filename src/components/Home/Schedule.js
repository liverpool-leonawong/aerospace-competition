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
              contentStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255,153,0)' }}
              iconStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              icon={<AppRegistrationRounded />}
            >
              <h1 className="vertical-timeline-element-title">2023.9.15</h1>
              <h2 className="vertical-timeline-element-subtitle">開始報名</h2>
              <div>[截止日期：2024.2.29]</div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255,153,0)' }}
              iconStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              icon={<InterpreterModeRounded />}
            >
              <h1 className="vertical-timeline-element-title">2023.11</h1>
              <h2 className="vertical-timeline-element-subtitle">比賽簡介會（香港）</h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255,153,0)' }}
              iconStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              icon={<TerminalRounded />}
            >
              <h1 className="vertical-timeline-element-title">2024.3</h1>
              <h2 className="vertical-timeline-element-subtitle">完成火星探測車編程訓練班</h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255,153,0)' }}
              iconStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              icon={<SmartToyRounded />}
            >
              <h1 className="vertical-timeline-element-title">2024.4</h1>
              <h2 className="vertical-timeline-element-subtitle">香港區航天機械人編程大賽</h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255,153,0)' }}
              iconStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              icon={<WorkspacesRounded />}
            >
              <h1 className="vertical-timeline-element-title">2024.6</h1>
              <h2 className="vertical-timeline-element-subtitle">大灣區比賽開幕禮</h2>
              <h2 className="vertical-timeline-element-subtitle">大灣區比賽工作坊</h2>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255,153,0)' }}
              iconStyle={{ background: 'rgb(255,153,0)', color: '#fff' }}
              icon={<TourRounded />}
            >
              <h1 className="vertical-timeline-element-title">2024.7</h1>
              <h2 className="vertical-timeline-element-subtitle">大灣區航天機械人編程大賽</h2>
              <h2 className="vertical-timeline-element-subtitle">大灣區航天科技交流團</h2>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Schedule;