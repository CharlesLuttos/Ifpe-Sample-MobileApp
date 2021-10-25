import React from "react"
import { StyleSheet, Text, Image } from 'react-native';
import { Button, Center, NativeBaseProvider, Input, View } from "native-base"

const LoginInput = () => {
    return (
        <Input placeholder="Usuário" mx="3" style={styles.input}
            w={{
                base: "75%",
                md: "25%",
            }}
        />
    )
}

const PasswordInput = () => {
    const [show, setShow] = React.useState(false)
  
    const handleClick = () => setShow(!show)
  
    return (
      <Input 
        type={show ? "text" : "password"}
        overflow="visible"
        w={{
          base: "75%",
          md: "25%",
        }}
        InputRightElement={
          <Button size="xs" m="1" onPress={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        }
        placeholder="Password"
      />
    )
}

class Login extends React.Component {
    render () {
        return (
            <NativeBaseProvider>
                <Center flex={1} px="3" style={styles.container}>
                    {/* <a href="https://iconscout.com/icons/contact" target="_blank">Contact Icon</a> on <a href="https://iconscout.com">Iconscout</a> */}
                    <Image source = {require('../assets/user.png')} style={styles.image}/>
                    <LoginInput />
                    <PasswordInput/>
                    <Button style={styles.button}
                    onPress={
                        () => this.props.navigation.navigate('Home')
                    }>Login</Button>
                    <Button style={styles.button}
                    onPress={
                        () => this.props.navigation.navigate('Cadastro')
                    }>Cadastro</Button>
                </Center>
            </NativeBaseProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image : {
        width: 70,
        height: 70,
        marginBottom: 40
    },
    input: {
        marginTop: 20
    },
    button: {
        marginTop: 20
    }
});

export default Login;