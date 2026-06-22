import { createContext, useState, useContext, type ReactNode } from "react";
import type Mortgage from "../types/Mortgage";
import { calculateMortgage } from "../utils/MortgageManager";

// Initial
const initialState = {

	// Mortgage
	principalAmount: 200000,
	annualRate: 3.5,
	durationYears: 30,
	paymentFrequency: 12,
	isRateFixed: true,
	calculationResults: null as Mortgage | null,

	// History and selected
	storedData: JSON.parse(localStorage.getItem('mortgageHistory') || '[]') as Mortgage[],
	selectedIndices: [] as number[],
	selectedMortgages: [] as Mortgage[],
};

// Context
export const DataContext = createContext<any>(null);

export function DataProvider({ children }: { children: ReactNode }) {
	const [store, setStore] = useState(initialState);

	const updateStore = (updates: Partial<typeof initialState>) => {
		setStore(prevStore => ({
			...prevStore,
			...updates
		}));
	};

	const calculateAndSend = () => {
		const results = calculateMortgage(
			store.principalAmount,
			store.annualRate,
			store.durationYears,
			store.paymentFrequency,
			store.isRateFixed
		);

		updateStore({ calculationResults: results })
	}

	return (
		<DataContext.Provider value={{ store, updateStore, calculateAndSend }}>
			{children}
		</DataContext.Provider>
	);
}

// Custom Hook
export const useData = () => useContext(DataContext);
