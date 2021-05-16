import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  IkonProfil,
  IkonProfilAktif,
  IkonBeranda,
  IkonBerandaAktif,
  IkonSearch,
  IkonSearchAktif,
} from '../../assets';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Beranda')
      return isFocused ? <IkonBerandaAktif /> : <IkonBeranda />;

    if (label === 'Profil')
      return isFocused ? <IkonProfilAktif /> : <IkonProfil />;

    if (label === 'Cari')
      return isFocused ? <IkonSearchAktif /> : <IkonSearch />;

    return <IconBeranda />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
