import { PokemonsList } from "./components/PokemonsList";
import { CustomThemeProvider } from "./theme/themeProvider";
import * as Styled from "./App.styles";

function App() {
  return (
    <CustomThemeProvider>
      <Styled.TitleContainer>Pokedex</Styled.TitleContainer>
      <PokemonsList />
    </CustomThemeProvider>
  );
}

export default App;
