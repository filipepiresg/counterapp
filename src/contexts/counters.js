import React, { createContext, useCallback, useEffect, useState, useRef } from 'react';
import Splashscreen from 'react-native-splash-screen';

import AsyncStorage from '@react-native-community/async-storage';

import { get, isEmpty } from 'lodash';

const CountersContext = createContext({
  counters: [],
  indexSelected: -1,
  loading: true,
  addCounter: (_title) => {},
  deleteCounter: () => {},
  changeSelectedCounter: (_item) => {},
  updateCounter: (_item) => {},
});

export const CountersProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [counters, setCounters] = useState([]);
  const [indexSelected, setIndexSelected] = useState(-1);

  const didMount = useRef(false);

  /**
   * Change counter selected by index
   * @param {Number} index new selected counter
   */
  const changeSelectedCounter = useCallback((index) => {
    setIndexSelected(index);
  }, []);

  /**
   * add counter with title
   * @param {String} title title of card counter
   */
  const addCounter = useCallback(
    (title) => {
      const newCounter = { title, value: 0 };
      const newCounters = [...counters, newCounter];

      setCounters(newCounters);
      changeSelectedCounter(newCounters.length - 1);
    },
    [changeSelectedCounter, counters]
  );

  /**
   * Update selected counter
   * @param {Object} counter new selected counter
   */
  const updateCounter = useCallback(
    (counter) => {
      if (indexSelected < 0) return;

      const newCounter = { ...counter };
      if (get(newCounter, 'value', 0) >= 9999) {
        newCounter.value = 0;
      }

      const newCounters = counters.map((_counter, _index) =>
        indexSelected === _index ? newCounter : _counter
      );

      setCounters(newCounters);
    },
    [counters, indexSelected]
  );

  /**
   * delete counter by index
   */
  const deleteCounter = useCallback(() => {
    if (indexSelected < 0) return;

    const newCounters = counters.filter((_, _index) => indexSelected !== _index);

    setCounters(newCounters);
    changeSelectedCounter(counters.length > 0 ? 0 : -1);
  }, [changeSelectedCounter, counters, indexSelected]);

  useEffect(() => {
    async function getCounters() {
      try {
        setLoading(true);
        const { counters: _counters = [], indexSelected: _indexSelected = 1 } = JSON.parse(
          await AsyncStorage.getItem('@counters')
        );

        if (!isEmpty(_counters)) {
          setCounters(_counters);

          changeSelectedCounter(_indexSelected);
        }
      } catch (error) {
        console.log('ERROR ON GET COUNTER OF STORAGE', error);
      } finally {
        setLoading(false);
        didMount.current = true;

        Splashscreen.hide();
      }
    }

    getCounters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveCounters = useCallback(async () => {
    try {
      const _counters = JSON.stringify({ counters, indexSelected });

      await AsyncStorage.setItem('@counters', _counters);
    } catch (error) {
      console.log('ERROR ON SAVE COUNTER OF STORAGE', error);
    }
  }, [counters, indexSelected]);

  useEffect(() => {
    if (didMount.current) saveCounters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counters, indexSelected]);

  return (
    <CountersContext.Provider
      value={{
        counters,
        loading,
        indexSelected,
        changeSelectedCounter,
        addCounter,
        updateCounter,
        deleteCounter,
      }}
    >
      {children}
    </CountersContext.Provider>
  );
};

export default CountersContext;
