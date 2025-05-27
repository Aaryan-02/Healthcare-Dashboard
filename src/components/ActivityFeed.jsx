import { activityData } from "../data/activityData"
import "../styles/ActivityFeed.css"

const ActivityFeed = () => {

  const getBarColor = (index) => {
    const colors = [
      'bg-gray-300', // Light gray
      'bg-teal-300', // Light teal
      'bg-blue-800', // Dark blue
      'bg-gray-300', // Light gray
      'bg-teal-400', // Medium teal
      'bg-gray-200'  // Very light gray
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="activity-feed">
        <div className="flex justify-between items-center mb-16">
          <h1 className="activity-title">Activity</h1>
          <span className="activity-subtitle">3 appointments this week</span>
        </div>

        {/* Chart Area */}
        <div className="flex items-end justify-between h-60 px-4">
          {activityData.map((dayData, dayIndex) => (
            <div key={dayData.day} className="flex flex-col items-center">
              {/* Bars */}
              <div className="flex items-end justify-center gap-2 md:gap-4 h-48 mb-6">
                {dayData.bars.map((height, barIndex) => {
                  const isMondaySecondBar =
                    dayData.day === "Mon" && barIndex === 1;
                  const TuesSecondBar =
                    dayData.day === "Tues" && barIndex === 1;
                  const isWednesdaySecondBar = dayData.day === "Wed" && barIndex === 1;
                  const isthruSecondBar = dayData.day === "Thurs" && barIndex === 1;
                  const isFridaySecondBar = dayData.day === "Fri" && barIndex === 1;
                  const isSatSecondBar = dayData.day === "Sat" && barIndex === 1;
                  const isMondayThirdBar = dayData.day === "Mon" && barIndex === 2;
                  const isTuesThirdBar = dayData.day === "Tues" && barIndex === 2;
                  const isWedThirdBar = dayData.day === "Wed" && barIndex === 2;
                  const isthruthirdbar = dayData.day === "Thurs" && barIndex === 2;
                  const isFrithrirdbar = dayData.day === "Fri" && barIndex === 2;
                  const isSatThirdBar = dayData.day === "Sat" && barIndex === 2;
                  const isWedfourthBar = dayData.day === "Wed" && barIndex === 3;
                  const isFrifourthBar = dayData.day === "Fri" && barIndex === 3;
                  const isSatForthBar = dayData.day === "Sat" && barIndex === 3;
                  const isthruFirstBar = dayData.day === "Thurs" && barIndex === 0;
                  const isSunfirstBar = dayData.day === "Sun" && barIndex === 0;
                  const isSunsecondBar = dayData.day === "Sun" && barIndex === 1;
                  const isSunthirdBar = dayData.day === "Sun" && barIndex === 2;
                  const isSunfourthBar = dayData.day === "Sun" && barIndex === 3;
                  const isStaturdayFirstBar = dayData.day === "Sat" && barIndex === 0;
                  const isTueFirstBar = dayData.day === "Tues" && barIndex === 0;
                  const fullHeight = `${height}%`;

                  if (isMondayThirdBar || isTuesThirdBar || isWedThirdBar || isthruFirstBar || isSunfirstBar || isStaturdayFirstBar || isthruthirdbar || isFrithrirdbar || isSunthirdBar || isSatThirdBar) {
                    
                    const mainHeight = 50;
                    const grayHeight = height - mainHeight;

                    return (
                      <div className="flex flex-col justify-between gap-2" key={barIndex}>
                        <div
                          key={`gray-${barIndex}`}
                          className={`w-2 rounded-t-full ${isthruFirstBar || isStaturdayFirstBar || isSunfirstBar ? "h-60px" : "h-25px"} ${isWedThirdBar || isthruthirdbar || isStaturdayFirstBar ? getBarColor(1) : getBarColor(0)}`}
                        />
                        <div
                          key={`gray-${barIndex}`}
                          className={`w-2 rounded-b-full ${isthruFirstBar || isStaturdayFirstBar || isSunfirstBar ? "h-60px" : "h-25px mb-5"} ${isWedThirdBar || isthruthirdbar || isStaturdayFirstBar ? getBarColor(2) : getBarColor(0)}`} 
                        />
                      </div>
                    );
                  }
                  if (isTueFirstBar) {
                    const mainHeight = 100;
                    const grayHeight = height - mainHeight;

                    return (
                      <div className="flex flex-col justify-between gap-2" key={barIndex}>
                        <div
                          key={`gray-${barIndex}`}
                          className={`w-2 rounded-t-full h-58px ${getBarColor(1)}`}
                        />
                        <div
                          key={`gray-${barIndex}`}
                          className={`w-2 rounded-b-full h-58px ${getBarColor(2)}`} 
                        />
                      </div>
                    );
                  }
                  return (
                    <div
                      key={barIndex}
                      className={`w-2 rounded-full ${isMondaySecondBar || isSatSecondBar ? getBarColor(1) : TuesSecondBar || isFridaySecondBar ? getBarColor(2) : isWednesdaySecondBar ? getBarColor(3) : isWedfourthBar || isFrifourthBar || isSatForthBar || isSunfourthBar ? getBarColor(2) : getBarColor(barIndex)} ${
                        isMondaySecondBar || TuesSecondBar || isWednesdaySecondBar || isthruSecondBar || isFridaySecondBar || isSunsecondBar || isSatSecondBar ? 'mb-10' : ''
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  );
                })}
              </div>
              {/* Day Label */}
              <span className="text-gray-400 text-sm">{dayData.day}</span>
            </div>
          ))}
        </div>
      </div>
  );
};

export default ActivityFeed
