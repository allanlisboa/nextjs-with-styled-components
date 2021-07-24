import * as S from './styles'

const Main = ({
  title = 'Boilerplae NextJS',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="assets/logo.svg"
        alt="Imagem de um átomo com texto React Avançado ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="assets/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código"
      />
    </S.Wrapper>
  )
}

export default Main
