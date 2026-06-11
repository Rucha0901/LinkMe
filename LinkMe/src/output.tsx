import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function Output({ route }:any) {
  const { name, links } = route.params;

  const qrData = JSON.stringify({
    name,
    links,
  });

  return (
    <View>
      <Text>{name}'s QR Code</Text>

      <QRCode
        value={qrData}
        size={250}
      />
    </View>
  );
}