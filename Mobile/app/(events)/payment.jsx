import { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Text from "@/components/Text"


const payment = () => {
    const [selectedCard, setSelectedCard] = useState('visa');


    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    {/* <ArrowLeft color="#000" size={24} /> */}
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Payment Method</Text>
                <TouchableOpacity style={styles.infoButton}>
                    {/* <Info color="#999" size={24} /> */}
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Total Amount Card */}
                <View style={styles.totalCard}>
                    <Text style={styles.totalLabel}>Total amount</Text>
                    <Text style={styles.totalAmount}>$70.5</Text>
                    <View style={styles.secureRow}>
                        {/* <Check color="#00C9A7" size={16} /> */}
                        <Text style={styles.secureText}>Secure Payment</Text>
                    </View>
                </View>

                {/* Order Summary */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Order summary</Text>

                    <View style={styles.orderItem}>
                        <View>
                            <Text style={styles.itemName}>Celestial Echo</Text>
                            <View style={styles.ticketBadge}>
                                <Text style={styles.ticketText}>Silver VIP</Text>
                            </View>
                        </View>
                        <Text style={styles.itemPrice}>$70.5</Text>
                    </View>

                    <View style={styles.orderItem}>
                        <Text style={styles.itemName}>Others</Text>
                        <Text style={styles.itemPrice}>$0</Text>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.orderItem}>
                        <Text style={styles.totalText}>Total</Text>
                        <Text style={styles.totalPrice}>$70.5</Text>
                    </View>
                </View>

                {/* Payment Methods */}
                <View style={styles.section}>
                    <View style={styles.paymentHeader}>
                        <Text style={styles.sectionTitle}>Choose Payment method</Text>
                        <TouchableOpacity>
                            <Text style={styles.addCardText}>+ Add New Card</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Visa Card */}
                    <TouchableOpacity
                        style={[styles.cardOption, selectedCard === 'visa' && styles.cardOptionSelected]}
                        onPress={() => setSelectedCard('visa')}
                    >
                        <View style={styles.cardLogo}>
                            <View style={styles.visaLogo}>
                                <Text style={styles.visaText}>VISA</Text>
                            </View>
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardName}>Alex Parkinson</Text>
                            <View style={styles.cardRow}>
                                <Text style={styles.cardNumber}>****8756</Text>
                                <View style={styles.primaryBadge}>
                                    <Text style={styles.primaryText}>Primary</Text>
                                </View>
                            </View>
                        </View>
                        {selectedCard === 'visa' && (
                            <View style={styles.checkCircle}>
                                <View style={styles.checkInner} />
                            </View>
                        )}
                    </TouchableOpacity>

                    {/* Mastercard */}
                    <TouchableOpacity
                        style={[styles.cardOption, selectedCard === 'mastercard' && styles.cardOptionSelected]}
                        onPress={() => setSelectedCard('mastercard')}
                    >
                        <View style={styles.cardLogo}>
                            <View style={styles.mastercardLogo}>
                                <View style={styles.mcCircleRed} />
                                <View style={styles.mcCircleOrange} />
                            </View>
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardName}>Alex Parkinson</Text>
                            <Text style={styles.cardNumber}>****8756</Text>
                        </View>
                        {selectedCard === 'mastercard' && (
                            <View style={styles.checkCircle}>
                                <View style={styles.checkInner} />
                            </View>
                        )}
                    </TouchableOpacity>
                </View>

                {/* Choose Bank */}
                <TouchableOpacity style={styles.bankOption}>
                    <Text style={styles.bankText}>Choose Bank</Text>
                    {/* <ChevronRight color="#999" size={20} /> */}
                </TouchableOpacity>

                {/* Security Notice */}
                <View style={styles.securityNotice}>
                    {/* <Shield color="#00C9A7" size={20} /> */}
                    <Text style={styles.securityText}>
                        We adhere strictly to the data security standards of the payment card industry.
                    </Text>
                </View>

                {/* Buy Ticket Button */}
                <TouchableOpacity style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Buy Ticket</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default payment


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 15,
        backgroundColor: '#FFF',
    },
    backButton: {
        width: 40,
        height: 40,
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    totalCard: {
        backgroundColor: '#FFE8E0',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        marginBottom: 24,
    },
    totalLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    totalAmount: {
        fontSize: 40,
        fontWeight: '700',
        color: '#000',
        marginBottom: 12,
    },
    secureRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    secureText: {
        fontSize: 13,
        color: '#00C9A7',
        marginLeft: 6,
        fontWeight: '500',
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 16,
    },
    orderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    itemName: {
        fontSize: 15,
        color: '#000',
        fontWeight: '500',
        marginBottom: 4,
    },
    ticketBadge: {
        backgroundColor: '#F0F0F0',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        alignSelf: 'flex-start',
    },
    ticketText: {
        fontSize: 11,
        color: '#666',
    },
    itemPrice: {
        fontSize: 15,
        color: '#000',
        fontWeight: '600',
    },
    divider: {
        height: 1,
        backgroundColor: '#E5E5E5',
        marginVertical: 8,
    },
    totalText: {
        fontSize: 15,
        color: '#000',
        fontWeight: '600',
    },
    totalPrice: {
        fontSize: 15,
        color: '#000',
        fontWeight: '700',
    },
    paymentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    addCardText: {
        fontSize: 13,
        color: '#FF6B35',
        fontWeight: '500',
    },
    cardOption: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    cardOptionSelected: {
        borderColor: '#00C9A7',
        backgroundColor: '#F8FFF',
    },
    cardLogo: {
        width: 50,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    visaLogo: {
        backgroundColor: '#1A1F71',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
    },
    visaText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '700',
    },
    mastercardLogo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 24,
    },
    mcCircleRed: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#EB001B',
        position: 'absolute',
        left: 8,
    },
    mcCircleOrange: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#FF5F00',
        position: 'absolute',
        right: 8,
    },
    cardInfo: {
        flex: 1,
    },
    cardName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000',
        marginBottom: 4,
    },
    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardNumber: {
        fontSize: 13,
        color: '#666',
        marginRight: 8,
    },
    primaryBadge: {
        backgroundColor: '#E8F5E9',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    primaryText: {
        fontSize: 11,
        color: '#00C9A7',
        fontWeight: '500',
    },
    checkCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#00C9A7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#FFF',
    },
    bankOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        marginBottom: 20,
    },
    bankText: {
        fontSize: 15,
        color: '#000',
        fontWeight: '500',
    },
    securityNotice: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#F8FFF',
        padding: 16,
        borderRadius: 12,
        marginBottom: 24,
    },
    securityText: {
        flex: 1,
        fontSize: 13,
        color: '#666',
        marginLeft: 12,
        lineHeight: 18,
    },
    buyButton: {
        backgroundColor: '#FF6B35',
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 30,
        shadowColor: '#FF6B35',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    buyButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
});


