import 'boostrap/dist/css/boostrap.min.css';
import Header from './components/Header;'
import Card from 'react-bootstrap/Card';
import Footer from './components/Footer;'


function App () {
  return (
    <>
    <Header title="Adopta un Perrito" />
    <Card
    image="https://media.istockphoto.com/id/1589824836/es/foto/lindo-perro-marr%C3%B3n-que-sonr%C3%ADe-fondo-aislado.jpg?s=2048x2048&w=is&k=20&c=cugHYBPpd4GPQxVgY9vnXj_j6V3lWpZTRANL8CTyM8o="
    name="messi"
    description="Perro de agua, que baila junto a la arena blanca de Valparaiso."
    tag="Buldog Frances"
    />
    <Card
    image="https://media.istockphoto.com/id/1551607933/es/foto/perro-golden-retriever-haciendo-truco.jpg?s=612x612&w=0&k=20&c=bzMTWdjnCAECNmJBK86KVU313UNB-qCgvrtoFRBey94="
    name="Mateo"
    description="Su mayor anhelo es bailar en el agua"
    tag="Chiguagua"
    />
    <Card
    image="https://media.istockphoto.com/id/1439542371/es/foto/lindo-cachorro-perro-border-collie-con-cara-divertida-aislada-sobre-fondo-blanco-con-espacio.jpg?s=612x612&w=0&k=20&c=QBIAV73BpGoFME6jtg0-0O215aUg-ACw-OBa-HQKwwE="
    name="Joaquin"
    description="Corre como el viento"
    tag="Pastor Aleman"
    />
    <Card
    image="https://media.istockphoto.com/id/1459986987/es/foto/un-perro-beagle-mirando-hacia-arriba-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=zSfh8vQbWlTOOLB2nOLagsL247_n7hwoy3Ae8vW4Qio="
    name="Elena"
    description="Su mayor felicidad son las galletas de chocolate"
    tag="Boxer"
    />
    <Footer piePagina="El perro, llamado perro doméstico o can y en algunos lugares coloquialmente llamado chucho, tuso, choco, entre otros; es un mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis"
    />
    </>
  )
}

export default App;