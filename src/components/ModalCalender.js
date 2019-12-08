import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import {colors, fonts} from '../themes/theme';

const width = Dimensions.get ('window').width - 50;
const height = Dimensions.get ('window').height - 100;
export default class ModalCalendar extends Component {
  render () {
    const {selectedStartDate, selectedEndDate} = this.props;
    const startDate = selectedStartDate
      ? moment (selectedStartDate).format ('DD-MM-YYYY')
      : '';
    const endDate = selectedEndDate
      ? moment (selectedEndDate).format ('DD-MM-YYYY')
      : '';
    return (
      <Modal
        {...this.props}
        style={{
          backgroundColor: 'white',
          justifyContent: 'flex-start',
          borderRadius: 6,
          marginVertical: 120,
        }}
      >
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <View style={styles.headerStyle}>
            <View style={styles.headerChild1}>
              <Text style={styles.textStyle}>Ngày bắt đầu</Text>
              <Text style={styles.dateStyle}>{startDate}</Text>
            </View>
            <View style={styles.headerChild2}>
              <Text style={styles.textStyle}>Ngày kết thúc</Text>
              <Text style={styles.dateStyle}>{endDate}</Text>
            </View>
          </View>
          <View style={{marginVertical: 10}}>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={this.props.minDate}
              selectedDayColor={colors.MainColor}
              selectedDayTextColor="#FFFFFF"
              onDateChange={this.props.onDateChange}
              weekdays={['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']}
              width={width}
            />
          </View>

          <TouchableHighlight
            onPress={this.props.back}
            style={styles.btnBack}
            underlayColor="#ffff"
          >
            <Text style={[styles.textStyle, {marginHorizontal: 30}]}>Back</Text>
          </TouchableHighlight>

        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create ({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.MainColor,
    width: '100%',
    height: 80,
    borderTopStartRadius: 6,
    borderTopEndRadius: 6,
  },
  headerChild1: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerChild2: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
  dateStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
  btnBack: {
    height: 30,
    backgroundColor: colors.MainColor,
    justifyContent: 'center',
    borderRadius: 6,
  },
});
