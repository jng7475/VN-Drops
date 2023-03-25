import React from 'react';

const calculateDistance = async (thisAddressPara, otherAddressPara) => {
  const haversine = (latitude1, longitude1, latitude2, longitude2) => {
    const earthRadius = 6371; // in km
    const latDiff = toRad(latitude2 - latitude1);
    const lonDiff = toRad(longitude2 - longitude1);
    const a =
      Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
      Math.cos(toRad(latitude1)) *
        Math.cos(toRad(latitude2)) *
        Math.sin(lonDiff / 2) *
        Math.sin(lonDiff / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
    return distance; // in km
  };

  const toRad = value => {
    return (value * Math.PI) / 180;
  };

  // Example usage:
  const distance = await haversine(
    thisAddressPara.latitude, // latitude1
    thisAddressPara.longitude, // longitude1
    otherAddressPara.latitude, // latitude2
    otherAddressPara.longitude, // longitude2
  );
  // console.log(thisAddress.latitude);
  // console.log(thisAddress.longitude);
  // console.log(otherAddress.latitude);
  // console.log(otherAddress.longitude);
  return distance;
};

export default calculateDistance;
