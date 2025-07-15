import React from 'react';
import PropTypes from 'prop-types';
import styles from './Timeline.module.css';

/**
 * Timeline - displays a sequence of events (vertical or horizontal)
 * @param {Array} events - Array of event objects { time, title, description, icon, color }
 * @param {string} mode - 'vertical' or 'horizontal'
 * @param {string} className - Additional class names
 * @param {object} style - Inline styles
 */
export function Timeline({ events = [], mode = 'vertical', className = '', style = {} }) {
  const isHorizontal = mode === 'horizontal';
  return (
    <div
      className={[
        styles.timeline,
        isHorizontal ? styles.horizontal : styles.vertical,
        className
      ].filter(Boolean).join(' ')}
      style={style}
    >
      {events.length === 0 ? (
        <div className={styles.timelineEmpty}>No events</div>
      ) : (
        <ul className={styles.timelineList}>
          {events.map((event, idx) => {
            const dotStyle = event.color ? { background: event.color, boxShadow: `0 0 0 2px ${event.color}` } : undefined;
            const lineStyle = event.color ? { background: `linear-gradient(to ${isHorizontal ? 'right' : 'bottom'}, ${event.color} 60%, #e0e7ff 100%)` } : undefined;
            return (
              <li
                className={[
                  styles.timelineEvent,
                  isHorizontal ? styles.horizontalEvent : styles.verticalEvent
                ].filter(Boolean).join(' ')}
                key={idx}
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className={styles.timelineDot} style={dotStyle}>
                  {event.icon && <span className={styles.timelineIcon}>{event.icon}</span>}
                </div>
                {/* Line after dot, except for last event */}
                {idx !== events.length - 1 && (
                  <div
                    className={[
                      styles.timelineLine,
                      isHorizontal ? styles.horizontalLine : styles.verticalLine
                    ].filter(Boolean).join(' ')}
                    style={lineStyle}
                  />
                )}
                <div className={styles.timelineContent}>
                  {event.time && <div className={styles.timelineTime}>{event.time}</div>}
                  <div className={styles.timelineTitle}>{event.title}</div>
                  {event.description && (
                    <div className={styles.timelineDescription}>{event.description}</div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

Timeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      icon: PropTypes.node,
      color: PropTypes.string,
    })
  ),
  mode: PropTypes.oneOf(['vertical', 'horizontal']),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Timeline;
