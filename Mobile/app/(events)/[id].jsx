import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router';
import Text from "@/components/Text"
import { colors } from '../../src/constants/theme';
import ScreenWrapper from '../../components/ScreenWrapper';
import MapScreen from '../../components/MapScreen';


const EventDetails = () => {
    const router = useRouter()

    const eventInfo = () => {
        Alert.alert("this is here")
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name='chevron-back' size={18} />

                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    {/* Artist Image */}
                    <View style={styles.imageContainer}>
                        <Image
                            source={require("../../assets/images/event3.png")}
                            style={styles.artistImage}
                        />
                    </View>


                    {/* 
* Location (+ map link)
* Organizer info
 */}
                    {/* Details */}
                    <View style={styles.details}>
                        <Text style={styles.eventTitle}>One Night with Amara</Text>

                        <View style={styles.eventDateDiv}>
                            <View style={styles.eventDateDetail}>
                                <Ionicons color={colors.text_secondary} name='calendar' size={18} />
                                <Text style={styles.eventDateDetailText}>12th October, 2025</Text>
                            </View>
                            <View style={styles.eventDateDetail}>
                                <Ionicons color={colors.text_secondary} name='time' size={18} />
                                <Text style={styles.eventDateDetailText}>7:30pm</Text>
                            </View>
                        </View>

                        <Text style={styles.eventDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempora possimus, cum, culpa ducimus doloribus provident dolor animi eaque temporibus est repellendus voluptas et aspernatur dolores blanditiis maxime. Nihil, commodi.</Text>

                        {/* map */}
                        <View>
                            <Text style={styles.address}>Address</Text>
                            <Text style={styles.addressName}>Accra, Circle</Text>
                            <Text style={styles.addressDescription}>Inside the Standard Chattered bank building is the AI Commnity Centre</Text>
                        </View>

                        {/* <MapScreen /> */}
                        

                    </View>


                </View>
            </ScrollView>

            {/* Buy Ticket Button */}
            <View style={styles.footer}>
                <View>
                    <Text style={styles.footerPrice}>Free</Text>
                </View>
                <TouchableOpacity onPress={() => router.push("/(events)/booking")} style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Login To Book</Text>
                    <Ionicons name='person' size={24} style={styles.loginIcon} />
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={() => router.push("/(events)/payment")} style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Buy a Ticket</Text>
                    <Ionicons name='ticket' size={24} style={styles.buyButtonIcon} />
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

export default EventDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        paddingHorizontal: 20,
        paddingBottom: 6,
        paddingTop: 6,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
    },
    imageContainer: {
        width: '100%',
        height: 280,
        position: 'relative',
    },
    artistImage: {
        width: '100%',
        height: 350,
        resizeMode: 'cover',
    },
    details: {
        paddingTop: 90,
        paddingHorizontal: 20,
    },
    eventTitle: {
        fontFamily: "outfit-bold",
        fontSize: 27,
        marginBottom: 6,
    },
    eventDateDiv: {
        flexDirection: "row",
        marginBottom: 20,
        gap: 25,
    },
    eventDateDetail: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    eventDateDetailText: {
        fontSize: 14,
        color: colors.text_primary
    },
    eventDescription: {
        fontSize: 16,
        lineHeight: 24,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfWidth: {
        width: '48%',
    },
    radioButton: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#FF6B35',
        marginRight: 8,
        backgroundColor: '#FFF',
    },
    footer: {
        backgroundColor: colors.light_indigo,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    footerPrice: {
        fontFamily: "outfit-bold",
        fontSize: 22,
    },
    buyButton: {
        backgroundColor: colors.indigo,
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 27,
        alignItems: 'center',
        shadowColor: '#FF6B35',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
        flexDirection: "row",
        gap: 10,
    },
    buyButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
    buyButtonIcon: {
        color: colors.indigo,
        fontSize: 16,
        fontWeight: '600',
        transform: "rotate(45deg)",
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 8,
    },
    loginIcon: {
        color: colors.indigo,
        fontSize: 16,
        fontWeight: '600',
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 8,
    },
    address: {
        marginTop: 20,
        fontFamily: "outfit-bold",
        fontSize: 22,
    },
    addressName: {
        marginTop: 2,
        fontFamily: "outfit-bold",
        fontSize: 16,
        color: colors.text_primary
    },
    addressDescription: {
        fontSize: 15, 
        color: colors.text_primary, 
    },
});



