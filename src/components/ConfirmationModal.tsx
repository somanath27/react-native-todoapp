import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../theme';

interface ConfirmationModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  message: string;
}

const ConfirmationModal = ({
  visible,
  onCancel,
  onConfirm,
  message,
}: ConfirmationModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}>
      <View style={styles.popUp}>
        <View style={styles.popupView}>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.button_outer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
              <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  popUp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: colors.primary,
  },
  button_outer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  cancelButton: {
    padding: 10,
    backgroundColor: colors.negative,
    borderRadius: 5,
  },
  cancelText: {
    color: 'white',
  },
  confirmButton: {
    padding: 10,
    backgroundColor: colors.positive,
    borderRadius: 5,
  },
  confirmText: {
    color: 'white',
  },
});

export default ConfirmationModal;
