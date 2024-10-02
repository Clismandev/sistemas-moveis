import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ef0000', // Cor de fundo leve
  },
  input: {
    marginLeft: 500,
    marginRight: 500,
    marginBottom: 25,
    backgroundColor: '#ffffff', // Fundo branco para campos de entrada
  },
  button: {
    marginLeft: 600,
    marginRight: 600,
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 5, // Canto arredondado para botões
  },
  header: {
    backgroundColor: '#eede00', // Cor de fundo da barra superior
  },
  title: {
    color: '#fff', // Cor do texto da barra superior
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  photoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50, // Foto circular
    backgroundColor: '#080103', // Cor de fundo para área de foto
  },
});

