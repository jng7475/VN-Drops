import React from 'react';
import { Image } from 'react-native';
const HospitalsNearby = [
  {
    name: 'Bệnh viện quốc tể Vinmec',
    image: (
      <Image
        // style={{ width: '100%', height: '100%' }}
        source={require('../assets/hospitalsImage/bvVinmec.png')}
      />
    ),
    link: 'https://www.vinmec.com/vi/',
  },
  {
    name: 'Bệnh viện Hoàn Mỹ',
    image: (
      <Image
        // style={{ width: '100%', height: '100%' }}
        source={require('../assets/hospitalsImage/bvHoanMy.png')}
      />
    ),
    link: 'https://www.hoanmydanang.com/#slider',
  },
  {
    name: 'Bệnh viện Mắt',
    image: (
      <Image
        // style={{ width: '100%', height: '100%' }}
        source={require('../assets/hospitalsImage/bvMat.png')}
      />
    ),
    link: 'https://benhvienmatdanang.vn/',
  },
  {
    name: 'Bệnh viện phụ sản-nhi',
    image: (
      <Image
        // style={{ width: '100%', height: '100%' }}
        source={require('../assets/hospitalsImage/bvPhuSanNhi.png')}
      />
    ),
    link: 'https://wikibacsi.com/co-so-y-te/benh-vien-phu-san-nhi-da-nang',
  },
  {
    name: 'Bệnh viện đa khoa bình dân',
    image: (
      <Image
        // style={{ width: '100%', height: '100%' }}
        source={require('../assets/hospitalsImage/bvDaKhoa.png')}
      />
    ),
    link: 'https://binhdanhospital.vn/',
  },
  {
    name: 'Bệnh viện C',
    image: (
      <Image
        // style={{ width: '100%', height: '100%' }}
        source={require('../assets/hospitalsImage/bvC.png')}
      />
    ),
    link: 'https://bvcdn.org.vn/',
  },
];

export default HospitalsNearby;
