import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const AppointmentInputs = [
  {
    id: 'fullname',
    placeholder: 'Họ và tên',
    icon: (
      <MaterialCommunityIcons
        name="account-edit"
        size={30}
        style={{ padding: 10 }}
      />
    ),
  },
  {
    id: 'DOB',
    placeholder: 'Ngày sinh',
    icon: (
      <MaterialCommunityIcons
        name="cake-variant"
        size={30}
        style={{ padding: 10 }}
      />
    ),
  },
  {
    id: 'phoneNumber',
    placeholder: 'Số điện thoại',
    icon: (
      <MaterialCommunityIcons name="phone" size={30} style={{ padding: 10 }} />
    ),
  },
  {
    id: 'email',
    placeholder: 'Email',
    icon: (
      <MaterialCommunityIcons name="email" size={30} style={{ padding: 10 }} />
    ),
  },
  {
    id: 'bloodType',
    placeholder: 'Nhóm máu',
    icon: (
      <MaterialCommunityIcons
        name="blood-bag"
        size={30}
        style={{ padding: 10 }}
      />
    ),
  },
];
