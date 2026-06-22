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

		const updatedHistory = [results, ...store.storedData];

		updateStore({ calculationResults: results})
		updateHistory(updatedHistory)
	}

	// Update History
	const updateHistory = (newHistory:Mortgage[]) => {
		updateStore({ storedData: newHistory });
		saveToLocalStorage(newHistory)
	}

	// Remove one mortgage from history
	const removeFromHistory = (index:number) => {
		const newHistory = store.storedData.filter((_, i) => i !== index);
		updateHistory(newHistory);
	}

	// Delete all mortgages from history
	const deleteHistory = () => {
		updateStore({ storedData: [], selectedIndices: [], selectedMortgages: [] });
		saveToLocalStorage([]);
	}

	// Save history to local storage
	const saveToLocalStorage = (newHistory:Mortgage[]) => {
		localStorage.setItem('mortgageHistory', JSON.stringify(newHistory));
		
	}

	return (
		<DataContext.Provider value={{ store, updateStore, calculateAndSend, deleteHistory, removeFromHistory }}>
			{children}
		</DataContext.Provider>
	);
}

// Custom Hook
export const useData = () => useContext(DataContext);
