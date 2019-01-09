import {WIDGET_DISPLAY} from 'app/views/organizationDashboard/constants';
import {
  getChartDataByDay,
  getChartDataForWidget,
} from 'app/views/organizationDiscover/result/utils';
import {isTimeSeries} from 'app/views/organizationDashboard/utils/isTimeSeries';

/**
 * Get data function based on widget properties
 */
export function getChartDataFunc({queries, type, fieldLabelMap}) {
  if (queries.discover.some(isTimeSeries)) {
    return [
      getChartDataByDay,
      [
        {
          fieldLabelMap,
        },
      ],
    ];
  }

  return [
    getChartDataForWidget,
    [
      {
        includePercentages: type === WIDGET_DISPLAY.TABLE,
      },
    ],
  ];
}
