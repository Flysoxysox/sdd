import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

function Test({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://world.openfoodfacts.org/api/v2/product/3017620422003.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

    
  return (
    <View style={{ flex: 1, padding: 24 }}>
    {isLoading ? <Text>Loading...</Text> : 
    ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
        <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.product.nutriments.energy}</Text>
    
        
      </View>
    )}
  </View>
  );
}


export default Test;
