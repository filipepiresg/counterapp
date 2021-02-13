import React, { createContext, useCallback, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import { first, get } from 'lodash';

const CountersContext = createContext({
  counters: [],
  selectedCounter: undefined,
  loading: false,
  addCounter: (_title) => {},
  deleteCounter: (_index) => {},
  changeSelectedCounter: (_item) => {},
  updateCounter: (_item, _index) => {},
});

export const CountersProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [counters, setCounters] = useState([]);
  const [selectedCounter, setSelectedCounter] = useState(first(counters));

  useEffect(() => {
    async function getCounters() {
      try {
        setLoading(true);
        const _counters = JSON.parse(await AsyncStorage.getItem('@counters'));

        setCounters(_counters);
      } catch (error) {
        console.log('ERROR ON GET COUNTER OF STORAGE', error);
      } finally {
        setLoading(false);
      }
    }

    getCounters();
  }, []);

  const saveCounters = useCallback(async () => {
    try {
      const _counters = JSON.stringify(counters);

      await AsyncStorage.setItem('@counters', _counters);
    } catch (error) {
      console.log('ERROR ON SAVE COUNTER OF STORAGE', error);
    }
  }, [counters]);

  useEffect(() => {
    saveCounters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counters]);

  /**
   * Change counter selected
   * @param {Object} counter new selected counter
   */
  const changeSelectedCounter = useCallback((counter) => {
    setSelectedCounter(counter);
  }, []);

  /**
   * add counter with title
   * @param {String} title title of card counter
   */
  const addCounter = useCallback(
    (title) => {
      const newCounter = { title, value: 0 };

      setCounters(counters.push(newCounter));
    },
    [counters]
  );

  /**
   * delete counter by index
   * @param {Number} index position of counter
   */
  const deleteCounter = useCallback(
    (index) => {
      if (Number.isNaN(index)) return;

      const newCounters = counters.filter((_, _index) => index === _index);

      setCounters(newCounters);
    },
    [counters]
  );

  /**
   * Update selected counter
   * @param {Object} counter new selected counter
   * @param {Number} index position of selected counter
   */
  const updateCounter = useCallback(
    (counter, index) => {
      if (Number.isNaN(index)) return;

      const newCounter = { ...counter };
      if (get(newCounter, 'value', 0) >= 9999) {
        newCounter.value = 0;
      }

      const newCounters = counters.map((_counter, _index) =>
        index === _index ? newCounter : _counter
      );

      setCounters(newCounters);
    },
    [counters]
  );

  return (
    <CountersContext.Provider
      value={{
        counters,
        selectedCounter,
        loading,
        changeSelectedCounter,
        addCounter,
        deleteCounter,
        updateCounter,
      }}
    >
      {children}
    </CountersContext.Provider>
  );
};

export default CountersContext;
