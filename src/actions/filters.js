//SET_TEXT_FILTER

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// Sort_by_date

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// Sort_BY_AMOUNT

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_BY_DATE

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});