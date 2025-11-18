import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'


const booking = () => {
    const [selectedTicket, setSelectedTicket] = useState('Silver VIP');
    const [firstName, setFirstName] = useState('');
    const [numberOfTickets, setNumberOfTickets] = useState('01');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('Jun 28, 2025');
    const [time, setTime] = useState('06:00PM - 11:00PM');

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                     <Ionicons name='chevron-back' size={18} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Booking Details</Text>
                <TouchableOpacity style={styles.infoButton}>
                     <Ionicons name='chevron-back' size={18} />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Artist Image */}
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800' }}
                        style={styles.artistImage}
                    />
                    <View style={styles.imageOverlay} />
                </View>

                {/* Ticket Selection */}
                <View style={styles.ticketCard}>
                    <View style={styles.ticketBadge}>
                        <View style={styles.ticketDot} />
                    </View>
                    <View style={styles.ticketInfo}>
                        <Text style={styles.ticketType}>Silver VIP</Text>
                        <Text style={styles.ticketPrice}>$79.5</Text>
                    </View>
                    <TouchableOpacity style={styles.editButton}>
                        <View style={styles.editIcon} />
                    </TouchableOpacity>
                </View>

                {/* Form Fields */}
                <View style={styles.form}>
                    {/* First Name */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>First Name</Text>
                        <View style={styles.inputRow}>
                            <Text style={styles.inputText}>Johna Pe...</Text>
                        </View>
                    </View>

                    {/* Number of Ticket */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Number of ticket</Text>
                        <View style={styles.inputRow}>
                            <Text style={styles.inputText}>01</Text>
                             <Ionicons name='chevron-back' size={18} />
                        </View>
                    </View>

                    {/* Email */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.inputRow}>
                            <Text style={styles.inputText}>Example@gmail.com</Text>
                        </View>
                    </View>

                    {/* Date and Time */}
                    <View style={styles.row}>
                        <View style={[styles.inputGroup, styles.halfWidth]}>
                            <Text style={styles.label}>Date</Text>
                            <View style={styles.inputRow}>
                                <View style={styles.radioButton} />
                                <Text style={styles.inputText}>Jun 28, 2025</Text>
                            </View>
                        </View>

                        <View style={[styles.inputGroup, styles.halfWidth]}>
                            <Text style={styles.label}>Time</Text>
                            <View style={styles.inputRow}>
                                <View style={styles.radioButton} />
                                <Text style={styles.inputText}>06:00PM - 11:00PM</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Next Button */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default booking

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 15,
        backgroundColor: '#F5F5F5',
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
    infoButton: {
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
        height: '100%',
        resizeMode: 'cover',
    },
    imageOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: 'rgba(245, 245, 245, 0.3)',
    },
    ticketCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        marginTop: -30,
        marginBottom: 20,
        padding: 16,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    ticketBadge: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#00C9A7',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    ticketDot: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#FFF',
    },
    ticketInfo: {
        flex: 1,
    },
    ticketType: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 2,
    },
    ticketPrice: {
        fontSize: 14,
        color: '#666',
    },
    editButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FF6B35',
        alignItems: 'center',
        justifyContent: 'center',
    },
    editIcon: {
        width: 16,
        height: 16,
        backgroundColor: '#FFF',
        borderRadius: 2,
    },
    form: {
        paddingHorizontal: 20,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 13,
        color: '#999',
        marginBottom: 8,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    inputText: {
        fontSize: 15,
        color: '#000',
        fontWeight: '500',
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
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    nextButton: {
        backgroundColor: '#FF6B35',
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: 'center',
        shadowColor: '#FF6B35',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    nextButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
});


