export const selectDenominationValue = (state) => state.denominationReducer.value;
export const selectDenominationResults = (state) => state.denominationReducer.denominations;

export const selectDenominationChoice = (state) => state.denominationReducer.selectedDenomination;