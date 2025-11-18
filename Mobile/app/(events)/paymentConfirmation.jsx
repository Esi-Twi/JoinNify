
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Text from "@/components/Text"


const paymentConfirmation = () => {
  return (
    <View style={styles.container}>
      {/* Decorative Icons */}
      <View style={styles.decorativeContainer}>
        {/* Top Left Confetti */}
        <View style={styles.confettiTopLeft}>
          <Ionicons name="gift-outline" size={40} color="#F0F0F0" />
        </View>

        {/* Top Right Sparkles */}
        <View style={styles.sparklesTopRight}>
          <Ionicons name="sparkles-outline" size={60} color="#F0F0F0" />
        </View>

        {/* Bottom Left Star */}
        <View style={styles.starBottomLeft}>
          <Ionicons name="star-outline" size={50} color="#F0F0F0" />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Success Badge */}
        <View style={styles.successBadge}>
          <View style={styles.badgeOuter}>
            <View style={styles.badgeInner}>
              <Ionicons name="checkmark" size={50} color="#FFF" />
            </View>
          </View>
        </View>

        {/* Success Message */}
        <Text style={styles.title}>Confirm!</Text>
        <Text style={styles.subtitle}>Your order is Successfully</Text>
        <Text style={styles.description}>
          We has sent order booking tickets via email to your email-account and whatsApp, Don't miss out!
        </Text>
      </View>

      {/* Back to Home Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.homeButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default paymentConfirmation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  decorativeContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  confettiTopLeft: {
    position: 'absolute',
    top: 40,
    left: 30,
    opacity: 0.3,
  },
  sparklesTopRight: {
    position: 'absolute',
    top: 50,
    right: 20,
    opacity: 0.3,
  },
  starBottomLeft: {
    position: 'absolute',
    bottom: 200,
    left: 20,
    opacity: 0.3,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  successBadge: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeOuter: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(255, 107, 53, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeInner: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FF6B35',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FF6B35',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  homeButton: {
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
  homeButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});


