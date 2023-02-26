import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"


const HeoresApp = () => {
  return (
  <AuthProvider>
    <AppRouter/>
  </AuthProvider>

  )
}

export default HeoresApp
