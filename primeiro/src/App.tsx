import { Header } from "./components/header"  
import { Aluno } from "./components/aluno"
import { Footer } from "./components/footer"

export default function App() {
  return (
    <div>
      <Header />

      <Aluno nome="Mateus" idade={24} />

      <Aluno nome="Cleiton" idade={34} />

      <Footer />
    </div>
  )
}
