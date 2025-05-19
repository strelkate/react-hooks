import { useState, useEffect, useCallback } from 'react';

interface FetchOptions {
  params?: Record<string, string | number>;
}

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null
  });

  const fetchData = useCallback(async (options: FetchOptions = {}) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      const { params } = options;
      const queryString = params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : '';
      const response = await fetch(`${url}${queryString}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      setState({
        data: result as T,
        isLoading: false,
        error: null
      });
    } catch (err) {
      setState({
        data: null,
        isLoading: false,
        error: err instanceof Error ? err.message : 'An error occurred'
      });
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...state,
    refetch: fetchData
  };
}