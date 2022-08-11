const headerStyle = { backgroundColor: '#C91414' };
const headerTitleStyle = {
  fontWeight: 'bold',
};

export const getHeaderOptions = id => {
  return {
    title: id,
    headerTintColor: '#fff',
    headerStyle: headerStyle,
    headerTitleStyle: headerTitleStyle,
    headerTitleAlign: 'center',
  };
};
