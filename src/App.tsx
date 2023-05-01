import { PokemonsList } from "./components/PokemonsList";
import { CustomThemeProvider } from "./theme/themeProvider";

function App() {
  return (
    <CustomThemeProvider>
      <PokemonsList />
    </CustomThemeProvider>
  );
}

export default App;
