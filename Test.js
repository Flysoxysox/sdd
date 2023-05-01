import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import Constants from "expo-constants";
function Test({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [bdata, setData] = useState([]);
  console.log(bdata);
var bcode = "8410500026479";

  useEffect(() => {
    fetch('https://world.openfoodfacts.org/api/v2/product/'+ bcode +'.json?fields=nutriments')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

    
  return (
    <View style={{ flex: 1, padding: 24 }}>
    {isLoading ? <Text>Loading...</Text> : 
    ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
        <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{bdata.product.nutriments.energy}</Text>
    
        
      </View>
    )}
  </View>
  );
}


export default Test;
