import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';

const HistoryItem = ({item}) => {
  const { timestamp, operation, before, after } = item;
  const dateOfOperation = moment(timestamp).calendar();
  const operationStr = operation === 'increment' ? 'Incremented' : operation === 'decrement' ? 'Decremented' : 'Reset';
  const text = `${dateOfOperation}: ${operationStr} from ${before} to ${after}`;
  return <Text>{text}</Text>
};

export default HistoryItem;