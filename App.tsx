
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import { Requests } from './Requests/Requests';

export default function App() {

  const [login, setLogin]:any = useState([]);
  const [token, setToken]:any = useState('');
  const [agenda, setAgenda]:any = useState([]);

  useEffect(() => {
   const loginRequest = Requests.Login("natan@gork.com", "123")
   loginRequest.then(response => {
      setLogin(response.user);
      setToken(response.token);
   });
  },[]);

  useEffect(() => {
    const agenda = Requests.getScheduleByUser("2");
    agenda.then(response => {
      setAgenda(response);
    })
  },[])

  return (
    <View style={styles.container}>
      {agenda.map((item:any) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
      <Text>{login.name}</Text>
      <Button texto={login.name}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "black",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
