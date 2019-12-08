import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {fonts, colors} from '../../themes/theme';
import HeaderComponent from './../../components/Header';
import ButtonComponent from './../../components/Button/Button';
import PickerSelectTitle
  from './../../components/PickerSelect/PickerSelectTitle';
import PickerSelect from '../../components/PickerSelect/PickerSelect';
import ModalCalender from './../../components/ModalCalender';
import moment from 'moment';

const placeholder = {
  label: 'Chọn địa điểm',
  value: null,
  color: '#9EA0A4',
};
const placeholder2 = {
  label: 'Loại hình phiên dịch',
  value: null,
  color: '#9EA0A4',
};

const placeholderNN = {
  label: 'Ngôn ngữ',
  value: null,
  color: '#9EA0A4',
};

const diaDiem = [
  {
    label: 'Hồ Chí Minh',
    value: 'Hồ Chí Minh',
  },
  {
    label: 'Đà Nẵng',
    value: 'Đà Nẵng',
  },
  {
    label: 'Hà Nội',
    value: 'Hà Nội',
  },
];
const lHinhPhienDich = [
  {
    label: 'Hội Nghị',
    value: 'Hội Nghị',
  },
  {
    label: 'Giao tiếp',
    value: 'Giao tiếp',
  },
  {
    label: 'Hội họp',
    value: 'Hội họp',
  },
];

const ngonNgu = [
  {
    label: 'Tiếng Việt',
    value: 'Tiếng Việt',
  },
  {
    label: 'Tiếng Hàn',
    value: 'Tiếng Hàn',
  },
  {
    label: 'Tiếng Anh',
    value: 'Tiếng Anh',
  },
];

