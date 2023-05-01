import { Fragment } from "react";
import * as Styled from "./styles";
import { theme } from "../../theme/theme";

const { fontColor, dragonTypeColor: blue, white, black } = theme.colors;

interface PaginationProps {
  pokemonsCount: number;
  currentPage: number;
  pokemonsPerPage: number;
  setCurrentPage: (number: number) => void;
}

// Dividi a paginação em 3 partes
// 1- Quando tem as 5 primeiras páginas, reticências e a última página. Nesse caso o usuário estaria entre a primeira e a quarta página
// 2- Quando tem a primeira página; reticências, a página anterior da atual, a página atual, a página posterior da atual, reticências e a última página. Nesse caso o usuário estaria ente a quinta página e a quinta última página.
// 3- Quando tem a primeira página, reticências e as 5 últimas páginas. Nesse caso o usuário estaria entre a última e a quarta última página.

// Fotos dos exemplos
// 1- https://prnt.sc/i3qDra437bxb
// 2- https://prnt.sc/r51U07rEaKSb
// 3- https://prnt.sc/ClZyFjTKU5TN

// Lucas Guidine 01-05-2023
export const Pagination = ({
  pokemonsCount,
  currentPage,
  setCurrentPage,
  pokemonsPerPage,
}: PaginationProps) => {
  const pages = Math.floor(pokemonsCount / pokemonsPerPage) + 1;
  return (
    <Styled.Container>
      {/* 1 parte da paginação */}
      {currentPage < 5 && (
        <>
          {Array.from({ length: pages }, (_, idx) => (
            <Fragment key={idx}>
              {idx + 1 <= 5 && (
                <Styled.Button
                  clickable={currentPage !== idx + 1}
                  backgroundColor={idx + 1 === currentPage ? blue : white}
                  color={idx + 1 === currentPage ? fontColor : black}
                  key={idx}
                  onClick={() => {
                    setCurrentPage(idx + 1);
                  }}
                >
                  {idx + 1}
                </Styled.Button>
              )}
            </Fragment>
          ))}

          <Styled.Button clickable={false} backgroundColor="" color={white}>
            ...
          </Styled.Button>

          <Styled.Button
            backgroundColor={white}
            clickable
            color={black}
            onClick={() => {
              setCurrentPage(pages);
            }}
          >
            {pages}
          </Styled.Button>
        </>
      )}

      {/* 2 parte da paginação */}
      {currentPage >= 5 && currentPage <= pages - 4 && (
        <>
          <Styled.Button
            backgroundColor={white}
            clickable
            color={black}
            onClick={() => {
              setCurrentPage(1);
            }}
          >
            1
          </Styled.Button>

          <Styled.Button backgroundColor="" clickable={false} color={white}>
            ...
          </Styled.Button>

          <Styled.Button
            backgroundColor={white}
            clickable
            color={black}
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            {currentPage - 1}
          </Styled.Button>

          <Styled.Button backgroundColor={blue} clickable={false} color={white}>
            {currentPage}
          </Styled.Button>

          <Styled.Button
            backgroundColor={white}
            clickable
            color={black}
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            {currentPage + 1}
          </Styled.Button>

          <Styled.Button backgroundColor="" clickable={false} color={white}>
            ...
          </Styled.Button>

          <Styled.Button
            backgroundColor={white}
            clickable
            color={black}
            onClick={() => {
              setCurrentPage(pages);
            }}
          >
            {pages}
          </Styled.Button>
        </>
      )}

      {/* 3 parte da paginação */}
      {currentPage + 4 !== pages && currentPage + 5 > pages && (
        <>
          <Styled.Button
            backgroundColor={white}
            clickable
            color={black}
            onClick={() => {
              setCurrentPage(1);
            }}
          >
            1
          </Styled.Button>
          <Styled.Button backgroundColor="" clickable={false} color={white}>
            ...
          </Styled.Button>
          <>
            {Array.from({ length: pages }, (_, idx) => (
              <Fragment key={idx}>
                {idx + 1 >= pages - 4 && (
                  <Styled.Button
                    clickable={currentPage !== idx + 1}
                    backgroundColor={idx + 1 === currentPage ? blue : white}
                    color={idx + 1 === currentPage ? fontColor : black}
                    key={idx}
                    onClick={() => {
                      setCurrentPage(idx + 1);
                    }}
                  >
                    {idx + 1}
                  </Styled.Button>
                )}
              </Fragment>
            ))}
          </>
        </>
      )}
    </Styled.Container>
  );
};
