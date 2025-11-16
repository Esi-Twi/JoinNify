import { FlatList, Image, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useRouter } from 'expo-router'
import Text from '@/components/Text'
import ScreenWrapper from '../../components/ScreenWrapper'
import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from "../../src/constants/theme"
import SearchArea from '../../components/SearchArea'



const events = () => {
  const router = useRouter()

  const categories = [
    { id: 1, icon: "code", name: "Tech Events" },
    { id: 2, icon: "bar-chart", name: "AI Events" },
    { id: 3, icon: "football", name: "Football Matches" },
    { id: 4, icon: "brush", name: "Arts Craft" },
    { id: 5, icon: "musical-note", name: "Music Festival" },
    { id: 6, icon: "american-football", name: "Sports Festival" },
  ]

  const upcoming = [
    {
      id: 1,
      img: require("../../assets/images/event1.png"),
      title: "New Music Festival",
      date: "Mar 10, 2024",
      location: "AI Community Center, Accra",
      price: 415
    },
    {
      id: 1,
      img: require("../../assets/images/event1.png"),
      title: "New Music Festival",
      date: "Mar 10, 2024",
      location: "AI Community Center, Accra",
      price: 415
    },
    {
      id: 1,
      img: require("../../assets/images/event1.png"),
      title: "New Music Festival",
      date: "Mar 10, 2024",
      location: "AI Community Center, Accra",
      price: 415
    },
    {
      id: 1,
      img: require("../../assets/images/event1.png"),
      title: "New Music Festival",
      date: "Mar 10, 2024",
      location: "AI Community Center, Accra",
      price: 415
    },
  ]

  return (
    <ScreenWrapper>
      <ScrollView>
        {/* header  */}
        <View style={styles.headerDiv}>
          <View style={styles.headerLeft}>
            <Image style={styles.headerImg} source={require("../../assets/persons/6.jpg")} />

            <View style={styles.headerLeftContent}>
              <Text style={styles.headerLocation}>Kasoa, Accra</Text>

              <View style={styles.headerLocationDiv}>
                <Ionicons name='location' size={14} />
                <Text style={styles.headerLocationText} >Location</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.headerNotification}>
            <Ionicons name='notifications' size={24} style={styles.headerNotificationIcon} />

            <Text style={styles.headerNotificationNumber}></Text>
          </TouchableOpacity>
        </View>

        {/* search */}
        <SearchArea style={styles.searchArea} />

        {/* categories */}
        <View style={styles.categoryList}>
          <Text style={styles.categoriesHead}>Categorires</Text>

          <FlatList
            data={categories}
            horizontal={true}
            style={styles.categoryDiv}
            renderItem={({ item, index }) => (
              <TouchableOpacity key={index} style={styles.category}>
                <Ionicons name={item.icon} size={30} style={styles.categoryIcon} />
                <Text style={styles.categoryName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* upcoming events */}
        <View style={styles.upcoming}>
          <View style={styles.upcomingHeader}>
            <Text style={styles.categoriesHead}>Upcoming Events</Text>

            <Pressable style={styles.viewAll}>View All</Pressable>
          </View>

          <FlatList
            data={upcoming}
            horizontal={true}
            style={styles.categoryDiv}
            renderItem={({ item, index }) => (
              <TouchableOpacity key={index} style={styles.upcomingItem}>
                <Image source={item.img} style={styles.upcomingImg}/>

                <View>
                  <Pressable style={styles.upcomingLike}>
                    <Ionicons name='heart-outline' style={styles.upcomingLikeIcon}/>
                  </Pressable>

                  <View style={styles.upcomingdateDiv}>
                    <Ionicons name='heart-outline' style={styles.upcomingdateIcon}/>
                    <Text style={styles.upcomingdate}>{item.date}</Text>
                  </View>
                  <Text style={styles.upcomingTitle}>{item.title}</Text>
                  
                   <View style={styles.upcomingFooter}>
                    <Text style={styles.upcomingLocation}>{item.location}</Text>
                    <Text style={styles.upcomingPrice}>${item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>



      </ScrollView>
    </ScreenWrapper>
  )
}

export default events

const styles = StyleSheet.create({
  upcomingItem: {
    marginTop: 10,
    flexDirection: "row", 
    gap: 14, 
    marginRight: 15, 
    backgroundColor: colors.light_indigo, 
    padding: 8, 
    borderRadius: 10, 
  },
   upcoming: {
    marginTop: 30,
  },
  upcomingImg: {
    width: 100, 
    height: 150, 
    borderRadius: 8, 
  },
  upcomingFooter: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
  },
  upcomingLocation: {
    width: "80%"
  },
  upcomingPrice: {
    color: colors.indigo,
    fontFamily: "outfit-bold", 
    fontSize: 17, 
  },
  upcomingI: {

  },
  upcomingHeader: {
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "space-between", 
    marginRight: 20, 
  },
  viewAll: {
    color: colors.indigo, 
    fontFamily: "outfit-bold"
  },
  category: {
    marginRight: 13,
    padding: 14,
    borderRadius: 15,
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: 'black',
  },
  categoryIcon: {
    marginLeft: 45,
    color: colors.indigo,
  },
  categoryDiv: {
    marginTop: 8,
  },
  categoryName: {
    width: "90%"
  },
  categoryList: {
    marginTop: 22,
  },
  categoriesHead: {
    fontFamily: 'outfit-bold',
    fontSize: 19,
  },
  headerImg: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  headerDiv: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20,
  },
  headerLeft: {
    flexDirection: "row",
    gap: 15,
  },
  headerLocationDiv: {
    flexDirection: "row",
    gap: 3,
    alignItems: 'center',
  },
  headerLocationText: {
    fontSize: 14,
  },
  headerLocation: {
    marginBottom: 2,
    fontFamily: "outfit-bold",
    fontSize: 18,
  },
  headerNotification: {
    backgroundColor: colors.light_indigo,
    borderRadius: "50%",
    padding: 8,
  },
  headerNotificationIcon: {
    color: colors.indigo,
  },
  headerNotificationNumber: {
    position: 'absolute',
    backgroundColor: colors.danger,
    color: colors.white,
    borderRadius: "50%",
    top: 0,
    right: 2,
    width: 8,
    height: 8,
  },
  searchArea: {
    marginTop: 25,
  }
})