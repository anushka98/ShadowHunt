import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import Login from '../Containers/LoginScreen'
import styles from './Styles/NavigationStyles';
import {DrawerNavigator} from 'react-navigation';
import {DrawerItems} from 'react-navigation';
import {View, Text, Image} from 'react-native';
import AuthActions from '../Redux/AuthRedux';
// different stacks for each tab

const SignUpAndLoginStack = StackNavigator(
  {
    Login: {screen: Login},
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);
// stack for the home tab - all accessible screens in the home tab go here
// const HomeStack = StackNavigator({
//   EditAnnouncements: { screen: EditAnnouncements },
//   Home: { screen: Home },
//   Groups: { screen: GroupList },
//   Requests: { screen: Requests },
//   EditGroup: { screen: EditGroup },
//   Members: { screen: Members },
//   MemberProfileScreen: { screen: MemberProfileScreen }

// }, {
//   initialRouteName: 'Home'
// });

// // stack for the my course tab - all accessible screens in the my course tab go here
// const MyCourseStack = StackNavigator({
//   MyCourse: { screen: MyCourse },
//   HandoutScreen: {screen: HandoutScreen},
//   HomeworkScreen: {screen: HomeworkScreen},
//   Week1Questionnaires: {screen: Week1Questionnaires},
//   Ecbi: {screen: Ecbi},
//   MentalWellBeingScale: {screen: MentalWellBeingScale},
//   ParentingScale: {screen: ParentingScale},
//   ConcernsAboutChildAndGoals: {screen: ConcernsAboutChildAndGoals},
//   TrainingAcceptabilityRatingScale: {screen : TrainingAcceptabilityRatingScale},
//   Week8Questionnaires: {screen : Week8Questionnaires}
// }, {
//   initialRouteName: 'MyCourse'
// });

// // stack for the chat tab - all accessible screens in the chat tab go here
// const ChatStack = StackNavigator({
//   Posts: { screen: Posts },
//   CreatePostScreen: { screen: CreatePostScreen },
//   Thread: { screen: Thread },
//   PrivateChat: { screen: PrivateChat},
//   MembersList: { screen: MembersList },

// }, {
//   initialRouteName: 'Posts'
// });

// // stack for the me tab - all accessible screens in the me tab go here
// const MeStack = StackNavigator({
//   Me: { screen: Me },
//   ProfileScreen: {screen: ProfileScreen}
// }, {
//   initialRouteName: 'Me'
// });

// const ProfileStack = StackNavigator({
//   ProfileScreen: {screen: ProfileScreen}
// }, {
//   initialRouteName: 'ProfileScreen'
// });

// // tab view which directs the user to the necessary stack (above)
// const TabView = TabNavigator(
//   {
//     Home: { screen: HomeStack },
//     MyCourse: { screen: MyCourseStack },
//     Chat: { screen: ChatStack },
//     Me: { screen: MeStack },
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Home') {
//           // iconName = `ios-calendar${focused ? '' : '-outline'}`;
//           iconName = `home`;
//         } else if (routeName === 'MyCourse') {
//           // iconName = `ios-book${focused ? '' : '-outline'}`;
//           iconName = `school`;
//         } else if (routeName === 'Chat') {
//           // iconName = `ios-chatbubbles${focused ? '' : '-outline'}`;
//           iconName = `chat`;
//         } else if (routeName === 'Me') {
//           // iconName = `ios-contact${focused ? '' : '-outline'}`;
//           iconName = `account-circle`;
//         }

//         // You can return any component that you like here! We usually use an
//         // icon component from react-native-vector-icons
//         return <MaterialIcons name={iconName} size={25} color={tintColor} />;
//         // return <Ionicons name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     animationEnabled: false,
//     swipeEnabled: false,
//   }
// );

// // this stack is used in the admin interface for handling groups
// const GroupsStack = StackNavigator(
//   {
//     Groups: { screen: Groups },
//     EditGroupAdmin: { screen: EditGroupAdmin },
//     AddGroup: { screen: AddGroup }
//   }, {
//     initialRouteName: 'Groups'
//   }
// )

// // this stack is used in the admin interface for handling facilitators
// const FacilitatorsStack = StackNavigator(
//   {
//     Facilitators: { screen: Facilitators },
//     EditFacilitator: { screen: EditFacilitator },
//     AddFacilitator: { screen: AddFacilitator }
//   }, {
//     initialRouteName: 'Facilitators'
//   }
// )

// const AdminTabView = TabNavigator(
//   {
//     Facilitators: { screen: FacilitatorsStack },
//     Groups: { screen: GroupsStack },
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Facilitators') {
//           iconName = `ios-people${focused ? '' : '-outline'}`;
//         } else if (routeName === 'Groups') {
//           iconName = `ios-filing${focused ? '' : '-outline'}`;
//         }
//         // You can return any component that you like here! We usually use an
//         // icon component from react-native-vector-icons
//         return <Ionicons name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     animationEnabled: false,
//     swipeEnabled: false,
//   }
// );

// // this defines the drawer for facilitators
// const FacilitatorView = DrawerNavigator({
//   TabView: { screen: TabView },
// },{
//   contentComponent:(props) => (

//       <View style={{flex:1, top: 120}}>
//               {/* <DrawerButton onPress={() => props.navigation.navigate('Members')}>
//               Group Members
//               </DrawerButton>
//               <DrawerButton onPress={() => props.navigation.navigate('Requests')}>
//               Requests
//               </DrawerButton>
//               <DrawerButton onPress={() => props.navigation.navigate('Groups')}>
//               My Groups
//               </DrawerButton>
//               <DrawerButton onPress={() => props.navigation.dispatch(AuthActions.authLogout())}>
//                 <Icon name="facebook" style={styles.icon}>
//                   <Text style={styles.text}>Login with Facebook</Text>
//                 </Icon>
//               Logout
//               </DrawerButton> */}

//               <Image
//                 style={styles.app}
//                 source={require('../Images/bap-icon-round.png')}
//               />
//               <Text style={styles.title}>Being a parent</Text>
//               <DrawerButton onPress={() => props.navigation.navigate('Members')} icon='people'>
//               Group Members
//               </DrawerButton>
//               <DrawerButton onPress={() => props.navigation.navigate('Requests')} icon='user-follow'>
//               Requests
//               </DrawerButton>
//               <DrawerButton onPress={() => props.navigation.navigate('Groups')} icon='organization'>
//               My Groups
//               </DrawerButton>
//               <DrawerButton onPress={() => props.navigation.dispatch(AuthActions.authLogout())} icon='logout'>
//                 Logout
//               </DrawerButton>
//       </View>
//   ),
// },
// {
//   initialRouteName: 'TabView',
// } );

// // this defines the drawer for parents
// const ParentView = DrawerNavigator({
//   TabView: { screen: TabView },
// },{
//   contentComponent:(props) => (

//       <View style={{flex:1, top: 160}}>
//               <Image
//                 style={styles.app}
//                 source={require('../Images/bap-icon-round.png')}
//               />
//               <Text style={styles.title}>Being a parent</Text>
//               <DrawerButton onPress={() => props.navigation.navigate('Members')} icon='people'>
//               Group Members
//               </DrawerButton>
//               <DrawerButton onPress={() => props.navigation.dispatch(AuthActions.authLogout())} icon='logout'>
//                 Logout
//               </DrawerButton>
//       </View>
//   ),
// },
// {
//   initialRouteName: 'TabView',
// } );

// const AdminView = DrawerNavigator({
//   AdminTabView: { screen: AdminTabView },
// },{
//   contentComponent:(props) => (

//       <View style={{flex:1, top: 200}}>
//               <RoundedButton onPress={() => props.navigation.dispatch(AuthActions.authLogout())}>
//               Logout
//               </RoundedButton>
//       </View>
//   ),
// },
// {
//   initialRouteName: 'AdminTabView',
// } );

// const IntroductionStack = StackNavigator({
//   Introduction: { screen: Introduction },
//   NewGroup: { screen: NewGroup },

// }, {
//   initialRouteName: 'Introduction'
// });

// const SignUpAndLoginStack = StackNavigator({
//   ParentSignUp: { screen: ParentSignUp },
//   FirstScreen: { screen: FirstScreen },
//   FacilitatorVer: { screen: FacilitatorVer },
//   FacilitatorSignUp: { screen: FacilitatorSignUp },
//   Login: { screen: Login },
// }, {
//   initialRouteName: 'FirstScreen',
//   navigationOptions: {
//     gesturesEnabled: false
//   }
// });

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    Login: {screen: Login},
    SignUpAndLoginStack: {screen: SignUpAndLoginStack},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'SignUpAndLoginStack',
    navigationOptions: {
      headerStyle: styles.header,
      gesturesEnabled: false,
    },
  },
);

export default PrimaryNav;
