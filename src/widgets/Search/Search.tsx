import { useState, useEffect } from 'react';
import styles from './Search.module.css';

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

function Search({ value, onChange }: SearchProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(localValue);
    }, 300); 

    return () => {
      clearTimeout(handler);
    };
  }, [localValue, onChange]);

  return (
    <input
      className={styles['search']}
      placeholder="🔎 search..."
      type="text"
      value={localValue}
      onChange={(e) => setLocalValue(e.target.value)}
    />
  );
}

export default Search;