export default class HomeScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {
      diaDiem: null,
      loaiHinhPhienDich: null,
      ngonNguA: null,
      ngonNguB: null,
      startDay: moment.now (),
      endDay: moment.now (),
      isVisibleModalCalendar: false,
    };
    this.onDateChange = this.onDateChange.bind (this);
  }
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => {
      return <Icon name="home" size={25} color={tintColor} />;
    },
  };

  _onChangeValueDiaDiem = value => {
    this.setState ({diaDiem: value});
  };

  _onChangeValueLHPD = value => {
    this.setState ({loaiHinhPhienDich: value});
  };

  _onChangeValueNNA = value => {
    this.setState ({ngonNguA: value});
  };

  _onChangeValueNNB = value => {
    this.setState ({ngonNguB: value});
  };

  onDateChange (date, type) {
    if (type === 'END_DATE') {
      const day = moment (date).format ('YYYY-MM-DD');
      this.setState ({endDay: day});
    } else {
      const day = moment (date).format ('YYYY-MM-DD');
      this.setState ({startDay: day, endDay: day});
    }
  }
  _renderTop = () => {
    return (
      <View>
        <ImageBackground
          style={styles.top}
          source={require ('../../../assets/image/sky.png')}
        >
          <Image
            source={require ('../../../assets/image/logo3.png')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 100 / 2,
              marginTop: 20,
            }}
          />
          <Text
            style={{fontSize: 40, fontFamily: fonts.bold, color: colors.White}}
          >
            ViLaKi
          </Text>
          <Text
            style={{
              fontSize: 23,
              fontFamily: fonts.regular,
              color: colors.White,
              marginBottom: 12,
            }}
          >
            Dễ dàng tìm kiếm thông dịch viên
          </Text>
        </ImageBackground>
      </View>
    );
  };

  _renderModalCalendar = () => {
    const {startDay, endDay, isVisibleModalCalendar} = this.state;
    const minDate = new Date (); // Today
    return (
      <ModalCalender
        isVisible={isVisibleModalCalendar}
        selectedStartDate={startDay}
        selectedEndDate={endDay}
        minDate={minDate}
        onDateChange={this.onDateChange}
        back={() => this.setState ({isVisibleModalCalendar: false})}
      />
    );
  };

  _renderSearching = () => {
    return (
      <View style={styles.seachingContainer}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 3}}>
            <PickerSelect
              placeholder={placeholder}
              items={diaDiem}
              onValueChange={value => this._onChangeValueDiaDiem (value)}
              checkStyle={true}
              value={this.state.diaDiem}
            />
          </View>
          <View style={{flex: 2, marginLeft: 5}}>
            <PickerSelect
              placeholder={placeholder2}
              items={lHinhPhienDich}
              onValueChange={value => this._onChangeValueLHPD (value)}
              checkStyle={false}
              value={this.state.loaiHinhPhienDich}
            />
          </View>
        </View>

        <View style={[styles.longStyle, {marginTop: 10}]}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: fonts.regular,
              marginLeft: 15,
              color: colors.Gray,
            }}
          >
            Chuyên ngành dịch :
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={{flex: 3}}>
              <PickerSelectTitle
                placeholder={placeholderNN}
                items={ngonNgu}
                value={this.state.ngonNguA}
                onValueChange={value => this._onChangeValueNNA (value)}
              />
            </View>

            <View style={{flex: 2}}>
              <Icon name="arrow-forward" color={colors.Black} size={30} />
            </View>

            <View style={{flex: 3}}>
              <PickerSelectTitle
                placeholder={placeholderNN}
                items={ngonNgu}
                value={this.state.ngonNguB}
                onValueChange={value => this._onChangeValueNNB (value)}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.longStyle,
            {
              marginTop: 10,
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
          onPress={() => this.setState ({isVisibleModalCalendar: true})}
        >
          <View
            style={{
              flexDirection: 'column',
              flex: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: colors.Gray,
                fontSize: 20,
                fontFamily: fonts.regular,
                textAlign: 'center',
              }}
            >
              Ngày bắt đầu
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{fontSize: 35, fontFamily: fonts.light}}>
                {moment (this.state.startDay).format ('DD')}
              </Text>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                }}
              >
                <Text style={{fontSize: 15, fontFamily: fonts.light}}>
                  {moment (this.state.startDay).format ('dddd')}
                </Text>
                <Text style={{fontSize: 15, fontFamily: fonts.light}}>
                  {moment (this.state.startDay).format ('MM')}
                </Text>
              </View>
            </View>
          </View>
          <View style={{flex: 2}}>
            <Icon name="arrow-forward" color={colors.Black} size={40} />
          </View>
          <View
            style={{
              flexDirection: 'column',
              flex: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: colors.Gray,
                fontSize: 20,
                fontFamily: fonts.regular,
                textAlign: 'center',
              }}
            >
              Ngày kết thúc
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{fontSize: 35, fontFamily: fonts.light}}>
                {moment (this.state.endDay).format ('DD')}
              </Text>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                }}
              >
                <Text style={{fontSize: 15, fontFamily: fonts.light}}>
                  {moment (this.state.endDay).format ('dddd')}
                </Text>
                <Text style={{fontSize: 15, fontFamily: fonts.light}}>
                  {moment (this.state.endDay).format ('MM')}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <ButtonComponent onPress={() => alert ('Hello')} title="TÌM KIẾM" />
      </View>
    );
  };

  _renderService = () => {
    return (
      <View style={styles.serviceStyle}>
        <View style={styles.childServiceStyle}>
          <TouchableOpacity onPress={() => alert ('Job List')}>
            <View style={styles.childIconServiceContainer}>
              <Icon name="work" color={colors.White} size={35} />
            </View>
          </TouchableOpacity>
          <Text style={styles.childTextService}>
            Job List
          </Text>
        </View>

        <View style={styles.childServiceStyle}>
          <TouchableOpacity onPress={() => alert ('Message')}>
            <View style={styles.childIconServiceContainer}>
              <Icon name="message" color={colors.White} size={35} />
            </View>
          </TouchableOpacity>
          <Text style={styles.childTextService}>
            Message
          </Text>
        </View>

        <View style={styles.childServiceStyle}>
          <TouchableOpacity onPress={() => alert ('Job Job')}>
            <View style={styles.childIconServiceContainer}>
              <Icon name="description" color={colors.White} size={35} />
            </View>
          </TouchableOpacity>
          <Text style={styles.childTextService}>
            Post Job
          </Text>
        </View>
      </View>
    );
  };

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <HeaderComponent backIcons={false} headerText="Home" />
          {this._renderTop ()}
          <Text style={[styles.textTitle, {marginTop: 21}]}>
            SEARCHING NOW
          </Text>
          {this._renderSearching ()}
          {this._renderModalCalendar ()}
          <Text style={[styles.textTitle, {marginTop: 10}]}> SERVICE </Text>
          {this._renderService ()}
          <Text style={[styles.textTitle, {marginTop: 10}]}>
            THE BEST INTERPRETER
          </Text>
          <Text style={[styles.textTitle, {marginTop: 10}]}>
            THE FAVORITE PLACES TO TRAVEL
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {},
  top: {
    width: 375,
    height: 225,
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 18,
    fontFamily: fonts.regular,
    marginLeft: 10,
  },
  seachingContainer: {
    marginTop: 10,
    marginHorizontal: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  serviceStyle: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  childServiceStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  childIconServiceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.MainColor,
    borderRadius: 6,
    height: 70,
    width: 70,
  },
  childTextService: {
    fontSize: 18,
    fontFamily: fonts.regular,
    textAlign: 'center',
  },

  longStyle: {
    borderRadius: 6,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
